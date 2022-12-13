import React from "react";
import { initialState, reducer } from "./reducers";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children, afterHookInitialState }) => {
  const [globalState, dispatch] = React.useReducer(reducer, {...initialState, ...afterHookInitialState});

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
