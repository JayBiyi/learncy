import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyDN4WznuAe2QQ_BS_H7TMrAW1-IONTigBY',
    authDomain: 'learncy-2c7b4.firebaseapp.com',
    projectId: 'learncy-2c7b4',
    storageBucket: "learncy-2c7b4.appspot.com",
    messagingSenderId: '458824938732',
    appId: "1:458824938732:web:87ceda92e2158c41db21c9",
    measurementId: "G-K1172V937J"
  };
  const app = initializeApp(firebaseConfig);
  
  export default app
  //const analytics = getAnalytics(app);


//   import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDN4WznuAe2QQ_BS_H7TMrAW1-IONTigBY",
//   authDomain: "learncy-2c7b4.firebaseapp.com",
//   projectId: "learncy-2c7b4",
//   storageBucket: "learncy-2c7b4.appspot.com",
//   messagingSenderId: "458824938732",
//   appId: "1:458824938732:web:685859f24d4c00bddb21c9",
//   measurementId: "G-XC03V1YLJY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);