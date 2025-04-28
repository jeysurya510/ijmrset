import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/IJMRSET-Logo.png';
import AnimatedText from '../utils/Animationtext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        Cookies.set('Admin_Token', response.data.token, { expires: 1 });
        console.log('Login Successful:', response.data);
        alert('Login Successful!');
        navigate('/adminpage/main');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5 w-full">
      {/* Header Section */}
      <div className="min-h-[200px] flex flex-col lg:flex-row items-center justify-between">
        <img src={Logo} alt="IJMRSET Logo" className="h-[100px] lg:h-[120px]" />
        <div className="text-center mx-auto">
          <p className="lg:text-[34px] text-[18px] font-Libre_Baskerville leading-relaxed font-medium">
            International Journal of Multidisciplinary Research in <br />
            <span className="font-Libre_Baskerville italic">
              <AnimatedText text={'Science, Engineering, and Technology'} />
            </span>
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full my-10 flex justify-center items-center">
        <div className="h-[400px] w-[600px] p-5 bg-white shadow-xl rounded-lg">
          <h1 className="text-center font-lora font-semibold text-xl">ADMIN LOGIN</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly items-center p-10 h-full w-full"
          >
            <TextField
              label="Admin Name"
              variant="outlined"
              className="w-[90%] font-Inter font-semibold"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              className="w-[90%] font-Inter font-semibold"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500">{error}</p>}

            <Button type="submit" variant="contained" className="w-[90%] mt-4">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
