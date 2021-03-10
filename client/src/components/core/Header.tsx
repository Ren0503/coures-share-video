import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="position-relative">
            <div className="potition-absolute tm-site-header">
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-7 col-md-4">
                            <Link to='/' className="tm-bg-black text-center tm-logo-container">
                                <i className="fas fa-video tm-site-logo mb-3" />
                                <h1 className="tm-site-name">Courses Catalog</h1>
                            </Link>
                        </div>
                        <div className="col-5 col-md-8 ml-auto mr-0">
                            <div className="tm-site-nav">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tm-fixed-header-bg"></div> 
        </div>
    )
}

export default Header