// Karakter bileşeniniz buraya gelecek

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Karakter = ({ veri }) => {
  const [keyler, setKeyler] = useState("");
  const [toggle, setToggle] = useState(true);
  const KarakterDiv = styled.div`
    display: flex;
    flex-direction: column;

    div {
      padding: 0.3rem;
      font-weight: 800;
      cursor: pointer;
    }

    ${(props) =>
      props.aa &&
      `
      border:1px solid white;
      margin:0 auto;
      width:80%;
      display:block;
    &:hover {
      transition: 2s;
      transform: scale(1.1);
    }
    span {
      float: right;
      color:white ;
      font-weight: bolder;
    }
    border-radius:1rem
    `}

    ${(props) =>
      props.ab &&
      `
      margin:0.5rem auto;
      width:80%;
      border-radius: 1rem;
      div{
        padding:0.2rem;
        background-color: white;
        font-weight: 500;
        width:50%;
        margin:0.1rem auto;
        border:1px solid black;
        border-radius: 1rem;
      }

      div:hover{
        background-color: black;
        color:white;
      }
      
   `}
  `;

  return (
    <KarakterDiv>
      {veri.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setKeyler(index);
            setToggle(!toggle);
          }}
        >
          {(index === keyler) & (toggle === true) ? (
            <KarakterDiv aa>
              {item.name}
              <span>-</span>
            </KarakterDiv>
          ) : (
            <KarakterDiv aa>
              {item.name}
              <span>+</span>
            </KarakterDiv>
          )}
          {(index === keyler) & (toggle === true) ? (
            <KarakterDiv ab>
              <div>{item.gender}</div>
              <div>{item.height}</div>
              <div>{item.mass}</div>
              <div>{item.birth_year}</div>
              <div>{item.eye_color}</div>
              <div>{item.hair_color}</div>
              <div>{item.skin_color}</div>
              <div>{item.films.length}</div>
            </KarakterDiv>
          ) : null}
        </div>
      ))}
    </KarakterDiv>
  );
};

export default Karakter;
