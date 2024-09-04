
import  "./style.css"
import Card from "../../Components/Card/Card"
import {trabalhos, services} from "../../data/index"
import ServicesCard from "../../Components/ServicesCard/ServicesCard"
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
                <div className="bloco description">
                    <h3 className="description">Apresentamos alguns exemplos de nosso trabalho, evidenciando nossa busca pela excelência em cada projeto. 
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
                    SOBRE A<br/>
                    FOURP
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
            <div className="container">
                <div className="bloco">
                    <h1 className="left"> NOSSOS SERVIÇOS</h1>
                </div>
                <div className="bloco description">
                </div>
            </div>
            <div id="mosaic">
                {
                    services.map((el, index) => (
                        <ServicesCard key={index} description={el.description} name={el.name}/>
                    ))
                }
            </div>
            <div className="container">
                <div className="bloco">
                    <h1>NOSSA INSPIRAÇÃO</h1>
                </div>
                <div className="bloco ">
                    <h3 className="description">Nossa inspiração vem da profunda conexão que criamos com nossos clientes e suas histórias únicas. Nossa missão é representar essas histórias de maneira autêntica, solucionando problemas com criatividade e entregando resultados excepcionais. Não nos contentamos com o comum; ao invés disso, buscamos transformar os conceitos visuais de nossos clientes em algo memorável e impactante, refletindo a essência de suas marcas de forma inovadora e personalizada.
                        <br></br>
                        <br></br>
                        Nossa visão é ser uma referência no mercado, lembrada por nosso compromisso em criar relacionamentos genuínos e duradouros. Na Fourp, valorizamos o trabalho ético, a responsabilidade social e o profissionalismo, e nos orgulhamos de ser uma empresa onde as pessoas se sentem acolhidas e valorizadas. Ao focar no cliente, cultivamos a coragem e a criatividade necessárias para oferecer soluções transparentes e eficazes. Com essa dedicação, não apenas cumprimos as demandas, mas também construímos vínculos de confiança que fortalecem a relação entre a empresa e seus clientes.
                    </h3>
                    <br></br>
                    <br></br>
                    <img className="logo" src="./signature.png"></img>
                </div>
                
            </div>
        </div>
    )
}

