import React, { Component } from 'react'
import { useState } from 'react';
import out from './out';

  const Result = ()=> {
    
const out = ()=>{
  window.location.href = '/out'
}

   const [no, setno] = useState("R07Zx");
 const captcha = ()=>{
   setno( Math.floor( Math.random()*1000+1000))  ;
    }
    return (
  <>
  <h1>hleooo</h1>
  <div>
    <table className="table">
        <tbody>
        <tr>
            <td><p>Enrollment no.</p></td>
            <td><input ></input></td>
            <td><p>semester</p></td>
          
                <td>
                    <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    </select>
                </td>


            <td><input type="radio" ></input>
           <label>Grading</label></td>
           <td><input type="radio"></input>
           <label>Non-Grading</label>
           </td>

        </tr>
        </tbody>
    </table>
   </div> 
<div className='captcha-box'><div className="captcha" >{no}</div>
<div className="view">
    <input className="input"></input>
</div>
<div className="view">
    <button className="input" onClick= {out} >view result</button>
</div>
  </div>
</>
    )
  }
export default Result;
