import React from "react"
import '../css/style.css'
import bg from '../images/home-bg.png'
import { NavLink } from 'react-router-dom';
export default function Home(){
    const provideServices = ['Rental',"Your Bike's Information",'Info of Spare Parts','Everything About Your Bike']
    const [value, setValue] = React.useState(provideServices[0])

    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * provideServices.length );
        setValue(provideServices[randomNumber]);
    }, 2000);
    return (
        <div className="row justify-content-center">
            <img className="home-bg" src={bg} />
            <div className="home--content col col-11 mx-auto">
                <span className="ps-4 display-6 temp--data fw-normal">We Are </span><br/>
                <span className="ps-4 display-5 provide--data fw-normal text-info">The Biker's Portal </span><br/>
                <span className="ps-4 h4 temp--data fw-bold text-white">And</span>
                <span className="ps-2 h2 temp fw-lighter text-white">We Provide <br/> <span className='display-4 ps-4 provide--data'>{value}</span></span><br/>
                <NavLink className="ms-4 btn btn-outline-primary mt-4" to='/services'>Get Started</NavLink>
            </div>
        </div>
    )
}