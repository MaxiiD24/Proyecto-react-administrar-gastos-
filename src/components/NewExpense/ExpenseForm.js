import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEneteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChange = (event) => {
		setEneteredTitle(event.target.value);
	};

	const dateChange = (event) => {
		setEnteredDate(event.target.value);
	};

	const amountChange = (event) => {
		setEnteredAmount(event.target.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEneteredTitle("");
		setEnteredDate("");
		setEnteredAmount("");
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChange}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChange}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2021-01-01"
						max="2024-12-31"
						value={enteredDate}
						onChange={dateChange}
					></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
