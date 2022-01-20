

import Slider from "react-slick";


export default function CenterMode({images}) {
  
const cssstyle = `
.slide_container {
  position: relative;
  width: 100%;
  height:100%;
  margin: 0 auto;
  padding: 50px 100px;
   
}
.slick-next {
  width: 40px;
  height: 40px;
  right: -50px;

}

  .slick-prev {
    width: 40px;
    height: 40px;
    left: -50px;}

.slide_img {
    width: 24vw;
    height:400px;
    margin : auto;
    color: #fff;
    border-radius: 30px;

}

.slick-prev { z-index:1;}

.slick-next:before, .slick-prev:before {
  font-size:40px;
  opacity: 9.75;
    color: #e30613;

    
}
.center .slick-center img {
    color: #e67e22;
    opacity: 1;

}
.center img {
    transition: all .3s ease;
}
`
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "90px",
  slidesToShow: 3,
  speed: 500 ,

};

  return (
<div className="slide_container">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<style>{cssstyle}</style>
				<Slider {...settings}>
        {images.map((item) => (
        <div key={item.id}>
          <img className="slide_img" src={item.src}  alt={item.alt} />
        </div>
      ))}
				</Slider>
			</div>

  );
}

