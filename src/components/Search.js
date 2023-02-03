import styled from "styled-components";

const SearchDiv = styled.input`
  width: 50%;
  ${(props) =>
    props.placeholder &&
    `
  text-align: center;`}s
`;

const Search = ({ setArama, arama }) => {
  return (
    <SearchDiv
      placeholder="Arama"
      value={arama}
      onChange={(e) => setArama(e.target.value)}
    ></SearchDiv>
  );
};

export default Search;
