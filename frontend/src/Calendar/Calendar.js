import React, { Component } from 'react'

import CalendarNavContainer from '../containers/CalendarNavContainer'
import CalendarHeader from './CalendarHeader'
import SideBar from '../pages/SideBar'
import CalendarMonthContainer from '../containers/CalendarMonthContainer'
import './Calendar.css'

class Calendar extends Component {
  render () {
    return (
      <div className='calendar'>
        <SideBar/>
        <main id="main" className="main">

            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Calendar</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
        </main>
        <div className='container'>
          <CalendarNavContainer />
        </div>
        <div className='container2'>
          <CalendarHeader />
        </div>
        <div className='container3'>
          <CalendarMonthContainer />
        </div>
        
      </div>
    )
  }
}

export default Calendar
