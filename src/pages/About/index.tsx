import { NavLink } from "react-router-dom";

export function About() {
    return(
        <>
        <div style={{ color: '#00ff00'}}>Sobre</div>
        <NavLink to="/" > ir para Home </NavLink>
        </>
    )
}