import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
	z-index: 999;
	width: 100%;
	height: 60px;
	margin-bottom: 41px;
	background-color: white;
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
`;
const Left = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SocialContainer = styled.div`
	display: flex;
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
const Center = styled.div`
	flex: 6;
`;
const List = styled.ul`
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 0;
	list-style: none;
`;
const ListItem = styled.li`
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: #484848;
`;
const TopList = styled.ul`
display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const TopListItem = styled.li`
margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
`;
const TopImg = styled.img`
width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;
`;

const Right = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function Menu() {
	const user = false;
	return (
		<>
			<Container>
				<Left>
					<SocialContainer>
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
					</SocialContainer>
				</Left>
				<Center>
					<List>
						<ListItem>
							<Link className="link" to="/">
								HOME
							</Link>
						</ListItem>
						<ListItem>
							<Link className="link" to="/about">
								ABOUT
							</Link>
						</ListItem>
						<ListItem>
							<Link className="link" to="/">
								CONTACT
							</Link>
						</ListItem>
						<Link className="link" to="/product">
							PRODUCT
						</Link>
						<Link className="link" to="/post">
							POST
						</Link>
					</List>
				</Center>
				<Right>
						{user ? (
							<Link className="link" to="/settinguser">
								<TopImg
									src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
								/>
							</Link>
						) : (
							<Link className="link" to="/register">
								<TopImg
									src="https://i.pinimg.com/564x/ac/0f/41/ac0f419e977af681516e00829c5393ee.jpg"
									alt=""
								/>
							</Link>
						)}
				</Right>
			</Container>
		</>
	);
}
