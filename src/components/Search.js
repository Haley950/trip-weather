import React from "react";
import { motion } from 'framer-motion'

function MainCard() {

    return (
    <>        
        <motion.input 
            className="search"
            placeholder=" Search Place Name"
        >
        </motion.input>
    </>
    )
}

export default MainCard