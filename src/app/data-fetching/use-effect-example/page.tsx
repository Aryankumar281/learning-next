'use client'

import { useEffect, useState } from "react";

interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
}
function UseEffectExample(){
    const [isLoading, setIsLoading]= useState(false);
    const [data,setData]=useState([]);

    async function fetchListOfProducts(){
        try{
            setIsLoading(true);
            const res = await fetch('https://dummyjson.com/products')
            const result =  await res.json();
            if(result){
                setIsLoading(false)
                setData(result?.products);
            }
        }catch(e){
            console.log(e)
        }finally{
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetchListOfProducts();
    },[])

    if(isLoading) return <h1>Loading..</h1>
    return (
        <div>
            <h1 className="text-center text-4xl">Use effect example</h1>
            <div className="flex gap-2 flex-wrap">
                {data.map((product:Product)=>(
                    <div key={product.id} className="border w-full text-center max-w-[100px] ">
                        <h4>{product.id}</h4>
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                        <h3>{product.category}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UseEffectExample;