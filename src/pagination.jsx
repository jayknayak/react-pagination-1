import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export function PaginatedItems(props) {
  const { itemsPerPage, items, handlePageChange } = props;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    handlePageChange([...items], itemOffset, endOffset);
    setPageCount(Math.ceil(items.length / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, itemOffset, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [items]);
  useEffect(() => {
    setItemOffset(currentPage * itemsPerPage);
  }, [currentPage, itemsPerPage]);

  if (pageCount === 0 || pageCount === 1) {
    return null;
  }

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    event.selected = 0;
  };

  return (
    <ReactPaginate
      previousLabel="<<"
      nextLabel=">>"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
      forcePage={currentPage}
    />
  );
}
