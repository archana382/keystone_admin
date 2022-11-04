import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import calendarAction from '../action/calendarAction'
import * as calendarAction from '../action/calendarAction'

import moment from 'moment'

import CalendarNav from '../Calendar/CalendarNav'

class CalendarNavContainer extends Component {
  render () {
    const { currentMonthIndex, actions } = this.props
    const currentMonthTitle = moment().startOf('month').add(currentMonthIndex, 'month').format('MMMM YYYY')

    return (
      <CalendarNav
        nextMonthAction={actions.nextMonth}
        prevMonthAction={actions.prevMonth}
        currentMonthTitle={currentMonthTitle}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentMonthIndex: state.calendar.currentMonthIndex
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(calendarAction, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarNavContainer)
