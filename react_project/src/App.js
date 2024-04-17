
import './App.css';
import { useState } from 'react';

function App() {
  const [weight,setweight] = useState()
  const [height,setheight] = useState()
  const [bmi,setbmi] = useState('')
  const [message,setmessage] = useState('')
  
  //logic
let calBmi=(e)=>
{
    e.preventDefault();
    if(weight===0 || height===0)
    {
      alert(" Please Enter valid weight or height")
    }
   else{
    let bmi = (weight/(height*height)*703)
    setbmi(bmi.toFixed(1))
    

    if(bmi<25)
    {
      setmessage('You are Under Weight')
    }
    else if(bmi>25 && bmi<30)
    {
      setmessage('You are healthy Weight')
    }
    else{
      setmessage('You are over weight ')
    }
   }  
}

let reload = ()=>
{
  window.location.reload();
}

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter weight value' value={weight} onChange={(e)=>setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter height value' value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>

          <div>
            <button className='btn' type='submit' >submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
