import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";
import httpAxios from "./../../httpAxios";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Spiner from "@mui/material/CircularProgress";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	//background-color: #e5e5e5;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;
const FormGroup = styled.div`
	flex: 0 0 45%;
	max-width: 45%;
	position: relative;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Input = styled.input`
	width: 100%;
	padding: 8px;
	margin-bottom: 20px;
	box-sizing: border-box;
`;
const Agreement = styled.span`
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
const Have = styled.span`
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom:10px;
`;
const ErrorMess1 = styled.span`
	position: absolute;
	top: 38px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess2 = styled.span`
	position: absolute;
	top: 94px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess3 = styled.span`
	position: absolute;
	bottom: 60px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess4 = styled.span`
	position: absolute;
	bottom: 4px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess5 = styled.span`
	position: absolute;
	top: 38px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess6 = styled.span`
	position: absolute;
	top: 94px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const ErrorMess7 = styled.span`
	position: absolute;
	bottom: 60px;
	left: 0;
	color: #e74c3c;
	font-size: 12px;
`;
const schema = yup.object({
	username: yup.string().required("Please enter your username"),
	fullName: yup.string().required("Please enter your fullname"),
	email: yup
		.string()
		.email("Please enter valid email address")
		.required("Please Enter your mail"),
	phoneNumber: yup
		.number()
		.typeError("Please enter a valid number")
		.positive()
		.integer("Please enter an integer")
		.required("Please your NumberPhone"),
	address: yup.string().required("Please your address"),
	password: yup
		.string()
		.min(8, "Must be at least 8 characters or greater")
		.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
			message:
				"Must have at least 1 uppercase, 1 lowercase, 1 number character",
		}),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null])
		.required("Please Enter your password"),
});

const Register = () => {
	const {register, handleSubmit, control, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const submitForm = async (data) => {
		try {
			const res = await httpAxios.post("/auth/register", {
				username:data.username,
				email:data.email,
				fullName:data.fullName,
				password:data.password,
				phoneNumber:data.phoneNumber,
				address:data.address,
			});
			if (res.data) {
				window.location.replace("/login");
			}
		} catch (err) {
			console.error("Registration failed:", err);
		}

		
	};
	return (
		<Container>
			<Wrapper>
				<Title>CREATE ACCOUNT</Title>
				<Form onSubmit={handleSubmit(submitForm)}>
					<FormGroup>
						<Input
							name="username"
							id="username"
							placeholder="username"
							{...register("username")}
							control={control}
						/>
						{errors.username && (
							<ErrorMess1>{errors.username.message}</ErrorMess1>
						)}
						<Input
							name="fullName"
							id="fullname"
							placeholder="fullname"
							{...register("fullName")}
							control={control}
						/>
						{errors.fullName && (
							<ErrorMess2>{errors.fullName.message}</ErrorMess2>
						)}
						<Input
							name="email"
							placeholder="email"
							{...register("email")}
							control={control}
						/>
						{errors.email && (
							<ErrorMess3>{errors.email.message}</ErrorMess3>
						)}
						<Input
							name="phoneNumber"
							placeholder="phonenumber"
							{...register("phoneNumber")}
							control={control}
						/>
						{errors.phoneNumber && (
							<ErrorMess4>
								{errors.phoneNumber.message}
							</ErrorMess4>
						)}
					</FormGroup>
					<FormGroup>
						<Input
							name="address"
							placeholder="address"
							{...register("address")}
							control={control}
						/>
						{errors.address && (
							<ErrorMess5>{errors.address.message}</ErrorMess5>
						)}
						<Input
							name="password"
							type="password"
							placeholder="password"
							{...register("password")}
							control={control}
						/>
						{errors.password && (
							<ErrorMess6>{errors.password.message}</ErrorMess6>
						)}

						<Input
							name="confirmPassword"
							type="password"
							placeholder="confirm password"
							{...register("confirmPassword")}
							control={control}
						/>
						<ErrorMess7>
							{errors.confirmPassword &&
								"Passwords Should Match!"}
						</ErrorMess7>
					</FormGroup>
					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance with the{" "}
						<b>PRIVACY POLICY</b>
					</Agreement>
					
					<Button type="submit">
						{" "}
						CREATE
					</Button>
				</Form><Have>
						<Link to="/login" className="link">
							DO YOU HAVE AN ACCOUNT?
						</Link>
					</Have>
			</Wrapper>
		</Container>
	);
};

export default Register;
