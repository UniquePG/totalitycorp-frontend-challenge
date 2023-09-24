import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, remove } from "../Redux/CartSlice.js";

const CartItem = ({ item  }) => {

  const dispatch = useDispatch();

  // const [itemCount, setItemCount] = useState(1)
  // const [price, setPrice] = useState(item.price)

  // const cart = useSelector((state)=> state?.cart)

  // const handleCount = (e)=> {

  //   if(e.target.name === "increment"){
  //     setItemCount((prev)=> prev+ 1 )
  //     setPrice((prev)=> prev+item.price)

  //     // priceInc(price)
  //   }
  //   else{
  //     setItemCount((prev)=> Math.max(1, prev-1))
  //     setPrice((prev)=> Math.max(item.price, prev-item.price))
  //     // priceDec(price)
  //   }

  // }

    // const fixedPrice = price.toFixed(2)

    // handlePrice(fixedPrice)

  // const removeFromCart = () => {
  //   dispatch(remove(item.id));
  //   toast.error("Item Removed From Cart");
  // };

  console.log("item",item);

  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500  ">
      <div className="flex flex-col p-3 gap-5 items-center md:flex">
        <div className="w-[30%] ">
          <img src={item.image} className="object-cover" />
        </div>
        <div className="w-[80%] self-start space-y-5 ml-5">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium md:line-clamp-3 line-clamp-2">{item.description}</p>
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-green-600 font-bold text-lg flex justify-between items-end" >
              <span>Price: </span> ${(item.price * item.quantity).toFixed(2)}
            </p>

            <div className="flex justify-between items-center gap-4 border px-2 py-1 rounded-md shadow-[0_0_5px_black]">
              <button 
                onClick={()=> dispatch(decreaseQuantity(item.id))}
                name="decrement" 
                className="text-xl font-bold text-center"
                
                > - </button>

              <span className="px-3  text-center text-xl"> {item.quantity} </span>

              <button 
                onClick={()=> dispatch(increaseQuantity(item.id))}
                name="increment" 
                className="text-xl font-bold"> + </button>
            </div>

            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={()=> dispatch(remove(item.id))}>
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
