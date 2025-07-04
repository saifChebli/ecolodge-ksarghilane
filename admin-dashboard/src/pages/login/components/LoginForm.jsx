import { useState } from "react"
import toast from "react-hot-toast"
import { api } from "../../../api";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

  const navigate = useNavigate()


  const [user , setUser] = useState({
    email : '',
    password : ''
  })

  const [error , setError] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name] : event.target.value
    })
  }


  const isValidForm = () => {
    return user.email.length > 0 && user.password.length > 0
  }

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(user.email)
  }

  const isValidPassword = () => {
    return user.password.length >= 6
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isValidForm()) {
      setError('Email and password are required.')
      return
    }
    if (!isValidEmail()) {
      setError('Email must be valid.')
      return
    }
    if (!isValidPassword()) {
      setError('Password must be at least 6 characters long.')
      return
    }
    try {
      setIsLoading(true)
      const response = await api.post(`/login`, user)
      console.log(response.data)
      if(response.status === 200){
        toast.success('Login successful')
        navigate('/')
        setUser({
          email : '',
          password : ''
        })
        setError('')
      }
    } catch (error) {
      toast.error('Error when try to login')
      console.error(error)
    }finally {
      setIsLoading(false)
    }
    }


  return (
    <div className="w-full max-w-md mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          {/* Error messages */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address{" "}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            value={user.email}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password{" "}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
            value={user.password}
            onChange={handleInputChange}
            className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
          />
        </div>
        <div className="flex item-center">
          <button
            type="submit"
            className="mt-8 w-full p-2 rounded cursor-pointer bg-black text-amber-50"
            disabled={isLoading}

          >
            {isLoading ? "Signing In..." :  "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
