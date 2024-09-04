import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
  }
export default function Bloc({children}:Props){
    return(
    <div className="bloco">
        {children}
    </div>
    )
}