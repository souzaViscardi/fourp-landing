import {pages} from "../../../data/index"
import { useParams } from 'react-router-dom';
import {Container,Bloc} from "../../../Components/Layout"
import "./style.css"
interface Page{
    id:string
    cliente: string
    ano:string
    categoria:string
    nome: string
    description: string
    finalProduct:string
    design: string
    cores:string
    conceptImg: string
    idealizacao: string
    bottomImgs:string[]

}
export function Brands(){
    const {id} = useParams()
    const page = pages.find((el:Page) => el.id==id) || pages[0]
    console.log(page)
    return(
        <div className="full-container" id="Brands">
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
                <img className="aboutImg" src={page.finalProduct} alt="about"/>
            </Container>
            <Container>
                <Bloc id="fullTable">
                    <div className="border-bottom">
                        <h3><b>DESIGN</b></h3>
                        <span className="start">{page.design}</span>
                    </div>
                    <div className="border-bottom">
                        <h3><b>CORES</b></h3>
                        <span className="start">{page.cores}</span>
                    </div>
                    <div>
                        <h3 ><b>CONCEITO</b></h3>
                        <span className="start">{page.conceito}</span>
                    </div>
                </Bloc>  
            </Container>
            <Container classe="imgContainer">
                <img className="aboutImg" src={page.conceptImg} alt="about"/>
            </Container>
            <Container>
                <Bloc id="fullTable">
                    <div>
                        <h3><b>IDEALIZAÇÃO</b></h3>
                        <span className="start">{page.idealizacao}</span>
                    </div>
                </Bloc>  
            </Container>
            <br></br>
            {
                page.bottomImgs.map((el, index) => (
                    <>
                <Container classe="imgContainer">
                    <img key={index} className="aboutImg" src={el} alt="about"/>
                </Container>
                    <br/>
                    </>
                ))
            }
        </div>
    )
}