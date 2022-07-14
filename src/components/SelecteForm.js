import React, { useState } from "react";
import { motion } from 'framer-motion'
import { Chip } from "@material-ui/core";

const citys = [ "서울", "경기", "강원", "제주"];
const seouls = [
    {label:'강남구', value:'1168000000'},
    {label:'강동구', value:'1174000000'},
    {label:'강북구', value:'1130500000'},
    {label:'강서구', value:'1150000000'},
    {label:'관악구', value:'1162000000'},
    {label:'광진구', value:'1121500000'},
    {label:'구로구', value:'1153000000'},
    {label:'금천구', value:'1154500000'},
    {label:'노원구', value:'1135000000'},
    {label:'도봉구', value:'1132000000'},
    {label:'동대문구', value:'1123000000'},
    {label:'동작구', value:'1159000000'},
    {label:'마포구', value:'1144000000'},
    {label:'서대문구', value:'1141000000'},
    {label:'서초구', value:'1165000000'},
    {label:'성동구', value:'1120000000'},
    {label:'성북구', value:'1129000000'},
    {label:'송파구', value:'1171000000'},
    {label:'양천구', value:'1147000000'},
    {label:'영등포구', value:'1156000000'},
    {label:'용산구', value:'1117000000'},
    {label:'은평구', value:'1138000000'},
    {label:'종로구', value:'1111000000'},
    {label:'중구', value:'1114000000'},
    {label:'중랑구', value:'1126000000'}
];
const gyeonggis = [
    {label:'가평군', value:'4182000000'},
    {label:'고양시', value:'4128100000'},
    {label:'과천시', value:'4129000000'},
    {label:'광명시', value:'4121000000'},
    {label:'광주시', value:'4161000000'},
    {label:'구리시', value:'4131000000'},
    {label:'군포시', value:'4141000000'},
    {label:'김포시', value:'4157000000'},
    {label:'남양주시', value:'4136000000'},
    {label:'동두천시', value:'4125000000'},
    {label:'부천시', value:'4119500000'},
    {label:'성남시', value:'4113100000'},
    {label:'수원시', value:'4111100000'},
    {label:'시흥시', value:'4139000000'},
    {label:'안산시', value:'4127100000'},
    {label:'안성시', value:'4155000000'},
    {label:'안양시', value:'4117100000'},
    {label:'양주시', value:'4163000000'},
    {label:'양평군', value:'4183000000'},
    {label:'여주시', value:'4167000000'},
    {label:'연천군', value:'4180000000'},
    {label:'오산시', value:'4137000000'},
    {label:'용인시', value:'4146100000'},
    {label:'의왕시', value:'4143000000'},
    {label:'의정부시', value:'4115000000'},
    {label:'이천시', value:'4150000000'},
    {label:'하남시', value:'4145000000'},
    {label:'파주시', value:'4148000000'},
    {label:'평택시', value:'4122000000'},
    {label:'포천시', value:'4165000000'},
    {label:'화성시', value:'4159000000'}
]
const gangwons = [
    {label:'강릉시', value:'4215000000'},
    {label:'고성군', value:'4282000000'},
    {label:'동해시', value:'4217000000'},
    {label:'삼척시', value:'4223000000'},
    {label:'속초시', value:'4221000000'},
    {label:'양구군', value:'4280000000'},
    {label:'양양군', value:'4283000000'},
    {label:'영월군', value:'4275000000'},
    {label:'원주시', value:'4213000000'},
    {label:'인제군', value:'4281000000'},
    {label:'정선군', value:'4277000000'},
    {label:'철원군', value:'4278000000'},
    {label:'춘천시', value:'4211000000'},
    {label:'태백시', value:'4219000000'},
    {label:'평창군', value:'4276000000'},
    {label:'홍천군', value:'4272000000'},
    {label:'화천군', value:'4279000000'},
    {label:'횡성군', value:'4273000000'}
]
const jejus = [
    {label:'서귀포시', value:'5013000000'},
    {label:'제주시', value:'5011000000'}
]


