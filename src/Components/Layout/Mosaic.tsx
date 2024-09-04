import "./style.css"
type Props = {
    children: string | JSX.Element | JSX.Element[]
  }
export default function Mosaic({children}:Props){
    return(
    <div id="mosaic">
        {children}
    </div>
    )
}