import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './scss/Slider.scss'

const images = [
  { id: 1, img: "https://img.pikbest.com/templates/20240710/banner-sale-for-fashion-shop-selling-children-27s-clothes-_10660315.jpg!sw800" },
  // { id: 2, img: "https://intphcm.com/data/upload/banner-thoi-trang-nhi.jpg" },
  { id: 3, img: "https://intphcm.com/data/upload/banner-thoi-trang-con-nit.jpg" },
]

function Slider() {
  return (
    <div className="container-slider container">
      <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={true} // Hiện nút điều hướng
            pagination={{ clickable: true }} // Hiện dots
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]} // Thêm modules
        >
        {images.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.img} alt={`Slider ${item.id}`} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider