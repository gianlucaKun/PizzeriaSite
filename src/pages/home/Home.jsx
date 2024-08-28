import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import slice from "../../assets/pizza-cartoon-illustration.png"

const Home = ({ className }) => {
  return (
    <main className={className}>
      <Header />
      <img src={slice} alt="pizzaslice" />
    </main>
  );
};

export default Home;
