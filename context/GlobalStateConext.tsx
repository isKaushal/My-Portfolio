"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalStateType {
  IconsActive: {
    linkedinIcon: boolean;
    instagramIcon: boolean;
    gmailIcon: boolean;
  };
  setIconsActive: React.Dispatch<
    React.SetStateAction<{
      linkedinIcon: boolean;
      instagramIcon: boolean;
      gmailIcon: boolean;
    }>
  >;
}

const GlobalStateContext = createContext<GlobalStateType | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [IconsActive, setIconsActive] = useState({
    linkedinIcon: false,
    instagramIcon: false,
    gmailIcon: false,
  });

  return (
    <GlobalStateContext.Provider value={{ IconsActive, setIconsActive }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
