import axios from "axios";

export const fetchDish = (state,setState) => {

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${state}`)
    .then(data =>{
        setState(data.data.meals);
    })
}


export const fetchDetailDish = (id,setState) => {

    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(data =>{
        setState(data.data.meals[0]);
    })
    
} 