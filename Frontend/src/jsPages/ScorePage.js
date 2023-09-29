import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../cssPages/ScorePage.css"

const ScorePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}/scores/display`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        // Handle error, display error message, etc.
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/scores/${id}`);
      // Remove the deleted product from the local state
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
      // Handle error, display error message, etc.
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="score-display-container">
        <h1 className="score-display-title">Score Board</h1>
        <div className="score-grid">
          {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="score-card">
                <h3> {product.username}</h3>
                <p className="textm">Score: {product.score}</p>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                {/* <Link to={`/edit/${product.id}`} className="edit-button">Edit</Link> */}
              </div>
            ))
          ) : (
            <p className="no-score-message">No Scores found</p>
          )}
        </div>
        <div className="pagination">
          {products.length > productsPerPage && (
            <ul className="pagination-buttons">
              {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                  <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ScorePage;
