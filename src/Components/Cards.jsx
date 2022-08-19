import { Box, Grid } from "@chakra-ui/react"
import Card from "./Card";


const Cards = ({ dishes }) => {

    return (
        <Box display="flex" mt="30px" pb="80px" justifyContent="center">
            <Grid alignContent="center" gap={3} templateColumns="repeat(2, 1fr)">
                {
                    dishes ? dishes.map(data => (
                        <Card idMeal={data.idMeal} key={data.idMeal} name={data.strMeal} thumb={data.strMealThumb} />
                    )) : ""
                }
            </Grid>
        </Box>
    )

}

export default Cards;