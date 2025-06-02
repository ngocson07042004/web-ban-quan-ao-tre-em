import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './scss/Slider.scss'

const images = [
  { id: 1, img: "https://zkids.vn/images/promo/4/ZKIDS-BANNER.jpg" },
  { id: 2, img: "https://zkids.vn/images/promo/3/kidstyle1.jpg" },
]

function Slider() {
  return (
    <div className="container-slider container">
      <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
        >
        {images.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.img} alt={`Slider ${item.id}`}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider