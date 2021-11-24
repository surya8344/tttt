import React from 'react'
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import Home from '../screens/Home';
export default function RoutePage() {
    // const navigate = useNavigate()
    
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} ></Route>
                </Routes>
            </Router>
        
    );
}
