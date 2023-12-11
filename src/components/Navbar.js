import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const Navbar = (props) => {
    return (
        <>

        {/* <div>
            <img src="../media/images/jars.jpg" alt="jars" />
        </div> */}

            {/* <div> */}
            <div className="contact flex items-center">
                <img src="..\media\icons\phone.svg" alt="" />
                <div>
                    <h5>Call us: (+84) 123 456 789</h5>
                    <h6>E-mail : support@freshmeal.com</h6>
                </div>
            </div>
            <div className="time flex items-center">
                <img src="..\media\icons\clock.svg" alt="" />
                <div>
                    <h5>Working Hours:</h5>
                    <h6>Mon - Sat (8.00am - 12.00am)</h6>
                </div>
            </div>
            {/* <div className="site-content-wrapper"> */}
            <div className="nav-trigger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-bar-chart">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" /></svg>
            </div>
            {/* <div className="site-content"> */}
            <header className="topbar">
                <div className="container flex justify-between items-center">
                    <div className="icons">
                        <Link to="/"><img src="..\media\icons\facebook.svg" alt="" /></Link>
                        <Link to="/"><img src="..\media\icons\twitter.svg" alt="" /></Link>
                        <Link to="/"><img src="..\media\icons\google.svg" alt="" /></Link>
                        <Link to="/"><img src="..\media\icons\instagram.svg" alt="" /></Link>
                        <Link to="/"><img src="..\media\icons\search.svg" alt="" /></Link>
                    </div>
                    <div className="auth flex items-center">
                        <div>
                            <img src="..\media\icons\user-icon.svg" alt="" />
                            <Link to="/">Log in</Link>
                        </div>
                        <span className="divider">|</span>
                        <div>
                            <img src="..\media\icons\edit.svg" alt="" />
                            <Link to="/">Register Now</Link>
                        </div>
                        <span className="divider">|</span>
                        <div>
                            <img src="..\media\icons\cart.svg" alt="" />
                            <Link to="/">0 Items - ($0.00)</Link>
                        </div>
                    </div>
                </div>
            </header>

            <nav>
                <div className="top">
                    <div className="container flex justify-between">
                        <div className="contact flex items-center">
                            <img src="public\media\icons\phone.svg" alt="" />
                            <div>
                                <h5>Call US: (+84) 123 456 789</h5>
                                <h6>E-mail : support@freshmeal.com</h6>
                            </div>
                        </div>
                        <div className="branding">
                            <img src="..\media\icons\logo.svg" alt="" />{props.title}
                        </div>
                        <div className="time flex items-center">
                            <img src="..\media\icons\clock.svg" alt="" />
                            <div>
                                <h5>Working Hours:</h5>
                                <h6>Mon - Sat (8.00am - 12.00am)</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar magic-shadow">
                    <div className="container flex justify-center">
                        <Link to="/home" className="active">{props.home}</Link>
                        <Link to="/about"> {props.page1} </Link>
                        <Link to="/product">{props.page2}</Link>
                        <Link to="/blog">{props.page3}</Link>
                        <Link to="/shop">{props.page4}</Link>
                        <Link to="/service">{props.page5}</Link>
                        <Link to="/contact">{props.page6}</Link>
                        {/* <Link to="/">{props.page7}</Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

// To set propTypes (propTypes are used to declare the data as well as to set some mandatory props like website's Title, Contact Us, About Us etc.)
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    page1: PropTypes.string.isRequired,
    // page2: PropTypes.string.isRequired,
    page3: PropTypes.string.isRequired,
}

//  Set some Default propTypes 
Navbar.defaultProps = {
    title: "Set Title Here",
    home: "Home",
    page1: "Products",
    // page2: "Blogs",
    page3: "10🛒",
}

export default Navbar