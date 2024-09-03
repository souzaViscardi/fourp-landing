import "./style.css"
export default function Card(){
    return(
        <div id="card">
            <div className="img-box">
                <img src="/work-regenvet.png" alt="about"/>
            </div>
            <div className="text-box">
                <div className="text-group">
                    <span className="nameLabel">REGENVET SYSTEM</span>
                    <span className="typeLabel">IDENTIDADE VISUAL</span>
                </div>
                <div className="yearCard">2014</div>
            </div>
        </div>
    )
}