import { motion } from 'framer-motion';
import Banner from "../components/banner";
import Form from "../components/form";
import Services from "../components/ourservice";
import HomeAbout from '../components/HomeAbout';
import Talent from "../components/talent";
import { Analytics } from '@vercel/analytics/react';

import { useEffect, useState } from 'react';

const Home = ({ animation }) => {
    // Individual animation variants for each component
    const bannerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };

    const homeAboutVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };

    const servicesVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };

    const talentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
    };

    return (
        <article>
            
                <Banner />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={homeAboutVariants}
                viewport={{ once: true }}
            >
                <HomeAbout />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={servicesVariants}
                viewport={{ once: true }}
            >
                <Services />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={talentVariants}
                viewport={{ once: true }}
            >
                <Talent />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={formVariants}
                viewport={{ once: true }}
            >
                <Form />
            </motion.div>
            <Analytics/>
        </article>
    );
}

export default Home;
