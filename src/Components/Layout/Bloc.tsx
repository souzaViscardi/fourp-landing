import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
    id?:string
  }
export default function Bloc({children,id}:Props){
    return(
    <div id={id? id: ""} className="bloco">
        {children}
    </div>
    )
}