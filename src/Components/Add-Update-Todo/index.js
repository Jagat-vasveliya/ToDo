import React, { Component } from "react";
import "./index.css";
import Data from "../ListView/ToDo.json";
export default class AddUpdate extends Component {
	constructor(props) {
		super(props);
		const { data } = this.props;
		const newId = Data[Data.length - 1]["id"] + 1;
		data
			? (this.state = {
					id: data.id,
					title: data.title,
					description: data.description,
					status: data.status,
					heading: "Update",
			  })
			: (this.state = {
					id: newId,
					title: "",
					description: "",
					status: "ToDo",
					heading: "Add",
			  });
	}
	addToDo = () => {
		const { id, title, description, status } = this.state;
		if (title !== "" && description !== "" && status !== "") {
			Data.push({
				id: id,
				title: title,
				description: description,
				status: status,
			});
			this.props.change();
		} else {
			alert("Please Enter All The Details");
		}
	};
	editToDo = () => {
		const { title, description, status } = this.state;
		if (title !== "" && description !== "" && status !== "") {
			Data.filter((todo) => todo.id === this.props.data.id).map(
				(editData) => {
					editData.title = title;
					editData.description = description;
					editData.status = status;
				}
			);
			this.props.change(!this.props.addUpdateStatus);
		} else {
			alert("Please Enter All The Details");
		}
	};
	logValue = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value }, () => {});
	};

	render() {
		const { title, description, status, heading } = this.state;
		return (
			<>
				<h1 className="addTitle">{heading} ToDo</h1>
				<div className="formContainer">
					<div className="form-control">
						<input
							type="text"
							className="inputControl"
							name="title"
							placeholder="Title"
							value={title}
							onChange={(e) => this.logValue(e)}
						></input>
					</div>
					<div className="form-control">
						<textarea
							name="description"
							className="inputControl"
							placeholder="Description"
							value={description}
							onChange={(e) => this.logValue(e)}
						></textarea>
					</div>
					<div className="form-control">
						<select
							className="inputControl"
							name="status"
							value={status}
							onChange={(e) => this.logValue(e)}
						>
							<option value="ToDo">ToDO</option>
							<option value="In-Progress">
								In Progress
							</option>
							<option value="Done">Done</option>
						</select>
					</div>
					<div className="form-control">
						<button
							type="button"
							className="btn"
							onClick={
								heading === "Add"
									? this.addToDo
									: this.editToDo
							}
						>
							{heading}
						</button>
					</div>
				</div>
			</>
		);
	}
}
