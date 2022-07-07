import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Grid, Typography, Tooltip, Zoom } from '@material-ui/core';
import { getListData } from "../API/mainAPI";
import Rodal from 'rodal';

function Item({item}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);    
    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div className="content-title" layout>
            {item.doName} {item.cityName}
            <motion.div className="dot" layout 
                style={{
                    background: item.TCI_GRADE === "좋음" ? '#C9EAFF' 
                    : item.TCI_GRADE === "보통" ? '#D1DBB5' 
                    : item.TCI_GRADE === "나쁨" && '#E99D8E' 
                }}
            />
        </motion.div>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <div className="content"></div>
            <div className="content"></div>
            <div className="content"></div>
        </motion.div>
    )
}

function Contents() {
    const [listDatas, setListDatas] = useState([]);
    const [state, setState] = useState(false);
    const serviceKey = "cMsWyKP9JICZ%2FwdGUDKNGYy0Zd%2FTLcUwYaStouO%2BPOdDQ1%2FMsE1zNuuC7%2FMf2n9N7f1BsZre7ngzY52czKk85w%3D%3D";

    const fatchListData = async() => {
        try {
            const response = await getListData(serviceKey);
            setListDatas(response.items.item)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fatchListData();  
    },[])
    console.log('listDatas', listDatas)

    const longText = `
        Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
        Praesent non nunc mollis, fermentum neque at, semper arcu.
        Nullam eget est sed sem iaculis gravida eget vitae justo.
    `;

    return (
        <Grid container spacing={9} className="main-content-warp">
            <div style={{marginTop:'20px', marginBottom:'30px', display:'flex', lineHeight:'21px'}}>

                <Typography style={{fontSize:'18px', fontWeight:700, marginRight:'5px'}}>
                    관광 기후 등급
                </Typography>
                <Tooltip TransitionComponent={Zoom} title={longText}>
                    <i className="fa fa-question-circle fa-lg"></i>
                </Tooltip>
            </div>
            
            <AnimateSharedLayout>
                <motion.ul layout initial={{ borderRadius: 25 }}>
                    {listDatas?.map((item, index) => (
                    <Item item={item} key={index} />
                    ))}
                </motion.ul>
            </AnimateSharedLayout>
        </Grid>
    )
}


export default Contents