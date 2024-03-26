import React from 'react'
import NavBar from '../components/NavBar'
import Button from '@mui/material/Button';
import Introduction from './introduction/Introduction';
import Curriculum from './curriculum/Curriculum';
import styles from './Home.module.css'
import Instructor from './instructor/Instructor';
import Campus from './campus/Campus';
import BottomNavBar from '../components/BottomNavBar';



export default function Home() {
  return (
    <>
        <NavBar/>
        <BottomNavBar/>
       <div className={styles.home}>
       <h1>
       <hr/>
       <br/>
       India’s Ivy League <br/>
       for Computer  <br/>
       Science Education <br/>
       Undergraduate Programme delivered by 100+ <br/>
        leaders from Google, Microsoft, Uber etc.  <br/>
       </h1>

       <Button variant="contained" color="error">
        Apply Now
      </Button>

      <div id="introduction">
        <Introduction />
      </div>
      <div id="curriculum">
        <Curriculum />
      </div>
      <div id='instructor'>
        <Instructor/>
      </div>
      <div id='campus'>
        <Campus/>
      </div>

       </div>

    </>
  )
}
