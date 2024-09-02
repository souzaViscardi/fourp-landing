
import  "./style.css"
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
            <div className="imgContainer">
                <img className="scaleDown" src="/hero-full.png" alt="about"/>
            </div>
            <div className="container">
                <div className="bloco">
                    <h1> NOSSOS TRABALHOS</h1>
                </div>
                <div className="bloco">
                    <h2>Apresentamos alguns exemplos de nosso trabalho, evidenciando nossa busca pela excelência em cada projeto. 
                    Os exemplos abaixo refletem nosso compromisso com a mais alta qualidade e dedicação.</h2>
                </div>
            </div>
        </div>
    )
}

