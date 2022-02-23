import React from 'react';
import './Home.css';
import Banner from './Banner'
//import { Card } from '@mui/material';
import Card from './Card'

function Home() {
  return (
    <div className='home'> 
        <Banner />
        <div className='home_section'>
          <Card
          src="https://images.chesscomfiles.com/uploads/v1/article/27319.746c2259.668x375o.c6cf8543e2d5@2x.png"
          title="Online Experiences"
          description="Unique Activities we can do together, led by a world of hosts."/>
          <Card
          src="https://thred.com/wp-content/uploads/2021/02/Tecla_3d-printed-earth-house-by-Crane-WASP_living-night-1920x1120.jpg"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."/>
          <Card 
          src="https://i.pinimg.com/736x/b5/3a/20/b53a20da51ac60082b679f0148d5c980--coty-homedesign.jpg"
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."/>
        </div>  
        <div className='home_section'>
          <Card 
          src="https://assets.blog.hgtv.ca/wp-content/uploads/2018/02/02160712/plant-filled-living-rooms.jpg"
          title="3 Bedroom Flat in Miami"
          description="Superhost with a stunning view of the beachside in sunny Miami."
          price="$460/night"/>
          <Card
          src="https://robbreport.com/wp-content/uploads/2021/04/5-13.jpg?w=1000"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse."
          price="$350/night"/>
          <Card
          src="https://st.hzcdn.com/simgs/pictures/bedrooms/nice-bedroom-castlio-interior-and-design-img~4b2169b5071e3ea4_4-5024-1-5f460b0.jpg"
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby."
          price="$70/night"/>
        </div>
    </div>
  )
}

export default Home