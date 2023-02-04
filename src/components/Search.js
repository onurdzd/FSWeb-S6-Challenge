import styled from "styled-components";

const SearchDiv = styled.div`
  padding: 1rem;
  div {
    font-weight: 500;
    padding: 0.3rem;
  }

  input {
    width: 50%;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.3rem;
  }
`;
const Search = ({ setArama, arama }) => {
  return (
    <SearchDiv>
      <div>Karakter Ara</div>
      <input
        placeholder="Karakter İsmi Yaz"
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      ></input>
    </SearchDiv>
  );
};

export default Search;
