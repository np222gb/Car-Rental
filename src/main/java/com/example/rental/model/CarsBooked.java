package com.example.rental.model;
import javax.persistence.*;

@Entity
@Table(name = "carsbooked")
public class CarsBooked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "car")
    private String car;
    @Column(name = "driver_name")
    private String driverName;
    @Column(name = "pick_date")
    private String pickDate;
    @Column(name = "return_date")
    private String returnDate;
    @Column(name = "price")
    private String price;

    public CarsBooked(){
        super();
    }

    public CarsBooked (long id, String car, String driverName, String pickDate, String returnDate, String price){
        this.id = id;
        this.car = car;
        this.driverName = driverName;
        this.pickDate = pickDate;
        this.returnDate= returnDate;
        this.price = price;
    }

    public CarsBooked (String car, String driverName, String pickDate, String returnDate, String price){
        this.car = car;
        this.driverName = driverName;
        this.pickDate = pickDate;
        this.returnDate= returnDate;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCar() {
        return car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getPickDate() {
        return pickDate;
    }

    public void setPickDate(String pickDate) {
        this.pickDate = pickDate;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(String returnDate) {
        this.returnDate = returnDate;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

}
