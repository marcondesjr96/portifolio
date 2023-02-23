import React from "react";
import {Link} from "react-router-dom";
import "./header.css"


function Header (){
    return (       
           
                <div>
                     <nav>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/tecnologias">Tecnologias</Link>
                            </li>
                            <li>
                                <Link to="/projetos">Projetos</Link>
                            </li>
                        </ul>                    
                        <Link to="/contato"><button>Contato</button></Link>
                    </nav>
                    <hr></hr>                   
                </div>  
               
    )
};
export default Header;