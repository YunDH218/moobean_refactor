import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const TitleBlock = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1000px;
  height: 6rem;
  background: ${palette.cyan[1]};
`;
const TitleInput = styled.input`
  width: 60%;
  height: 5.5rem;
  font-size: 2.25rem;
  font-weight: bold;
  background: none;
  margin-top: 0.25rem;
  padding: 0;
  border: none ;
  vertical-align: middle;
  outline: none;
`;
const MovieSearchDropdown = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 5.5rem;
  background: none;
  font-size: 1.5rem;
  margin: 0.25rem;
  padding: 0.25rem 0 0 1rem;
  border: none;
  border-left: 1px solid #babacc;
  vertical-align: middle;
  outline: none;
`;

const TitleArea = () => {
  return (
    <>
      <TitleBlock>
        <Responsive>
          <TitleInput placeholder="제목을 입력해주세요."/>
          <MovieSearchDropdown placeholder="평론할 영화를 검색하세요." />
        </Responsive>
      </TitleBlock>
    </>
  )
}

export default TitleArea;