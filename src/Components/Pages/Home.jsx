import { Box } from "@chakra-ui/react";
import LocationInput from "../LocationInput";
import Calendar from "../Calendar";
import Chips from "../Chips";
import { useEffect, useState } from "react";
import { fetchDish } from "../../fetchDish";
import Cards from "../Cards";


const Home = ({ time, setTime, day, setDay, category, setCategory }) => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetchDish(category, setDishes);
    }, [category]);

    return (
        <Box w="100%" h="100vh" display="flex" flexDir="column">
            <LocationInput />
            <Calendar day={day} setDay={setDay} />
            <Chips category={category} time={time} setTime={setTime} setCategory={setCategory} />
            <Cards dishes={dishes} />
        </Box>
    )
}


export default Home;