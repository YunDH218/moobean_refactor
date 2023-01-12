import Header from '../components/common/Header';
import Viewer from "../components/viewer/Viewer";
import styled from "styled-components";
import palette from "../lib/styles/palette";

const ReviewPage = () => {
  return <>
    <Header cyan />
    <Viewer />
    <Footer />
  </>
};

export default ReviewPage;


const Footer = styled.div`
  height: 8rem;
  background: ${palette.cyan[3]};
`