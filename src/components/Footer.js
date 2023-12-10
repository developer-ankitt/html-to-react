import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box">
                        <h3>About us</h3>
                        <p>It was popularised in the 1960 with the release of Latest sheets containing Lorem Ipsum
                            passage.</p>
                        <button className="btn btn-secondary">Read More</button>
                    </div>
                    <div className="box">
                        <h3>Quik Links</h3>
                        <ul>
                            <li>
                                <Link to="#">Home</Link>
                                <Link to="/home">{props.home}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">About us</Link> */}
                                <Link to="/about">{props.page1}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">Products</Link> */}
                                <Link to="/product">{props.page2}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">Blog</Link> */}
                                <Link to="/blog">{props.page3}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">Services</Link> */}
                                <Link to="/service">{props.page4}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">Gallery</Link> */}
                                <Link to="/gallery">{props.page5}</Link>
                            </li>
                            <li>
                                {/* <Link to="#">Contact us</Link> */}
                                <Link to="/contact">{props.page6}</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="box">
                        <h3>Follow Us</h3>
                        <div>
                            <ul>
                                <li>
                                    <Link to="https://www.facebook.com/codersgyan">
                                        <img src="./icons/facebook.svg" alt="" />
                                        <span>Facebook</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/CoderGyan">
                                        <img src="./icons/twitter.svg" alt="" />
                                        <span>Twitter</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="./icons/google.svg" alt="" />
                                        <span>Google +</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/codersgyan/">
                                        <img src="./icons/instagram.svg" alt="" />
                                        <span>Instagram</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box instagram-api">
                        <h3>Instagram</h3>
                        <div className="post-wrap">
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./images/food-table.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="copyright">
                <div>
                    Copyright © 2020 .All rights reserved by <Link to="https://www.instagram.com/codersgyan/">Coder's Gyan</Link>.
                </div>
            </footer>
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
page1: "About",
page2: "Products",
page3: "Blog",
page4: "Service",
page5: "Gallery",
page6: "Contact",
}

export default Footer