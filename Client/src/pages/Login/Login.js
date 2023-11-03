import React, { useState , useContext , useEffect} from 'react'
import './Login.scss'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import { axiosInstance } from "../../network/axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { language } = useContext(LanguageContext)
  const history = useHistory();
    const [loginForm, setLoginForm] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setLoginForm(DataJson?.loginForm.ar)
                break;
            default:
                setLoginForm(DataJson?.loginForm.en)
        }
    }, [language])
    const [form, setForm] = useState({
      inputUser: "",
      inputPassword: "",
  });
  const [formErrors, setFormError] = useState({
      inputUserErr: null,
      inputPasswordErr: null,
  });
  const handelFormChange = (e) => {
    if (e.target.name === "inputUser") {
        setForm({
            ...form,
            inputUser: e.target.value,
        });
        setFormError({
            ...formErrors,
            inputUserErr:
                e.target.value.length === 0
                    ? loginForm?.required
                    : null,
        });
    } else if (e.target.name === "inputPassword") {
      setForm({
          ...form,
          inputPassword: e.target.value,
      });
      setFormError({
          ...formErrors,
          inputPasswordErr:
              e.target.value.length === 0
                  ? loginForm?.required
                  : null,
      });
  }
};

const handleFormSubmit = async (e) => {
  e.preventDefault();
  let res = await axiosInstance.post("/users/login",{
    name: form.inputUser,
    password: form.inputPassword
  });
    if(res.data){
      // console.log(res.data)
      //save user and token in localstorage
      window.localStorage.setItem("auth",JSON.stringify(res.data))
      history.push(`/adminpanal`);
    }

};

  return (
    <section className='nmh-login my-5' id='nmh-login' dir={language === "arabic" ? "rtl" : "ltr"}>
      <div className='w-75 m-auto'>
        <form className="bg-white my-5 pb-3 shadow" onSubmit={(e) => handleFormSubmit(e)}>
          <p className="text-center card-header nmh-bgcolor text-light py-3 fs-4 fw-bold">{loginForm?.text}</p>
            <div className="mt-3 mx-3">
                <label htmlFor="inputUser" className="form-label">{loginForm?.user}</label>
                <input type="text" className="form-control" id="inputUser" name="inputUser" aria-describedby="inputuser" value={form.inputUser} onChange={(e) => handelFormChange(e)} />
                <div className="pt-1 text-danger" id='inputuser'>
                    <small>
                        {formErrors.inputUserErr}
                    </small>
                </div>
            </div>
            <div className="mt-3 mx-3 pb-3">
                <label htmlFor="inputPassword" className="form-label">{loginForm?.password}</label>
                <input type="password" className="form-control" id="inputPassword" name="inputPassword" aria-describedby="inputpassword" value={form.inputPassword} onChange={(e) => handelFormChange(e)} />
                <div className="pt-1 text-danger" id='inputpassword'>
                    <small>
                        {formErrors.inputPasswordErr}
                    </small>
                </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn rounded-3 text-white px-5 mx-3">{loginForm?.btnText}</button>
            </div>
        </form>
      </div>
  </section>
  )
}
