import React from "react";
import Theme from "../Theme/Theme";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  document.title = "Login";
  const navigate = useNavigate()

  const [loading, isLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleValidation = () => {
    if(email && password){
      //api
      navigate('/adminDashBoard')
    }
  }

  return (
    <div className="bg-white dark:bg-black dark:text-white duration-300">
      <div className="relative">
        <Theme />
      </div>
      <div className="flex justify-center items-center align-middle h-screen">
        <div className="w-full sm:w-96 p-5 flex flex-col gap-5">
          <div>
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="mt-1">Hi, Welcome back ✋</p>
          </div>
          <div>
            <input
              type="email"
              title="Enter your email address"
              className="p-2.5 w-full bg-gray-300 rounded dark:bg-gray-700 focus:outline-none"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              title="Enter your password"
              className="p-2.5 w-full bg-gray-300 rounded dark:bg-gray-700 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {!loading ? (
              <button className="bg-blue-950 text-white py-1.5 rounded w-full mt-3" onClick={handleValidation}>
                Login
              </button>
            ) : (
              <motion.div
                className="bg-blue-950 text-white py-1.5 rounded w-full mt-3 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.5, 1],
                    opacity: [1, 0],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
                <span className="ml-2">Verifing...</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
