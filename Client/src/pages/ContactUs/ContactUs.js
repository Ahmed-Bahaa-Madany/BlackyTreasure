import React, { useState , useContext , useEffect} from 'react'
import './ContactUs.scss'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import ContactForm from '../../Components/ContactForm/ContactForm'

export default function ContactUs() {
    const location = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385395.55898015475!2d28.731993520467174!3d41.0055005238735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2seg!4v1674618644065!5m2!1sen!2seg'
    const { language } = useContext(LanguageContext)
    const [contactLang, setContactLang] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setContactLang(DataJson?.navbar.ar)
                break;
            default:
                setContactLang(DataJson?.navbar.en)
        }
    }, [language])
  return (
    <section className='nmh-contactUs' id="nmh-contactUs"  dir={language === "arabic" ? "rtl" : "ltr"}>

    </section>
  )
}