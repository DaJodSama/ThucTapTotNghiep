import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const res = await userRequest.get("user/?new=true");
				setUsers(res.data);
			} catch (err) {}
		};
		getUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{users.map(user=>(
				<li className="widgetSmListItem" key={user._id}>
					<img
						src={
							user.img ||
							"https://i.pinimg.com/564x/ea/76/c3/ea76c343f9bbd6917e9a094b9317ab9e.jpg"
						}
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">{user.username}</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>))}
			</ul>
		</div>
	);
}
