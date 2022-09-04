import React, { useState, useEffect } from "react";
import axios from "axios";

const Third = () => {
    const [parts, setParts] = useState();
    let i = 0;

    useEffect(() => {
        const getProductsParts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/third');
                setParts(response.data);
            }
            catch (error) { console.log(error); }
        }
        getProductsParts();
    }, [])

    return (
        <div>
            <p>The list of product's spare parts</p>
            {!parts ? "Loading..." :
                parts.map(part =>
                    <div key={i++}>
                        <p>Part: {part.part}</p>
                        {part.item.map(item =>
                            <ul>
                                <li>{item}</li>
                            </ul>
                        )}
                    </div>
                )
            }
        </div>
    );
}

export default Third;