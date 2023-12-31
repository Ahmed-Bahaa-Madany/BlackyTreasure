import React, { useState , useContext , useEffect} from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import ContactForm from "../ContactForm/ContactForm"

export default function ContactModal() {
    const { language } = useContext(LanguageContext)
    const [footerLang, setFooterLang] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setFooterLang(DataJson?.navbar.ar)
                break;
            default:
                setFooterLang(DataJson?.navbar.en)
        }
    }, [language])
  return (
    <section className='contact-modal' id="contact-modal">
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className='bg-image'>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
  )
}
