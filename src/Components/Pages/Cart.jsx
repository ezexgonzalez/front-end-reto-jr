import { Box,Text } from "@chakra-ui/react"



const Cart = () =>{
    
    return(
        <Box w="100%" display="flex" justifyContent="center" alignItems="center" h="100vh">
            <Text fontSize="25px" fontWeight="500" color="black">No hay nada en el carrito.</Text>
        </Box>
    )
}

export default Cart;