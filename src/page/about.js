import Aboutbanner from "../components/AboutBanner";
import Achievement from "../components/achievement";
import Mission from '../components/mission'
import OurTeam from "../components/OurTeam";
import Milestone from "../components/milestone";
import Form from "../components/form";
const About = ()=>{
    return(
        <article>
            <Aboutbanner/>       
            <Mission/>
            <OurTeam/>
            <Achievement/>
            <Milestone/>
            <Form/>
        </article>
        
    )
    
}

export default About;

