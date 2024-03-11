import NotFound from "../components/notFound";
import {motion} from "framer-motion"

const NotFoundPage = ()=>{
    const NotFoundVariants = {
        hidden:  {opacity: 0, y: 20},
        visible: {opacity: 1, y:0, 
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        }
       
    }
    return(
        <motion.div
        initial= "hidden"
        whileInView="visible"
        variants={NotFoundVariants}
        viewport={{once: true}}
        >
            <NotFound/>
        </motion.div>
    )
}

export default NotFoundPage;