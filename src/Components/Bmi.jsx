import React, { useState } from 'react'

const Bmi = () => {
    const [height, setheight] = useState("");
    const [weight, setweight] = useState("");
    //console.log(height);
    //console.log(weight);
    
    const h2= height*height;
    const all = weight/h2;
    //console.log(all);
   function teller(){
    if (all<18.5) {
        return <h5>Underweight</h5>;
      }
      else if(all>=30){
        return <h5>Obesity</h5>
      }
      else if(all>18.5 && all<24.9){
        return <h5>right perfect</h5>
      }
      else if (all>25 && all<29.9){
        return <h5>overweight</h5>
      }
      else{
        return <h5>enter correct values</h5>
      }
   }
    
  return (
    <>
     <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Height :in meter</label>
    <input type="number" className="form-control" value={height} onChange={(e)=>{setheight(e.target.value)}} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Weight :</label>
    <input type="number" className="form-control" value={weight} onChange={(e)=>{setweight(e.target.value)}}/>
  </div>
  <label htmlFor="exampleInputPassword1">BMI :</label>
  <input type="number" className="form-control" value={all} />
{teller()}
</form> 
    </>
  )
}

export default Bmi
