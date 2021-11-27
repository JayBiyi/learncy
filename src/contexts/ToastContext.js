import { createContext, useRef, useContext, useState } from "react";


const toastContext = createContext(null);

export function useToast() {
  return useContext(toastContext);
}
export default function ToastProvider({ children }) {
  const [shouldToastShow,setToastShow] = useState(false);
  const [toastMessage,setToastMessage] = useState('');
  const [toastType,setToastType] = useState('')

  return (
    <toastContext.Provider value={{shouldToastShow,setToastShow,toastMessage,toastType,setToastType,setToastMessage}}>{children}</toastContext.Provider>
  );
}
