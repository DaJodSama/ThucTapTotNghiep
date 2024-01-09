import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import httpAxios from "../../httpAxios";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	//background-color: #e5e5e5;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
		cursor: not-allowed;
		background-color: #02adad;
	}
`;

const Connect = styled.p`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await httpAxios.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form onSubmit={handleSubmit}>
					<Input type="text" placeholder="Username" ref={userRef} />
					<Input
						type="password"
						placeholder="Password"
						ref={passwordRef}
					/>
					<Button type="submit" disabled={isFetching}>
						LOGIN
					</Button>
					<Connect>FORGOT PASSWORD?</Connect>
					<Link to="/register" className="link">
						<Connect>REGISTER NOW!</Connect>
					</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
