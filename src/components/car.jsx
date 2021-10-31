const Car = ({ carData, idWorker, matching }) => {

    return (
        <>
            {/* {carData.rentDetails.workerId === idWorker ? return (
            <p>{carData.maunfacture}</p>
            <div style={{ height: '200px', width: '200px', background: `url(https://source.unsplash.com/200x200/?cars,${carData.maunfacture}) no-repeat center center/cover` }}></div>):<div></div>} */}
            {carData.rentDetails.workerId === idWorker ? <>{() => matching(true)}
                <p>{carData.maunfacture}</p>
                <div style={{ height: '200px', width: '200px', background: `url(https://source.unsplash.com/200x200/?cars,${carData.maunfacture}) no-repeat center center/cover` }}></div>
            </> : ''}
        </>

    );
}
export default Car;