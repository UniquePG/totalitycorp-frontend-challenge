import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../Redux/UserSlice";

const UserProfileModal = ({ isOpen, onClose, user }) => {

    
    console.log("model ", user);
    const navigate = useNavigate();
    const dispatch = useDispatch();     
    // const [userDetail, setUserDetails] = useState({})

    const handleLogout = ()=> {        

        dispatch(LogoutUser())

        // setUserDetails({
        //     firstname: localStorage.getItem("firstname") ? localStorage.getItem("firstname") : "",
        //     lastname: localStorage.getItem("lastname") ? localStorage.getItem("lastname") :"",
        //     email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
        //     phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : "",
        //     password: localStorage.getItem("password") ? localStorage.getItem("password") : "",
        //     image: localStorage.getItem("image") ? localStorage.getItem("image") : "",
        //     isLoggedin : localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : false
        // })
        toast.success("Logout successfully")
        onClose()
        navigate("/")
    }
    
    if (!isOpen)  return null;
  return (
    // <div className="relative">
    
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-[50vw] min-h-fit h-[40vh] w-full">

            <div className="flex justify-between items-center gap-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">User Profile</h2>

              <button
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full  p-1 absolute top-0 right-0"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between items-center gap-10">
                <div className="flex items-center justify-center shadow-md w-[40%]">
                    <img src={user.previewImg} alt="profile image" className="w-full h-32 rounded-lg " />
                </div>

                <div className="flex flex-col w-[60%]">
                    <div className="mb-3 grid grid-cols-2">
                        <label className="text-gray-600 font-semibold">First Name:</label>
                        <p className="text-gray-800">{user.firstname}</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2">
                        <label className="text-gray-600 font-semibold">Last Name:</label>
                        <p className="text-gray-800">{user.lastname}</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2">
                        <label className="text-gray-600 font-semibold">Email:</label>
                        <p className="text-gray-800">{user.email}</p>
                    </div>
                    <div className="mb-4 grid grid-cols-2">
                        <label className="text-gray-600 font-semibold">Phone:</label>
                        <p className="text-gray-800">{user.phone}</p>
                    </div>
                {/* Add more user profile details here */}
                </div>
            </div>
            
            <button onClick={handleLogout}
                className="w-full text-center mt-3 font-bold text-xl py-2 px-2 bg-red-500 rounded-lg text-white hover:bg-red-600">
                Logout
            </button>
          </div>
        </div>

    // </div>
  );
};

export default UserProfileModal;
