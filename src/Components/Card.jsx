import { Box, Text, Icon } from "@chakra-ui/react"
import { fetchDetailDish } from "../fetchDish";
import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";

const Card = ({ name, thumb, idMeal }) => {


    const [dishDetails, setDishDetails] = useState({});


    useEffect(() => {
        //Traemos los detalles del platillo
        fetchDetailDish(idMeal, setDishDetails);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const newTag = dishDetails.strTags ? dishDetails.strTags.split(",") : null;
    const price = idMeal ? new Intl.NumberFormat('ES-es', { style: 'currency', currency: 'MXN' }).format(Number(idMeal)) : "$ 0.00";

    return (
        <Box display="flex" bg="white" boxShadow="1px 5px 5px 0px rgba(150,150,150,0.75)" borderRadius="9px" w="210px" h="290px" flexDir="column">
            <Box backgroundImage={thumb} boxShadow="1px 5px 5px 0px rgba(150,150,150,0.75)" borderRadius="9px" backgroundSize="cover" backgroundPosition="center" w="100%" h="85%" display="flex" flexDir="column">
                <Box display="flex" justifyContent="right" p="6px 6px 0px 0px ">
                    <Text bg="white" fontWeight="700" borderRadius="5px" p="0px 5px" color="primary.200">{newTag ? newTag[0] : "Desconocido"}</Text>
                </Box>
                <Box borderRadius="9px" p="5px" boxShadow="0px -61px 26px -40px rgba(0,0,0,0.81) inset" mt="auto">
                    <Text color="white">{dishDetails.strArea}</Text>
                    <Text fontWeight="500" color="primary.200">{name ? name : ""}</Text>
                </Box>
            </Box>
            <Box w="100%" p="0px 5px" h="15%" display="flex" justifyContent="space-between" alignItems="center">
                <Icon color="primary.200" w="30px" h="30px" as={IoMdTime} />
                <Text fontWeight="600" fontSize="17px" color="black">$ {price}</Text>
            </Box>
        </Box>
    )

}

export default Card;