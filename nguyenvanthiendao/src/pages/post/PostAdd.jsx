import { AddOutlined } from "@mui/icons-material";
import styled from "styled-components";

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
`;
const PostImg = styled.img`
	width: 70vw;
	height: 250px;
	margin-left: 150px;
	border-radius: 10px;
	object-fit: cover;
`;

export default function PostAdd() {
	return (
		<Container>
			<PostImg src="https://cmsv2.yame.vn/uploads/8ae9ab2a-c50b-4854-87cb-0ff81b8afbbc/Banner_web_03_(1280x1280).jpg?quality=80&w=0&h=0" />
			<PostForm>
				<PostFormGroup>
					<IconAdd htmlFor="fileInput">
						<AddOutlined />
					</IconAdd>
					<InputFile type="file" id="fileInput" />
					<InputText
						type="text"
						placeholder="Title"
						autoFocus={true}
					/>
				</PostFormGroup>
				<PostFormGroup>
					<TextArea
						placeholder="Tell your story..."
						type="text"></TextArea>
				</PostFormGroup>
				<ButtonSubmit>Publish</ButtonSubmit>
			</PostForm>
		</Container>
	);
}
