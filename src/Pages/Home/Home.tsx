
import  "./style.css"
import Card from "../../Components/Card/Card"
import {trabalhos} from "../../data/index"
export default function Home(){
    return(
        <div id="home" className="full-container">
            <span id="slogan">BY PEOPLE, FOR PEOPLE</span>
            <h1 className="title">    
                <span>STUDIO</span><br/>
                <span>FOURP</span>
            </h1>
            <div className="location">
                <div><b>Campinas, Sp</b></div>
                <div><b>AGÊNCIA E PRODUTORA <span className="gradient-collor"> + DESIGN + AUDIOVISUAL</span></b></div>
            </div>
            <div className="animationImgContainer">
                <img className="scaleDown" src="/hero-full.png" alt="about"/>
            </div>
            <div className="container">
                <div className="bloco">
                    <h1> NOSSOS TRABALHOS</h1>
                </div>
                <div className="bloco">
                    <h3>Apresentamos alguns exemplos de nosso trabalho, evidenciando nossa busca pela excelência em cada projeto. 
                    Os exemplos abaixo refletem nosso compromisso com a mais alta qualidade e dedicação.</h3>
                </div>
            </div>
            <div id="mosaic">
                {trabalhos.map((el:any, index:number) => (
                    <div key={index} className="bloco">
                        <Card name={el.name} key={index} img={el.imgCard} url={el.url} date={el.date} type={el.type}/>
                    </div>
                ))}

            </div>
            <div className="container">
                <a className="button dark-theme">OUTROS TRABALHOS</a>
            </div>
            <div className="container">
                <h1 className="title">    
                    <span>SOBRE A</span><br/>
                    <span>FOURP</span>
                </h1>
            </div>
            <div className="imgContainer">
                <img className="aboutImg" src="/about.png" alt="about"/>
            </div>
            <div className="container">
                <h2  className="gradient-collor">BY PEOPLE, FOR PEOPLE</h2>
            </div>
            <div className="container">
                <h3>Fundada em 2023, a Fourp tem como objetivo transformar ideias em realidades através do design. Somos uma agência de Design, audiovisual e marketing, comprometida em transmitir a mensagem mais impactante e memorável por meio de ideias criativas e inovadoras. Nossa missão é elevar a sua marca ao próximo nível, garantindo que sua mensagem seja comunicada de forma eficaz.</h3>
            </div>
        </div>
    )
}

