'use client';
import { createContext } from 'react';
import Image from "next/image";
import Navbar from "../components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";

const Page = () => {
  const context = createContext({});

  return (
    <>
      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Add more routes as needed 
      </Routes> */}
    </>
  );
}

export default Page;