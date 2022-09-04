import React, { useState, useEffect } from "react";
import axios from "axios";

const First = () => {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const getQuantity = async () => {
            try {
                const response = await axios.get('http://localhost:5000/first');
                setQuantity(response.data);
            }
            catch (error) { console.log(error); }
        }
        getQuantity();
    }, [])

    return (
        <div>
            <p>The quantity of products: {!quantity ? "Loading..." : quantity}</p>
        </div>
    );
}

export default First;