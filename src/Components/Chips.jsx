import { Box } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import {IoMdTime} from "react-icons/io";
import {MdPlusOne,MdRestaurant} from "react-icons/md";
import {optionsTime, fetchCategoryOptions} from "../options";
import Chip from "./Chip";



const Chips = ({setCategory, category, time , setTime}) => {

    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() =>{
        fetchCategoryOptions(setCategoryOptions);
    },[]);

    return (
        <Box display="flex" p="15px 20px 15px 20px" gap="20px" justifyContent="center">
            <Chip text="Elige un horario de entrega" time={time} setTime={setTime} icon={IoMdTime} options={optionsTime} defaultState="11:00 - 12:00 am" />
            <Chip text="Elige un Servicio"  icon={MdRestaurant} options={categoryOptions} category={category} setCategory={setCategory} defaultState="Beef" />
            <Chip text="Platillos" icon={MdPlusOne} options={categoryOptions} defaultState="Platillos" />
        </Box>
    )
}

export default Chips;