import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DatePicker from "react-datepicker" 
import 'react-datepicker/dist/react-datepicker.css'
import carsBookedService from '../../services/carsBookedService';
import './rentcar.css'


class RentCar extends Component{
    constructor(props) {
        super(props)
       this.state = {
            car: '',
            pickDate: '',
            returnDate: '',
            driverName: '',
            age: '',
            price:'',
            msg: ''  
        }
        this.changeCarHandler = this.changeCarHandler.bind(this);
        this.handlePickDate = this.handlePickDate.bind(this);
        this.handleReturnDate = this.handleReturnDate.bind(this);
        this.changeDriverNameHandler = this.changeDriverNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.saveCarBooking = this.saveCarBooking.bind(this);
    }

    changeCarHandler = (event) =>{
        this.setState({car: event.target.value})
    }
    
        handlePickDate = (pickDate) =>{
        this.setState({pickDate:pickDate});
        }


         handleReturnDate = (returnDate) =>{
             this.setState({returnDate:returnDate});
        }

         changeDriverNameHandler = (event) =>{
             this.setState({driverName: event.target.value});
    }

    changeAgeHandler = (event) =>{
        this.setState({age: event.target.value})
    }

    saveCarBooking = (e) =>{

        this.state.price = calPrice(this.state.car, this.state.pickDate, this.state.returnDate)

        if(this.state.car === "" || this.state.age=== "" || this.state.driverName=== "" || this.state.pickDate=== "" 
        || this.state.returnDate=== "" || this.state.driverName === '[0-9]+' )
        {
            alert("Please enter all the details!");
        }
        else if(checkAge(this.state.age) === true){
            alert("Age must be greater then 18!")
        }
        else if(stringContainsNumber(this.state.driverName) === true){
              alert("Name should not have number!")    
        }

        else if(Math.sign(this.state.price) === -1){
             alert("The Return Date must be after the Pick-Up Date!")
        }

        else{ 
            e.preventDefault();
        this.state.price = calPrice(this.state.car, this.state.pickDate, this.state.returnDate)
        const message = "Booking successful! The cost is " + this.state.price + " SEK";
        let carsbooked = {car: this.state.car, pickDate: this.state.pickDate, returnDate: this.state.returnDate, driverName: this.state.driverName.charAt(0).toUpperCase() + this.state.driverName.slice(1), price: this.state.price};
        console.log('carsbooked => ' + JSON.stringify(carsbooked));
        
        carsBookedService.createCarBooking(carsbooked).then (res => {
            toast.success(
                message,{hideProgressBar:true}
            )
            this.setState({ car: '', pickDate: '', returnDate: '', driverName: '', age: '', price:''})
			this.setState({ show: false })
        })
        }
    }


    render(){
        return (
            <div className='add-container'>
                <p className='pop-up'>{this.state.msg}</p>
                 <h3> RENT A CAR </h3>
                <div className='add'>
                 <div className='add-form' >
                    <form id='contact'>
                        <div>
                            <div>
                                <select id='car' value={this.state.car} onChange={this.changeCarHandler}>
                                    <option value=''> --Select a Car-- </option>
                                    <option value='Volvo'>Volvo S60, 1500 kr/day</option>
                                    <option value='Volkswagen'>Volkswagen Golf, 1333kr/day</option>
                                    <option value='Ford Mustang'>Ford Mustang, 3000kr/day</option>
                                    <option value='Ford Transit'>Ford Transit, 2400kr/day</option>
                                </select>
                            </div>
                            <br/>
                            <div>
                            <label id="datestyle">  Pick-Up Date:  </label>
                            <DatePicker id= "pickDate" placeholder = "Pick up date" minDate={new Date()} isClearable 
                            dateFormat='yyyy/MM/dd' onChange={this.handlePickDate} selected={this.state.pickDate} value={this.state.pickDate}  />
                            <br/>
                            <br/>
                            <label id="datestyle"> Return Date: </label>
                            <DatePicker id= "returnDate" placeholder = "Return date" minDate={new Date()} isClearable
                            dateFormat='yyyy/MM/dd' onChange={this.handleReturnDate} selected={this.state.returnDate} value={this.state.returnDate} />
                            </div>
                            <br/>

                            <label id="datestyle">Name of Driver: </label>
                            <label>
                                  <input type='text' name='driverName' id='driverName' pattern="^[A-Za-z \s*]+$" placeholder='Name' value={this.state.driverName}
                                    onChange={this.changeDriverNameHandler} required
                                />
                            </label>

                            <label id="spacing">Age: </label>
                            <label >
                            <input type="number" id="age" min = "18" placeholder= "Must be above 18 " value={this.state.age} onChange={this.changeAgeHandler} required />
                            </label>
                             <div>
                                <button className='btn'id='btn-submit' type="submit" onClick={this.saveCarBooking}>Submit</button>
                            </div>
                        </div>
                    </form>
                    
                    </div>   
                </div>
                <ToastContainer />
            </div>
        );
    }
}

function checkAge(_input){
    if(_input < 18){
        return true;
    }
    else
    return false;
}

function stringContainsNumber(_input){
  let string1 = String(_input);
  for( let i = 0; i < string1.length; i++){
      if(!isNaN(string1.charAt(i)) && !(string1.charAt(i) === " ") ){
        return true;
      }
  }
  return false;
}  

function calPrice(car, pickDate, returnDate) {

            let diff = returnDate.getTime() - pickDate.getTime();
            let msInDay = 1000 * 3600 * 24;

            let days = diff/msInDay

            console.log(days)

            if(car === 'Volvo'){
                return Math.round(days * 1500)
            } else if(car === 'Volkswagen'){
                return Math.round(days * 1333)
            } else if(car === 'Ford Mustang'){
                return Math.round(days * 3000) 
            } else if(car === 'Ford Transit'){
                return Math.round(days * 2400) 
            }


}

export default RentCar;