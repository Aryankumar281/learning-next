


interface Product{
    id:number;
    title:string;
    price:number;
    category:string;
}

interface ProductResponse{
    products:Product[];
    total:number
}
async function getProducts():Promise<ProductResponse>{
    const response =  await fetch('https://dummyjson.com/products',{
        // cache:'no-store' //no-store will never cache ur response, always going to fetch fresh response
        // cache:'force-cache'
        cache:'reload' // fetches fresh response, update the cache
        //this u can use based on yor requirement
    })
    if(!response.ok){
        throw new Error('aFailed to fetch products')
    }
    return response.json();
}

async function SeverSideFetch() {
    const product =await getProducts();
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-4xl text-center">Server side data fetching</h1>
            <h3>
                {product.total} no of product
            </h3>
            {
                product?.products.map(item=>(
                    <div key={item.id} className="border flex flex-col items-center w-fit justify-center p-3 rounded-2xl m-2">
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default SeverSideFetch;