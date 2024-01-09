import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import httpAxios from "./../../httpAxios";

const Container = styled.div`
	flex: 9;
`;
const SinglePostWrapper = styled.div`
	padding: 20px;
	padding-right: 0px;
`;
const SinglePostImg = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 5px;
	object-fit: cover;
`;
const SinglePostTitle = styled.h1`
	text-align: center;
	margin: 10px;
	font-size: 28px;
	font-family: "Lora", serif;
`;
const SinglePostEditContainer = styled.div`
	float: right;
	font-size: 16px;
	display: flex;
`;
const SinglePostIconEdit = styled.div`
	cursor: pointer;
	color: teal;
`;
const SinglePostIconDelete = styled.div`
	margin-left: 10px;
	cursor: pointer;
	color: tomato;
`;
const SinglePostInfo = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	font-size: 16px;
	color: #b39656;
	font-family: "Varela Round", sans-serif;
`;
const SinglePostAuthor = styled.span``;
const SinglePostDate = styled.span``;
const SinglePostDesc = styled.p`
	color: #666;
	font-size: 18px;
	line-height: 25px;
	&:first-letter {
		margin-left: 20px;
		font-size: 30px;
		font-weight: 600px;
	}
`;

export default function SinglePost() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const res = await httpAxios.get("/posts/" + path);
			setPost(res.data);
		};
		getPost();
	}, [path]);
	return (
		<Container>
			<SinglePostWrapper>
				{post.photo && <SinglePostImg src={post.photo} />}
				<SinglePostTitle>
					{post.title}
					<SinglePostEditContainer>
						<SinglePostIconEdit>
							<EditOutlined />
						</SinglePostIconEdit>
						<SinglePostIconDelete>
							<DeleteOutline />
						</SinglePostIconDelete>
					</SinglePostEditContainer>
				</SinglePostTitle>
				<SinglePostInfo>
					<SinglePostAuthor>
						Author:
						<Link to={`/?user=${post.username}`} className="link">
							<b>{post.username}</b>
						</Link>
					</SinglePostAuthor>
					<SinglePostDate>
						{new Date(post.createdAt).toDateString()}
					</SinglePostDate>
				</SinglePostInfo>
				<SinglePostDesc>{post.desc}</SinglePostDesc>
			</SinglePostWrapper>
		</Container>
	);
}
