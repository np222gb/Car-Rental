import { Component } from "react";
import carsBookedService from "../../services/carsBookedService";

import './overviewcars.css'


class OverviewCars extends Component{
    constructor(props) {
        super(props);

        this.state ={
                carsOverview: [],
        }
    }

 componentDidMount(){
    carsBookedService.getCarsBookings().then((res) => {
        this.setState({ carsOverview: res.data});
    })
    
 }

  costTotal = () =>{
              let totalCost = 0;
              
    for (let index = 0; index < this.state.carsOverview.length; index++){
        totalCost = totalCost+ Number(this.state.carsOverview[index].price)
    }
    console.log(totalCost)
    return totalCost;
        }
 

 render() {
    console.log(this.state.carsOverview)
        return (
           <div>
            <br/>
            <h3>CAR RENTAL LIST</h3>
            <div className='list'>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Driver Name</th>
                            <th>Car</th>
                            <th>Pick-Up Date</th>
                            <th>Return Date</th>
                            <th>Revenue (SEK)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.carsOverview.map(
                                eachCarOverview =>
                                <tr key = {eachCarOverview.id}>
                                    <td> { eachCarOverview.driverName} </td>
                                    <td> { eachCarOverview.car} </td>
                                    <td> { eachCarOverview.pickDate} </td>
                                    <td> { eachCarOverview.returnDate} </td>
                                    <td> { eachCarOverview.price} </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
             <h3>Summary</h3>
             <br/>
             <div>
				<a>The total revenue is {this.costTotal()} SEK </a> 
            </div>
            </div>
        );
    }
}


export default OverviewCars;