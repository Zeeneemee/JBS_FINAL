import Aboutbanner from "../components/AboutBanner";
import Achievement from "../components/achievement";
import Mission from '../components/mission'
import OurTeam from "../components/OurTeam";
import Milestone from "../components/milestone";
import Form from "../components/form";
import { Analytics } from '@vercel/analytics/react';
const About = ()=>{
    return(
        <article>
            <Aboutbanner/>       
            <Mission/>
            <OurTeam/>
            <Achievement/>
            <Milestone/>
            <Form/>
            <Analytics/>
        </article>
        
    )
    
}

export default About;

