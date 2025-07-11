import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/home-page";
import SearchAgency from "./pages/search-agency";
import { Login } from "./login";
import Layout from "./components/Layout";
import { ProfileAgency } from "./pages/profile-agency";
import BookingAgency from "./pages/booking-agency";
import { Register } from "./register/register";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search-agency" element={<SearchAgency />} />
          <Route path="/profile-agency/:id" element={<ProfileAgency />} />
          <Route path="/booking-agency/:id" element={<BookingAgency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
