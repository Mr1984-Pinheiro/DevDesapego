import { Link } from "react-router-dom";

export function Home() {
    return(
        <>
        <div >Home</div>
        <Link style={{ color: '#00ff00'}} to="/about" >Ir para Sobre</Link>
        </>
    )
}