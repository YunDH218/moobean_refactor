import Divider from "../components/common/Divider";
import Header from "../components/common/Header";
import Responsive from "../components/common/Responsive";
import SwiperContainer from "../components/common/SwiperContainer";
import Tab from "../components/common/Tab";
import ReviewContainer from "../components/main/ReviewContainer";

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
  },
];

const tabContents = [
  { name: '로맨스·코미디', content: <SwiperContainer content={testContent} /> },
  { name: '호러·스릴러', content: <SwiperContainer content={testContent} /> },
  { name: '액션', content: <SwiperContainer content={testContent} /> },
  { name: '애니메이션', content: <SwiperContainer content={testContent} /> },
]

const GenrePage = () => {
  return (
    <>
      <Header currentPage="genre" />
      <Tab menuArr={tabContents} />
      <Responsive><Divider direction="horizontal" weight="3px" /></Responsive>
      <ReviewContainer />
    </>
  );
}

export default GenrePage;