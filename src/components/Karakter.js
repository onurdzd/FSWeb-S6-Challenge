// Karakter bileşeniniz buraya gelecek

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Karakter = ({ veri }) => {
  const [keyler, setKeyler] = useState("");
  const [toggle, setToggle] = useState(false);
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
      background-color: #e1dede7b;
    &:hover {
      transition: 0.2s;
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
      
      span{
        color:Green
      }

      p{
        margin-top:0.2rem
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
          {(index === keyler) & toggle ? (
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
          {(index === keyler) & toggle ? (
            <KarakterDiv ab>
              <div>
                <span>Gender: </span>
                {item.gender}
              </div>
              <div>
                <span>Height: </span>
                {item.height}
              </div>
              <div>
                <span>Mass: </span>
                {item.mass}
              </div>
              <div>
                <span>Birth-Day: </span>
                {item.birth_year}
              </div>
              <div>
                <span>Eye-Color: </span>
                {item.eye_color}
              </div>
              <div>
                <span>Hair Color: </span>
                {item.hair_color}
              </div>
              <div>
                <span>Skin Color: </span>
                {item.skin_color}
              </div>
              <div>
                <span>Films:</span>
                {item.films.map((elem) => (
                  <p>-{elem}</p>
                ))}
              </div>
            </KarakterDiv>
          ) : null}
        </div>
      ))}
    </KarakterDiv>
  );
};

export default Karakter;
