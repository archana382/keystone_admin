import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calendarAction from '../action/calendarAction'

import CalendarMonth from '../Calendar/CalendarMonth'

const mapStateToProps = state => ({
  month: state.calendar.month
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(calendarAction, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarMonth)
