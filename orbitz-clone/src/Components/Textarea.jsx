import React from 'react'

const Textarea = () => {
  return (
    <div>
         <div className='textarea'  >
            <div className='textpart'>
                <div onClick={()=>{window.open(" https://www.orbitz.com/lp/lgbtq-gay-travel-hotels?rfrr=call-to-action.undefined.click")}} >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1tg9F3EjWa0NeTuPjeUWVZUcmqCsGnCu2denG6uO6RNbHPzobiowAz0Jaer3PYwISeI&usqp=CAU" alt="" />
                    
                </div>
                <div>
                    <h2>TRAVEL AS YOU ARE</h2>
                    <span>Find LGBTQ-welcoming hotels using our new search filter</span>
                </div>
            </div>
            <div onClick={()=>{window.open("https://www.orbitz.com/rewards ")}} className='textpart'>
            <div>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvOJ3p97G4rXGazwxMU90xrB5SrbfXn-fUyGbfNM&s" alt="" />
                    
                </div>
                <div>
                    <h2>BOOK MORE, GET MORE</h2>
                    <span> Good Things come to those who go.Earn Orbucks and travel perks.</span>
                </div>
            </div>
            <div className='textpart'>
            <div onClick={()=>{window.open("https://www.orbitz.com/member-discounts?rfrr=call-to-action.undefined.click")}}>
                    <img  src="https://e7.pngegg.com/pngimages/955/976/png-clipart-computer-icons-lock-symbol-choices-miscellaneous-logo-thumbnail.png" alt="" />
                    
                </div>
                <div>
                    <h2> GET INSIDER PRICES</h2>
                    <span>Become a member and get access to instant savings of 10% or moreon select hotels.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Textarea