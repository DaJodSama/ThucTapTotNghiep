import "./user.css";
import {
	CalendarTodayOutlined,
	LocationSearchingOutlined,
	MailOutlineOutlined,
	PermIdentityOutlined,
	PhoneAndroidOutlined,
	Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					{" "}
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">DaJod Sama</span>
							<span className="userShowUserTitle">
								Software Engineer
							</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentityOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">td2k1</span>
						</div>
						<div className="userShowInfo">
							<CalendarTodayOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">
								03.02.2001
							</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<PhoneAndroidOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">
								+84 1484 0000
							</span>
						</div>
						<div className="userShowInfo">
							<MailOutlineOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">
								dajod@gmail.com
							</span>
						</div>
						<div className="userShowInfo">
							<LocationSearchingOutlined className="userShowIcon" />
							<span className="userShowInfoTitle">
								Ho Chi Minh | VN
							</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form action="" className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="td2k1"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="DaJod Sama"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="dajod@gmail.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+84 1484 0000"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="Ho Chi Minh | VN"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
									alt=""
									className="userUpdateImg"
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<input
									style={{ display: "none" }}
									type="file"
									id="file"
								/>
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
