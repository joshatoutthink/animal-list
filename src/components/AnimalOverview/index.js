import React, { useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
function AnimalOverview({ animal, showDetails, className }) {
  const {
    name,
    image: { thumbnail },
  } = animal;
  const variants = {
    enter: {
      opacity: 1,
      y: 0,
    },

    exit: {
      opacity: 0,
    },
  };
  const [imgPosX, setImgPosX] = useState(50);
  const [imgPosY, setImgPosY] = useState(50);

  return (
    <motion.article
      className={className}
      layoutId={name}
      initial="exit"
      enter="enter"
      exit="exit"
      variants={variants}
    >
      <div className="image">
        <img
          src={thumbnail?.source}
          alt={name}
          loading="lazy"
          style={{
            objectPosition: `${imgPosX}% ${imgPosY}%`,
          }}
        />
      </div>
      <div className="name">
        <h3>{name}</h3>

        <Link to={`/${animal.slug}`} className="view">
          View Details
        </Link>
      </div>
    </motion.article>
  );
}
export default styled(AnimalOverview)`
  position: relative;
  display: grid;
  grid-template: 20px 120px 20px / 20px 120px auto;
  @media (min-width: 768px) {
    grid-template: 20px 160px auto / 20px 1fr 20px;
  }
  .image {
    grid-row: 1/3;
    grid-column: 1/3;
  }
  .name {
    grid-row: 2/4;
    grid-column: 2/4;
  }

  .image {
    height: 100%;
    width: 100%;

    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .name {
    background: white;
    h3 {
      color: #2710b1;
    }
    position: relative;
    z-index: 0;
    padding: 20px 20px 20px 140px;
    @media (min-width: 768px) {
      padding: 170px 20px 20px;
    }
  }

  .image,
  .name {
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.11),
      2px 4px 4px rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }

  h3 {
    margin: 0;
  }
  a {
    font-size: 14px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
