import React,{useEffect} from 'react'
import HeroSection from "./components/HeroSection"
import { useGlobalContext } from './Context';
import Services from './Services';

const Home = () => {
  const {updateHomePage} = useGlobalContext();

useEffect(() => updateHomePage(),[]);

  return(
    <>
   
    <HeroSection  />
    <Services/>
    </>
  );
}

export default Home;