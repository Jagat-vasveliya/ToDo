import React from "react";
import "./index.css";

export default function addUpdate() {
	return (
          <>
          <h1 className="addTitle">Add/Update ToDo</h1>
		<div className="formContainer">
			<div className="form-control">
				<input
					type="text"
					className="inputControl"
					placeholder="Title"
				></input>
			</div>
			<div className="form-control">
				<textarea
					className="inputControl"
					placeholder="Description"
				></textarea>
			</div>
			<div className="form-control">
				<select className="inputControl">
					<option selected disabled>
						Select Status
					</option>
					<option>ToDO</option>
					<option>In Progress</option>
					<option>Done</option>
				</select>
			</div>
			<div className="form-control">
				<button type="button" className="btn">
					Add
				</button>
			</div>
		</div>
          </>
	);
}
