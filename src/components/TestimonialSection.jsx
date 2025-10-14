import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import TestimonialCard from "./cards/TestimonialCard";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const TestimonialSection = () => {
  const [swiperInstance, setSwiperInstance] = useState();

  return (
    <>
      <section className="center py-20 bg-no-repeat bg-cover bg-gradient-to-r from-0% from-white to-65% to-[#F2F5F3]">
        {/* Section Header */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-Primary uppercase">Testimonial</p>
            <h1 className="text-[40px] font-semibold ">
              What Our Customer Says
            </h1>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => {
                swiperInstance.slidePrev();
              }}
              size={"icon"}
              className={
                "bg-white text-black hover:bg-Primary hover:text-white cursor-pointer rounded-full"
              }
            >
              {" "}
              <ArrowLeft />{" "}
            </Button>
            <Button
              onClick={() => {
                swiperInstance.slideNext();
              }}
              size={"icon"}
              className={
                "bg-white text-black hover:bg-Primary hover:text-white cursor-pointer rounded-full"
              }
            >
              {" "}
              <ArrowRight />{" "}
            </Button>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-20">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            onSwiper={setSwiperInstance}
            autoplay
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
