import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import httpAxios from "./../../httpAxios";
import { Context } from "../../context/Context";

const Container = styled.div`
	flex: 9;
`;
const SinglePostWrapper = styled.div`
	padding: 20px;
	padding-right: 0px;
	display: flex;
	flex-direction: column;
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
const SinglePostTitleInput = styled.input`
	margin: 10px;
	font-family: "Lora", serif;
	font-size: 28px;
	text-align: center;
	border: none;
	color: gray;
	border-bottom: 1px solid lightgray;
	&:focus {
		outline: none;
	}
`;
const SinglePostDescInput = styled.textarea`
	border: none;
	color: #666;
	font-size: 18px;
	line-height: 25px;
	&:focus {
		outline: none;
	}
`;
const SinglePostButton = styled.button`
	width: 100px;
	border: none;
	background-color: teal;
	padding: 5px;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	align-self: flex-end;
	margin-top: 20px;
`;

export default function SinglePost() {
	const PF = "http://localhost:5000/images/";

	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await httpAxios.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	//DELETE
	const handleDelete = async () => {
		try {
			await httpAxios.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};

	//UPDATE
	const handleUpdate = async () => {
		try {
			await httpAxios.put(`/posts/${post._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (err) {}
	};
	return (
		<Container>
			<SinglePostWrapper>
				{post.photo && <SinglePostImg src={PF + post.photo} />}
				{updateMode ? (
					<SinglePostTitleInput
						autoFocus
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<SinglePostTitle>
						{title}
						{post.username === user?.username && (
							<SinglePostEditContainer>
								<SinglePostIconEdit
									onClick={() => setUpdateMode(true)}>
									<EditOutlined />
								</SinglePostIconEdit>
								<SinglePostIconDelete onClick={handleDelete}>
									<DeleteOutline />
								</SinglePostIconDelete>
							</SinglePostEditContainer>
						)}
					</SinglePostTitle>
				)}
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
				{updateMode ? (
					<SinglePostDescInput
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				) : (
					<SinglePostDesc>{desc}</SinglePostDesc>
				)}
				{updateMode && (
					<SinglePostButton onClick={handleUpdate}>
						Update
					</SinglePostButton>
				)}
			</SinglePostWrapper>
		</Container>
	);
}
