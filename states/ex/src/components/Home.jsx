import Item from './Item'
import Landing from './Landing';

function Home(props) {

console.log(props)

    return (
        <>
            <h1>welcome to the store</h1>
            <div>
              {props.store.map((item) =>(
                <Item  name ={item.item}  price ={item.price}/>
              ))}

             
            </div>
        </>
    )
}


export default Home;