import React from "react";

export const Pagination = ({
  currentPage,
  pageSize,
  length,
  handlePagination,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => {
          handlePagination(currentPage - 1);
        }}
      >
        Prev
      </button>

      <div className="current-page">{currentPage}</div>

      <button
        className="pagination-button"
        disabled={Math.ceil(length / pageSize) === currentPage}
        onClick={() => {
          handlePagination(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
