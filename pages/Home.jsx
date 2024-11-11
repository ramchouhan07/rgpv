import React, { Component } from 'react'
import '/src/App.css';
import { Route, Routes } from 'react-router-dom'
import Result from './RESULTPAGE';
 const Home = function() {
	const  getResult = () => {
		window.location.href = '/new-page';
	  }
	
	return (
	  <>
	
	  <div className="container">
		<h3 className="resultType">Main Result</h3>
		<fieldset>
			<legend>Please Select Program</legend>
			<table className="table">
				<tr className="tablerow">
			      <td>
				<input type="radio" className="sub" onClick={getResult}></input><label>B.E</label>
				  </td>
				  <td>
					<input  className="input" type="radio" onClick={getResult}></input><label>B.Tech</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>mca</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>M.C.A</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>B.Pharmacy</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>B.Pharmacy </label>
				  </td>
				  <td>
					<input type="radio"bonClick={getResult}></input><label>B.Arch</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>M.Pharmacy</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>M.E</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>M.Tech</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>B.E.(PTDC)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>M.Tech. (PT)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>BM.Tech. (PT)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label>Diploma	</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input ><label>BPh.D. (PT)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> Pharm D.</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> M.Arch.</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> Pharm D.</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> M.C.A.(2Year)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> M.B.A.</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> B.Tech.(PTDC)</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> M.Pharm-PCI</label>
				  </td>
				  <td>
					<input type="radio" onClick={getResult}></input><label> B.Design</label>
				  </td>   
				</tr>
			</table>
		</fieldset>

	</div>
	  </>
	  
	)

  };
export default Home;
