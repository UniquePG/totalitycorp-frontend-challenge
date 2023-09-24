import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { SignupForm } from '../Redux/UserSlice';
import { Link, useNavigate } from "react-router-dom"
const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [formValue, setFormValue] = useState({
        firstname: "",
        lastname: "",
        email:"",
        phone: "",
        password:"",
        previewImg: ""
    })

    function handleForm(e){
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }


    function handleProfilePicture(e) {
      e.preventDefault()
      //get the file
    const file = e.target.files[0];

    if(file){
      // file reader object
      const fileReader = new FileReader()
      // read file
      fileReader.readAsDataURL(file);
      // load event
      fileReader.addEventListener("load", function() {
        //set image state
        // console.log(this.result);
        setFormValue({
          ...formValue,
          previewImg : (this.result),
        });

      });

    }else{
      toast.error("Image not upload")
    }

    }

    function handleSubmit(e) {
      e.preventDefault()

      dispatch(SignupForm(formValue))

      console.log("form ",formValue);

      // set default values
      setFormValue({
        firstname: "",
        lastname: "",
        email:"",
        phone: "",
        password:"",
        previewImg: ""
    })

      navigate("/login")
    }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 md:p-8 lg:p-8 h-fit md:min-h-fit rounded-lg shadow-md  min-w-[80vw] max-w-md my-4 ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='md:flex-row flex flex-col'>
            
            <div className='w-[100%] lg:w-[30%] flex items-start justify-center mb-4'>
                      <label htmlFor="profilePicture" className=" flex flex-col items-center text-gray-700 space-y-5 text-sm font-bold">
                        {
                          formValue?.previewImg ? (
                              <img src={formValue.previewImg} alt="profile img" className='w-24 h-24 lg:w-36 md:w-36 lg:h-36 md:h-36 rounded-full' />
                          ) : (
                            <BsPersonCircle className='w-28 h-28 lg:w-36 md:w-36 lg:h-36 md:h-36 rounded-full text-gray-400'  />
                          )
                        }
                        <span className='text-lg text-center'>Select profile image</span>
                      </label>
                      <input
                        type="file"
                        id="profilePicture"
                        accept=".jpg, .jpeg, .png, .svg"
                        className="w-full hidden border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        onChange={handleProfilePicture}
                      />
            </div>

            <div className='flex flex-col w-[100%] lg:w-[70%] md:w-[70%] '>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name='firstname'
                        className="w-full border rounded py-1 px-3 text-gray-700 focus:outline-none "
                        value={formValue.firstname}
                        onChange={handleForm}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name='lastname'
                        className="w-full border rounded py-1 px-3 text-gray-700 focus:outline-none "
                        value={formValue.lastname}
                        onChange={handleForm}
                        required
                      />
                    </div>

                  </div>

                  <div className='grid grid-cols-1 gap-4'>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name='email'
                          className="w-full border rounded py-1 px-3 text-gray-700 focus:outline-none "
                          value={formValue.email}
                          onChange={handleForm}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name='phone'
                          className="w-full border rounded py-1 px-3 text-gray-700 focus:outline-none"
                          value={formValue.phone}
                          onChange={handleForm}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name='password'
                          className="w-full border rounded py-1 px-3 text-gray-700 focus:outline-none "
                          value={formValue.password}
                          onChange={handleForm}
                          required
                        />
                      </div>


                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-md mt-6 w-full"
                  >
                    Sign Up
                  </button>
                  <div className='text-center mt-2 flex items-center justify-center gap-2'>
                    Already have an account? <Link to="/login"><span className='text-cyan-500 font-semibold'>Login</span></Link>
                  </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup