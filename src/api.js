import axios from "axios"

console.log(process.env.REACT_APP_YT_API_KEY)

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: 'AIzaSyDLA537ULmzLoQcTVctZf5cbN-k0g8tNT0',
  },
});

export default request;
