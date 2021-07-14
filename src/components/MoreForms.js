import React, { useState } from "react";
import "../App.css";

const MoreForm = (props) => {
	const [fnError, setFnError] = useState("");
	const [lnError, setLnError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [pwdError, setPwdError] = useState("");
	const [conPwdError, setconPwdErrorError] = useState("");
	const [pwd, setPwd] = useState("");

	const handleEvent = (event) => {
		if (event.target.id === "fn") {
			(event.target.value.length < 2 && event.target.value.length > 0) ? setFnError("First Name must be at least 2 characters") : setFnError("");
		}
		else if (event.target.id === "ln") {
			(event.target.value.length < 2 && event.target.value.length > 0) ? setLnError("Last Name must be at least 2 characters") : setLnError("");
		}
		else if (event.target.id === "email" && event.target.value.length <= 2) {
			(event.target.value.length < 2 && event.target.value.length > 0) ? setEmailError("Email must be at least 2 characters") : setEmailError("");
		}
		else if (event.target.id === "pwd") {
			setPwd(event.target.value);
			(event.target.value.length < 8 && event.target.value.length > 0) ? setPwdError("Password must be at least 8 characters") : setPwdError("")
		}
		else if (event.target.id === "c-pwd") {
			(pwd !== event.target.value && event.target.value.length > 0) ? setconPwdErrorError("Passwords must match") : setconPwdErrorError("")
		}
	};

	return (
		<form>
			<div className="Main-content">
				<label> First Name </label>
				<input id="fn" placeholder="Search.." type="text" onChange={handleEvent} />
			</div>
			{
				fnError ? <p className="Error"> {fnError} </p> : ""
			}

			<div className="Main-content">
				<label> Last Name </label>
				<input id="ln" placeholder="Search.." type="text" onChange={handleEvent} />
			</div>
			{
				lnError ? <p className="Error"> {lnError} </p> : ""
			}

			<div className="Main-content">
				<label> Email </label>
				<input id="email" placeholder="Search.." type="text" onChange={handleEvent} />
			</div>
			{
				emailError ? <p className="Error"> {emailError} </p> : ""
			}

			<div className="Main-content">
				<label> Password </label>
				<input id="pwd" placeholder="Search.." type="password" onChange={handleEvent} />
			</div>
			{
				pwdError ? <p className="Error"> {pwdError} </p> : ""
			}

			<div className="Main-content">
				<label> Confirm Password </label>
				<input id="c-pwd" placeholder="Search.." type="password" onChange={handleEvent} />
			</div>
			{
				conPwdError ? <p className="Error"> {conPwdError} </p> : ""
			}
		</form>
	);
};

export default MoreForm;
