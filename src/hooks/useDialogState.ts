import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useDialog(){
  return useContext(ModalContext);
};
