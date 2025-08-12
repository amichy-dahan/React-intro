import { useEffect, useState } from "react";
import './Ex1.css'

function Ex1() {
   const[image , setImage] = useState([])
   const[currentImg , setCurrentImg] = useState(0)


let obj ={
      images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
      currentImg: 0
    }
 
    useEffect(()=>{
      setImage(obj.images)
    },[])

    const shiftImageForward = () => {
         setCurrentImg((prev) =>
            prev === image.length-1? 0:prev+1
         )

    }
      const shiftImageBack = () => {
    setCurrentImg((prev) =>
      prev === 0 ? image.length - 1 : prev - 1
    );
  };

    return(
<> 

   {image.length > 0 && (
        <img src={image[currentImg]} alt="Fruit" />
      )}
  <div className="btns">
    <button onClick={shiftImageBack}>previos</button>
      <button onClick={shiftImageForward}>next</button>
  </div>
   

</>

    )
}

export default Ex1;