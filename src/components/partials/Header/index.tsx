import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";

import { isLogged } from "../../../helpers/AuthHandler";



export function Header() {
    let logged = isLogged();

    /*const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }
    */

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">D</span>
                        <span className="logo2">S</span>
                        <span className="logo3">P</span>
                        <span className="logo4">G</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                            <>
                                <li>
                                    <Link to="/my-account">Minha conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged && 
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }   
                     </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}