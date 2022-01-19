import React from "react";
import "./index.css";

export default function Navbar() {
	return (
		<>
			<div className="title">
				<img
					src="./logo.png"
					width={100}
					height={100}
					alt="logo"
				></img>
				<span>ToDo List</span>
			</div>
		</>
	);
}
