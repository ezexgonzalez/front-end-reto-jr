import { Menu, MenuButton, MenuList, MenuItem, Button, Icon, Text } from "@chakra-ui/react";


const Chip = ({ icon, text, options, setCategory, category, time , setTime }) => {

    const buttonTitle = category ? category : time ? time : "Platillos"

    const changeCategory = (option) =>{
        if(setCategory){
            setCategory(option);
        }else if(setTime){
            setTime(option)
        }
    }

    return (
        <Menu>
            <MenuButton bg="primary.400"  onClick={text === "Platillos" ? () => alert("Platillos") : null} color="primary.300" _hover={{ bg: "primary.400" }} borderRadius="15px" p="8px" _active={{ bg: "primary.400" }} as={Button} leftIcon={<Icon w="30px" color="primary.200" h="30px" as={icon} />}>
                <Text fontSize="19px" fontWeight="500">{buttonTitle}</Text>
            </MenuButton>
            { text !== "Platillos" ?
                <MenuList bg="primary.400" color="black" p="10px 80px 0px 20px" >
                    <Text display="flex" alignItems="center" mb="15px" fontSize="22px"><Icon color="primary.200" mr="20px" w="30px" h="30px" as={icon} />{text}</Text>
                    {
                        options && options.length > 0 ? options.map(data => (
                            <MenuItem key={data.option ? data.option : data.idCategory} onClick={() => changeCategory(data.option ? data.option : data.strCategory)} boxShadow={buttonTitle === data.option || buttonTitle === data.strCategory ? "1px 5px 5px 0px rgba(150,150,150,0.75)" : "none"} pl="50px" mb="10px" border="2px solid" borderColor="gray.300" fontSize="17px" fontWeight="500" borderRadius="7px" >{data.option ? data.option : data.strCategory}</MenuItem>
                        )) : ""
                    }

                </MenuList>
                : ""
            }
        </Menu>
    )
}

export default Chip;