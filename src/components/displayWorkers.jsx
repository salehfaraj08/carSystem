import { useState } from "react";
import Worker from "./worker";
import Car from "./car";


const Users = ({ DataWorkers, DataCars }) => {
  const [isClick, setIsclick] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [seeId, setSeeId] = useState('');
  const seeClick = (id) => {
    let click = !isClick;
    let see = seeId;
    if (see !== '') {
      if (see === id) {
        console.log(id);
        setIsclick(click);
        console.log(isClick);
        setSeeId('');
      }
    }
    else {
      console.log(id);
      setIsclick(click);
      console.log(isClick);
      setSeeId(id);
    }
  }

  const isMatchedCar = (match) => {
    setIsMatched(match);
  }

  return (
    <div className='container'>
      {DataWorkers ? (DataWorkers.map((worker, index) => {
        return (
          <div style={isClick ? { height: '90vh', justifyContent: 'flex-start' } : {}} key={index} className='worker'>
            <Worker key={worker.id} workerData={worker} />
            <input className='see' type="button" value="see matched car" onClick={() => seeClick(worker.id)} />
            {isClick && DataCars && worker.id === seeId ? (DataCars.map(car => {
              return <div>{Object.keys(car.rentDetails).length !== 0 && car.rentDetails ?
                <Car key={car.id} carData={car} idWorker={seeId} matching={isMatchedCar}/> : <div></div>}
              </div>
            }))
              : (<div></div>)}{
              isClick && isMatched ? '' : isClick && worker.id === seeId ? <div>there is no car matched for these worker yet</div> : <div></div>
            }
          </div>
        );
      }))
        : (<div>loading....</div>)}
    </div>
  );

};

export default Users;
