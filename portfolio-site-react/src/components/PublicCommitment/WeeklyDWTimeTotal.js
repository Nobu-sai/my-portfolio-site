import React, { Component } from 'react'
import * as moment from 'moment'

import './WeeklyDWTimeTotal.css'
import { commitmentRecordDB } from '../../firebase.js';





// Key Logic 
// : For MANIPULATING Date and Time & Weekly DW Time are copied from: 'commitment-record App' 
// : For visibility of DW time, the style is cotroleed by the state (visibilityClassName).

export default class CommitmentRecord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weeklyDWTimeTotal: "",   
      visibilityClassName: "visible"   
    }
    this.props = {
    }


  }  

  componentDidMount() {
    this.calculateWeeklyDWHoursAndMinutesTotal()
    this.handleTimeVisibility()
  }

  // *** For MANIPULATING Date and Time ***

  formatDate (date) {	// formats a JS date to 'yyyy-mm-dd'
  // date Param 
    // = When the Component did Mount, it is Passed from this.ccalculateCurrentWeeklyTotalTime()
    // = When the date input changed, Passed from <DropdownDate>/onDateChange Event Handler Property 
    var d = new Date(date),   
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = '' + d.getFullYear();
      // console.log(month)
      // -> 1
      // console.log(typeof(month))
      // -> string
      
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
    // This is String Data Type
    // => CAN be used directly as the Firebase/Firestore/Document names
  }


  // *** Weekly DW Time ***
  calculateWeeklyDWHoursAndMinutesTotal() {  
    let weeklyDWHourTotal = 0;
    let weeklyDWMinutesTotal = 0;
    
    let weekDays = this.calculateTheCurrentWeek()

    // FECTH the Document MATCHING to the weekly dates.
    weekDays.map((weekDay)=>{
      commitmentRecordDB.collection('commitment-record').doc(weekDay).get()
      .then((res)=>{
        // console.log(res.data()['Date'])
        // console.log(res.data()['DW Hour'])
        weeklyDWHourTotal += parseInt(res.data()['DW Hour']) 
        // console.log("calculateWeeklyDWHoursAndMinutesTotal()/weeklyDWHourTotal", weeklyDWHourTotal) 

        weeklyDWMinutesTotal += parseInt(res.data()['DW Minute'])  
        // console.log("calculateWeeklyDWHoursAndMinutesTotal()/weeklyDWMinutesTotal", weeklyDWMinutesTotal)

        // console.log("weeklyDWHourTotal: ", weeklyDWHourTotal)
        let weeklyDWHourTotalInMinutes = this.convertDWHoursIntoMinutes(weeklyDWHourTotal)
        this.calculateWeeklyDWTimeTotal(weeklyDWHourTotalInMinutes, weeklyDWMinutesTotal)

      })  
      .catch((error)=> {
        console.log(error)
      })

    })

  }  

    
  calculateTheCurrentWeek() { 
    let dates = [];
    let formatedDates = [];

    // Get the DATES in the CURRENT Week.
    var startOfWeek = moment().startOf('isoWeek');
    var endOfWeek = moment().endOf('isoWeek');    
    var day = startOfWeek;
    
    while (day <= endOfWeek) {
        // console.log(day)
        dates.push(day.toDate());
        day = day.clone().add(1, 'd');
    }
    

    // Convert each date into the SAME format as the date saved in the Firestore (YYYY-MM-DD). 
    dates.map((date)=> {
      formatedDates.push(this.formatDate(date))
    })

    return formatedDates;
  }

  convertDWHoursIntoMinutes(weeklyDWHourTotal) {
  //  console.log("convertDWHoursIntoMinutes()/weeklyDWHourTotal: ", weeklyDWHourTotal)
    let weeklyDWHourTotalInMinutes = weeklyDWHourTotal * 60;
  //  console.log("convertDWHoursIntoMinutes()/weeklyDWHourTotalInMinutes", weeklyDWHourTotalInMinutes)

  return weeklyDWHourTotalInMinutes;
  }

  calculateWeeklyDWTimeTotal(weeklyDWHourTotalInMinutes, weeklyDWMinutesTotal) {
    
    // console.log("...A Day")
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWHoursTotalInMinutes: ", weeklyDWHourTotalInMinutes)
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWMinutesTotal: ", weeklyDWMinutesTotal)
    let weeklyDWTimeTotalInMinutes = weeklyDWHourTotalInMinutes + weeklyDWMinutesTotal;
    // let weeklyDWTimeTotalInMinutes = 71; 
      // Output: 1:11
    // let weeklyDWTimeTotalInMinutes = 1441; 
      // Output: 24:01
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWTimeTotalInMinutes: ", weeklyDWTimeTotalInMinutes)
    

    // Goal = Minutes (weeklyDWTimeTotalInMinutes) into HH:MM format.
    // Src: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-51.php
    let weeklyDWTimeTotalOfHours = Math.floor(weeklyDWTimeTotalInMinutes / 60)
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWTimeTotalOfHours (= weeklyDWTimeTotalInMinutes / 60): ", weeklyDWTimeTotalOfHours, "Hours") 

      // Goal = Get the Decimals as Minute Remainder from Division for hours (weeklyDWTImeTotalOfHours).
      // Src: https://stackoverflow.com/a/4512328/13710739
      let weeklyDWTimeTotalOfHoursWithDecimal = weeklyDWTimeTotalInMinutes / 60; 
      let weeklyDWDecimal = weeklyDWTimeTotalOfHoursWithDecimal - weeklyDWTimeTotalOfHours;
      // console.log("weeklyDWDecimal: ", weeklyDWDecimal)
    
    // Goal = Decimals into Minutes.  
    let weeklyDWTimeTotalOfMinutes = "" + Math.round(weeklyDWDecimal * 60);
      // Allows concatenating 0 before the minute of a SINGLE number. 
    if(weeklyDWTimeTotalOfMinutes.length < 2) {
      weeklyDWTimeTotalOfMinutes = "0" + weeklyDWTimeTotalOfMinutes
      // console.log(weeklyDWTimeTotalOfMinutes)
    }  
    
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWTimeTotalOfMinutes: ", weeklyDWTimeTotalOfMinutes, "Minutes") 

    // Goal = Concatenate Hours and Minutes into HH:MM format. 
    let weeklyDWTimeTotal = `${weeklyDWTimeTotalOfHours}:${weeklyDWTimeTotalOfMinutes}`;
    // console.log("calculateWeeklyDWTimeTotal()/weeklyDWTimeTotal: ", weeklyDWTimeTotal)
    // console.log("Date Type of weeklyDWTimeTotal: ", typeof weeklyDWTimeTotal)

    // Goal = Update State with the result Weekly DW Time Total in HH:MM to 
    this.setState({
      weeklyDWTimeTotal: weeklyDWTimeTotal
    })
    
  }

  // *** DW time visibility ***
  handleTimeVisibility() {
    setInterval(()=>{
      if(this.state.visibilityClassName == "visible") {
        this.setState({
          visibilityClassName: "invisible"
        })
        console.log(this.state.visibilityClassName)
      } else {
        this.setState({
          visibilityClassName: "visible"
        })
      }
    }, 500)
  }


    
  render() {
    return (
      <div className="weeklyDWtime">
        <div>
          <span className={`DWtime ${this.state.visibilityClassName}`}>
            {this.state.weeklyDWTimeTotal ? this.state.weeklyDWTimeTotal : "0:00"}
          </span> 
        / 15:00</div>
      </div>      
    )
  }
}
