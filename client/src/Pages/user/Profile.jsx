import React,{useState,useEffect} from 'react'
import Header from '../../layouts/Header'
import UserMenu from './UserMenu'
import axios from 'axios';
import { useAuth } from '../../context/auth';


function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const { name, email, phone, password } = auth?.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setPassword(password);
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, {
        name,
        email,
        phone,
        password,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
         <Header />
      <div className='flex bg-black text-white font-Lato'>
        <UserMenu />
       
          
          <div className="flex flex-1 flex-col  mt-8 px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
             
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
                Your Profile
              </h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                    Your name
                  </label>
                  <div>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      autoComplete="off"
                      required
                      disabled
                      className="block w-full rounded-md py-1.5 px-2 bg-black border border-purple-600  text-white shadow-sm   placeholder:text-white outline-none  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Email address
                  </label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="off"
                      required
                      disabled
                      className="block w-full rounded-md py-1.5 px-2 bg-black border border-purple-600  text-white shadow-sm   placeholder:text-white outline-none  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                    Phone number
                  </label>
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      autoComplete="off"
                      required
                      disabled
                      className="block w-full rounded-md py-1.5 px-2 bg-black border border-purple-600  text-white shadow-sm   placeholder:text-white outline-none  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none  focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      

          

    </>
  )
}

export default Profile