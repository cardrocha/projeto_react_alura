import React, { Component } from 'react'
import Slider from 'react-slick'
import { Container } from './styles'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    return (
      <Container>
        <h2> Populares </h2>
        <Slider {...settings}>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/4eXq4mTJe7Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/oVUmSAJa3Xo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/hOQvnWK8Lsc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/h4zXxj4DmdA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/xQrSg9QFYuM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/5Mfo5dQ0qkQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/C99YikHfSKs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/ZNR4gzzPiuk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
          <div>
            <h3>
              <iframe
                src="https://www.youtube.com/embed/xKNkjFC2APo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </h3>
          </div>
        </Slider>
      </Container>
    )
  }
}
