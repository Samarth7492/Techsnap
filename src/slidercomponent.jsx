import React, { useState } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./timeline.css";
import "./global.css";
import "./timeline2.css";
import "./more.css";
import "./slidercomponent.css"

const TrustedAuthors = () => {
    const [authors, setAuthors] = useState([
      { name: 'Saketh 1', image: './assets/Avatar.svg', link: '##' },
      { name: 'Saketh 2', image: './assets/Avatar.svg', link: '##' },
      { name: 'Saketh 3', image: './assets/Avatar.svg', link: '##' },
      // Add more authors here
    ]);
  
    // Sort the authors array by name
    const sortedAuthors = authors.sort((a, b) => a.name.localeCompare(b.name));
  
    return (
      <div className="max_width_section">
        <div className="trusted-heading">
          <h2>Verified and trusted</h2>
        </div>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
          }}
        >
          {sortedAuthors.map((author, index) => (
            <SplideSlide key={index} className="rectangle-card">
              <div className="author_profile_pic">
                <img src={author.image} alt="person" />
              </div>
              <h1>{author.name}</h1>
              <a href={author.link}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  id="link"
                  alt="person"
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  };
  
  export default TrustedAuthors;
