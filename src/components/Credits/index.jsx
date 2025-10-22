import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./styles";
import { getImagens } from "../../utils/getImagens";

function Credits({ credits }) {
  return (
    <Container>
      {credits && (
        <>
          <p>{"Creditos"}</p>
          <Swiper
            grabCursor
            spaceBetween={10}
            slidesPerView={"auto"}
            className="swiper"
          >
            {credits.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={getImagens(item.profile_path)} alt={item.name} />
                <span>{item.name}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </Container>
  );
}

export default Credits;
