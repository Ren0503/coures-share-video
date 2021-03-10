import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
            <button className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                    <i className="fas fa-bars tm-menu-closed-icon" />
                    <i className="fas fa-times tm-menu-opened-icon" />
                </span>
            </button>

            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                <ul className="navbar-nav text-uppercase">
                    <li className="nav-item">
                        <Link className="nav-link tm-nav-link" to="/auth/video_list">
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link tm-nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link tm-nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar