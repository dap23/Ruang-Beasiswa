import React from "react";
import Hero from "../../components/Hero/Hero";
import List from "../../components/List/List";
import News from "../../components/News/News";
import Partner from "../../components/Partner/Partner";
import Slider from "../../components/Slider/Slider";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <Slider />
        <News />
        <List />
        <Partner />
      </div>
    </div>
  );
};

export default Index;
