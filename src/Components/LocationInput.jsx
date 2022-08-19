import { Icon, Box, Text } from "@chakra-ui/react";
import {MdLocationOn} from "react-icons/md";
import {BsFilter} from "react-icons/bs"


const LocationInput = () =>{

    return(
        <Box onClick={()=> alert("Select location...")} display="flex" bg="primary.400" p="15px 30px 15px 30px" color="primary.300" alignItems="center">
          <Icon color="secundary.200"  w="40px" h="40px" as={MdLocationOn}/>
          <Text color="gray" ml="15px" fontSize="22px">Select location...</Text>
          <Icon color="primary.300"  w="40px" h="40px" ml="auto" as={BsFilter}/>
        </Box>
    )
}


export default LocationInput;