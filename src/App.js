import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Importing Components
import Offers from "./components/Offers";
import Navbar from "./components/Navbar";
import NavbarCommon from "./components/NavbarCommon";
import Carousal from "./components/Carousal";
import GridMultiService from "./components/GridMultiService";
import Footer from "./components/Footer";
import BookNowCards from "./components/BookNowCards";
import TroubleshootCards from "./components/TroubleshootCards";
import TvComponent from "./components/TvComponent";
import WashingMachine from "./components/WashingMachine";
import MicroWave from "./components/MicroWave";
import AirConditioner from "./components/AirConditioner";
import { ProductData } from "./ProductData";
import AllProducts from "./components/AllProducts";
import Refrigerator from "./components/Refrigerator";
import Dishwasher from "./components/DishWasher";
import Chatbot from "./components/AssestComponents/Chatbot";
import ContactUsFloating from "./components/AssestComponents/ContactUsFloating";

// Context Resource
import { createContext } from "react";

// Context Functionality
export const AppContext = createContext();

function App() {
  // console.log(ProductData);
  // --> book now
  const [book, setBook] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      service: "Television Repair",
      preferredDate: "2024-12-20",
      preferredTime: "10:00 AM",
      address: "123 Main St, City, Country",
      comments: "Please handle the screen with care.",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      service: "Washing Machine Repair",
      preferredDate: "2024-12-21",
      preferredTime: "2:00 PM",
      address: "456 Oak St, City, Country",
      comments: "The washing machine is making noise.",
    },
  ]);

  // --> Trouble shoot
  const [trouble, settrouble] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      service: "Television",
      issue: "Screen flickering",
      description: "The screen flickers intermittently during usage.",
      preferredDate: "2024-12-20",
      preferredTime: "10:00 AM",
      address: "123 Main St, City, Country",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      service: "Washing Machine",
      issue: "Not spinning",
      description: "The washing machine starts but doesn’t spin the clothes.",
      preferredDate: "2024-12-21",
      preferredTime: "2:00 PM",
      address: "456 Oak St, City, Country",
    },
  ]);

  return (
    <AppContext.Provider value={{ book, trouble, setBook, settrouble }}>
      <Router>
        <Offers />
        {/* <Navbar /> */}
        {/* Navbar is always visible */}
        <Routes>
          {/* Home Page - These components will be visible on the homepage */}
          <Route
            path="samsung/"
            element={
              <>
                <NavbarCommon />
                <Carousal />
                <GridMultiService />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* BookNow Page */}
          <Route
            path="/book-now"
            element={
              <>
                <Navbar />
                <BookNowCards />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Troubleshoot Page */}
          <Route
            path="/troubleshoot"
            element={
              <>
                <Navbar />
                <TroubleshootCards />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/tv"
            element={
              <>
                <Navbar />
                <TvComponent />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/washing"
            element={
              <>
                <Navbar />
                <WashingMachine />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/microwave"
            element={
              <>
                <Navbar />
                <MicroWave />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/Refrigerator"
            element={
              <>
                <Navbar />
                <Refrigerator />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/DishWasher"
            element={
              <>
                <Navbar />
                <Dishwasher />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* Tvcomponent Page */}
          <Route
            path="/aircondition"
            element={
              <>
                <Navbar />
                <AirConditioner />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />

          {/* All products Page */}
          <Route
            path="/products"
            element={
              <>
                <Navbar />
                <AllProducts />
                <Chatbot />
                <ContactUsFloating/>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
