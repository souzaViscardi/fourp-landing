import {portfolio} from "../../../data/index"
import {Container,Bloc, Mosaic} from "../../../Components/Layout"
import { ScrollRestoration } from "react-router-dom";
import { Portfolio } from "../../../data/Interfaces";
import "./style.css"
export function Social(){
    const id = "social"
    const page = portfolio.find((el:Portfolio) => el.id==id) || portfolio[0]
    let divisor = 3
    let arrImgs = [...page.imgs]
    let index = 0
    let imgs = []
    page.imgs.forEach(() => {
        let group = arrImgs.splice(index, divisor)
        console.log(arrImgs.length) 
        divisor == 3 ? divisor = 2 : divisor = 3
        if(group.length)
            imgs.push(group)
    })
    if(arrImgs.length>0)
        imgs.push(arrImgs)
    console.log(imgs)
    return(
        <div className="full-container" id="Social">
            <ScrollRestoration />
            <Container classe="container margin-top">
                <Bloc>
                    <h1>{page.titulo}</h1>
                    <span>{page.subtitulo}</span>
                </Bloc>
            </Container>
            <Mosaic>
                {
                imgs.map((el:any) => el.map((el2:any, index:number) => (
                    <Bloc key={index} className={el.length%2===1?"":"bloco-2"}>
                        <img src={el2}/>
                    </Bloc>
                )))
                }
            </Mosaic>
        </div>)
}