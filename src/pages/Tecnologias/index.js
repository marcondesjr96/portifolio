import React from "react";
import Header from "../../components/header";

import './tecnologias.css';

function Tecnologias(){
    return(
        <div>
            <Header></Header>
            <div>
                <div className="tecnologias-container">
                    <div className="tec-content">
                        <div className="box html">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html"></img>
                            <h1 className="box-title">HTML 5</h1>
                        </div>
                        <div className="box css">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css"></img>
                            <h1 className="box-title">CSS</h1>
                        </div>
                        <div className="box javascript">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"></img>
                            <h1 className="box-title">JavaScript</h1>
                        </div>
                        <div className="box react">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
                            <h1 className="box-title">React.js</h1>
                        </div>
                        <div className="box java">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" />
                            <h1 className="box-title">Java</h1>
                        </div>
                        <div className="box github">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
                            <h1 className="box-title">Github</h1>
                        </div>                        
                        <div className="box mysql">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="mysql" />
                            <h1 className="box-title">MySQL</h1>
                        </div>
                        <div className="box firebase">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" />
                            <h1 className="box-title">Firebase</h1>
                        </div>                        
                        <div className="box spring">
                            <img className="img-box" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="spring" />
                            <h1 className="box-title">Spring</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tecnologias