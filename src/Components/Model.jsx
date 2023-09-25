import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../Redux/UserSlice";

const UserProfileModal = ({ isOpen, onClose, user }) => {

    
    console.log("model ", user);
    const navigate = useNavigate();
    const dispatch = useDispatch();     

    const handleLogout = ()=> {        

        dispatch(LogoutUser())
        toast.success("Logout successfully")
        onClose()
        navigate("/")
    }
    
    if (!isOpen)  return null;
  return (
    
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-[100vw] md:max-w-[50vw] md:w-full md:h-[45vh] min-h-fit h-[58vh] w-[90vw]">

            <div className="flex justify-evenly items-end md:items-center relative">
            <h2 className="text-2xl font-semibold mb-4 text-center ">User Profile</h2>

              <button
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full  p-1 absolute top-0 right-0"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
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

            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-7 md:gap-5">

                <div className="flex items-center justify-center shadow-md w-[80%] md:w-[40%] lg:w-[40%]">
                    <img src={user.previewImg} alt="profile image" className="w-full h-32 rounded-lg " />
                </div>
                
                <div className="flex flex-col w-[100%] justify-center items-center md:w-[60%] md:text-lg">

                    <div className="mb-3 grid grid-cols-2 gap-[22vw] md:gap-0 lg:gap-24 ">
                        <label className="text-gray-600 font-semibold text-xl text-left">First Name:</label>
                        <p className="text-gray-800 text-right text-xl capitalize">{user.firstname}</p>
                    </div>

                    <div className="mb-3 grid grid-cols-2 gap-[22vw] md:gap-0 lg:gap-28 ">
                        <label className="text-gray-600 font-semibold text-xl text-left">Last Name:</label>
                        <p className="text-gray-800 text-right text-xl capitalize">{user.lastname}</p>
                    </div>

                    <div className="mb-3 grid grid-cols-2 gap-2 md:gap-0 lg:gap-0 ">
                        <label className="text-gray-600 font-semibold text-xl text-left">Email:</label>
                        <p className="text-gray-800 flex flex-wrap text-right text-xl ">{user.email}</p>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-[27vw] md:gap-0 lg:gap-28 ">
                        <label className="text-gray-600 font-semibold text-xl text-left">Phone:</label>
                        <p className="text-gray-800 text-right text-xl">{user.phone}</p>
                    </div>

                </div>


            </div>
            
            <button onClick={handleLogout}
                className="w-full text-center mt-3 font-bold text-xl py-2 px-2 bg-red-500 rounded-lg text-white hover:bg-red-600">
                Logout
            </button>
          </div>
        </div>

  );
};

export default UserProfileModal;
