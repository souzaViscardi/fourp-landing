import "./style.css"
import { Link } from "react-router-dom";
interface CardProps {
    name:string,
    url:string,
    type:string,
    img:string,
    date:string
}
export default function Card({name, url, type, img, date}:CardProps){
    return(
        <Link to={url}>
        <div className="card">
            <div className="img-box">
                <img className="img-card" src={img} alt={name}/>
            </div>
            <div className="text-box">
                <div className="text-group">
                    <span className="nameLabel">{name}</span>
                    <span className="typeLabel">{type}</span>
                </div>
                {date&&<div className="yearCard">{date}</div>}
            </div>
        </div>
        </Link>
    )
}