// src/pages/Committee.jsx

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Your custom CSS file
import '../css/Committee.css';

// Your data file
import { committeeMembers } from '../constants/committee';

// No longer need the getInitials helper function

function Committee() {
    return (
        <div id="committee" className="committee-container">
            <h2 className="committee-title">Meet the Committee</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {committeeMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            {/* --- THIS IS THE ONLY CHANGE --- */}
                            {/* Replace the div with an img tag */}
                            <img 
                                src={member.image} 
                                alt={`A portrait of ${member.name}`} 
                                className="committee-member-image" 
                            />
                            {/* ---------------------------------- */}
                            <h3>{member.name}</h3>
                            <h4>{member.role}</h4>
                            <p>{member.bio}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Committee;
