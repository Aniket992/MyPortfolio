import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
//   return <div>
//     hello
//   </div>
  
 return <main className="bg-slate-300/20">
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={"Home"}/>
        </Routes>
    </Router>

 </main>

};

export default App ;
