import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Grid, Typography, Chip } from '@material-ui/core';
import { getListData } from "../API/mainAPI";

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

    return (
        <Grid container spacing={9} className="main-content-warp">
            <Typography style={{fontSize:'18px', fontWeight:700, marginTop:'20px', marginBottom:'30px'}}>
                관광 기후 등급
                <i className="fa fa-question-circle" style={{marginLeft:'5px'}}></i>
            </Typography>
            {/* <Typography style={{fontSize:'14px', fontWeight:700, marginTop:'5px', marginBottom:'15px', color:'#4f4f4f'}}>
                조회조건(현재시각, 예보기간, 시군구 아이디)으로 시군구별 관광기후지수 데이터(시군구이름, 관광기후지수, 관광기후등급 등)를 조회하는 기능
            </Typography> */}
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