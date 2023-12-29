import { AccountCircleOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";

const Container = styled.div`
	display: flex;
`;
const SettingsWrapper = styled.div`
	flex: 9;
	padding: 20px;
`;
const SettingsTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SettingsTitleUpdate = styled.span`
	font-size: 30px;
	margin-bottom: 20px;
	color: lightcoral;
`;
const SettingsTitleDelete = styled.span`
	color: red;
	font-size: 12px;
	cursor: pointer;
`;
const SettingsForm = styled.form`
	display: flex;
	flex-direction: column;
`;
const LabelProfile = styled.label``;
const SettingsPP = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;
const ImageAccount = styled.img`
	height: 70px;
	width: 70px;
	border-radius: 20px;
	object-fit: cover;
`;
const SettingsIcon = styled.div`
	width: 25px;
	height: 25px;
	padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 50%;
	margin-left: 10px;
	color: white;
	background-color: lightcoral;
	cursor: pointer;
`;
const LabelInput = styled.label`
	font-size: 20px;
	margin-top: 20px;
`;
const SettingsPPInput = styled.input`
	display: none;
	width: 30%;
`;
const Label = styled.label``;
const Input = styled.input`
	color: gray;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	border: none;
	border-bottom: 1px solid lightgray;
`;
const SettingsSubmitButton = styled.button`
	align-self: center;
	width: 150px;
	border: none;
	border-radius: 10px;
	color: white;
	background-color: teal;
	padding: 10px;
	margin-top: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background-color: rgb(1, 114, 114);
	}
`;

export default function SettingUser() {
	return (
		<Container>
			<SettingsWrapper>
				<SettingsTitle>
					<SettingsTitleUpdate>
						Update Your Account
					</SettingsTitleUpdate>
					<SettingsTitleDelete>Delete Account</SettingsTitleDelete>
				</SettingsTitle>
				<SettingsForm>
					<LabelProfile>Profile Picture</LabelProfile>
					<SettingsPP>
						<ImageAccount src="https://cdn2.yame.vn/pimg/ao-thun-co-tron-the-days-eye-32-0022087/ea686910-b4a3-1500-02ea-001a4f34adb6.jpg?w=540&h=756" alt="" />
						<LabelInput htmlFor="fileInput">
							<SettingsIcon>
								<AccountCircleOutlined />
							</SettingsIcon>
						</LabelInput>
						<SettingsPPInput id="fileInput" type="file" />
					</SettingsPP>
					<Label>Username</Label>
					<Input type="text" placeholder="DaJod" name="name" />
					<Label>Email</Label>
					<Input
						type="email"
						placeholder="dajod@gmail.com"
						name="email"
					/>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="Password"
						name="password"
					/>
					<SettingsSubmitButton type="submit">
						Update
					</SettingsSubmitButton>
				</SettingsForm>
			</SettingsWrapper>
			<Sidebar />
		</Container>
	);
}
