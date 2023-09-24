import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../Redux/UserSlice';

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })


    // const [isValid, setIsValid] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const firstname = localStorage.getItem("firstname")
    // console.log("firstname ",firstname);

    function handleForm(e) {
        const {name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    
    function handleSubmit(e) {
      e.preventDefault();

      if(!values.email || !values.password){
        toast.error("Please provide all details")
      }

      if(values.email !== email){
        toast.error("user not found with this email")
        return
      }

      if(values.password === password){
        // setIsValid(true)

        dispatch(LoginForm(true))
        
        navigate("/")

      }else{
        toast.error("Wrong password")
        return
      }


    }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            value={values.email}
            onChange={handleForm}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name='password'
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            value={values.password}
            onChange={handleForm}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full"
        >
          Log In
        </button>

      </form>
        <div className='text-center mt-2 flex items-center justify-center gap-2'>
          {"Don't have an account? "}<Link to="/signup"><span className='text-cyan-500 font-semibold'>Signup</span></Link>
        </div>
    </div>
  </div>
  )
}

export default Login