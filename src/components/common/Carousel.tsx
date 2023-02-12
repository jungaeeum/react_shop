import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as CarouselWrapper } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

import digitalImage from '/public/img/img_shop_digital.jpeg';
import fashionImage from '/public/img/img_shop_fashion.jpeg';
import groceryImage from '/public/img/img_shop_grocery.jpeg';

interface ISlide {
  title: string;
  content: string;
  image: string;
  path: string;
}

function Slide({ title, content, image, path }: ISlide) {
  return (
    <div className="carousel-slide">
      <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">{title}</h2>
        <p className="my-2 text-white">{content}</p>
        <Link to={path} className="btn btn-sm lg:btn-md mt-3">
          바로가기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <img src={image} />
    </div>
  );
}

const Carousel = () => {
  return (
    <>
    <CarouselWrapper
      className="carousel-container"
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
    >
      <Slide
        title="물빠진 청바지!"
        content="이제 막 도착한 패션 청바지를 구경해 보세요."
        image={fashionImage}
        path="/fashion"
      />
      <Slide
        title="신속한 업무처리!"
        content="다양한 디지털 상품을 둘러보세요."
        image={digitalImage}
        path="/digital"
      />
      <Slide
        title="신선한 식품!"
        content="농장 직배송으로 더욱 신선한 식료품을 만나보세요."
        image={groceryImage}
        path="/grocery"
      />
    </CarouselWrapper>
    </>
  );
};

export default Carousel;