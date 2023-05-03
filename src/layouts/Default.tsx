import { Outlet } from "react-router-dom";
import { Template } from "../components/MainComponents";
import { Header } from "../components/partials/Header";
import { Footer } from "../components/partials/Footer";


export function Default(){
    return(
       <Template>
        <Header />
        <Outlet />
         <Footer />
       </Template>
    
    
    )
}