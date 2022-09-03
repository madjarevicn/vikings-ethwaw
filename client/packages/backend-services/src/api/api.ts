import axios from "axios";

// import { queryClient } from "../BackendServicesProvider";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "https://vikings-hackathon.herokuapp.com/api";

const API = axios.create({
	baseURL: apiUrl,
});

export { API };
