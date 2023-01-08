import { useState } from "react";
import styled from "styled-components";
import Divider from "../common/Divider";
import Responsive from "../common/Responsive";

const Layout = styled(Responsive)`
  display: flex;
  height: 25rem;
`
const ReviewDetail = styled.div`
  display: flex;
  width: calc(60% - 1rem);
  height: 100%;
  padding: 1.5rem;
`
const MovieImg = styled.div`
  width: 120px;
  height: 160px;
  background-color: black;
  margin: auto 30px auto 0;
`
const TextContainer = styled.div`
  width: calc(100% - 150px);
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`
const ReviewSimple = styled.div`
  font-size: 16px;
  padding-left: 10px;
  height: 19.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;
  word-wrap:break-word;
  line-height: 1.5em;
`
const ReviewList = styled.ol`
  & .item {
    font-weight: 500;
    font-size: 16px;
    line-height: 2em;
    cursor: pointer;
  }
  & .focused {
    text-decoration: underline;
    font-weight: bold;
  }
`
const ReviewItems = [
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
  '"닉네임"의 평론제목',
]

const ReviewContainer = () => {
  const [currentReview, clickReview] = useState(0);
  const selectReviewHandler = index => {
    clickReview(index);
  }
  return (
    <Layout>
      <ReviewDetail>
        <MovieImg />
        <TextContainer>
          <Title>{currentReview + 1}. 닉네임의 평론제목</Title>
          <ReviewSimple>리뷰내용</ReviewSimple>
        </TextContainer>
      </ReviewDetail>
      <Divider direction="vertical" weight="3px" />
      <ReviewList>
        {ReviewItems.map((el, index) =>
          <li
            className={index === currentReview ? "item focused" : "item" }
            onClick={() => selectReviewHandler(index)}
            key={index}
          >{el}
          </ li>
        )}
      </ReviewList>
    </Layout>
  );
}

export default ReviewContainer;