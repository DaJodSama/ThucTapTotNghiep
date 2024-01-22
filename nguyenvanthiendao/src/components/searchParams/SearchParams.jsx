import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

import { Link } from "react-router-dom";
import httpAxios from "../../httpAxios.js";
import useClickOutSide from "../../hooks/useClickOutSide.jsx";
const SearchContainer = styled.div`
	z-index: 1000;
	border: none;
	display: flex;
	align-items: center;
	padding: 5px;
	position: relative;
`;
const Boximage = styled.div`
	width: 70px;
	height: 70px;
	object-fit: cover;
`;
const FlexProduct = styled.div`
	display: flex;
	:hover {
		color: #beb7b7;
	}
	width: 230px;
`;
const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
	:focus {
		outline: 0;
	}
`;
const ParamsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: white;
	width: 265px;
	position: absolute;
	top: 45px;
	max-height: 500px;
	overflow-y: scroll;
`;
const SearchParams = () => {
	const [loading, setLoading] = useState(false);
	const [searchTitle, setSearchTitle] = useState("");
	const [posts, setPosts] = useState([]);
	const { show, setShow, nodeRef } = useClickOutSide();

	useEffect(() => {
		const loadPosts = async () => {
			setLoading(true);
			const response = await httpAxios.get("/products/");
			setPosts(response.data);
			setLoading(false);
		};

		loadPosts();
	}, []);
	return (
		<SearchContainer ref={nodeRef}>
			<Input
				placeholder="Search"
				onChange={(e) => setSearchTitle(e.target.value)}
				onClick={() => {
					setShow(!show);
				}}
			/>
			{show && (
				<ParamsContainer>
					{loading ? (
						<h4>Loading ...</h4>
					) : (
						posts
							.filter((value) => {
								if (searchTitle === "") {
									return "";
								} else if (
									value.title
										.toLowerCase()
										.includes(searchTitle.toLowerCase())
								) {
									return value;
								}
							})
							.map((item) => (
								<Link to={`/product/${item._id}`} className="link">
									<FlexProduct>
										<Boximage>
											<img
												style={{ width: "100%" }}
												src={item.img}
												alt=""
											/>
										</Boximage>
										<h5
											style={{ textAlign: "center"}}
											key={item.id}>
											{item.title}
										</h5>
									</FlexProduct>
								</Link>
							))
					)}
				</ParamsContainer>
			)}
			<Search style={{ color: "gray", fontSize: 16 }} />
		</SearchContainer>
	);
};

export default SearchParams;
