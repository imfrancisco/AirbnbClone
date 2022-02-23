import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material';
// import Search from '@mui/icons-material/Search';
import Search from './Search';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSeach] = useState(false);


  return (
    <div className='banner'>
        <div className='banner__search'>

            {showSearch && <Search/> }
        <Button onClick={()=> setShowSeach(!showSearch)} className='banner_searchButton' variant='outlined'> {showSearch ? "Hide" : "Search Dates"} </Button>
        </div>

        <div className='banner_info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>
                Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>

            <Button onClick={()=> history.push('/search')} variant='outlined'> Explore Nearby</Button>
        </div>
    
    </div> 
  )
}

export default Banner 