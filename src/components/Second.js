import React, { useState, useEffect } from "react";
import axios from "axios";

const Second = () => {
    const [products, setProducts] = useState();
    let i = 0;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/second');
                setProducts(response.data);
            }
            catch (error) { console.log(error); }
        }
        getProducts();
    }, [])

    return (
        <div>
            <p>The names of the products</p>
            {!products ? "Loading..." :
                <ul>
                    {products.map(product => <li key={i++}>{product}</li>)}
                </ul>
            }
        </div>
    );
}

export default Second;