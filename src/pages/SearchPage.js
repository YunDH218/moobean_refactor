import styled from "styled-components";
import Header from "../components/common/Header";
import Responsive from "../components/common/Responsive";
import palette from "../lib/styles/palette";
import SearchIcon from '@mui/icons-material/Search';
import SwiperContainer from "../components/common/SwiperContainer";

const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  padding-top: 3rem;
  background: ${palette.cyan[2]};
`
const SearchBar = styled(Responsive)`
  display: flex;
  border: solid 5px white;
  justify-content: center;
`
const SearchInput = styled.input`
  width: 90%;
  font-size: 1.125rem;
  color: white;
  height: 3rem;
  border: none;
  outline: none;
  background-color: ${palette.cyan[2]};
`
const SearchButton = styled.div`
  margin-top: 0.375rem;
  & svg {
    color: white;
  }
`
const testContent = [
  {
    id: 1,
    title: 'test_result',
  },
  {
    id: 2,
    title: 'test_result',
  },
  {
    id: 3,
    title: 'test_result',
  },
  {
    id: 4,
    title: 'test_result',
  }
];


const SearchPage = () => {
  return (
    <>
      <Header currentPage="search"/>
      <SearchBox>
        <SearchBar>
          <SearchInput />
          <SearchButton>
            <SearchIcon fontSize="large" />
          </SearchButton>
        </SearchBar>
        <SwiperContainer content={testContent} />
      </SearchBox>
    </>
  );
}

export default SearchPage;