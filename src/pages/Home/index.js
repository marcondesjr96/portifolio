import React from 'react';
import "./home.css"
import Lottie from 'lottie-react';
import devlottie from '../../animations/112195-development.json';
import Header from '../../components/header';

 function Home () {
  return (
    <div>
        <Header></Header>
       <div className='container' style={'backgroud-image: #000' }>
          <div className="title-container">
               <h1 className="title name">Marcondes Junior</h1>
               <h3 className="title subtitle">Developer Front-End</h3>            
               <a href="https://github.com/marcondesjr96"><button className="button-github">GitHub</button></a>
           </div>        
           <Lottie className='lottie-dev' animationData={devlottie} loop={true} />       
       </div>
    </div>
  )
}
export default Home