// Karakter bileşeniniz buraya gelecek

import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Karakter = ({ veri }) => {
  const [toggle, setToggle] = useState(true);

  const KarakterDiv = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) =>
      props.ev === true
        ? `
        display: none;
      `
        : `
        display:flex;
        flex-direction: column;
        `}
  `;

  return (
    <KarakterDiv>
      {veri.map((item, index) => (
        <div
          key={index}
          value={toggle}
          onClick={(e) => console.log(!e.target.value)}
        >
          {item.name}
          <KarakterDiv ev={toggle}>
            <div>{item.gender}</div>
            <div>{item.height}</div>
            <div>{item.mass}</div>
            <div>{item.birth_year}</div>
            <div>{item.eye_color}</div>
            <div>{item.hair_color}</div>
            <div>{item.skin_color}</div>
            <div>{item.films.length}</div>
          </KarakterDiv>
        </div>
      ))}
    </KarakterDiv>
  );
};

export default Karakter;
