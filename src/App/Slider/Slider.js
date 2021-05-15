import React from "react"

import '../../common/style/base.css'
import './slider.css'
import slider_inf_img_m1 from './img/slider-1.jpg'
import slider_inf_img_m2 from './img/slider-2.jpg'
import slider_inf_img_m3 from './img/slider-3.jpg'
import slider_inf_img_m4 from './img/slider-4.jpg'
import slider_inf_img_m5 from './img/slider-5.jpg'
import slider_inf_img_m6 from './img/slider-6.jpg'
import slider_inf_img_m7 from './img/slider-7.jpg'
import slider_inf_img_m8 from './img/slider-8.jpg'


import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
  <>
    <section className="slider">
      <div className="container">
        <div className="row slider-row">
          <div className="col-md-12 col-xs-12">
             <AutoplaySlider
    play={true}
    cancelOnInteraction={false} 
    interval={3000}>
    <div>
       <img src={slider_inf_img_m1}
                    className="slider-img"
                    alt="..."
                  />
    </div>
    <div>
      <img
                    src={slider_inf_img_m2}
                    className="slider-img"
                    alt="..."
                  />
    </div>
    <div>
      <img
                    src={slider_inf_img_m3}
                    className="slider-img"
                    alt="..."
                  />
                  </div>
    <div>
      <img
                    src={slider_inf_img_m4}
                    className="slider-img"
                    alt="..."
                  />
                </div>
                <div>
      <img
                    src={slider_inf_img_m5}
                    className="slider-img"
                    alt="..."
                  />
                </div>
                <div>
      <img
                    src={slider_inf_img_m6}
                    className="slider-img"
                    alt="..."
                    
                  />
                </div>
                <div>
      <img
                    src={slider_inf_img_m7}
                    className="slider-img"
                    alt="..."
                  />
                </div>
                <div>
      <img
                    src={slider_inf_img_m8}
                    className="slider-img"
                    alt="..."
                 
                  />
                  </div>
  </AutoplaySlider>

            
          </div>
        </div>
      </div>
    </section>

</>

)
}

export default Slider