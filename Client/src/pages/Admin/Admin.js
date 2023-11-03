import React, { useState , useContext , useEffect} from 'react'
import './Admin.scss'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import { axiosInstance } from "../../network/axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Admin() {
  const { language } = useContext(LanguageContext)
  const [admin, setAdmin] = useState()
  const [customers, setCustomers] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = customers.slice(indexOfFirstRecord, 
    indexOfLastRecord);
  const nPages = Math.ceil(customers.length / recordsPerPage)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  const history = useHistory();
  useEffect(() => {
      switch (language) {
          case "arabic":
            setAdmin(DataJson?.admin.ar)
              break;
          default:
            setAdmin(DataJson?.admin.en)
      }
  }, [language])

  useEffect(()=>{
    if (window.localStorage.getItem("auth")) {
      const authToken = JSON.parse(localStorage.getItem("auth"));
      fetchData(authToken)
      }else{
          history.push(`/`);
        }
  })

  const fetchData = async(authToken)=>{
    let res = await axiosInstance.get("/customers",{
      headers: {
        authorization: authToken.token,
      }});
    if(res.data){
      setCustomers(res.data.data)
    }
  }
  
  const handleSignOut = ()=>{
    history.push(`/`);
    window.localStorage.removeItem("auth")
  }

  const nextPage = () => {
    if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1)
}
const prevPage = () => {
    if(currentPage !== 1) 
        setCurrentPage(currentPage - 1)
}

  return (
    <section className='nmh-admin m-0' id='nmh-admin' dir={language === "arabic" ? "rtl" : "ltr"}>
      <div className='container'>
        <div className='d-flex justify-content-end'>
          <button type='button' className='mt-5 border-0 rounded-pill main-bg py-2 px-4 text-white' onClick={handleSignOut}>{admin?.signout}</button>
        </div>
        <div className='card main-bg py-3 shadow mb-3 mt-5'>
          <div className='row align-items-center'>
            <div className={`col-2 nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center'>
                <span className='fw-bold fs-5 text-white'>{admin?.name}</span>
              </div>
            </div>
            <div className={`col-2 nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center'>
                <span className='fw-bold fs-5 text-white'>{admin?.phone}</span>
              </div>
            </div>
            <div className={`col-2 nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center'>
                <span className='fw-bold fs-5 text-white'>{admin?.email}</span>
              </div>
            </div>
            <div className={`col-4 nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center'>
                <span className='fw-bold fs-5 text-white'>{admin?.details}</span>
              </div>
            </div>
            <div className={`col-2 ${language === "arabic" ?'': 'border-start nmh-border-color'}`}>
              <div className='text-center'>
                <span className='fw-bold fs-5 text-white'>{admin?.date}</span>
              </div>
            </div>
            
          </div>
        </div>

        {currentRecords.map(customer=>{return(
          <div className='card py-3 shadow mb-3 mt-3' key={customer?.id}>
          <div className='row align-items-center'>
            <div className={`col-12 col-md-2  nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center px-2'>
                <span className=''>{customer?.name}</span>
              </div>
            </div>
            <div className={`col-12 col-md-2  nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`} dir="ltr">
              <div className='text-center px-2'>
                <span className=''>{customer?.phone}</span>
              </div>
            </div>
            <div className={`col-12 col-md-2  nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center px-2'>
                <span className=''>{customer?.email}</span>
              </div>
            </div>
            <div className={`col-12 col-md-4 nmh-border-color ${language === "arabic" ?'border-start': 'border-end'}`}>
              <div className='text-center'>
                <span className=''>{customer?.details}</span>
              </div>
            </div>
            <div className={`col-12 col-md-2 ${language === "arabic" ?'': 'border-start nmh-border-color'}`}>
              <div className='text-center px-2'>
                <span className=''>{new Date(customer?.createdAt).toISOString().slice(0, 10)}</span>
              </div>
            </div>
            
          </div>
        </div>
        )})}

      <div className='d-flex justify-content-center my-5'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link nmh-color" to="#" onClick={prevPage}>{admin?.previous}</Link>
            </li>
            {pageNumbers.map(pgNumber => (
              <li className={`page-item ${currentPage === pgNumber ? 'active':''}`} key={pgNumber}>
                <Link className="page-link nmh-color" to="#" onClick={()=>setCurrentPage(pgNumber)}>{pgNumber}</Link>
              </li>
            ))}
            
            <li className="page-item">
              <Link className="page-link nmh-color" to="#" onClick={nextPage}>{admin?.next}</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </section>
  )
}
