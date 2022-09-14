import { useEffect, useRef, useState } from "react";
import Benefits from "./Benefits";

function RatingComponent() {
    const [discount, setDiscount] = useState(false)
    const [price, setPrice] = useState(8)
    const [views, setViews] = useState("10K")

    useEffect(()=>{
        if (price == 8) {
            setViews("10K")
        }else if(price == 12){
            setViews("50K")
        }else if(price == 16){
            setViews("100K")
        }else if(price == 24){
            setViews("500K")
        }else if(price == 36){
            setViews("1M")
        }
    }, )

    const sliderRef = useRef()

    useEffect(()=>{
       
            if (price == 8) {
                document.documentElement.style.setProperty('--percent', `10%`) 
                console.log(sliderRef.current);
            }else if(price == 12){
                document.documentElement.style.setProperty('--percent', `20%`) 
            }else if(price == 16){
                document.documentElement.style.setProperty('--percent', `30%`) 
            }else if(price == 20){
                document.documentElement.style.setProperty('--percent', `40%`) 
            }else if(price == 24){
                document.documentElement.style.setProperty('--percent', `60%`) 
            }else if(price == 28){
                document.documentElement.style.setProperty('--percent', `70%`) 
            }else if(price == 32){
                document.documentElement.style.setProperty('--percent', `80%`) 
            }else if(price == 36){
                document.documentElement.style.setProperty('--percent', `90%`) 
            }    
    })

    return ( 
        <section className="card-main">
            <div className="top-grid">
                <h2>{views} PAGEVIEWS</h2>

                <input 
                type="range"
                name="range" 
                ref={sliderRef}
                label = "input"
                min={8}
                max={36}
                step={4}
                value = {price}
                onChange={(e)=> {
                    setPrice(e.target.value)
                }}
                />

                <p className="price">
                    ${discount? price / 25 : `${price}.00` }<small>/ {discount ? "year" : "month"}</small>
                    </p>
            </div>

            <div className="billing">
                <p className="monthly">Monthly Billing</p>

                <div
                 className="slider"
                 onClick={()=> setDiscount((prev)=> !prev)}
                 >
                    <div className={discount? "slider-circle active" : "slider-circle"}></div>
                </div>

                <p className="yearly">Yearly Billing</p>
                <div className="discount">
                    -25% <span className="discount-text">discount</span>
                </div>

                </div>
                <hr />

                <div className="bottom">
                     <div className="benefits-container">
                    <Benefits title={"Unlimited Websites"} />
                    <Benefits title={"100% data ownership"} />
                    <Benefits title={"Email reports"} />
                </div>

                <button>
                    Start my trial
                </button>
                </div>
               
            
        </section>
     );
}

export default RatingComponent;
