import React from 'react';

const navLinks = ({onSearchSubmit}) => {

   
    return(
        <div className="NavLinks">
                <nav className="navbar navbar-expand-lg navbar-light ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li onClick={()=>onSearchSubmit("Architecture",true)} className="nav-item">
                            <a className="nav-link" href="#">Architecture <span className="sr-only">(current)</span></a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Current Events",true)} className="nav-item">
                            <a className="nav-link" href="#">Current Events</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Experimental",true)} className="nav-item">
                            <a className="nav-link" href="#">Experimental</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Fashion",true)} className="nav-item">
                            <a className="nav-link" href="#">Fashion</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Health & Wellness",true)} className="nav-item">
                            <a className="nav-link" href="#">Health & Wellness</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Interiors",true)} className="nav-item">
                            <a className="nav-link" href="#">Interiors</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Nature",true)} className="nav-item">
                            <a className="nav-link" href="#">Nature</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("People",true)} className="nav-item">
                            <a className="nav-link" href="#">People</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Street Photography",true)} className="nav-item">
                            <a className="nav-link" href="#">Street Photography</a>
                        </li>
                        <li onClick={()=>onSearchSubmit("Street Photography",true)} className="nav-item">
                            
                            <a className="nav-link" href="#">View all</a>
                        </li>

                        </ul>
                        
                    </div>
            </nav>
        </div>
    );
}

export default navLinks;