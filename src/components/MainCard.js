import React from "react";
import { motion } from 'framer-motion'

function MainCard() {

    return (
        <div className="main-card-warp">
            <motion.div
                className="MainCard"
                animate={{ scale: 1.3 }}
                whileHover={{ scale: 1.35 }}
                whileTap={{ scale: 1.2 }}   
            >
                
            </motion.div>
            <motion.div
                className="MainCard"
                animate={{ scale: 1.3 }}
                whileHover={{ scale: 1.35 }}
                whileTap={{ scale: 1.2 }} 
            />
            <motion.div
                className="MainCard"
                animate={{ scale: 1.3 }}
                whileHover={{ scale: 1.35 }}
                whileTap={{ scale: 1.2 }} 
            />
        </div>
    )
}

export default MainCard