import axios from "axios";

const config = {
  baseurl: "https://www.googleapis.com/youtube/v3/",
  key: "?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY",
};

function fetchInfoList(id) {
  return axios.get(
    `${config.baseurl}channels${config.key}&part=snippet&id=${id}`
  );
}
function fetchHomeView(id) {
  let url = `${config.baseurl}search${config.key}&part=id,snippet&q=오킹&type=video&maxResults=5`;
  if (id !== "") {
    url = `${config.baseurl}search${config.key}&part=id,snippet&q=${id}&type=video&maxResults=5`;
  }
  return axios.get(url);
}

export { fetchInfoList, fetchHomeView };
