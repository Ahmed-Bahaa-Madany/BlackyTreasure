import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function About() {
    const { language } = useContext(LanguageContext)
    const [aboutLang, setAboutLang] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setAboutLang(DataJson?.about.ar)
                break;
            default:
                setAboutLang(DataJson?.about.en)
        }
    }, [language])
  return (
    <section className='blacky-about' id='blacky-about' dir={language === "arabic" ? "rtl" : "ltr"}>
        <section id="blacky-about-header" className="top blacky-about-header" dir={language === "arabic" ? "rtl" : "ltr"}>
            <div className="bg-image">
                <div className='bg-opacity'></div>
                <div className='container position-relative'>
                    <div className='position-absolute bottom-0 start-50 translate-middle-x w-50'>
                        <div className='d-flex justify-content-center align-item-end flex-column text-white text-center'>
                            <span className='fs-1 fw-bold'>ABOUT US</span>
                            <span className='fs-4 fw-bold'>Fishing is not a sport, It’s a way of life</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='blacky-about-who py-5' id="blacky-about-who">
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <span className='fs-2 text-white'>Hello</span>
                    </div>
                </div>
            </div>
        </section>

        <section className='blacky-contact py-5' id="blacky-contact" dir={language === "arabic" ? "rtl" : "ltr"} >
            <div className='container'>
                <ContactForm />
            </div>
        </section>
    </section>
    )
}
