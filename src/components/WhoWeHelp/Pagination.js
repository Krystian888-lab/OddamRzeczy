import React from "react";

    const Pagination = ({currentPage, postPerPage, totalPost, paginate}) => {

    const pageNumbers = [];

// count and tell how much pages we have
    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pageNumbers.push(i);
    }

return (

    <div className="o-row">

    <ul className="o-col c-pagination--list">
        { pageNumbers.length > 1 && pageNumbers.map(number => (
        
        <li className="c-pagination" key={number}>

        <button className={currentPage === number ? "c-btn c-pagination__item c-pagination__accent e-alignCenter" : "c-btn c-pagination__item e-alignCenter"} href="#" onClick={() => paginate(number)}>{number}
        </button>

        </li>

        ))}
    </ul>
    </div>
    
    )
}
export default Pagination;