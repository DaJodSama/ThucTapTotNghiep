import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import styled from "styled-components";

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
    &:first-letter{
        margin-left: 20px;
        font-size: 30px;
        font-weight: 600px;
    }
`;

export default function SinglePost() {
	return (
		<Container>
			<SinglePostWrapper>
				<SinglePostImg src="https://cmsv2.yame.vn/uploads/c03cd098-70b1-427c-b67e-db036c40eae6/Banner_web_02_(1280x1280).jpg?quality=80&w=0&h=0" />
				<SinglePostTitle>
					Lorem, ipsum dolor sit amet.
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
						Author: <b>DaJod</b>
					</SinglePostAuthor>
					<SinglePostDate>1 hour ago</SinglePostDate>
				</SinglePostInfo>
				<SinglePostDesc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolore, quaerat nesciunt? Vel quo repellendus corporis eum
					quia maxime cum ipsam harum provident fuga accusantium
					aliquid doloribus, error et vero voluptatem. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Dolore, quaerat
					nesciunt? Vel quo repellendus corporis eum quia maxime cum
					ipsam harum provident fuga accusantium aliquid doloribus,
					error et vero voluptatem. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Dolore, quaerat nesciunt? Vel
					quo repellendus corporis eum quia maxime cum ipsam harum
					provident fuga accusantium aliquid doloribus, error et vero
					voluptatem. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolore, quaerat nesciunt? Vel quo
					repellendus corporis eum quia maxime cum ipsam harum
					provident fuga accusantium aliquid doloribus, error et vero
					voluptatem. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Dolore, quaerat nesciunt? Vel quo
					repellendus corporis eum quia maxime cum ipsam harum
					provident fuga accusantium aliquid doloribus, error et vero
					voluptatem.
				</SinglePostDesc>
			</SinglePostWrapper>
		</Container>
	);
}
