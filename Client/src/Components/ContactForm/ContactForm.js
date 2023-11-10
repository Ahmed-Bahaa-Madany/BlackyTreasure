import React, { useState , useContext , useEffect} from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import { axiosInstance } from "../../network/axios";
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import ar from 'react-phone-number-input/locale/ar'
import en from 'react-phone-number-input/locale/en'

export default function ContactForm() {
    const { language } = useContext(LanguageContext)
    const [contactForm, setContactForm] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setContactForm(DataJson?.contactForm.ar)
                break;
            default:
                setContactForm(DataJson?.contactForm.en)
        }
    }, [language])
    const emailPattern = new RegExp("^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$");
    const [form, setForm] = useState({
        inputName: "",
        inputPhone: "",
        inputEmail: "",
        inputDetails:""
    });
    const [phone, setPhone] = useState("")
    const [formErrors, setFormError] = useState({
        inputNameErr: null,
        inputPhoneErr: null,
        inputEmailErr: null,
        inputDetailsErr: null
    });
    const handelFormChange = (e) => {
        if (e.target.name === "inputEmail") {
            setForm({
                ...form,
                inputEmail: e.target.value,
            });
            setFormError({
                ...formErrors,
                inputEmailErr:
                    e.target.value.length === 0
                        ? contactForm?.required
                        : !emailPattern.test(e.target.value)
                            ? contactForm?.emailForm
                            : null,
            });
        } else if (e.target.name === "inputName") {
            setForm({
                ...form,
                inputName: e.target.value,
            });
            setFormError({
                ...formErrors,
                inputNameErr:
                    e.target.value.length === 0
                        ? contactForm?.required
                        : e.target.value.length < 3
                            ? contactForm?.txnhmre
                            : e.target.value.length > 25
                                ? contactForm?.txtLess
                                : null,
            });
        } else if (e.target.name === "inputPhone") {
            setForm({
                ...form,
                inputPhone: e.target.value,
            });
            setFormError({
                ...formErrors,
                inputPhoneErr:
                    e.target.value.length === 0
                        ? contactForm.required
                        : null,
            });
        } else if (e.target.name === "inputDetails") {
            setForm({
                ...form,
                inputDetails: e.target.value,
            });
            setFormError({
                ...formErrors,
                inputDetailsErr:
                    e.target.value.length === 0
                        ? contactForm.required
                        : null,
            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
            // console.log(isValidPhoneNumber(phone))
        
        if(formErrors?.inputNameErr == null && formErrors?.inputPhoneErr == null && formErrors?.inputEmailErr == null && formErrors?.inputDetailsErr == null && isValidPhoneNumber(phone)){
            try{
                await axiosInstance.post("/customers",{
                    name:form.inputName,
                    phone:phone,
                    email:form.inputEmail,
                    details:form.inputDetails
                    });
                    window.location.reload(false);
            }catch(err){
                // console.log(err)
            }
        }
    };


    return (
        <section className='contact-form my-5 py-5 bg-transparent d-flex justify-content-center'>
            <form className="mt-5 pt-5 ps-3 border border-0 w-50" onSubmit={(e) => handleFormSubmit(e)}>
                <div className="">
                    <label htmlFor="name" className="form-label">{contactForm?.name}</label>
                    <input type="text" className="form-control" id="inputName" name="inputName" aria-describedby="inputname" value={form.inputName} onChange={(e) => handelFormChange(e)} />
                    <div className="pt-1 text-danger" id='inputname'>
                        <small>
                            {formErrors.inputNameErr}
                        </small>
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="form-label">{contactForm?.phone}</label>
                    <PhoneInput
                        labels={language === "arabic" ? ar : en}
                        name="inputPhone"
                        id="inputPhone"
                        placeholder="Enter phone number" // translate
                        value={phone}
                        onChange={setPhone}
                        />
                    <div className="pt-1 text-danger" id='inputphone'>
                        <small>
                            {phone && !isValidPhoneNumber(phone)?contactForm?.notValid:null}
                        </small>
                    </div>
                </div>

                <div className="">
                    <label htmlFor="email" className="form-label">{contactForm?.email}</label>
                    <input type="email" className="form-control" id="inputEmail" name="inputEmail" aria-describedby="inputemail" value={form.inputEmail} onChange={(e) => handelFormChange(e)} />
                    <div className="pt-1 text-danger" id='inputemail'>
                        <small>
                            {formErrors.inputEmailErr}
                        </small>
                    </div>
                </div>

                <div className="pb-3">
                    <label htmlFor="inputDetails" className="form-label">{contactForm?.details}</label>
                    <textarea className="form-control" id="inputDetails" rows="3" name="inputDetails" aria-describedby="inputdetails" onChange={(e) => handelFormChange(e)} value={form.inputDetails}></textarea>
                    <div className="pt-1 text-danger" id='inputdetails'>
                        <small>
                            {formErrors.inputDetailsErr}
                        </small>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="submit" className="btn rounded-3 text-white px-5 mx-3">{contactForm?.btnText}</button>
                </div>
            </form>
        </section>
    )
}
