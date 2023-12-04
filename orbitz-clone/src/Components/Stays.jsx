import React from 'react'
import "./style.css"

const Stays = () => {
  return (
    <div className='boxa'>
        <div className='boxb'>
              <div className='navc'>
                <p>Stays</p>
                <p>Flights</p>
                <p>Cars</p>
                <p>Packages</p>
                <p>Things to do</p>
                <p>Cruises</p>
              </div>
        </div>
        <div className='mainx'>
        <div className='staysd'>
            <div className='slow-nav'>
            <i class='bx bxs-location-plus'></i>
            <h4>Going to</h4>
            </div>
  
        </div>
        <div className='staysd'>
            <div className='slow-nav'>
            <i class='bx bxs-calendar'></i>
        <p>Dates</p><br/>

            </div>
       
        <h4>Dec 4-Dec 8</h4>
        </div>
        <div className='staysd'>
            <div className='slow-nav'>
            <i class='bx bx-user' ></i>
           <p>Travelers</p>
            </div>
       
        <h4> 2 Travelers, 1 room</h4>
        </div>
        <button className='btn'>Search</button>
        </div>
        <div className='checklist2'> 
            <div className='checkbox2'>
            <input type='checkbox'/>
            <h6>Add a flight</h6>
            </div>
            <div className='checkbox2'>
                <input type='checkbox'/>
                <h6>Add a car</h6>
            </div>
        </div>
       
    </div>
  )
}

export default Stays