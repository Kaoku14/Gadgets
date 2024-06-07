import { useState } from "react";
import icon from "../../assets/logo.png";
import "../Login/app.css";

import { supabase } from "../../utils/supabaseConfig";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div id="clobber" className="min-h-screen bg-gray-500">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <img src={icon} alt="Spanner image" />
          
       
        </div>
      </nav>

      <main id="fixer" className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded-lg p-8">
          
         
          
          <button
            onClick={() => {
              supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                  redirectTo: "http://localhost:5173/home",
                },
              });
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Sign in with Google
          </button>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
