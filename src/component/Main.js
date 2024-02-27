import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Slider from './sj_component/Slider';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';
import SizeInfo from './pjh/SizeInfo';
import { Branch } from './pyn/Branch'
import Useit from './pyn/Useit'
import Review from './pyn/ReviewSwiper'


function Main(props) {
    return (
        <div>
            
            <Slider />

            <Branch></Branch>

            <Review></Review>

            <SizeInfo></SizeInfo>

            <Useit></Useit>


            <Inquiry></Inquiry>

            <Partner></Partner>
        </div>
    );
}

export default Main;