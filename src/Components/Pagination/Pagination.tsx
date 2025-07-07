import { useDispatch, useSelector } from "react-redux";
import { paginatePosts } from "../../redux/slices";
import type { RootState } from "../../redux/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, postsPerPage, allPosts } = useSelector(
    (state: RootState) => state.posts
  );

  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(paginatePosts(page));
    }
  };
  const getPaginationNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
    return pages;
  };

  

  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-5 text-sm/[20px] font-medium">

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-gray-4 dark:text-gray-7 transition-transform duration-200 hover:scale-105 disabled:opacity-50"
      >
        <img
          src="/Icons/arrow-left.svg"
          alt="arrow-left"
          className="block dark:hidden w-5 h-5"
        />
        <img
          src="/Icons/arrow-left-dark.svg"
          alt="arrow-left"
          className="hidden dark:block w-5 h-5"
        />
        Previous
      </button>

      
      <div className="flex items-center gap-[2px]">
        {getPaginationNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`dots-${index}`}
              className="mx-1 text-gray-4 dark:text-gray-7"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page as number)}
              className={`py-[10px] px-4 rounded-lg transition-transform duration-200 hover:scale-110 ${
                currentPage === page
                  ? "bg-light-purple text-purple2 dark:text-gray-6"
                  : "text-gray-4 dark:text-gray-7"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

     
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 text-gray-4 dark:text-gray-7 transition-transform duration-200 hover:scale-105 disabled:opacity-50"
      >
        Next
        <img
          src="/Icons/arrow-right.svg"
          alt="arrow-right"
          className="block dark:hidden w-5 h-5"
        />
        <img
          src="/Icons/arrow-right-dark.svg"
          alt="arrow-right"
          className="hidden dark:block w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Pagination;
