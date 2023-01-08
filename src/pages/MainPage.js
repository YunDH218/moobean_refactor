import Header from "../components/common/Header";
import Tab from "../components/common/Tab";
import SwiperContainer from "../components/common/SwiperContainer";
import Divider from "../components/common/Divider";
import ReviewContainer from "../components/main/ReviewContainer";
import Responsive from "../components/common/Responsive";

const testContent = [
  {
    id: 1,
    title: 'test_review',
  },
  {
    id: 2,
    title: 'test_review',
  },
  {
    id: 3,
    title: 'test_review',
  },
  {
    id: 4,
    title: 'test_review',
  }
];

const tabContents = [
  { name: '최신 평론', content: <SwiperContainer content={testContent} /> },
  { name: '추천 평론', content: <SwiperContainer content={testContent}/> },
  { name: '최신 영화', content: <SwiperContainer content={testContent}/> },
  { name: '추천 영화', content: <SwiperContainer content={testContent}/> },
];

const MainPage = () => {
  return (
    <>
      <Header />
      <Tab menuArr={tabContents}/>
      <Responsive><Divider direction="horizontal" weight="3px" /></Responsive>
      <ReviewContainer />
    </>
  );
}

export default MainPage;