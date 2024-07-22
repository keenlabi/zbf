/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

export default function useClickOutside(
  closeDropDown: (name: boolean) => void
) {

  const dropDownRef = useRef<any>();

  useEffect(() => {
    const maybeCloseDropDown = (event: any) => {
      if (!dropDownRef?.current?.contains(event.target)) {
        closeDropDown(false);
      }
    };
    document.addEventListener("click", maybeCloseDropDown);
    return () => document.removeEventListener("click", maybeCloseDropDown);
  }, [closeDropDown]);

  return dropDownRef;
}
