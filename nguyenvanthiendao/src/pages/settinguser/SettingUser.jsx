import { AccountCircleOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import httpAxios from "../../httpAxios";

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
const InputPP = styled.input``;

export default function SettingUser() {
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";

	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await httpAxios.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await httpAxios.put("/users/" + user._id, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};

	return (
		<Container>
			<SettingsWrapper>
				<SettingsTitle>
					<SettingsTitleUpdate>
						Update Your Account
					</SettingsTitleUpdate>
					<SettingsTitleDelete>Delete Account</SettingsTitleDelete>
				</SettingsTitle>
				<SettingsForm onSubmit={handleSubmit}>
					<LabelProfile>Profile Picture</LabelProfile>
					<SettingsPP>
						<ImageAccount
							src={
								file
									? URL.createObjectURL(file)
									: PF + user.profilePic
							}
							alt=""
						/>
						<LabelInput htmlFor="fileInput">
							<SettingsIcon>
								<AccountCircleOutlined />
							</SettingsIcon>
						</LabelInput>
						<InputPP
							type="file"
							id="fileInput"
							style={{ display: "none" }}
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<SettingsPPInput id="fileInput" type="file" />
					</SettingsPP>
					<Label>Username</Label>
					<Input
						type="text"
						placeholder={user.username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						placeholder={user.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Label>Password</Label>
					<Input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<SettingsSubmitButton type="submit">
						Update
					</SettingsSubmitButton>
					{success && (
						<span
							style={{
								color: "green",
								textAlign: "center",
								marginTop: "20px",
							}}>
							Profile has been updated...
						</span>
					)}
				</SettingsForm>
			</SettingsWrapper>
			<Sidebar />
		</Container>
	);
}
