import { useContext } from "react";
import AppContext from "../components/Context";

export const useAppContext = () => {
  return useContext(AppContext);
};