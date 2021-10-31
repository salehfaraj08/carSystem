const Worker = ({ workerData }) => {
    console.log(workerData);
    return (
        <>
            <p>{workerData.name}</p>
            <div style={{ height: '200px', width: '200px', background: `url(${workerData.avatar}) no-repeat center center/cover` }}></div>
        </>
    );
}
export default Worker;