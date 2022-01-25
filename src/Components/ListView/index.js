import React, { useState } from "react";
import AddUpdate from "../Add-Update-Todo";
import StatusView from "../StatusView";
import "./index.css";
import ToDo from "./ToDo.json";

export default function ListView() {
	console.log(ToDo);
	const [addUpdateStatus, updateStatus] = useState(true);
	const [dataId, setDataId] = useState();
	const [reRender, setRender] = useState(false);
	const filterData = (CurrentStatus) => {
		const data = ToDo.filter((todo) => todo.status === CurrentStatus).map(
			(todo, index) => (
				<li key={index}>
					<span>
						{todo.title}
						<br />
						{todo.description}
					</span>
					{CurrentStatus === "Done" ? (
						<button
							className="right"
							value={todo.id}
							onClick={(e) => deleteToDo(e)}
						>
							❌
						</button>
					) : (
						<button
							className="right"
							onClick={(e) => editToDo(todo)}
						>
							✏
						</button>
					)}
				</li>
			)
		);
		return data;
	};
	const editToDo = (data) => {
		setDataId(data);
		updateStatus(!addUpdateStatus);
	};
	const deleteToDo = (e) => {
		const deleteIndex = ToDo.findIndex(
			(arrayIndex) => arrayIndex.id === parseInt(e.target.value)
		);
		ToDo.splice(deleteIndex, 1);
		setRender(!reRender);
	};
	const todoItems = filterData("ToDo");
	const inprogressItems = filterData("In-Progress");
	const doneItems = filterData("Done");
	const change = () => {
		setDataId();
		updateStatus(!addUpdateStatus);
	};
	return (
		<>
			{addUpdateStatus ? (
				<>
					<div className="add">
						<button
							type="button"
							className="todoButton"
							onClick={change}
						>
							Add ToDo
						</button>
					</div>
					<div className="container">
						<StatusView
							data={todoItems}
							status="ToDo"
							id="statusView"
						/>
						<StatusView
							data={inprogressItems}
							status="In-Progress"
							id="statusView"
						/>
						<StatusView
							data={doneItems}
							status="Done"
							id="statusView"
						/>
					</div>
				</>
			) : (
				<AddUpdate
					change={change}
					addUpdateStatus={addUpdateStatus}
					data={dataId}
				/>
			)}
		</>
	);
}
