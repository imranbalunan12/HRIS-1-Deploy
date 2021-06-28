import React, {useState} from "react";

function Pagination({data, pageLimit, dataLimit}){
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);


    function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }
   
    function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    }
}

export default Pagination;