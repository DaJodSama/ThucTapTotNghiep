import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Container = styled.div`
	height: 60px;
	margin-bottom: 41px;
	${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const MenuItem = styled.div`
	font-size: 18px;
	font-weight: 400;
	color: #484848;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	//----------
	${mobile({ marginLeft: "0" })}
`;
const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;

const Navbar = () => {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({
			type: "LOGOUT",
		});
	};
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>VN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>DAJOD.</Logo>
				</Center>
				<Right>
					<MenuItem>
						<Link className="link" to="/login">
							{!user && "LOGIN"}
						</Link>
					</MenuItem>
					<MenuItem>
						<Link className="link" to="/register">
							{!user && "REGISTER"}
						</Link>
					</MenuItem>
					<MenuItem onClick={handleLogout}>
						{user && "LOGOUT"}
					</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<Link to="/cart">
								<ShoppingCartOutlined color="action" />
							</Link>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
