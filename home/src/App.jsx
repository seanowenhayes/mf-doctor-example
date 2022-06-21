import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import DoctorList from "./components/DoctorList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.scss";
import DoctorProfile from "doctorProfile/src/components/DoctorProfile"

const App = () => (
  <BrowserRouter>
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="my-8 flex-1 flex">
        <Routes>
          <Route path="/" exact element={<DoctorList />} />
          <Route path="/doctor/:id" element={
            <div className="flex flex-1 items-center justify-center">
              <DoctorProfile />
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));