import React, { useState , useContext , useEffect} from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import { Link } from "react-router-dom";
import Logo1 from '../../assets/images/logo.png'
import { NavHashLink } from 'react-router-hash-link';

export default function Footer() {
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
    <section className='footer py-5' id="footer">
        <div className='container'>
            <div className='row g-5'>
                <div className='col-12 col-lg-4'>
                    <div className='d-flex justify-content-start flex-column text-white'>
                        <span className='py-2 mb-5'>Lorem ipsum dolor sit amet, adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.</span>
                        <div className='py-2'>
                            <button type="button" className="fs-4 bg-second py-2 px-4 border border-0 rounded text-center text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Request Your Treasure</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                        <span className='fs-4 fw-bold mb-3 text-white d-inline-block'>Explore</span>
                    <div className='d-flex justify-content-start text-white'>
                        <div className='d-flex justify-content-start flex-column me-5 pe-5'>
                            <NavHashLink to="/" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3'>{footerLang?.home}</NavHashLink>
                            <NavHashLink to="/#home-service" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3'>{footerLang?.services}</NavHashLink>

                            <NavHashLink to="/#home-product" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3'>Our Product</NavHashLink>
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                            <NavHashLink to="/#home-about" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3'>{footerLang?.about}</NavHashLink>
                            <NavHashLink to="/" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3' data-bs-toggle="modal" data-bs-target="#exampleModal">{footerLang?.contact}</NavHashLink>
                            <NavHashLink to="/#home-crew" smooth="true" className='text-white fs-6 fw-bold text-decoration-none py-3'>Our Team</NavHashLink>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='logo-sec d-flex justify-content-start flex-column text-white p-5'>
                        <div className='d-flex justify-content-center align-content-center pb-4'>
                            <img src={Logo1} className='footer-logo' alt='Logo'/>
                        </div>
                        <span className='fs-6 fw-bold py-2'>{footerLang?.phone}</span>
                        <span className='fs-6 fw-bold py-3'>{footerLang?.mail}</span>
                        <div className='d-flex justify-content-center  pb-2'>
                            <div className='media position-relative border border-0 rounded-circle'>
                                {/* {Phone Number} put phone number */}
                                <a href="https://wa.me/{Phone Number}" className='text-decoration-none text-white position-absolute top-50 start-50 translate-middle'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
