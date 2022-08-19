import { Box, Text } from "@chakra-ui/react";
import days from "../daysData";

export const Day = ({ day, num, active, setActve }) => {
    return (
        <Box display="flex" alignItems="center" flexDir="column">
            <Text fontWeight="500">{day}</Text>
            <Text
                w="30px"
                h="30px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                bg={active === num ? "primary.100" : "primary.400"}
                color={active === num ? "primary.400" : "primary.300"}
                onClick={() => setActve({ day: day, num: num })}
            >
                {num}
            </Text>
        </Box>
    )
}

const Calendar = ({ day, setDay }) => {

    return (
        <Box display="flex" p="10px 0px 10px 0px" justifyContent="center" gap="50px" bg="primary.400" color="primary.300">
            {
                days.map((data, i) => (
                    <Day key={i} day={data.day} num={data.num} setActve={setDay} active={day.num} />
                ))
            }
        </Box>
    )

}


export default Calendar;