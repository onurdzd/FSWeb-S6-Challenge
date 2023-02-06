import styled from "styled-components";

const SearchDiv = styled.div`
  padding: 1rem;
  input {
    border-radius: 1rem;
    width: 50%;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.3rem;
  }
`;
const Search = ({ setArama, arama }) => {
  return (
    <SearchDiv>
      <input
        type="text"
        placeholder="Search Character"
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      ></input>
    </SearchDiv>
  );
};

export default Search;
