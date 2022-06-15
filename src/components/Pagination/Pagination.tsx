type PaginationProps<T> = {
  items: T[];
  onNext: (page: number) => void;
  onPrev: (page: number) => void;
  currentPage: number;
  pages: number;
  perPageCount: number;
};

const Pagination = <T extends unknown>(props: PaginationProps<T>) => {
  const { pages, currentPage, onPrev, onNext, items } = props;

  const totalItems = items.length;

  const nextPage = () => {
    if (currentPage === pages) return;
    onNext(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage === 1) return;
    onPrev(currentPage - 1);
  };

  return (
    <nav
      className="fixed bottom-0 right-0 left-0 bg-white px-4 sm:px-6 md:px-10 xl:px-20 py-4 sm:py-2 flex items-center justify-between border-t border-gray-200"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-[#222222]">
          Showing <span className="font-medium">{currentPage}</span> to{" "}
          <span className="font-medium">{pages}</span> of{" "}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={previousPage}
          className="relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>

        <div>
          <button className="flex flex-col items-center flex-shrink-0 justify-center pt-1">
            <span className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-[#FF385C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="stroke-[#FF385C]"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div className="leading-none">
                <span className="text-xs font-semibold">Explore</span>
              </div>
            </span>
          </button>
        </div>

        <button
          onClick={nextPage}
          className="ml-3 relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
