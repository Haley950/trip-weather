import React, { useState } from "react";
import { motion } from 'framer-motion'
import {Grid} from '@material-ui/core';
import Rodal from 'rodal';
import '../lib/rodal.css';

function MainCard() {
    const [state, setState] = useState(false);

    return (
        <Grid container spacing={9} className="main-card-warp">
            <Grid item xs={3} sm={3} md={3} onClick={() => setState(!state)}>
                <motion.div
                    className="main-card"
                    animate={{ scale: 1.3 }}
                    whileHover={{ scale: 1.35 }}
                    whileTap={{ scale: 1.2 }}   
                >
                </motion.div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} onClick={() => setState(!state)}>
                <motion.div
                    className="main-card"
                    animate={{ scale: 1.3 }}
                    whileHover={{ scale: 1.35 }}
                    whileTap={{ scale: 1.2 }}   
                >
                </motion.div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} onClick={() => setState(!state)}>
                <motion.div
                    className="main-card"
                    animate={{ scale: 1.3 }}
                    whileHover={{ scale: 1.35 }}
                    whileTap={{ scale: 1.2 }}   
                >
                </motion.div>
            </Grid>
            <Grid item xs={3} sm={3} md={3} onClick={() => setState(!state)}>
                <motion.div
                    className="main-card-add"
                    animate={{ scale: 1.3 }}
                    whileHover={{ scale: 1.35 }}
                    whileTap={{ scale: 1.2 }}   
                >
                </motion.div>
            </Grid>


            <Rodal visible={state} onClose={() => setState(false)} enterAnimation="slideUp" leaveAnimation="door" duration={400}>
                <div>Content</div>
            </Rodal>
        </Grid>
    )
}

export default MainCard