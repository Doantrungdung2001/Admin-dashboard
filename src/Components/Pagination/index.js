import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';

export default function PaginatedItems({ itemsPerPage, shopCount, callback }) {
    const items = [...Array(shopCount).keys()];

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentPage(Math.floor(itemOffset / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    
    useEffect(() => {
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentPage(Math.floor(itemOffset / itemsPerPage));
      }, [items, itemsPerPage, itemOffset, shopCount]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
        
        callback(event.selected * 4);
    };

    return (
        <div className="d-flex justify-content-between">
            <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="←"
                nextLabel="→"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />

            <div>
                {(currentPage + 1) * 4 > shopCount ? shopCount : (currentPage + 1) * 4} of {shopCount} options
            </div>
        </div>
    );
}
