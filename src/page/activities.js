import ActivitiesBanner from '../components/ActivitiesBanner'
import Form from "../components/form";
import {motion} from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
const Activities = ()=>{
    const activitiesVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: 
        { 
            opacity: 1, y: 0, 
            transition: { 
                duration: 0.5, delay: 0.3 
            } 
        }
    };
    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };
    return(
        <article>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={activitiesVariants}
            viewport={{ once: true }}
        >
            <ActivitiesBanner/>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
            viewport={{ once: true }}
        ><Form/>
        </motion.div>
            
            <Analytics/>
        </article>
       
    )
}
export default Activities;