import React, { useContext, useEffect, useReducer } from "react";
import AboutImage from "./assets/boxing.gif";
import HomeImage from "./assets/hero-image.gif"
import reducer from "./reducer";

{
  /*
1. create a createContext();
2.Create a Provider function;
3.pass value in provider function
4.wrap Provider in main.jsx file
5.you can create a custom global function and return useContext(AppConext); 
  export the file {useGlobalContext,AppProvider}
6.you can call which file u need this data 
7.import the GlobalConext from ./context
8. create a varriable like const {variable name } = GlobalConext();
9.then pass the varriable name where u need {varriable_name}

*/
}

const AppContext = React.createContext();

const API = "https://picsum.photos/v2/list?page=2&limit=20";
//const API = "https://thapareactapi.up.railway.app";

//initial state for useReducer 1st step
const initialState = {
  name: " ",
  image: " ",
  services : [],
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Omar Farquek",
        image: HomeImage,
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "MR. omar farquek joy",
        image: AboutImage,
      },
    });
  };

  //get the API

  const getServices = async(url) => {

    try{
       const res = await fetch(url);
       const data = await res.json();
       dispatch({type : "GET_SERVICES" , payload : data });

    }catch(err){
      console.log(err);

    }
  }; 
//  Call the API

useEffect(() => {
    
  getServices(API);

},[]);

  

  return (
    <AppContext.Provider value={{ ...state ,updateAboutPage, updateHomePage}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
