import React from "react";
import { motion } from 'framer-motion'

function SelecteForm() {

    return (
    <>        
        <motion.div>
            <motion.div
                className="main-card"
                animate={{ scale: 1.3 }}
                whileTap={{ scale: 1.2 }}   
            >
            </motion.div>
            <motion.div
                className="main-card"
                animate={{ scale: 1.3 }}
                whileTap={{ scale: 1.2 }}   
            >
            </motion.div>
            <motion.div
                className="main-card"
                animate={{ scale: 1.3 }}
                whileTap={{ scale: 1.2 }}   
            >
            </motion.div>
        </motion.div>
    </>
    )
}

export default SelecteForm