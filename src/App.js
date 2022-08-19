import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import theme from './themeConfig';
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';
import User from './Components/Pages/User';
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";


function App() {
  //Estado del tiempo
  const [timeState, setTimeState] = useState("11:00 - 12:00 am");
  //Estado de la categoria
  const [categoryState, setCategoryState] = useState("Beef");
  //Estado del dia
  const [daystate, setDayState] = useState({ day: "Jue", num: "02" });

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home time={timeState}
          setTime={setTimeState}
          day={daystate}
          setDay={setDayState}
          category={categoryState}
          setCategory={setCategoryState}
        />}
        />
        <Route path="user" element={<User time={timeState} category={categoryState} day={daystate} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