function SelecteForm({setCityId}) {
    const [city, setCity] = useState("");
    const [zone, setZone] = useState({});
    const handleCity = (item) => {
        setCity(item)
    }
    const handleZone = (item) => {
        setCityId(item.value)
        setZone(item)
    }

    return (
    <>        
        <motion.div className="selecte-chip">
            <div className="flex width-s margin-bottom-s">
                {citys.map((item, index) => {
                    return (
                    <motion.div
                        className="chip-wrap"
                        animate={{ scale: 1.3, opacity:1 }}
                        transition={{ duration: index === 0 ? 0.5 : 0.5 * index }}
                        key={item}
                    > 
                        <Chip 
                            label={item}
                            size='medium'
                            style={{
                                background: item === city ? '#282828' : '#a6a6a6',
                                color:'#fefefe',
                                cursor: 'pointer', 
                                marginRight: '20px',
                                fontSize:'11px'
                            }}
                            onClick={() => handleCity(item)}
                        />
                    </motion.div>
                    )
                })}
            </div>
            
            {
                city === "서울" ?
                    <div className="flex-wrap margin-bottom-s">
                        {seouls.map((item, index) => {
                            return (
                                <motion.div
                                    className="chip-wrap"
                                    animate={{ scale: 1.3, opacity:1 }}
                                    key={item.label}
                                > 
                                    <Chip 
                                        label={item.label}
                                        size='medium'
                                        style={{
                                            background: item === zone ? '#282828' : '#a6a6a6',
                                            color:'#fefefe',
                                            cursor: 'pointer', 
                                            marginRight: '25px',
                                            marginBottom: '15px',
                                            fontSize:'11px'
                                        }}
                                        onClick={() => handleZone(item)}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                : city === "경기" ? 
                    <div className="flex-wrap margin-bottom-s">
                        {gyeonggis.map((item, index) => {
                            return (
                                <motion.div
                                    className="chip-wrap"
                                    animate={{ scale: 1.3, opacity:1 }}
                                    key={item.label}
                                > 
                                    <Chip 
                                        label={item.label}
                                        size='medium'
                                        style={{
                                            background: item === zone ? '#282828' : '#a6a6a6',
                                            color:'#fefefe',
                                            cursor: 'pointer', 
                                            marginRight: '25px',
                                            marginBottom: '15px',
                                            fontSize:'11px'
                                        }}
                                        onClick={() => handleZone(item)}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                : city === "강원" ? 
                    <div className="flex-wrap margin-bottom-s">
                        {gangwons.map((item, index) => {
                            return (
                                <motion.div
                                    className="chip-wrap"
                                    animate={{ scale: 1.3, opacity:1 }}
                                    key={item.label}
                                > 
                                    <Chip 
                                        label={item.label}
                                        size='medium'
                                        style={{
                                            background: item === zone ? '#282828' : '#a6a6a6',
                                            color:'#fefefe',
                                            cursor: 'pointer', 
                                            marginRight: '25px',
                                            marginBottom: '15px',
                                            fontSize:'11px'
                                        }}
                                        onClick={() => handleZone(item)}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                : city === "제주" && 
                    <div className="flex width-xs margin-bottom-s">
                        {jejus.map((item, index) => {
                            return (
                                <motion.div
                                    className="chip-wrap"
                                    animate={{ scale: 1.3, opacity:1 }}
                                    key={item.label}
                                > 
                                    <Chip 
                                        label={item.label}
                                        size='medium'
                                        style={{
                                            background: item === zone ? '#282828' : '#a6a6a6',
                                            color:'#fefefe',
                                            cursor: 'pointer', 
                                            marginRight: '25px',
                                            marginBottom: '15px',
                                            fontSize:'11px'
                                        }}
                                        onClick={() => handleZone(item)}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
            }
        </motion.div>
    </>
    )
}

export default SelecteForm