import React from "react";

const MyPlan = () => {
	return (
		<div className="myPlan">
			<div className="inputFields">
				<div className="pickPlan">
					<button className="btn btn-outline-secondary" type="button">
						Button
					</button>

					<select className="select-plan" id="select-plan">
						<option selected>Choose...</option>
						<option value="Travel plan">Travel plan</option>
						<option value="Pay off my debt">Pay off my debt</option>
						<option value="Save for the future">
							Save for the future
						</option>
					</select>
				</div>
				<div className="input">
					<div className="input">
						<span className="input-text">
							When do you want to hit you goal and why
						</span>
					</div>
					<textarea
						className="text area col-6"
						className="form-control"
						aria-label="With textarea"
					/>
				</div>
				<label>Debt</label>
				<input
					id="Debt"
					type="text"
					placeholder="Amount (to the nearest dollar)"
				/>
				<label>Bills and expenses</label>
				<input
					type="text"
					placeholder="Amount (to the nearest dollar)"
				/>
				<label>Income</label>
				<input
					type="text"
					placeholder="Amount (to the nearest dollar)"
				/>
				<label>Desired goal date </label>
				<input
					type="date"
					id="start"
					placeholder="set your goal target"
					name="trip-start"
					value="2018-07-22"
					min="2020-11-01"
					max="2025-12-31"
				/>
			</div>
		</div>
	);
};

export default MyPlan;
