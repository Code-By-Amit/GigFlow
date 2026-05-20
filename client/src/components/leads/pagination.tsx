interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  setPage,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          setPage(currentPage - 1)
        }
        className="px-4 py-2 rounded-lg border disabled:opacity-50"
      >
        Prev
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={ currentPage === totalPages }
        onClick={() => setPage(currentPage + 1) }
        className="px-4 py-2 rounded-lg border disabled:opacity-50" >
        Next
      </button>
    </div>
  );
};

export default Pagination;