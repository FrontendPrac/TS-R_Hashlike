import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { slideContent } from "recoil/atom";

// 다음 화살표 컴포넌트
const NextArrow = (props: NextArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

// 이전 화살표 컴포넌트
const PreviousArrow = (props: PreviousArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

// 슬라이드 컴포넌트
const Slide = () => {
  const [content, setContent] = useRecoilState(slideContent);

  // 슬라이더 커스텀
  const settings = {
    slidesToShow: 1, // 한번에 보이는 슬라이드 갯수
    slidesToScroll: 1, // 한번에 넘어가는 슬라이드 갯수
    speed: 1000, // 슬라이드 넘어갈때 걸리는 시간
    nextArrow: <NextArrow />, // 다음 화살표 옵션
    prevArrow: <PreviousArrow />, // 이전 화살표 옵션
  };

  return (
    <SlideContainer>
      <Slider {...settings}>
        <SlideContent>{content[0]}</SlideContent>
        <SlideContent>{content[1]}</SlideContent>
        <SlideContent>{content[2]}</SlideContent>
      </Slider>
    </SlideContainer>
  );
};

export default Slide;

const SlideContainer = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  width: 100px;
  height: 100px;
`;

const SlideContent = styled.div`
  padding-left: 50%;
  padding-right: 50%;
  background-color: pink;
  line-height: 100px;
`;
