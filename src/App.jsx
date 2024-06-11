import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import "./index.css"


function App() {
  return (
    <>
      {/* <h1 className="text-7xl text-center text-blue-400"></h1> */}
      <AuthProvider>
        <Router>          
          <div className="w-full h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </>
  
      
  );
}

export default App;