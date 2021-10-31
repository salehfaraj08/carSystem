import "./App.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './components/header'
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./components/displayWorkers";
import Home from "./components/Home";
import Match from "./components/match";
function App() {
  const [workers, setWorkers] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getWorkers();
    getCars();
  }, []);


  const getWorkers = async () => {
    const response = await axios.get(`https://617bb9d0d842cf001711c018.mockapi.io/clients`)
    console.log(response.data)
    setWorkers(response.data)
  };
  const getCars = async () => {
    const response = await axios.get(`https://617bb9d0d842cf001711c018.mockapi.io/cars`)
    console.log(response.data)
    setCars(response.data);
  };

  const matchingCar = async (res) => {
    let result = await res;
    console.log('ressss', result);    
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users DataWorkers={workers} DataCars={cars} />
        </Route>
        <Route path="/match" >
          <Match DataWorkers={workers} DataCars={cars} matchingCarCall={matchingCar} />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
