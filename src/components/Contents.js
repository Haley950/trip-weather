import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Grid, Typography } from '@material-ui/core';
import { getListData } from "../API/mainAPI";
import SelecteDateForm from "../components/SelecteDateForm";
import SelecteForm from "../components/SelecteForm";


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
        <AnimatePresence>{isOpen && <Content item={item} />}</AnimatePresence>
      </motion.li>
    );
  }

function Content({item}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <div className="content">
                <b>조회 일시</b> {item.tm}
            </div>
            <div className="content">
                <b>관광 기후 등급</b> {item.TCI_GRADE}
            </div>
        </motion.div>
    )
}

function Contents() {
    const [loading, setLoading] = useState(false);
    const [listDatas, setListDatas] = useState([]);
    const [cityId, setCityId] = useState("");
    const serviceKey = "cMsWyKP9JICZ%2FwdGUDKNGYy0Zd%2FTLcUwYaStouO%2BPOdDQ1%2FMsE1zNuuC7%2FMf2n9N7f1BsZre7ngzY52czKk85w%3D%3D";

    const fatchListData = async() => {
        setLoading(true)
        try {
            const response = await getListData(serviceKey, cityId);
            setListDatas(response.items.item)
            setLoading(true)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fatchListData();  
    },[cityId])

    return (
        <Grid container spacing={9} className="main-content-warp">
            <div style={{marginTop:'20px', marginBottom:'30px'  }}>
                <Typography style={{fontSize:'18px', fontWeight:700, marginRight:'5px', fontFamily: "'Noto Sans KR', sans-serif"}}>
                    관광 기후 등급
                </Typography>
                <Typography style={{fontSize:'15px', fontFamily: "'Noto Sans KR', sans-serif"}}>
                    현재시각 및 예보기간으로 시군구별 관광기후지수 데이터를 조회합니다.
                </Typography>
            </div>

            <SelecteDateForm setCityId={setCityId} />
            <SelecteForm setCityId={setCityId} />

            {loading &&
                <AnimateSharedLayout>
                    <motion.ul layout initial={{ borderRadius: 25 }}>
                        {listDatas?.map((item, index) => (
                        <Item item={item} key={index} />
                        ))}
                    </motion.ul>
                </AnimateSharedLayout>
            }
        </Grid>
    )
}


export default Contents