import React, {useEffect,useState}  from "react";
import { Link } from "react-router-dom";
import "./style.css"
const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    },[])
    console.log({products});
    const getProducts = async () =>{
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading...</h2>
    }
    return(
        <div >
            <h2>List of Products</h2>
            <div className="product">
            {products.map(item=>(
                <div key={item.id}>
                    <img src={item.thumbnail} placeholder="Picture"></img>
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                    <h5>{item.discountPercentage}</h5>
                </div>
            ))}
            </div>
        </div>
    )
}
export default ProductsDetails;