import Banner from "../components/banner"
import Form from "../components/form";
import Services from "../components/ourservice";
import HomeAbout from '../components/HomeAbout'
import Talent from "../components/talent";
const Home = ({annimation})=>{
    return(
        <article>
            <Banner />       
            <HomeAbout/>
            <Services/>
            <Talent/>
            <Form/>     
        </article>
        
    )
    
}

export default Home;

