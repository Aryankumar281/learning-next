async function getData(){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    return{
        stats:{
            users:1000
        }
    }
}

async function LoadingExample() {
    const data = await getData();
    return (
        <div className="p-4">
            <h1>loading example</h1>
            <p className="font-bold">Users : {data.stats.users}</p>
        </div>
    );
}

export default LoadingExample;