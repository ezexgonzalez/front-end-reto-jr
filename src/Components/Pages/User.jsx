import { Box, Text } from "@chakra-ui/react"

const User = ({ time, category, day }) => {

    return (
        <Box w="100%" h="100vh" color="black" fontWeight="600" gap="10px" fontSize="30px" display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <label>Periodo</label>
            <Text color="primary.100">{time}</Text>
            <label>Dia:</label>
            <Text color="primary.100">{day.day} {day.num}</Text>
            <label>Categoria:</label>
            <Text color="primary.100">{category}</Text>
        </Box>
    )
}

export default User;