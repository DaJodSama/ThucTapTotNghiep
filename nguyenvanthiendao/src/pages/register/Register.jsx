import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";
import httpAxios from "./../../httpAxios";
import { Link } from "react-router-dom";

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
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	margin-top: 50px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;
const Span = styled.span`
	color: red;
	margin: 10px 0 0 10px;
	${mobile({ marginLeft: "10px", color: "red", fontSize: "14px" })}
`;

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await httpAxios.post("/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
		}
	};
	return (
		<Container>
			<Wrapper>
				<Title>CREATE ACCOUNT</Title>
				<Form onSubmit={handleSubmit}>
					<Input
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input placeholder="confirm password" />
					<Agreement>
						<Link to="/login" className="link">
							DO YOU HAVE AN ACCOUNT?
						</Link>
					</Agreement>
					<Button type="submit">CREATE</Button>
					{error && <Span>Something went wrong!</Span>}
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
