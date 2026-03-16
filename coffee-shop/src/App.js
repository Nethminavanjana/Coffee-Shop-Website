import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Menu />
      <Story />
      <Testimonials />
      <Gallery />
      <Visit />
      <Footer />
    </>
  );
}