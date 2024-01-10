import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 385px;
	margin: 0px 25px 40px 25px;
`;
const PostImg = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
`;
const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const PostCats = styled.div``;
const PostCat = styled.span`
	font-family: "Varela Round", sans-serif;
	font-size: 13px;
	color: #be9655;
	line-height: 20px;
	margin-top: 15px;
	margin-right: 10px;
	cursor: pointer;
`;
const PostTitle = styled.span`
	font-size: 24px;
	font-weight: 700;
	margin-top: 15px;
	cursor: pointer;
`;
const PostDate = styled.span`
	font-family: "Lora", serif;
	font-style: italic;
	font-size: 14px;
	color: #999;
	margin-top: 15px;
`;
const PostDesc = styled.p`
	font-family: "Varela Round", sans-serif;
	font-size: 14px;
	color: #444;
	line-height: 24px;
	margin-top: 15px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;

export default function Posts({ post }) {
	const PF = "http://localhost:5000/images/";
	return (
		<Container>
			{post.photo && <PostImg src={PF + post.photo}></PostImg>}
			<PostInfo>
				<PostCats>
					{post.categories.map((c) => (
						<PostCat>{c.name}</PostCat>
					))}
				</PostCats>
				<Link to={`/post/${post._id}`} className="link">
					<PostTitle>{post.title}</PostTitle>
				</Link>

				<hr />
				<PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
			</PostInfo>
			<PostDesc>{post.desc}</PostDesc>
		</Container>
	);
}
