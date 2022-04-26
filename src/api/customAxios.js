import axios from "axios";
// const ajax = axios;

const baseURL = "https://www.googleapis.com/youtube/v3/";
const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create(
  {
    baseURL,
    headers,
  },
  console.log("호출")
);

// function fetchInfoList(id) {
//   return ajax.get(
//     `${config.baseurl}channels?key=${process.env.VUE_APP_KEY}&part=snippet&id=${id}`
//   );
// }
// function fetchHomeView(id) {
//   console.log(id);
//   let url = `${config.baseurl}search?key=${process.env.VUE_APP_KEY}&part=id,snippet&q=오킹&type=video&maxResults=1`;
//   if (id == undefined || id == "") {
//     return ajax.get(url);
//   } else {
//     url = `${config.baseurl}search?key=${process.env.VUE_APP_KEY}&part=id,snippet&q=${id}&type=video&maxResults=1`;
//     return ajax.get(url);
//   }
// }

export { axiosInstance };
