import { map } from "lodash";
import { Link } from "react-router-dom";
import Slick from "react-slick";
import { Image } from "semantic-ui-react";
import "./Slider.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  centerMode: true,
};

export const Slider = (props) => {
  const { data, basePath } = props;

  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => (
        <Link
          to={`/${basePath}/${item.id}`}
          key={item.id}
          className="slider__item"
        >
          <Image src={item.image} alt={item.name} />

          <h3>{item.name}</h3>
        </Link>
      ))}
    </Slick>
  );
};
