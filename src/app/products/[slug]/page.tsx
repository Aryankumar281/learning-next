
async function ProductDetail({params}:{params : Promise<{slug:string}>}){
    const {slug}=await params;
    console.log(slug,"slug");
    
    return (
        <h1>Product Details Page</h1>
    )
}
export default ProductDetail;