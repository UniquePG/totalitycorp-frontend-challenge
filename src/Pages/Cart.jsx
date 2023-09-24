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


  // useEffect(() => {
  //   setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  // }, [cart]);

  return (
    <div className="mb-10">
      {cart &&  cart.length > 0 ? (
        <div className="flex flex-row justify-between max-[1400px] mx-auto gap-x-5 max-w-[90vw]" >
          {/* Cart Item  */}
          <div className="w-3/5 flex flex-col p-2">
            {cart.map((cartItem) => (
              <CartItem item={cartItem} key={cartItem.id}  />
            ))}
          </div>

          {/* Summary */}
          <div className="w-2/5 mt-5 flex flex-col max-h-[25rem] max-w-[50vw]">
            <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items: {totalItem()}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                {/* ${amount} */}
                ${getTotalPrice().toFixed(2)}
              </p>
            <Link to="/checkout">
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                CheckOut Now
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
