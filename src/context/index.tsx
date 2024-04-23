/* eslint-disable prettier/prettier */
"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface TypeContext {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<TypeContext>({} as TypeContext);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
