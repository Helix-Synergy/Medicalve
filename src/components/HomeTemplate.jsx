import React from 'react'
import AboutUs from './AboutUs'
import PanelMembers from './PanelMembers'
import Orators from './Orators'
// import EventSchedule from './EventSchedule'
import Venue from './Venue'
import Partners from './Partners'
import Tracks from './Tracks'
import EventSchedule from './EventSchedule'
import Carousel from './BannersCarousel'


const HomeTemplate = () => {
  return (
    <>
    <AboutUs />
    <Carousel />
      <PanelMembers />
      <Tracks />
      <Orators />
      <EventSchedule height={50} name="View all" link='/world-mediclave-event-schedule' />
      {/* <EventSchedule /> */}
      <Venue />
      <Partners />
    </>
  )
}

export default HomeTemplate
