import Link from "next/link";

function Products(){
    const products = [
        {
            id:'1',name:"Mobile",price:500
        },
        {
            id:'2',name:"laptop",price:5000
        },
        {
            id:'3',name:"watch",price:100
        },
    ]
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4"> Products</h1>
            <div className="grid gap-4">
                {
                    products.map(product=>(
                        <div key={product.id} className="border p-4 rounded flex items-center justify-between">
                            <div className="mb-2">
                                <h2>{product.name}</h2>
                                <p>${product.price}</p>
                            </div>
                            <Link href={`/products/${product.id}`} className="p-2 bg-blue-400 m rounded">
                                View Details
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Products;