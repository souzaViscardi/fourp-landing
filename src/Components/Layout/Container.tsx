import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
    classe?: string
  }
export default function Container({children, classe}:Props){
    return(
    <div className={classe||"container"}>
        {children}
    </div>
    )
}