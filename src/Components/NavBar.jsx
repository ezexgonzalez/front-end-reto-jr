import { Box, Icon } from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {

    const sampleLocation = useLocation();

    return (
        <Box position="fixed" w="100%" h="70px" bg="#b6b6b6" display="flex" alignItems="center" gap="140px" justifyContent="center" bottom="0">
            <Link to="cart">
                <Icon transition="300ms" color={sampleLocation.pathname === "/cart" ? "primary.100" : "gray.300"} w={sampleLocation.pathname === "/cart" ? "50px" : "40px"} h={sampleLocation.pathname === "/cart" ? "50px" : "40px"} as={AiOutlineShoppingCart} />
            </Link>
            <Link to="/">
                <Icon transition="300ms" color={sampleLocation.pathname === "/" ? "primary.100" : "gray.300"} w={sampleLocation.pathname === "/" ? "50px" : "40px"} h={sampleLocation.pathname === "/" ? "50px" : "40px"} as={RiHomeLine} />
            </Link>
            <Link to="user">
                <Icon transition="300ms" color={sampleLocation.pathname === "/user" ? "primary.100" : "gray.300"} w={sampleLocation.pathname === "/user" ? "50px" : "40px"} h={sampleLocation.pathname === "/user" ? "50px" : "40px"} as={BiUserCircle} />
            </Link>
        </Box>
    )

}


export default NavBar;