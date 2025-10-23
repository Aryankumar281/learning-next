
async function getProducts() {
    // stimulate a dummy error
    const shouldError = Math.random()>0.5
    if( shouldError) throw new Error('failed to fetch product')
    return[
        {
            id:1,name:"one"
        },{
            id:2,name:"two"
        },{
            id:3,name:"three"
        }
    ]
}

async function EroorExample() {
    const products = await getProducts();
    return (
        <div className="p-4">
            <h1>Product list</h1>
            <div className="grid gap-4">
                {
                    products.map(product=>(
                        <div key={product.id}>
                            <p>product : {product.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default EroorExample;