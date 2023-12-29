import styled from "styled-components";

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

export default function Posts() {
	return (
		<Container>
			<PostImg src="https://cmsv2.yame.vn/uploads/80d86ba5-88cf-4965-9ebb-b2a5fd6e8652/TDY-1_1500.jpg?quality=80&w=0&h=0"></PostImg>
			<PostInfo>
				<PostCats>
					<PostCat>Spring</PostCat>
					<PostCat>Autumn</PostCat>
				</PostCats>
				<PostTitle>Lorem ipsum, dolor sit amet</PostTitle>
				<hr />
				<PostDate>1 hour ago</PostDate>
			</PostInfo>
			<PostDesc>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Asperiores, aliquam? Culpa eos iusto porro saepe ipsum autem,
				corrupti amet tempore quisquam neque fuga illo perspiciatis
				dolore dolorum sapiente voluptatibus. Fugit?Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Asperiores, aliquam?
				Culpa eos iusto porro saepe ipsum autem, corrupti amet tempore
				quisquam neque fuga illo perspiciatis dolore dolorum sapiente
				voluptatibus. Fugit?Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Asperiores, aliquam? Culpa eos iusto porro
				saepe ipsum autem, corrupti amet tempore quisquam neque fuga
				illo perspiciatis dolore dolorum sapiente voluptatibus.
				Fugit?Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Asperiores, aliquam? Culpa eos iusto porro saepe ipsum autem,
				corrupti amet tempore quisquam neque fuga illo perspiciatis
				dolore dolorum sapiente voluptatibus. Fugit?
			</PostDesc>
		</Container>
	);
}
