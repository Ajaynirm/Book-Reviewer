const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex gap-2 mt-6 justify-center">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 border ${p === currentPage ? 'bg-blue-500 text-white' : ''}`}
          >
            {p}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  