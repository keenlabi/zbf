import styles from "./dropdownfield.module.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { DropDownOption, DropDownProps } from "./types";
import filterObjectList from "src/shared/utility/filterObjectList";
import useClickOutside from "src/shared/hooks/useClickOutside";

export default function DropDownField({
  label,
  options,
  error,
  placeholder,
  selected,
  selectedOptionIndex,
  relative,
  extraStyle,
  deactivated,
  onSelect
}:DropDownProps) {

  const domNode = useClickOutside(() => {
    setSearchKeyword("");
    setIsOpen(false);
  });

  const [isOpen, setIsOpen] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const [searchResults, setSearchResults] = useState<DropDownOption[]>(options);

  function dropOptions() {
    if (options.length && !deactivated) setIsOpen(true);
  }

  function filterOptions (searchKeyword:string) {
    setSearchKeyword(searchKeyword);
    const searchResults:DropDownOption[] = filterObjectList<DropDownOption>(searchKeyword, options);
    setSearchResults(searchResults);
  }

  function selectOption (selectedOption:DropDownOption) {
    onSelect?.(options.indexOf(selectedOption));
    setIsOpen(false)
  }

  return  <div className={`${extraStyle} ${styles.container}`}>
            {
              label && <div className={styles.label}> {label} </div>
            }
            <div 
              className={`
                ${styles.drop_down_wrapper}
                ${!options.length && styles.disable_dropdown}
                ${deactivated && styles.disable_dropdown}
                ${isOpen && relative && styles.bottom_offset}
              `}
              ref={domNode}
            >
              {
                isOpen
                ? <div className={`${styles.display} ${styles.search_bar_wrapper}`}>
                    <input
                      type={"text"}
                      placeholder={"Search by keyword"}
                      className={styles.search_bar}
                      onInput={(e:React.FormEvent<HTMLInputElement>)=> filterOptions(e.currentTarget.value)}
                    />
                    <FaAngleDown onClick={() => dropOptions()} />
                  </div>
                : selected
                  ? <div className={`${styles.display} ${styles.selected}`} onClick={() => dropOptions()}>
                      {options[selectedOptionIndex].label}
                    </div>
                  : <div className={`${styles.display} ${styles.unselected}`} onClick={() => dropOptions()}>
                      {placeholder ?? "Please select option"}
                      <FaAngleDown onClick={() => dropOptions()} />
                    </div>
              }

              {
                isOpen
                ?   searchKeyword
                    ? <div className={styles.options_container}>
                        { 
                          searchResults.length
                          ? searchResults.map((option, index) => {
                              return  <div
                                        key={index}  
                                        className={styles.option}
                                        children={option.label}
                                        onClick={() => selectOption(option)}
                                      />
                            })
                          : <div
                              className={styles.option}
                              style={{ color: "var(--grey-accent-600)" }}
                              children={`No result matches the keyword '${searchKeyword}'`}
                            />
                        }
                      </div>
                    : <div className={styles.options_container}>
                        {
                          options.map((option, index) => {
                            return  <div
                                      key={index}  
                                      className={styles.option}
                                      children={option.label}
                                      onClick={() => selectOption(option)}
                                    />
                          })
                        }
                      </div>
                : null
              }
            </div>
            <div className={styles.error}>{error}</div>
          </div>

  // return (
  //   <div className={`${extraStyle} ${styles.container}`} ref={domNode}>
  //     <div className={styles.label}> {label} </div>
  //     <div
  //       className={`
  //                   ${styles.display}
  //                   ${isOpen ? styles.is_open : null}
  //                   ${isOpen ? (relative ? styles.bottom_offset : null) : null}
  //                   ${error ? styles.field_error : null}
  //                   ${
  //                     !options.length
  //                       ? canAddNewItem
  //                         ? null
  //                         : styles.disable_dropdown
  //                       : null
  //                   }
  //               `}
  //     >
  //       {isOpen ? (
  //         <div className={styles.search_bar_wrapper}>
  //           <input
  //             type={"text"}
  //             placeholder={"Search by keyword"}
  //             className={styles.search_bar}
  //             onInput={(e: any) => filterOptions(e.target.value)}
  //           />
  //         </div>
  //       ) : selected ? (
  //         <div className={styles.selected_option} onClick={() => dropOptions()}>
  //           {options[selectedOptionIndex].label}
  //         </div>
  //       ) : (
  //         <div className={styles.unselected} onClick={() => dropOptions()}>
  //           {/* <input 
  //                                   type={'text'}
  //                                   placeholder={"Enter first item"}
  //                                   className={styles.search_bar}
  //                                   onInput={(e:any)=> addFirstDropDownItem(e.target.value)}
  //                               /> */}
  //           <FaAngleDown />
  //         </div>
  //       )}

  //       {isOpen ? (
  //         <div className={styles.options_container}>
  //           {filteredOptions.length ? (
  //             filteredOptions.map((option, index: any) => {
  //               if (option.type === "action-option" && options.length === 1) {
  //                 return (
  //                   <div key={index} className={styles.action_option}>
  //                     <div
  //                       className={`
  //                                                       ${
  //                                                         searchKeyword
  //                                                           ? null
  //                                                           : styles.disabled_btn
  //                                                       }
  //                                                       ${
  //                                                         styles.action_option_btn
  //                                                       }
  //                                                   `}
  //                       onClick={() => action?.(searchKeyword)}
  //                     >
  //                       {option.actionIcon}
  //                       {option.label}
  //                     </div>
  //                   </div>
  //                 );
  //               }

  //               return (
  //                 <div
  //                   key={index}
  //                   className={styles.option}
  //                   onClick={() => {
  //                     selectOption(option);
  //                     setIsOpen(false);
  //                   }}
  //                 >
  //                   {option.label}
  //                 </div>
  //               );
  //             })
  //           ) : (
  //             <div>
  //               {options.map((option, index) => {
  //                 return option.type === "action-option" ? (
  //                   <div key={index} className={styles.action_option}>
  //                     <div
  //                       className={styles.action_option_btn}
  //                       onClick={() => {
  //                         if (searchKeyword) {
  //                           action?.(searchKeyword);
  //                           setIsOpen(false);
  //                         }
  //                       }}
  //                     >
  //                       {option.actionIcon}
  //                       {option.label}
  //                     </div>
  //                   </div>
  //                 ) : null;
  //               })}
  //               <div
  //                 className={styles.option}
  //                 style={{ color: "var(--grey-accent-600)" }}
  //                 children={`No result matches the keyword '${searchKeyword}'`}
  //               />
  //             </div>
  //           )}
  //         </div>
  //       ) : null}
  //     </div>
  //     <div className={styles.error}>{error}</div>
  //   </div>
  // );

}
