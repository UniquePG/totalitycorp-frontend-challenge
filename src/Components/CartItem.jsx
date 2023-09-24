import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, remove } from "../Redux/CartSlice.js";

const CartItem = ({ item  }) => {

  const dispatch = useDispatch();

  console.log("item",item);

  return (
    <div className="flex items-center p-1 justify-center mt-2 mb-2 mx-2 border-b-[3px] border-slate-500 md:mb-5 md:mt-5 md:p-5">
      <div className="flex p-1 gap-4 max-w-full items-center justify-between md:flex md:gap-10">

        <div className="w-[30vw] flex items-start min-w-[25vw] md:w-3 lg:w-3 md:min-w-[20%]">
          <img src={item.image} className="object-cover" />
        </div>

        <div className="w-[70vw] self-start space-y-3 ml-1 md:flex md:flex-col">
          <h1 className="text-lg text-slate-700 font-semibold md:text-3xl">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium md:line-clamp-3 line-clamp-2 md:text-xl ">{item.description}</p>
            <p className="text-green-600 font-bold text-lg flex gap-4 md:text-2xl" >
              <span>Price: </span> ${(item.price * item.quantity).toFixed(2)}
            </p>
          <div className="flex items-center justify-between flex-wrap md:justify-between ">
 
            <div className="flex justify-between items-center gap-4 border px-2 py-1 rounded-md shadow-[0_0_5px_black] md:px-4 md:mt-3">
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

            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-1" onClick={()=> dispatch(remove(item.id))}>
              <AiFillDelete />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
