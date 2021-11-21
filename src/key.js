export const API_URL = window.location.hostname.includes("localhost")
  ? "https://zomato-clone-backend-thejas.herokuapp.com"
  : "/node";

export const CLIENT_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:3000"
  : "/";
