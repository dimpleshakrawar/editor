import { createContext, useContext, useState } from "react";

export const StoreContext = createContext();

const initialStore = {
  folders: [],
};

export function StoreProvider({ children }) {
  const [store, setStore] = useState(initialStore);

  const setFolder = (payload) => {
    setStore((prevData) => ({
      ...prevData,
      folders: [payload, ...prevData.folders],
    }));
  };

  // const setSubFolder = (payload) => {
  //   setStore((prevData) => ({
  //     ...prevData,
  //   }));
  // };
  // const store = {folders:
  //   [
  //     {
  //       folderName :"",
  //       subfolder: [
  //           {},
  //           {}
  //         ]
  //     },
  //     {
  //       folderName :"",
  //       subfolder: [
  //           {},
  //           {}
  //         ]
  //     },
  //   ]
  // }

  const setDeletefolder = (payload) => {
    setStore((prevData) => ({
      ...prevData,
      folders: [payload],
    }));
  };

  const value = { store, setFolder, setDeletefolder };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
