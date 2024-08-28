import React, { useState, useEffect, useRef } from "react";
import Card from "../../components/card/Card";
import "./Menu.css";
import Navbar from "../../components/navbar/Navbar";

const Menu = ({ className }) => {
  const [menuData, setMenuData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    "appetizers_and_dishes"
  );
  const [selectedBeverageSubcategory, setSelectedBeverageSubcategory] =
    useState("water");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page
  const menuRef = useRef(null);

  useEffect(() => {
    fetch("/model/menu.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Menu Data:", data); // Verifica i dati ricevuti dal JSON
        setMenuData(data); // Imposta i dati nel tuo stato
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  if (!menuData) {
    return <div>Loading...</div>; // Mostra un messaggio di caricamento fino a quando i dati non sono pronti
  }

  const categories = {
    appetizers_and_dishes: "Antipasti e Piatti Unici",
    classic_pizzas: "Pizze Classiche",
    special_pizzas: "Pizze Speciali",
    white_pizzas: "Pizze Bianche",
    flatbreads: "Focacce",
    sides: "Contorni",
    beverages: "Bevande",
    desserts: "Dolci",
  };

  const beverageSubcategories = {
    water: "Acqua",
    soft_drinks: "Bibite",
    beer: "Birra",
    // Add more subcategories if needed
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = (totalItems) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  const renderCategory = (category) => {
    let categoryData = [];

    if (category === "beverages") {
      categoryData = menuData.beverages[selectedBeverageSubcategory];
    } else {
      categoryData = menuData[category];
    }

    const totalItems = categoryData.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = categoryData.slice(startIndex, endIndex);

    return (
      <>
        {itemsToRender.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
        {renderPagination(totalItems)}
      </>
    );
  };

  return (
    <div className={className}>
      <Navbar />
      <div className="menuBoards">
        <div className="menuSidebar">
          <div>
            <h1>Il nostro menu</h1>
          </div>
          <h1>{menuData.restaurant}</h1>
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key);
                setCurrentPage(1);
              }}
            >
              {categories[key]}
            </button>
          ))}
        </div>
        <div className="menuContent">
          <div className="menuBoard">
            {selectedCategory === "beverages" && (
              <div className="beverageSubcategories">
                {Object.keys(beverageSubcategories).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedBeverageSubcategory(key);
                      setCurrentPage(1);
                    }}
                  >
                    {beverageSubcategories[key]}
                  </button>
                ))}
              </div>
            )}
            <h2>
              {selectedCategory === "beverages"
                ? beverageSubcategories[selectedBeverageSubcategory]
                : categories[selectedCategory]}
            </h2>
            <div className="cardContainer">
              {renderCategory(selectedCategory)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
