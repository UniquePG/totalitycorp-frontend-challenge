import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const   cart   = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  console.log("fdfdd ", product);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const addToCart = () => {
    if(isLoggedIn){

      dispatch(add(product));
      toast.success("Item Added To Cart");
      console.log("after adding item: ", cart);

    }else{
      toast.error("Please signup yourself first")
      navigate("/signup")
    }
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-2 md:ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] max-h-[30rem]">
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-center truncate mt-1 w-80 md:w-60">
            {product.title}
          </h1>
        </div>
        <div>
          <p className="w-80 md:w-60 text-gray-400 font-normal text-xl md:text-[10px] text-left md:leading-4">
            {product.description.split(" ").slice(0, 8).join(" ") + "..."}
          </p>
        </div>

        <div>
          <p className="w-80 md:w-60 text-gray-400 font-semibold text-xl md:text-[10px] text-left lg:text-[15px]">
            <span className="text-green-500">Rating: </span> {product?.rating?.rate}
          </p>
        </div>

        <div className="h-[180px]">
          <img
            src={product.image}
            alt="Product Image"
            className="h-full w-full"
          />
        </div>
        <div className="flex justify-between items-center w-full mt-5">
          <p className="text-green-600 font-semibold text-xl" >${product.price}</p>
          {cart.some((p) => p.id == product.id) ? (
            <button
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-4 py-2 rounded-full text-[14px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-4 py-2 md:py-1 lg:py-1 md:px-2 lg:px-2 rounded-full text-[14px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
    </div>
  );
};

export default Product;
