import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from "../../requestMethods";

export default function Home() {
	const [userStats, setUserStats] = useState([]);

	const MONTHS = useMemo(
		() => [
		  "Jan",
		  "Feb",
		  "Mar",
		  "Apr",
		  "May",
		  "Jun",
		  "Jul",
		  "Agu",
		  "Sep",
		  "Oct",
		  "Nov",
		  "Dec",
		],
		[]
	  );

	  useEffect(() => {
		const getStats = async () => {
		  try {
			const res = await userRequest.get("/user/stats");
			res.data.map((item) =>
			  setUserStats((prev) => [
				...prev,
				{ name: MONTHS[item._id - 1], "Active User": item.total },
			  ])
			);
		  } catch {}
		};
		getStats();
	  }, [MONTHS]);

	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userStats}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
