import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const  cart  = useSelector((state) => state?.cart);
  // const [amount, setAmount] = useState(0);

  // const dispatch = useDispatch();

  console.log("cart,....", cart);
  function getTotalPrice(){
    return cart.reduce((acc, curr)=> acc + curr.price * curr.quantity,0)
  }

  function totalItem(){
    // find sum of quantity field of all items in the cart
    return  cart.reduce((acc ,curr)=> acc + curr.quantity ,0 )

  }

  return (
    <div className="mb-10">
      {cart &&  cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between mx-auto gap-x-5 max-w-[90vw] w-full md:max-w-[90vw]" >
          {/* Cart Item  */}
          <div className="w-full flex flex-col p-1  md:w-[60%] ">
            {cart.map((cartItem) => (
              <CartItem item={cartItem} key={cartItem.id}  />
            ))}
          </div>

          {/* Summary */}
          <div className="w-full md:w-[40%] flex flex-col max-h-[25rem] max-w-[100%] justify-center items-center md:max-w-[40%] ">
            <div className="flex flex-col h-[100%] w-full justify-between p-2 gap-5 my-6 items-center md:w-[100%] md:min-h-[20rem] md:justify-center ">

              <div className="flex flex-col gap-5 w-[100vw] items-start m-auto md:w-[70%] md:items-start md:justify-start md:m-1">
                <div className="font-semibold text-2xl text-green-800 ">
                  Your Cart
                </div>
                <div className="font-semibold text-6xl text-green-700  -mt-5">
                  Summary
                </div>
                <p className="text-2xl">
                  <span className="text-gray-700 font-semibold text-2xl">
                    Total Items: {totalItem()}
                  </span>
                </p>
              </div>

            </div>

            <div className="flex flex-col items-start m-auto w-full gap-3 md:w-[70%] md:m-0 md:items-start">
              <p className="text-2xl font-bold flex gap-6 ">
                <span className="text-gray-700 font-semibold text-2xl">
                  Total Amount:
                </span>{" "}
                ${getTotalPrice().toFixed(2)}
              </p>
            <Link to="/checkout">
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-2xl px-6">
                Checkout Now
              </button>
            </Link>
            </div>
          </div>

        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to="/">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
              shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
