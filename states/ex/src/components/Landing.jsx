import { useState } from "react";

function Landing({ name, prices }) {


    const [price, setPrice] = useState(0)
    let max = prices[0];

    function bigPrice(prices) {


        for (let index = 1; index < prices.length; index++) {
            if (prices[index] > max) {
                max = prices[index]
            }
        }
        setPrice(max);
    }

    if (price === 0) {
        bigPrice(prices);
    }



    return (
        <>
            <h1>Welcom {name}  {price} </h1>
        </>
    )



}




export default Landing;