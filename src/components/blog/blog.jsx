import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import 'swiper/swiper-bundle.css'
// Assets
import Preview01 from "../../assets/blog/story01/preview.jpg";
import Preview02 from "../../assets/blog/story02/preview.jpg";
import Preview03 from "../../assets/blog/story03/preview.jpg";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Vivienda unifamiliar",
        description: "Mar del Plata, Buenos Aires, Argentina"
      },
      {
        image: Preview02,
        id: "2",
        title: "Centro integrador comunitario",
        description: "Chimbas, San Juan, Argentina"
      },
      {
        image: Preview03,
        id: "3",
        title: "Vivienda en altura y locales comerciales",
        description: "Mar del Plata, Buenos Aires, Argentina"
      }
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="Últimos trabajos." />
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
