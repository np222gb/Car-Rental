import axios from "axios";

const CARSBOOKED_API_BASE_URL = "http://localhost:8080/api/v1/carsbooked";

class CarsBookedService {
 
  getCarsBookings(){
    return axios.get(CARSBOOKED_API_BASE_URL);
  }

  createCarBooking(carsbooked){
   return axios.post(CARSBOOKED_API_BASE_URL, carsbooked);
  }
  
}
export default new CarsBookedService();