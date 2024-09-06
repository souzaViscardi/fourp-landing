
import  "./style.css"
import Card from "../../Components/Card/Card"
import {trabalhos, services, testimonial, faq} from "../../data/index"
import ServicesCard from "../../Components/ServicesCard/ServicesCard"
import {Container,Mosaic,Bloc} from "../../Components/Layout"
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard"
import Carousel from "../../Components/Carousel/Carousel"
import CollapsedButton from "../../Components/CollapsedButton/CollapsedButton"
import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

export default function Home(){
    return(
        <div id="home" className="full-container">
            <ScrollRestoration />

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
            <Container>
                <Bloc>
                    <h1 className="left"> NOSSOS<br/> TRABALHOS</h1>
                </Bloc>
                <Bloc>
                    <h3 className="description">Apresentamos alguns exemplos de nosso trabalho, evidenciando nossa busca pela excelência em cada projeto. 
                    Os exemplos abaixo refletem nosso compromisso com a mais alta qualidade e dedicação.</h3>
                </Bloc>
            </Container>
            <Mosaic>
                {trabalhos.map((el:any, index:number) => (
                    <Bloc key={index}>
                        <Card name={el.name} key={index} img={el.imgCard} url={"/trabalhos/"+el.path} date={el.date} type={el.type}/>
                    </Bloc>
                ))}

            </Mosaic>
            <Container>
                <a className="button dark-theme">OUTROS TRABALHOS</a>
            </Container>
            <Container>
                <h1 className="title">    
                    SOBRE A<br/>
                    FOURP
                </h1>
            </Container>
            <Container classe="imgContainer">
                <img className="aboutImg" src="/about.png" alt="about"/>
            </Container>
            <Container>
                <h2  className="gradient-collor">BY PEOPLE, FOR PEOPLE</h2>
            </Container>
            <Container>
                <h3>Fundada em 2023, a Fourp tem como objetivo transformar ideias em realidades através do design. Somos uma agência de Design, audiovisual e marketing, comprometida em transmitir a mensagem mais impactante e memorável por meio de ideias criativas e inovadoras. Nossa missão é elevar a sua marca ao próximo nível, garantindo que sua mensagem seja comunicada de forma eficaz.</h3>
            </Container>
            <Container>
                <Bloc>
                    <h1 className="left"> NOSSOS<br/> SERVIÇOS</h1>
                </Bloc>
                <Bloc>
                    ""
                </Bloc>
            </Container>
            <Mosaic>
                {
                    services.map((el, index) => (
                        <ServicesCard key={index} description={el.description} name={el.name}/>
                    ))
                }
            </Mosaic>
            <Container>
                <Bloc>
                    <h1 className="left">NOSSA<br/> INSPIRAÇÃO</h1>
                </Bloc>
                <Bloc>
                    <h3 className="description">Nossa inspiração vem da profunda conexão que criamos com nossos clientes e suas histórias únicas. Nossa missão é representar essas histórias de maneira autêntica, solucionando problemas com criatividade e entregando resultados excepcionais. Não nos contentamos com o comum; ao invés disso, buscamos transformar os conceitos visuais de nossos clientes em algo memorável e impactante, refletindo a essência de suas marcas de forma inovadora e personalizada.
                        <br></br>
                        <br></br>
                        Nossa visão é ser uma referência no mercado, lembrada por nosso compromisso em criar relacionamentos genuínos e duradouros. Na Fourp, valorizamos o trabalho ético, a responsabilidade social e o profissionalismo, e nos orgulhamos de ser uma empresa onde as pessoas se sentem acolhidas e valorizadas. Ao focar no cliente, cultivamos a coragem e a criatividade necessárias para oferecer soluções transparentes e eficazes. Com essa dedicação, não apenas cumprimos as demandas, mas também construímos vínculos de confiança que fortalecem a relação entre a empresa e seus clientes.
                    </h3>
                    <br></br>
                    <br></br>
                    <img className="logo" src="./signature.png"></img>
                </Bloc>
                
            </Container>
            <Container>
                <h1>FEEDBACKS DOS<br/>NOSSOS CLIENTES</h1>
            </Container>
            <Carousel>
                {
                    testimonial.map((el, index) => (
                        <TestimonialCard key={index} description={el.description} img={el.img} name={el.name} role={el.role}/>
                    ))
                }
            </Carousel>
            <Container>
                    <h1 >PERGUNTAS<br/>FREQUENTES</h1>

            </Container>
            <Mosaic>
                {
                    faq.map((el, index) => (
                        <CollapsedButton key={index} ask={el.ask} response={el.resp}/>
                    ))
                }
            </Mosaic>
            <Container>
            <h1 >VAMOS TRABALHAR<br/>JUNTOS?</h1>
            </Container>
            <Container>
                <a className="button dark-theme">ENVIAR MENSSAGEM</a>
            </Container>
            <Container classe="imgContainer">
                <img className="aboutImg" src="/about-4.jpg" alt="about"/>
            </Container>
            <Container classe="imgContainer">
                <h2>NOS ACOMPANHE EM NOSSAS REDES SOCIAIS.</h2>
            </Container>
            <Container>
                <ul>
                    <li><Link target="_blank"  to="https://www.instagram.com/studiofourp/">INSTAGRAM</Link><img src="/instagram.png" /></li>
                    <li><Link target="_blank"  to="https://www.tiktok.com/@studio.fourp">TIKTOK</Link><img src="/tiktok.png" /></li>
                    <li><Link target="_blank"  to="https://www.linkedin.com/company/studiofourp">LINKEDIN</Link><img src="/linkedin.png" /></li>
                </ul>
            </Container>
            
        </div>
    )
}

