import "./widgetLg.css";

export default function WidgetLg() {
	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>;
	};
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest transactions</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Customer</th>
					<th className="widgetLgTh">Date</th>
					<th className="widgetLgTh">Amount</th>
					<th className="widgetLgTh">Status</th>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">DaJod Sama</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">DaJod Sama</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">DaJod Sama</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Pending" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/358483083_1620928711721113_2603797777053356365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFSW1hlZh7e9XJJPcW8FcmOnaX8TppmSdCdpfxOmmZJ0KVjEQf2FkYW7iHs0gB5fscyV-BPBPvs0hk6eqmweUz0&_nc_ohc=FIwAhQPXIU8AX_hEsER&_nc_ht=scontent.fsgn5-11.fna&cb_e2o_trans=t&oh=00_AfA7xlzEWn1XbeW201f3zZRV-trd59RMp-NzH4cfGRYO1g&oe=659BD7E0"
							alt=""
							className="widgetLgImg"
						/>
						<span className="widgetLgName">DaJod Sama</span>
					</td>
					<td className="widgetLgDate">2 Jun 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
}
