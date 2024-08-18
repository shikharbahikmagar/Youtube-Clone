import { useContext, createContext } from "react";

export const meenuContext = createContext({
    menuState: false,
    openState: () => {},
    closeState: () => {},

});

export const MenuStateProvider = meenuContext.Provider;

export default function useMenuState() {
    return useContext(meenuContext);
}