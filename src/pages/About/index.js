import React from "react";
import Header from '../../components/header';

import './about.css';

function About () {
    return(
        <div>
            <div className="container-about">
                <Header></Header>
                <div className="about">
                    <img className="perfil" src="https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000" alt="Junior" />
                        <div className="text" >
                            <h1 className="my-name">Marcondes Ferreira da Silva Junior</h1>
                            <p>Com 26 anos de idade e residindo em Igarassu-PE, tenho uma grande paixão por tecnologia e atualmente estou estudando Análise e Desenvolvimento de Sistemas. Me       considero     uma     pessoa dedicada e comprometida, que trabalha muito bem em equipe, valorizando a troca de ideias e o aprendizado mútuo. Minha vontade de aprender e    minha motivação  me levam a   sempre buscar a realização dos meus sonhos, independentemente da situação.</p>
                            <p>Como desenvolvedor front-end Jr, busco constantemente aprimorar minhas habilidades em criar interfaces de usuários dinâmicas e funcionais para websites. Possuo um           sólido    conhecimento em HTML, CSS, JavaScript e React.js, e estou sempre aberto a novas tecnologias e desafios que possam me ajudar a crescer profissionalmente.</p>
                            <p>Procuro uma oportunidade em uma empresa dinâmica e inovadora que valorize a criatividade e o pensamento crítico. Acredito que minhas habilidades técnicas e minha        paixão     pela    tecnologia me permitirão realizar um trabalho de alta qualidade e atender às expectativas da empresa. Estou animado para fazer parte de uma equipe   motivada e   contribuir para o    sucesso da empresa.</p>
                        </div>
                </div>
            </div>
        </div>
    )
};
export default About;