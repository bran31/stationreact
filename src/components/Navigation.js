import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light-2">
            
            <a className="navbar-brand" href="#">
                <img src="patch2.png" className="patch"/>Station 43
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="container">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to='/'>
                            <li className="nav-link">Home</li>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to='/members'>
                            <li className="nav-link">Profiles</li>
                        </Link>
                    </li>
                   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Seniority
                    </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to='/als'><li className="dropdown-item">ALS</li> </Link>
                            <Link to='/bls'><li className="dropdown-item">BLS</li> </Link>                           
                            <Link to='/officers'><li className="dropdown-item">Officers</li> </Link>                           
                                              
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tours
                    </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item disabled" href="#" >Tour 1</a></li>
                            <li><a className="dropdown-item" href="#" >Tour 2</a></li>
                            <li><a className="dropdown-item" href="#" >Tour 3</a></li>                           
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Platoons
                    </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#" >E Platoon</a></li>
                            <li><a className="dropdown-item" href="#" >F Platoon</a></li>
                            <li><a className="dropdown-item" href="#" >D Platoon</a></li>                           
                        </ul>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn search-btn my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}