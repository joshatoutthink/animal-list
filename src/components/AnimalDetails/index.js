import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import data from "../../animals.json";
function AnimalDetails({ close, className }) {
  const { slug } = useParams();
  const activeAnimal = data.find((animal) => animal.slug === slug);

  const variants = {
    enter: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };
  const titleVariant = {
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      x: 100,
      opacity: 0,
    },
  };
  const imgVariant = {
    enter: {
      y: 0,
    },
    exit: {
      y: -100,
    },
  };
  const tableVar = {
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  };
  return (
    <motion.div className={className} layoutId={activeAnimal.name}>
      <Link to="/">close</Link>
      <motion.div
        className="card"
        variants={variants}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.div className="image" variants={imgVariant}>
          <img src={activeAnimal.image?.large?.source} alt="" />
        </motion.div>
        <motion.h2 className="title" variants={titleVariant}>
          {activeAnimal.name}
        </motion.h2>
        <motion.div className="names" variants={tableVar}>
          <table>
            <tbody>
              <tr>
                <th>Young</th>
                <td>{activeAnimal.young}</td>
              </tr>
              <tr>
                <th>Female</th>
                <td>{activeAnimal.female}</td>
              </tr>
              <tr>
                <th>Male</th>
                <td>{activeAnimal.male}</td>
              </tr>
              <tr>
                <th>Collective Noun</th>
                <td>{activeAnimal.collectiveNoun}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <div className="description">
          <p>{activeAnimal.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default styled(AnimalDetails)`
  --image-translate-x: 0;
  --image-translate-y: 0;
  --image-rotate: 0deg;
  --image-scale: 1;

  --action-height: 48px;

  > a {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .card {
    /* background: white;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px; */
    max-width: 900px;
    width: 90vw;
    max-height: 80vh;
    height: 100%;
    margin: 20px auto 0;
    padding: 20px;
    position: relative;
  }
  .image {
    width: 90%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11),
      2px 4px 4px rgba(0, 0, 0, 0.09);

    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }
  .title {
    color: var(--primary);
    color: #2710b1;
    line-height: 0.9;
    text-shadow: 0 2px 6px rgba(250, 250, 250, 0.4);
    margin: 15px 0 30px;
  }
  .description {
    max-width: 450px;
    font-size: 18px;
    line-height: 1.56;
  }
  .names {
    background: white;
    height: min-content;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11),
      2px 4px 4px rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
    td {
      text-align: right;
    }
    table {
      width: 100%;
    }
    th {
      text-align: left;
      color: var(--brown);
    }
  }
  .actions {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: var(--action-height);
    width: 100%;
    background: #fafafa;
    border-radius: 0 0 8px 8px;
  }
  /*SCREEN SIZE DEPENDENT STYLES*/
  .card {
    position: relative;
  }
  .title {
    font-size: 3em;
    position: relative;
  }
  .image {
    /* max-width: 300px; */
  }
  .description {
    padding-right: 10px;
    padding-bottom: var(--action-height);
    p {
      margin: 0;
    }
    &::-webkit-scroll-track {
      border-radius: 18px;
    }
    &::-webkit-scrollbar {
      border-radius: 18px;
      width: 2px;
      background: #fefefe;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      max-height: 30px;
      background-color: #bbb;
    }
  }

  @media (min-width: 500px) {
    padding: 30px;
    padding-top: 30px;
    .card {
      display: grid;
      grid-template-rows: 50% 1fr;
      grid-template-columns: minmax(200px, 50%) 1fr;
      gap: 40px;

      height: 66vh;
    }
    .title {
      margin: 0;
    }
    .title,
    .description {
      grid-row: 1/-1;
      grid-column: 2/-1;
    }
    .image,
    .names {
      grid-column: 1/2;
    }
    .image {
      grid-row: 1/2;
      max-width: unset;
      width: 100%;
      height: 100%;
    }
    .names {
      grid-row: 2/3;
    }

    .description {
      margin-top: 3rem;
      padding-bottom: 0;
      /* overflow-y: scroll; */
    }
  }
`;

/* 
.card{
      /* display: grid;
    grid-template-columns: minmax(200px, 50%) 20px minmax(200px, 50%);
    grid-template-rows: 40% auto; 
}
.right-col {
    grid-column: 2/-1;
    grid-row: 1/-1;
  }
  .image {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11),
      2px 4px 4px rgba(0, 0, 0, 0.09);
    transform: translate(-50px, -50px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    
    margin: 0;
    margin-bottom: -30px;
    position: relative;
    z-index: 3;
   
  }
  .description {
    
    padding-top: 30px;
  }
  .names {
    grid-row: 2/3;
    width: calc(100% - 50px);
  }
  h3 {
    margin: 0;
  }

 
`;

*/
