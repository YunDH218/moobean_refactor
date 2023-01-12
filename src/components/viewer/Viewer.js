import styled from 'styled-components';
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import {Button} from "@mui/material";
import {ArrowDropDown, ArrowDropUp} from "@mui/icons-material";

const Viewer = () => {
  return (
    <Responsive>
      <ReviewInfo>
        <div className='info-poster'>영화포스터</div>
        <div className='info-text'>
          <h3>{review.info.movie_title}</h3>
          <h2>{review.info.review_title}</h2>
          <h3>{review.info.reviewer_nick}</h3>
          <Likes>
            좋아요
            <LikesRate />
            {(LIKES_RATE * 100) + '%'}
          </Likes>
        </div>
      </ReviewInfo>
      <TextContainer>
        {review.text}
      </TextContainer>
      <Recommendation>
        <Button className="likes">
          <ArrowDropUp fontSize="large"/>
          <p>좋아요<br />
            {review.info.like}</p>
        </Button>
        <Button className="dislikes">
          <ArrowDropDown fontSize="large" />
          <p>싫어요<br />
            {review.info.dislike}</p>
        </Button>
      </Recommendation>
    </Responsive>
  );
};

export default Viewer;

const review = {
  info: {
    movie_title: 'Movie Title Here',
    review_title: 'Review Title Here',
    reviewer_nick: 'nickname',
    like: 320,
    dislike: 330,
  },
   text: 'review text here.',
}
const LIKES_RATE = (review.info.like / (review.info.like + review.info.dislike)).toFixed(2);

const ReviewInfo = styled.div`
  display: flex;
  margin: 2rem 0;
  color: ${palette.black};
  font-weight: bold;
  .info-poster {
    width: 120px;
    height: 160px;
    background: black;
    color: white;
  }
  .info-text {
    margin-left: 2rem;
    h2 {
      font-size: 1.5rem;
      line-height: 1.2;
    }
    h3 {
      margin-top: 0;
      font-size:  1.25rem;
      line-height: 1.2;
    }
  }
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
`;

const LikesRate = styled.div`
  position: relative;
  width: 10rem;
  height: 1rem;
  margin: 0 1rem;
  border-radius: .5rem;
  background: ${palette.cyan[0]};
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: ${LIKES_RATE * 10}rem;
    height: 1rem;
    border-radius: .5rem;
    background: ${palette.cyan[2]};
  }
`;

const TextContainer = styled.div`
  min-height: 30rem; 
  border-top: solid 2px ${palette.gray[2]};
  border-bottom: solid 2px ${palette.gray[2]};
`
const Recommendation = styled.div`
  display: flex;
  width: fit-content;
  margin: 1rem auto;
  button {
    padding: 0 .5rem;
    color: ${palette.black};
    font-size: 1.125rem;
    font-weight: bold;
  }
  button + button {
    margin-left: 1.5rem;
  }
  .likes {
    svg {
      color: ${palette.cyan[2]};
    }
  }
  .dislikes {
    svg {
      color: ${palette.magenta[0]};
    }
  }
`