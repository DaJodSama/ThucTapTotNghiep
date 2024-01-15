import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWY4ZDI0YjMxMTcxMmYwNzAzYTczOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTMwMTg3OCwiZXhwIjoxNzA1NTYxMDc4fQ.68mqWFCcnXzZi1XYRkhmxV0x5SWZFdvPRwSodljMi0c";

export const httpAxios = axios.create({
	baseURL: BASE_URL,
});

export default httpAxios;

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
