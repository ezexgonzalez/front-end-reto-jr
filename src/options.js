import axios from "axios";
 export const optionsTime = [
    {
        option:"11:00 - 12:00 am"
    },
    {
        option:"1:00 - 2:00 pm"
    },
    {
        option:"2:00 - 3:00 pm"
    },
]


export const fetchCategoryOptions = (setState) =>{

    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data =>{
        setState(data.data.categories)
    });
    
}

