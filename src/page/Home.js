import Banner from "../components/banner"
import Form from "../components/form";
import Services from "../components/ourservice";
import {About}  from "../components/about";
import Talent from "../components/talent";
const Home = ()=>{
    return(
        <article>
            <Banner/>       
            <About/>
            <Services/>
            <Talent/>
            <Form/>     
        </article>
        
    )
    
}

export default Home;

