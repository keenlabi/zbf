import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "./pagination.module.css";

interface IPaginationProps {
  currentPage:number;
  totalPages:number;
  goToPageAction:(newPage:number)=> void;
}

export default function Pagination(props:IPaginationProps) {

  const paginationArray = [...Array(props.totalPages)];

  function goBack() {
    return props.currentPage > 1 && props.goToPageAction(--props.currentPage)
  }

  function goForward() {
    return props.currentPage < props.totalPages && props.goToPageAction(++props.currentPage!)
  }

  return (
    <>
      {
        props.totalPages
        ? <div className={styles.paginationContainer}>
            <FaAngleLeft
              className={`
                ${styles.paginationButton} 
                ${props.currentPage === 1 && styles.inactive}`
              }
              onClick={goBack}
            />

              <div className={styles.pageNumbers}>
                {
                  paginationArray.map((_, index) => {
                    const currentPageNumber = index + 1;

                    let pageNumber:string|number|null = currentPageNumber;

                    if (currentPageNumber > props.currentPage + 3 && currentPageNumber !== props.totalPages && currentPageNumber !== 1) pageNumber = "...";
                    if (props.currentPage > currentPageNumber && currentPageNumber! < props.totalPages - 3 && currentPageNumber !== 1) pageNumber = "...";

                    paginationArray[index] = pageNumber;

                    return pageNumber && paginationArray[index] !== paginationArray[index - 1] 
                    ?	<div
                        key={"page" + currentPageNumber}
                        className={`
                          ${styles.pageNumber}
                          ${index+1 === props.currentPage && styles.currentPage}
                        `}
                        style={parseInt(pageNumber!.toString())
                          ? { cursor: "pointer" }
                          : { cursor: "default" }
                        }
                        onClick={()=> parseInt(pageNumber!.toString()) && 
                                      props.goToPageAction(parseInt(pageNumber.toString()))                        }>
                        {pageNumber}
                      </div>
                    : 	null;
                })}
              </div>

            <FaAngleRight
              className={`
                ${styles.paginationButton} 
                ${props.currentPage === props.totalPages && styles._inactive}`
              }
              onClick={goForward}
            />
          </div>
        : null
      }
    </>
  );
}
