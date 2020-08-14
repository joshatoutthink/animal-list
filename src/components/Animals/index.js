import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "../../animals.json";
import AnimalOverview from "../AnimalOverview";

import { useLocalStorage } from "./../../hooks";
import styled from "styled-components";
export function Animals({ activeAnimal }) {
  const [scrollPos, setScrollPos] = useLocalStorage(0);
  useEffect(() => {
    window.scrollTo({ top: scrollPos });
    return () => {
      setScrollPos(window.scrollY);
    };
  }, []);
  const variants = {
    enter: {
      y: 0,
      transition: {},
    },

    exit: {
      y: -50,
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <Layout
      className="animal-list layout"
      variants={variants}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      {data.map((animal) => {
        const { name } = animal;
        return <AnimalOverview animal={animal} key={name} />;
      })}
    </Layout>
  );
}
const Layout = styled(motion.main)`
  padding-top: 50px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 272px));
    justify-content: space-between;
    gap: 20px;
    row-gap: 40px;
  }
`;
