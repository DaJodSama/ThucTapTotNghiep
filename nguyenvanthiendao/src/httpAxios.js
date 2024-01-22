import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWY4ZDI0YjMxMTcxMmYwNzAzYTczOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTMwMTg3OCwiZXhwIjoxNzA1NTYxMDc4fQ.68mqWFCcnXzZi1XYRkhmxV0x5SWZFdvPRwSodljMi0c";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const httpAxios = axios.create({
	baseURL: BASE_URL,
});

export default httpAxios;

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
