import React, { useState } from 'react'
import "./style.css"
const Slider = () => {
  const increament=()=>{
 if(show==3){
  setshow(1)
 }
 else{
  setshow(show+1)
 }
  }
  const decreament=()=>{
    if(show==1){
      setshow(3)
      
    }
    else{
      setshow(show-1)
    }
  }
  const[show,setshow]=useState(1);
  
  
  return (
<>
<div className='carousel'>
  <div className='heading'>
<h2>Explore stays in trending destinations</h2>
</div>
<div class="main-carousel">
  <button className='butn' onClick={decreament}>&lt;</button>
 {
  
  show==1?<>
   <div onClick={()=>window.open("https://www.orbitz.com/Hotel-Search?adults=2&destination=Eastbourne%2C%20England%2C%20United%20Kingdom&endDate=2023-12-02&regionId=4629&semdtl=&sort=RECOMMENDED&startDate=2023-12-01&theme=&useRewards=false&userIntent=","_blank")} class="carousel-cell">
    <div  className='slide-images'>
      <img  src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOkbk45HAze_9rzo8EsM0WRjCdRWhIaMKmw&usqp=CAU" alt="" />
    </div>
    <div className='slide-details'>
      <h6>Eastbourne</h6>
      <p>United Kingdom</p>
    </div>
  </div>
  <div onClick={()=>window.open("https://www.orbitz.com/Hotel-Search?adults=2&destination=Ramnagar%2C%20Uttarakhand%2C%20India&endDate=2023-12-02&regionId=6049981&semdtl=&sort=RECOMMENDED&startDate=2023-12-01&theme=&useRewards=false&userIntent=","_blank")} class="carousel-cell">
  <div  className='slide-images'>
    <img src=" https://mediaim.expedia.com/destination/1/a05ff37e4da759689430321248e304e8.jpg " />
  </div>
    <div className='slide-details'>
      <h6>Ramnagar</h6>
      <p>India</p>
    </div>
  </div>
  <div class="carousel-cell">
  <div  className='slide-images'>
    <img src="https://mahabaleshwarbooking.in/assets/images/halens_point.jpg" alt="" />
  </div>
    <div className='slide-details'>
      <h6>Mahabalesvar</h6>
      <p>India</p>
    </div>
  </div>
  </>:show==2?
  <>
  
  <div class="carousel-cell">
  <div  className='slide-images'>
    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/98000/98156-Gun-Hill.jpg" alt="" />
  </div>
    <div className='slide-details'>
      <h6>Mussoorie</h6>
      <p>India</p>
    </div>
  </div>
  <div class="carousel-cell">
  <div  className='slide-images'>
    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/88000/88565-Danbury-And-Vicinity.jpg" alt="" />
  </div>
    <div className='slide-details'>
    <h6>Danbury</h6>
    <p>United states of America</p>
    </div>
  </div>
  <div class="carousel-cell">
  <div  className='slide-images'>
    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXmHaHvbacrJJUVQugY5A1ve_a3pCAxjQLQ&usqp=CAU" alt="" />
  </div>
    <div className='slide-details'>
      <h6>Manali</h6>
      <p>India</p>
    </div>
  </div>
  
  </>:
  <>
   
   <div class="carousel-cell">
  <div  className='slide-images'>
    <img src=" https://mediaim.expedia.com/destination/2/1a88157ba7c0bedb53ca0f1af6ad69fe.jpg" alt="" />
  </div>
    <div  className='slide-details'>
      <h6>Istanbul</h6>
      <p>Turkiye</p>
    </div>
  </div>
  <div class="carousel-cell">
  <div className='slide-images'>
    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/72000/72395-Shimla-And-Vicinity.jpg" alt="" />
  </div>
    <div className='slide-details'>
    <h6>Shimla</h6> 
    <p>India</p> 
      </div>
  </div>
  <div class="carousel-cell">
  <div  className='slide-images'>
    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXmHaHvbacrJJUVQugY5A1ve_a3pCAxjQLQ&usqp=CAU" alt="" />
  </div>
    <div className='slide-details'>
      <h6>Manali</h6>
      <p>India</p>
    </div>
  </div>
  
  
  </>
 }
 <button className='butn'  onClick={increament}>&gt;</button>
 
 
</div>
</div>
</>
  )
}

export default Slider;