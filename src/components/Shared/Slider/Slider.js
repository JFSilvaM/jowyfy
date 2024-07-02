import { map } from "lodash";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";
import { Icon, Image } from "semantic-ui-react";
import { usePlayer } from "../../../hooks";
import "./Slider.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  centerMode: true,
  adaptiveHeight: true,
};

export const Slider = (props) => {
  const { data, basePath, song } = props;

  const [size, setSize] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);

  const itemRef = useRef();

  const { playSong } = usePlayer();

  useEffect(() => {
    if (itemRef.current) {
      setSize(itemRef.current.clientWidth);
    }
  }, [loadComplete]);

  return (
    <Slick {...settings} className="slider">
      {map(data, (item) => {
        if (song)
          return (
            <div
              key={item.id}
              className="slider__item"
              onClick={() => playSong(item, item.image)}
              ref={itemRef}
              onLoad={() => setLoadComplete(true)}
            >
              <div className="slider__item-block-play">
                <Image
                  src={item.image}
                  alt={item.name}
                  style={{ height: size }}
                />

                <Icon name="play circle outline" />
              </div>

              <h3>{item.name}</h3>
            </div>
          );

        return (
          <Link
            to={`/${basePath}/${item.id}`}
            key={item.id}
            className="slider__item"
            ref={itemRef}
            onLoad={() => setLoadComplete(true)}
          >
            <Image src={item.image} alt={item.name} style={{ height: size }} />

            <h3>{item.name}</h3>
          </Link>
        );
      })}
    </Slick>
  );
};
