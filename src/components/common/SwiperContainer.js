import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SwiperContainer = (props) => {
  return (
    <>
      <SwiperBlock>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
        >
          {props.content.map((el, index) => (
            <SwiperSlide key={index}>{el.title}</SwiperSlide>
          ))}
        </Swiper>
      </SwiperBlock>
    </>
  );
}
export default SwiperContainer;