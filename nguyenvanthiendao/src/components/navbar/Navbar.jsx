import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartRedux";
import { logoutUser } from "../../redux/userRedux";
import SearchParams from "../searchParams/SearchParams";

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
	const quantity = useSelector((state) => state.cart.quantity);

	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(logoutUser());
		dispatch(clearCart());
	};
	const handleClear = () => {
		dispatch(clearCart());
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>VN</Language>
					<SearchContainer>
						<SearchParams />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>DAJOD.</Logo>
				</Center>
				<Right>
					{user ? (
						<MenuItem>HELLO {user.username}</MenuItem>
					) : (
						<Link to="/register" className="link">
							<MenuItem>REGISTER</MenuItem>
						</Link>
					)}
					{user ? (
						<MenuItem onClick={handleDelete}>LOG OUT</MenuItem>
					) : (
						<Link to="/Login" className="link">
							<MenuItem onClick={handleClear}>LOGIN</MenuItem>
						</Link>
					)}
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined color="action" />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
