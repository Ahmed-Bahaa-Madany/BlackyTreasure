import React, { useContext, useEffect, useState } from 'react'
import './Services.scss'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"

export default function Services() {
    const { language } = useContext(LanguageContext)
    const [servicesLang, setServicesLang] = useState()
    useEffect(() => {
        switch (language) {
            case "arabic":
                setServicesLang(DataJson?.services.ar)
                break;
            default:
                setServicesLang(DataJson?.services.en)
        }
    }, [language])
  return (
    <section className='nmh-services' id='nmh-services' dir={language === "arabic" ? "rtl" : "ltr"}>
       
    </section>
  )
}