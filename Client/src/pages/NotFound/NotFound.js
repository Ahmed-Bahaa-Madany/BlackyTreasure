import React, { useState , useContext , useEffect} from 'react'
import './NotFound.scss'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"

export default function NotFound() {
    const { language } = useContext(LanguageContext)
    const [notFound, setNotFound] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setNotFound(DataJson?.notFound.ar)
                break;
            default:
                setNotFound(DataJson?.notFound.en)
        }
    }, [language])
    return (
        <section className='nmh-notFound m-0' id='nmh-notFound' dir={language === "arabic" ? "rtl" : "ltr"} >
            <div className='d-flex justify-content-center align-items-center' style={{"min-height":"54.7vh"}}>
                <span className='fw-bold fs-1'>{notFound?.text}</span>
            </div>
        </section>
    )
}
