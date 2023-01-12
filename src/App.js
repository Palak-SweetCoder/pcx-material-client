import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyNow from './Pages/BuyNow/BuyNow';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route
                    path="buy-now/:partsId"
                    element={
                        <RequireAuth>
                            <BuyNow />
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
