import Item from './Item'
import Landing from './Landing';

function Home(props) {


let newPrices =[]
  function Discount(props) {
 
    if (props.shouldDiscount) {
       newPrices = props.store.map((item) => {
        return (
          {
            name: item.item,
            price: item.price *(1- item.discount )
          }
        )

      })
    }
    
  }

  Discount(props)

  return (
    <>
      <h1>welcome to the store</h1>
      <div>
        {newPrices.map((item) => (
          <Item name={item.name} price={item.price} />
        ))}


      </div>
    </>
  )
}


export default Home;