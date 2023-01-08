import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
  position: absolute;
  width: 100%;
  min-width: 1000px;
  height: 150px;
`;
const Wrapper = styled(Responsive)`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    img {
      margin: auto;
      width: 300px;
    }
  }
  .menu {
    font-size: 1.25rem;
    font-weight: bold;
    &:nth-child(${ props => {
      switch (props.currentPage) {
        case "genre":
          return 1;
        case "search":
          return 2;
        case "helpcenter":
          return 5;
        default:
          break;
      }
    }}) {
      color: ${palette.cyan[3]};
    }
  }
`;
const Spacer = styled.div`
  height: 10rem;
`;

const Header = props => {
  return (
    <>
      <HeaderBlock>
        <Wrapper {...props}>
          <div className='menu'><Link to="/genre">장르</Link></div>
          <div className='menu'><Link to="/search">검색</Link></div>
          <div className="logo"><Link to="/"><img src="img/logo.png" alt="MOOBEAN"/></Link></div>
          <div className='menu'><Link to="/login">로그인</Link></div>
          <div className='menu'><Link to="/">고객센터</Link></div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;