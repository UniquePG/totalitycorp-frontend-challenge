import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddressForm from "../Components/AddressForm";
import PaymentForm from "../Components/PaymentForm";

const CheckoutForm = () => {

    // let cart = useSelector((state)=> state?.cart)

    // const dispatch = useDispatch()


  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <AddressForm />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <PaymentForm />
          </div>
        </div>
        <div className="mt-8">
            <Link to="/success">
          <button  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
            Place Order
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
