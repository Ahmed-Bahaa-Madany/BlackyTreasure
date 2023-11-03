import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import DataJson from "../../language/Language.json"
import { Link } from "react-router-dom";
import Crew from '../../assets/images/Crew.png'
import Pirate from '../../assets/images/Pirate.png'
import VanillaTilt from 'vanilla-tilt';

import { EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';

import Gold from '../../assets/images/Gold.png'
import Anchor from '../../assets/images/Anchor.png'
import Scope from '../../assets/images/Scope.png'
import SmallMap from '../../assets/images/Small Map.png'
import SmallShip from '../../assets/images/Small Ship.png'

import galleryTilteImage1 from '../../assets/images/the-little-mermaid-title.png'
import galleryTilteImage2 from '../../assets/images/the-65-title.png'
import galleryTilteImage3 from '../../assets/images/the-black-demon-title.png'
import galleryTilteImage4 from '../../assets/images/the-covenant-title.png'
import galleryTilteImage5 from '../../assets/images/the-tank-title.png'

import galleryBg1 from '../../assets/images/movies/bg-little-mermaid.jpg'
import galleryBg2 from '../../assets/images/movies/bg-65.jpeg'
import galleryBg3 from '../../assets/images/movies/bg-the-black-demon.jpeg'
import galleryBg4 from '../../assets/images/movies/bg-the-covenant.jpeg'
import galleryBg5 from '../../assets/images/movies/bg-the-tank.jpeg'

import gallery1 from '../../assets/images/movies/the-little-mermaid.jpeg'
import gallery2 from '../../assets/images/movies/65.jpg'
import gallery3 from '../../assets/images/movies/the-black-demon.jpg'
import gallery4 from '../../assets/images/movies/the-covenant.jpg'
import gallery5 from '../../assets/images/movies/the-tank.jpeg'

import close from '../../assets/images/close.png'


export default function Home() {
    const { language } = useContext(LanguageContext)
    const [homeLang, setHomeLang] = useState()
    const [writeTitel, setWriteTitel] = useState()
    const [writeTxt, setWriteTxt] = useState()
    const words = ["Explore Your Treasure ","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."];
    const galleryData =[
        {
            gallery:gallery1,
            galleryTilteImage:galleryTilteImage1,
            galleryBg:galleryBg1,
            galleryTilte:"",
            gallerytxt:"",
            galleryWatch:"https://www.youtube.com/embed/5xk0c8IKwsM?autoplay=1",
            galleryMore:""
        },
        {
            gallery:gallery2,
            galleryTilteImage:galleryTilteImage2,
            galleryBg:galleryBg2,
            galleryTilte:"",
            gallerytxt:"",
            galleryWatch:"https://www.youtube.com/embed/5xk0c8IKwsM?autoplay=1",
            galleryMore:""
        },
        {
            gallery:gallery3,
            galleryTilteImage:galleryTilteImage3,
            galleryBg:galleryBg3,
            galleryTilte:"",
            gallerytxt:"",
            galleryWatch:"https://www.youtube.com/embed/5xk0c8IKwsM?autoplay=1",
            galleryMore:""
        },
        {
            gallery:gallery4,
            galleryTilteImage:galleryTilteImage4,
            galleryBg:galleryBg4,
            galleryTilte:"",
            gallerytxt:"",
            galleryWatch:"https://www.youtube.com/embed/5xk0c8IKwsM?autoplay=1",
            galleryMore:""
        },
        {
            gallery:gallery5,
            galleryTilteImage:galleryTilteImage5,
            galleryBg:galleryBg5,
            galleryTilte:"",
            gallerytxt:"",
            galleryWatch:"https://www.youtube.com/embed/5xk0c8IKwsM?autoplay=1",
            galleryMore:""
        },
    ]

    const [galleryContent, setGalleryContent] = useState(galleryData[0])


    useEffect(() => {
        const tilts = document.querySelectorAll(".product-card")
        tilts.forEach((tilt)=>{
            VanillaTilt.init(tilt, {
                glare:true,
                speed: 400,
                max: 25,
                "max-glare":1
            });
        })
      }, []);

    useEffect(() => {
        switch (language) {
            case "arabic":
                setHomeLang(DataJson?.header.ar)
                break;
            default:
                setHomeLang(DataJson?.header.en)
        }
    }, [language])

    useEffect(()=>{
        function type(){

            let i = 0;
            let writing = setInterval(()=>{
                setWriteTxt(prev => (prev?prev:words[1].charAt(0)) + words[1].charAt(i))
                setWriteTitel(prev => (prev?prev:words[0].charAt(0)) + words[0].charAt(i))
                i ++;
                if(i >= words[1].length){
                    clearInterval(writing);
                }
            }, 75)
        }
        return () => type();
    },[])

    useEffect(()=>{handleSlideChange({activeIndex:0})},[])

    const handleSlideChange =(e)=>{
        setGalleryContent(galleryData[e.activeIndex])
        document.querySelector(".bg-products").style.backgroundImage = `url(${galleryData[e.activeIndex].galleryBg})`;
    }

    const openVideo = (src) => {
        const trailer = document.querySelector(".trailer")
        const iframe = document.querySelector("iframe")
        iframe.src = src;
        trailer.classList.add('active')
    }

    const closeVideo = () => {
        const trailer = document.querySelector(".trailer")
        const iframe = document.querySelector("iframe")
        iframe.src='';
        trailer.classList.remove('active')
    }


    return (
        <>
            <header id="home-header" className="top home-header" dir={language === "arabic" ? "rtl" : "ltr"}>
                <div className="container">
                    <div className='row g-5'>
                        <div className='col-12 col-md-6'>
                            <div className='header-txt d-flex justify-content-center flex-column pt-5'>
                                <span className='fs-1 fw-bold mb-3' id="h-txt">{writeTitel}</span>
                                <span className='fs-4 mb-3' id='h2-txt'>{writeTxt}</span>
                                <div className='py-2'>
                                    <button type="button" className="fs-4 bg-second py-2 px-4 border border-0 rounded text-center text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Request Your Treasure</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='position-relative'>
                                <div className='header-image position-absolute'>
                                    <img src={Pirate} className="d-block ms-auto" alt="Pirate"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <section className='home-service py-3 mb-3 position-relative' id="home-service" dir={language === "arabic" ? "rtl" : "ltr"} >
                {/* <div className='position-absolute top-0 end-0 icon-top'>
                    <img src={Scope} alt='Icon'/>
                </div> */}
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='service-txt d-flex flex-column pt-4'>
                                <span className='fw-bold'>DISCOVER OUR CLUB</span>
                                <span className='fs-2 fw-bold d-inline-block my-3'>Summer’s over, but the fishing is always on.</span>
                                <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8'>
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-keyboard="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='row gy-3'>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-1">
                                                <div className="card-body text-white  ">
                                                    <h6 className="card-title">Marketing website</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. ome quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-2">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">Commercial website</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-3">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">Kids hybrid games</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row gy-3'>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-1">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">Educational video games</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-2">
                                                <div className="card-body text-white  ">
                                                    <h6 className="card-title">AR/VR Experience</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-3">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">virtual labs (simulation models)</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row gy-3'>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-1">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">interactive dome experiences</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                            <div className="card py-3 px-3 w-100 card-2">
                                                <div className="card-body text-white ">
                                                    <h6 className="card-title">VR rehabilitation games</h6>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-about' id='home-about'>
                <div className="bg-image py-5">
                    <div className='bg-opacity'></div>
                    {/* <div className='position-absolute top-0 start-0 icon-top'>
                        <img src={SmallMap} alt='Icon'/>
                    </div> */}
                    <div className='container position-relative py-5'>
                        <div className='position-absolute top-0 start-0 w-100 py-5'>
                            <div className='vision my-5'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='about-txt d-flex flex-column pt-4  text-white'>
                                            <span className='fw-bold'>OUR VALUE</span>
                                            <span className='fs-2 fw-bold d-inline-block my-3'>See the fish, feel the thrill, catch the rewards</span>
                                            <span className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='row gy-3'>
                                            <div className='col-12 col-md-6'>
                                                <div className="card py-3 px-3 w-100 text-white" style={{width: "18rem"}}>
                                                    <div className="card-body  ">
                                                        <h6 className="card-title text-center">Vision</h6>
                                                        <p className="card-text fw-bold fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-6'>
                                                <div className="card py-3 px-3 w-100 text-white" style={{width: "18rem"}}>
                                                    <div className="card-body ">
                                                        <h6 className="card-title text-center">Mission</h6>
                                                        <p className="card-text fw-bold fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='home-product py-5 position-relative' id="home-product" dir={language === "arabic" ? "rtl" : "ltr"} >
                <div className='position-absolute top-0 end-0 icon-top'>
                    <img src={Gold} alt='Icon'/>
                </div>
                <div className='container'>
                    <div className='service-txt d-flex align-items-center flex-column pt-4'>
                        <span className='fw-bold'>Our Product</span>
                        <span className='fs-2 fw-bold d-inline-block my-3'>Summer’s over, but the fishing is always on.</span>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                    </div>
                    <div className='row gy-4'>
                        <div className='col-12 col-md-4'>
                            <div className='card-container'>
                                <div className='product-card'>
                                    <div className='content'>
                                        <h2>01</h2>
                                        <h3>Card One</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='card-container'>
                                <div className='product-card'>
                                    <div className='content'>
                                        <h2>02</h2>
                                        <h3>Card Two</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='card-container'>
                                <div className='product-card'>
                                    <div className='content'>
                                        <h2>03</h2>
                                        <h3>Card Three</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                        <Link to="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            

            <section className='home-crew py-5 position-relative' id="home-crew" dir={language === "arabic" ? "rtl" : "ltr"}>
                    {/* <div className='position-absolute top-0 start-0 icon-top'>
                        <img src={SmallShip} alt='Icon'/>
                    </div> */}
                <div className='container'>
                    <div className='service-txt d-flex align-items-center flex-column my-4'>
                        <span className='fw-bold'>Our Crew</span>
                        <span className='fs-2 fw-bold d-inline-block my-3'>Summer’s over, but the fishing is always on.</span>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
                    </div>
                    <div className='row gy-4'>
                        <div className='col-12 col-md-3'>
                            <div className='crew-card'>
                                <div className='circle'></div>
                                <div className='content text-white'>
                                    <h2>Crew Name</h2>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="https://wa.me/{Phone Number}" className='text-decoration-none text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                        </svg>
                                    </a>
                                </div>
                                <img src={Crew} />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='crew-card'>
                                <div className='circle'></div>
                                <div className='content text-white'>
                                    <h2>Crew Name</h2>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="https://wa.me/{Phone Number}" className='text-decoration-none text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                        </svg>
                                    </a>
                                </div>
                                <img src={Crew} />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='crew-card'>
                                <div className='circle'></div>
                                <div className='content text-white'>
                                    <h2>Crew Name</h2>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="https://wa.me/{Phone Number}" className='text-decoration-none text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                        </svg>
                                    </a>
                                </div>
                                <img src={Crew} />
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className='crew-card'>
                                <div className='circle'></div>
                                <div className='content text-white'>
                                    <h2>Crew Name</h2>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    <a href="https://wa.me/{Phone Number}" className='text-decoration-none text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fillRule="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                        </svg>
                                    </a>
                                </div>
                                <img src={Crew} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='position-absolute bottom-0 end-0 icon-bottom'>
                    <img src={Anchor} alt='Icon'/>
                </div> */}
            </section>

            <section className='home-products'>
                <div className='bg-products py-5'>
                    <div className='container'>
                        <div className='row g-5'>
                            <div className='col-12 col-lg-4'>
                                <div className='content'>
                                    <img src={galleryContent.galleryTilteImage} alt="" className='product-title'/>
                                    <span className='fw-bold fs-3 text-white d-block'>Product Name</span>
                                    <span className='fs-6 text-white d-block'>Some quick example text to build on the card title and make up the bulk of the card's content. ome quick example text to build on the card title and make up the bulk of the card's content.</span>
                                    <button type="button" className='text-white py-2 pe-4 ps-3 bg-second border-0 rounded-pill me-3 mt-3 btn-watch' onClick={()=>{
                                        openVideo(galleryContent.galleryWatch)
                                    }} >
                                        <span className='me-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                            </svg>
                                        </span>
                                        <span className='fw-bold'>Watch</span>
                                    </button>
                                    <button type="button" className='text-white py-2 px-4 bg-transparent border-1 border-white rounded-pill'>
                                        <span></span>
                                        <span className='fw-bold'>More ...</span>
                                    </button>
                                </div>
                                <div className='trailer'>
                                    <iframe width="560" height="315" src="" title="YouTube video player" allowFullScreen></iframe>
                                    <img className='close' src={close} alt='' onClick={closeVideo}/>
                                </div>
                            </div>
                            <div className='col-12 col-lg-8'>
                                <Swiper
                                    effect='coverflow'
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={
                                        {
                                            rotate:0,
                                            stretch:0,
                                            depth:100,
                                            modifier:2.5
                                        }
                                    }
                                    className='swiper_continer'
                                    onSlideChange={handleSlideChange}
                                    modules={[EffectCoverflow]}
                                >
                                {galleryData.map((gall,i) => 
                                    <SwiperSlide className='w-25' key={i}>
                                        <img src={gall.gallery} alt='' className={`w-100 border-0 rounded`}/>
                                    </SwiperSlide>
                                )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}
