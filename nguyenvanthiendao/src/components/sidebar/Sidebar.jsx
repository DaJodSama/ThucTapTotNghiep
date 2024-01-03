import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
	flex: 3;
	margin: 20px;
	padding-bottom: 30px;
	background-color: #fdfbfb;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const SidebarItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const SidebarTitle = styled.span`
	margin: 10px;
	padding: 5px;
	width: 80%;
	border-top: 1px solid #a7a4a4;
	border-bottom: 1px solid #a7a4a4;
	font-family: "Varela Round", sans-serif;
	font-size: 16px;
	color: #222;
	font-weight: 600;
	line-height: 20px;
	text-align: center;
`;
const SidebarImg = styled.img`
	margin-top: 15px;
	width: 100%;
`;
const SidebarText = styled.p`
	padding: 30px;
`;
const SidebarList = styled.ul`
	list-style: none;
	margin-bottom: 30px;
`;
const SidebarListItem = styled.li`
	display: inline-block;
	width: 50%;
	margin-top: 15px;
	cursor: pointer;
`;
const SidebarSocial = styled.div`
	display: flex;
    margin-top: 15px;
`;
const SocialIcon = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	align-items: center;
	justify-content: center;
	display: flex;
	margin-right: 10px;
    cursor: pointer;
`;

export default function Sidebar() {
	return (
		<Container>
			<SidebarItem>
				<SidebarTitle>ABOUT ME</SidebarTitle>
				<SidebarImg src="https://cdn2.yame.vn/pimg/ao-thun-co-tru-the-days-eye-36-0022102/4973c249-12cc-4601-a54a-001a4f47b5c0.jpg?w=540&h=756"></SidebarImg>
				<SidebarText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolor distinctio obcaecati aliquid totam nobis illo. Minus
					consectetur tenetur suscipit ducimus atque, in quas eos
					numquam eligendi molestiae, repellendus sunt sint!
				</SidebarText>
			</SidebarItem>
			<SidebarItem>
				<SidebarTitle>CATEGORIES</SidebarTitle>
				<SidebarList>
					<SidebarListItem>Spring</SidebarListItem>
					<SidebarListItem>Autumn</SidebarListItem>
					<SidebarListItem>Winter</SidebarListItem>
					<SidebarListItem>Summer</SidebarListItem>
				</SidebarList>
			</SidebarItem>
			<SidebarItem>
				<SidebarTitle>FOLLOW US!</SidebarTitle>
				<SidebarSocial>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SidebarSocial>
			</SidebarItem>
		</Container>
	);
}
