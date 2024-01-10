import { AddOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
import styled from "styled-components";
import httpAxios from "./../../httpAxios";
import { Context } from "./../../context/Context";

const Container = styled.div`
	padding-top: 50px;
`;
const PostForm = styled.form`
	position: relative;
`;
const PostFormGroup = styled.div`
	margin-left: 150px;
	display: flex;
	align-items: center;
`;
const IconAdd = styled.label`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid;
	display: flex;
	align-items: center;
	justify-content: center;
	//font-size: 20px;
	color: gray;
	cursor: pointer;
`;
const InputFile = styled.input`
	display: none;
`;
const InputText = styled.input`
	font-size: 30px;
	border: none;
	padding: 20px;
	width: 70vw;
	&:focus {
		outline: none;
	}
`;
const TextArea = styled.textarea`
	font-size: 30px;
	border: none;
	padding: 20px;
	width: 70vw;
	&:focus {
		outline: none;
	}
	font-size: 20px;
	height: 100vw;
`;
const ButtonSubmit = styled.button`
	position: absolute;
	top: 20px;
	right: 50px;
	color: white;
	background: teal;
	padding: 10px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`;
const PostImg = styled.img`
	width: 70vw;
	height: 250px;
	margin-left: 150px;
	border-radius: 10px;
	object-fit: cover;
`;

export default function PostAdd() {
	
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [file, setFile] = useState(null);
	const { user } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;
			try {
				await httpAxios.post("/upload", data);
			} catch (err) {}
		}
		try {
			const res = await httpAxios.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
	};
	return (
		<Container>
			{file && <PostImg src={URL.createObjectURL(file)} />}
			<PostForm onSubmit={handleSubmit}>
				<PostFormGroup>
					<IconAdd htmlFor="fileInput">
						<AddOutlined />
					</IconAdd>
					<InputFile
						type="file"
						id="fileInput"
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<InputText
						type="text"
						placeholder="Title"
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</PostFormGroup>
				<PostFormGroup>
					<TextArea
						placeholder="Tell your story..."
						type="text"
						onChange={(e) => setDesc(e.target.value)}></TextArea>
				</PostFormGroup>
				<ButtonSubmit type="submit">Publish</ButtonSubmit>
			</PostForm>
		</Container>
	);
}
