import React from "react";
import Input from "./input";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1> My Budget Plan </h1>
			<Input />
		</div>
	);
}
