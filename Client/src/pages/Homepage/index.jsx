import { Link, Navigate, useNavigate } from 'react-router-dom';
import "../Homepage/index.css";
import { supabase } from '../../utils/supabaseConfig';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';



function HomePage() {
    const Navigate = useNavigate(); 
    const { session, setSession } = useContext(AuthContext);
 
  async function signOut() {
    
    localStorage.removeItem('sb-akwtbbtmassyfnuyhlib-auth-token');
    
      // Redirect the user to the homepage after logout
        // Clear the authentication state
    
    // Redirect the user to the login page
    Navigate('/');
  }
  


  return (
   <div id="boyo"> <div id='callous' className="min-h-screen min-w-screen bg-gray-100 flex flex-col items-center justify-center">
     
      <nav className="w-full max-w-2xl bg-white shadow-md"> 
      <div><h1 className="text-3xl font-bold bg-blue-500  mb-6 text-center">  Welcome to Ken`s Gadgets</h1></div>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
         
          <Link to="/products" id='prod' className="text-3xl font-bold">
            Products
          </Link> 
          <Link to="/about" id='about' className="text-3xl font-bold">
            About
          </Link>
         
        </div>
      </nav>
      <main className="w-full max-w-2xl mt-10 flex flex-col items-center justify-center">
     
          <button className='bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={signOut} >Logout</button>
        

     
      </main>
    </div>
    </div>
  );
}

export default HomePage;