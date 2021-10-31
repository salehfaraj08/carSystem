import axios from "axios";
import { useState } from "react";
const Match = ({ matchingCarCall }) => {
    const [idCar, setIdCar] = useState('');
    const [idWorker, setIdWorker] = useState('');
    const idCarHandler = (e) => {
        setIdCar(e.target.value);
    }
    const idWorkerHandler = (e) => {
        setIdWorker(e.target.value);
    }
    const matchCar = async () => {
        console.log(idWorker);
        const response = await axios.get(`https://617bb9d0d842cf001711c018.mockapi.io/clients/${idWorker}/members`);
        console.log(response.data);
        return response.data;
    }

    return <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'5vh'}}>
        <input className='inpt' value={idCar} type="text" placeholder='enter id car to match' onChange={idCarHandler} />
        <input className='inpt' value={idWorker} type="text" placeholder='enter id worker to match' onChange={idWorkerHandler} />
        <input className='inpt' type="button" value="submit to match" onClick={()=>matchingCarCall(matchCar())} />
    </div>;
}

export default Match;