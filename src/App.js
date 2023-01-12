import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyNow from './Pages/BuyNow/BuyNow';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import WelcomePage from './Pages/Dashboard/WelcomePage';
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
                <Route
                    path="dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<WelcomePage />}></Route>
                    <Route path="my-profile" element={<MyProfile />}></Route>
                    <Route path="my-orders" element={<MyOrder />}></Route>
                    <Route path="add-review" element={<AddReview />}></Route>
                </Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
