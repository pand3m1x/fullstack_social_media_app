import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value // [] makes it dynamic instead of listing each input individually
      })
  }

  return(
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input value={formData.username} onChange={handleChange} type="text" id="username" name="username" required/>
        <label htmlFor="email">Email</label>
        <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input value={formData.password} onChange={handleChange} type="password" id="password" name="password" required />
        <button type="submit">Register</button>

      </form>
    </div>
  )

}

export default Register;