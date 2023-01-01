
import React, { useState, useEffect } from "react";
const Pagination = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const PAGINATION_LIMIT = 2;
  
    useEffect(() => {
      setTotalPages(Math.ceil(items.length / PAGINATION_LIMIT));
    }, [items]);
  
    const handlePreviousClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const startIndex = (currentPage - 1) * PAGINATION_LIMIT;
    const endIndex = startIndex + PAGINATION_LIMIT;
  
    const pageItems = items.slice(startIndex, endIndex);
  
    return (
      <div style={{marginLeft:"10%",marginTop:"100px"}}>
         
         <table>
            <tr>
            <th>Book Name</th>
              <th>Publisher Name</th>
              <th>Country Name</th>
            </tr>
            {pageItems.map((item, index) => {
              return (
                <tr key={index} className="pro-list-info">
                  <td>{item.name}</td>
                  <td>{item.publisher}</td>
                  <td>{item.country}</td>
                  
                  
                </tr>
              );
            })}
          </table>
  
  
        <div style={{marginLeft:"10%"}}>
          <button  style ={{backgroundColor:"pink",width:"100px"}}onClick={handlePreviousClick} disabled={currentPage === 1}>
            Previous
          </button>
          <button style={{backgroundColor:"pink",width:"100px",marginLeft:"20px"}} onClick={handleNextClick} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;
