import React from "react"
import {Facebook, Instagram, Twitter, Pinterest, Phone,MailOutline,Room} from '@material-ui/icons';
import { Link } from "react-router-dom"


function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <span className="manuel">Manuel Blog</span>
                    <span className="connect">Connect with us</span>
                    <span className="tech">Tech & Politics</span>
                </Link>
            <div className="social-media">
                <div className="facebook">
                <Facebook />
                </div>
                <div className="instagram">
                <Instagram />
                </div>
                <div className="twitter">
                <Twitter />
                </div>
                <div className="pinterest">
                <Pinterest />
                </div>
            </div>
            </div>
            <div className="useful-links">
                <h3>Useful Links</h3>
                <a href="#">Art</a>
                <a href="#">Science</a>
                <a href="#">Technology</a>
                <a href="#">Politics</a>
                <a href="#">Design</a>
                <a href="#">Food</a>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <div className="contact-item">
                <Room style={{marginRight:"10px"}}/> University of Ghana, Legon, Accra
                </div>
                <div className="contact-item">
                <Phone style={{marginRight:"10px"}}/> +233549043849
                </div>
                <div className="contact-item">
                <MailOutline style={{marginRight:"10px"}} /> eyidana001@st.ug.edu.gh
                </div>
                <div className="contact-item">
                <Room style={{marginRight:"10px"}}/> University of Ghana, Legon, Accra
                </div>
            </div>
            </div>
        </div>
    )
}

export{Footer}