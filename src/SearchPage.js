import React from 'react'
import './SearchPage.css'
import {Button} from "@mui/material";
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>
          62 stays • 26 August to 30 August • 2 Guest
        </p>
        <h1>Stays Nearby</h1>

        <Button variant="outlined"> Cancellation Flexibility</Button>
        <Button variant="outlined"> Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>

      </div>

      <SearchResult 
      img="https://res.cloudinary.com/apartmentlist/image/fetch/f_auto,q_auto,t_renter_life_article/https://images.ctfassets.net/jeox55pd4d8n/FDYjxboAF7VKSYJl6hfj4/73e610876d80a77606d82ff48a833534/Apartment_List_083-1-1024x683.jpg"
      location="Private room in center of New York"
      title="Stay at this spacious House"
      description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
      star={4.73}
      price="$30 / night"
      total="$117 total"/>

      <SearchResult 
      img="http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-apartment-decor-inspiration.jpg"
      location="Private room in center of New York"
      title="Luxury Studio Apartment"
      description="4 guest • 2 bedroom • 2 bed • 2.5 shared bathrooms • Wifi • Kitchen • Living Room"
      star={4.95}
      price="$80 / night"
      total="$320 total"/>  

<SearchResult 
      img="https://2jrsul422l1h30k2za1f5dcc-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/1001-S-State-40.jpg"
      location="Private room in center of New York"
      title="Luxury Studio Apartment"
      description="3 guest • 1 bedroom • 1 bed • 2 bathrooms • Wifi"
      star={4.80}
      price="$65 / night"
      total="$260 total"/>  

    </div>
  )
}

export default SearchPage