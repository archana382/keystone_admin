import React, { Component } from 'react'
import SideBar from '../pages/SideBar'


class Completed extends Component {
  render () {
    return (

      <div className='container'>
        <SideBar/>
        <main id="main" className="main">

            <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">New Student</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
            </div>
        </main>
      </div>
    )
  }
}

export default Completed
