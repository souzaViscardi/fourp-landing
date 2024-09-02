
import  "./style.css"
export default function Home(){
    return(
        <div id="home" className="container">
        <span>BY PEOPLE, FOR PEOPLE</span>
        <h1 className="title">    
            <span>STUDIO</span><br/>
            <span>FOURP</span>
        </h1>
        <div className="imgContainer">
            <img className="scaleDown" src="/hero-full.png" alt="about"/>
        </div>
        </div>
    )
}