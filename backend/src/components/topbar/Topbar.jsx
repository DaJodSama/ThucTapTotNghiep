import React from "react";
import "./topbar.css";
import {
	LanguageOutlined,
	NotificationsNoneOutlined,
	Settings,
} from "@mui/icons-material";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topbarLeft">
					<span className="logo">dajodadmin</span>
				</div>
				<div className="topbarRight">
					<div className="topbarIconContainer">
						<NotificationsNoneOutlined />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<LanguageOutlined />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
          <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/362950566_1630927964054521_7084906538356959359_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHV-AiWCrJTEPtoJrR0mRFdCl5n55jgnpAKXmfnmOCekHNZunQ6jSqxjhSwI7KwJvMyKPQ1xhlMpguB52YQ9GPm&_nc_ohc=QEl-8WiYMQcAX8j-OyC&_nc_ht=scontent.fsgn5-5.fna&cb_e2o_trans=t&oh=00_AfDokSb0vqInHpcspNxydESI28JFpPL0Banm_-HeTCHc-A&oe=65997113" alt="" className="topAvatar" />
				</div>
			</div>
		</div>
	);
}
