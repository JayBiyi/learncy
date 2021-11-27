// import { useEffect,useState } from "react";

// export default function useLocalStorage() {
//     const [userData, setUserData] = useState(() => {
//         return getUserData('learncy-user', {isLoggedIn: false,data: {}});
//       });
    
//       useEffect(() => {
//         // storing input name
//         localStorage.setItem('learncy-user', JSON.stringify(userData));
//       }, [userData]);
    
//       return [userData, setUserData];
// }

// function getUserData(key,defaultValue) {
//     const saved = localStorage.getItem(key);
//     const initial = JSON.parse(saved);
//     return initial || defaultValue;

// }