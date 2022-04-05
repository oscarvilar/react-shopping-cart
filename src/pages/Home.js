import React from "react";
import FeaturedCard from "../components/Featured/FeaturedCard";
import './styles/home.css'
// import Hero from '../components/Hero/Hero'
// import Play from "../components/play/Play";


const Home = () => {
  return (
    <div>
      {/* <Hero title={'Lorem ipsum dolor sit amet' } subtitle={'Donec efficitur gravida felis vel hendrerit. Curabitur venenatis, massa in ultrices aliquet. ui orci suscipit orci, nec maximus orci dui a ligula.'}/> */}
      <div className="home">
        <h2 className="text-center text-3xl text-white my-8"> Novedades </h2>
        <div className="featuredContainer">
          <FeaturedCard id={2} />
          <FeaturedCard id={3} />
          <FeaturedCard id={4} />
          <FeaturedCard id={5} />
        </div>
        {/* <Play /> */}
      </div>
    </div>
  );
};

export default Home;
