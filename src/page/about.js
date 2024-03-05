import Aboutbanner from "../components/AboutBanner";
import Achievement from "../components/achievement";
import Mission from '../components/mission'
import OurTeam from "../components/OurTeam";
import Milestone from "../components/milestone";
import Form from "../components/form";
import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';
const About = ()=>{

    const aboutBannerVariants = {
        hidden: { opacity: 0, scale: 0.8},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
          }
        }
    }
    const missionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
    }
    // const OurTeamVariants = {
    //     hidden: { opacity: 0, x:-100, y: 20 },
    //     visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
    //     animate: {
    //         x: 0,
    //         transition: {
    //             duration: 0.5,
    //             delay: 0.1
    //         }
    //     }
    // }
    const achievementVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
    }
    const milestoneVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
    }
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
    };
    return(
        <article>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={aboutBannerVariants}
        viewport={{once:true}}
        >
            <Aboutbanner/>
        </motion.div>

        <motion.div
         initial="hidden"
        whileInView="visible"
        variants={missionVariants}
        viewport={{once:true}}
        >
            <Mission/>
        </motion.div>
              
        <motion.div
        initial = {{x:-100, opacity:0 }}
        whileInView="visible"
        animate={{ x:0,opacity: 1, transition: {
            duration: 0.5,
            delay: 0.1
        }  }}
        viewport={{once:true}}>
            <OurTeam/>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={achievementVariants}
            viewport={{once:true}}>
            <Achievement/>
            </motion.div>
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={milestoneVariants}
                viewport={{once:true}}>
                <Milestone/>
                </motion.div>
    
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={formVariants}
                viewport={{once:true}}>
                <Form/>
                </motion.div>
           
            <Analytics/>
        </article>
        
    )
    
}

export default About;

