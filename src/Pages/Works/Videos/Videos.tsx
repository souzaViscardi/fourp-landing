import {pages} from "../../../data/index"
import { useParams } from 'react-router-dom';
import {Container,Bloc} from "../../../Components/Layout"
import { ScrollRestoration } from "react-router-dom";
import { Page } from "../../../data/Interfaces";

import "./style.css"

export function Videos(){
    const {id} = useParams()
    const page = pages.find((el:Page) => el.id==id) || pages[0]
    console.log(page)
    return(
        <div className="full-container" id="Videos">
            <ScrollRestoration />
            <Container classe="container margin-top">
                <Bloc>
                    <h2>{page.nome}</h2>
                    <span>{page.description}</span>
                </Bloc>
                <Bloc>
                    <div className="border-bottom">
                        <h3><b>CLIENTE</b></h3>
                        <span>{page.cliente}</span>
                    </div>
                    <div className="border-bottom">
                        <h3><b>ANO</b></h3>
                        <span>{page.ano}</span>
                    </div>
                    <div>
                        <h3><b>CATEGORIA</b></h3>
                        <span>{page.categoria}</span>
                    </div>
                </Bloc>  
            </Container>
            <Container classe="imgContainer">
            <video className="aboutImg" autoPlay src={page.videos[0]} loop={true} muted={true}></video>            
            </Container>
            <Container>
                <Bloc id="fullTable">
                    <div>
                        <h3><b>ELEMENTOS E ÍCONES</b></h3>
                        <span className="start">{page.elementoIcones}</span>
                    </div>
                </Bloc>  
            </Container>
            <Container classe="imgContainer">
            <video className="aboutImg" autoPlay src={page.videos[1]} loop={true} muted={true}></video>            
            </Container>
            <Container>
                <Bloc id="fullTable">
                    <div>
                        <h3><b>COBERTURA NA ILUSTRAÇÃO</b></h3>
                        <span className="start">{page.coberturaIlustracao}</span>
                    </div>
                </Bloc>  
            </Container>
            <Container classe="imgContainer">
            <video className="aboutImg" autoPlay src={page.videos[2]} loop={true} muted={true}></video>            
            </Container>
            <Container>
                <Bloc id="fullTable">
                    <div>
                        <h3><b>RITMO DE CORTES</b></h3>
                        <span className="start">{page.ritmoCores}</span>
                    </div>
                </Bloc>  
            </Container>
            

            <br></br>
            {
                page.bottomvideos.map((el, index) => (
                <Container key={index} classe="imgContainer">
                        <video key={index} className="aboutImg" autoPlay src={el} loop={true} muted={true}></video>            
                </Container>
                ))
            }
        </div>
    )
}