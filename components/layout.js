import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>World Eye Foundation</title>
        <meta name="description"
    		content="Generated by create next app"/>
		<link rel="icon" href="/wef_icon.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script >
      </Head>
      <body>
      <header>
        <div className="header-area">
            <div className="main-header ">
                <div className="header-top d-none d-lg-block">
                    <div className="container-fluid">
                        <div className="col-xl-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="header-info-left d-flex">
                                    <ul>     
                                        <li>Phone: +99 (0) 101 0000 888</li>
                                        <li>Email: noreply@yourdomain.com</li>
                                    </ul>
                                    <div className="header-social">    
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a  href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li> <a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-info-right d-flex align-items-center">
                                    {/* <div className="select-this">
                                        <form action="#">
                                            <div className="select-itms">
                                                <select name="select" id="select1">
                                                    <option value="">English</option>
                                                    <option value="">Bangla</option>
                                                    <option value="">Arabic</option>
                                                    <option value="">Hindi</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div> */}
                                    <ul className="contact-now">     
                                        <li><a href="#">Subscribe Now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom  header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index.html"><Image src="assets/img/logo/logo.png" alt=""></Image></a>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">                                                                                          
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="program.html">latest causes</a></li>
                                                <li><a href="events.html">social events </a></li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn d-none d-lg-block ml-20">
                                        <a href="contact.html" className="btn header-btn">Donate</a>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

      <main>{children}</main>
      </body>
    </>
  )
}
