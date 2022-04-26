import { axiosInstance } from "../customAxios";
// import axios from "vue-axios";
async function fetchInfoList(id) {
  const res = await axiosInstance.get(
    `channels?key=${process.env.VUE_APP_KEY_API}&part=snippet&id=${id}`
  );
  return res;
}

async function fetchHomeView(id) {
  if (id == undefined || id == "") {
    const res = await axiosInstance({
      url: `search?key=${process.env.VUE_APP_KEY_API}&part=id,snippet&q=오킹&type=video&maxResults=1`,
    });
    console.log(res);
    return res;
  } else {
    const res = await axiosInstance({
      url: `search?key=${process.env.VUE_APP_KEY_API}&part=id,snippet&q=${id}&type=video&maxResults=1`,
    });
    console.log(res);
    return res;
  }
}

async function fetchComment(id) {
  const res = await axiosInstance.get(
    `commentThreads?key=${process.env.VUE_APP_KEY_API}&part=snippet&maxResults=100&videoId=${id}`
  );
  return res;
}

async function fetchVideo(id) {
  const res = await axiosInstance.get(
    `videos?key=${process.env.VUE_APP_KEY_API}&part=snippet&id=${id}`
  );
  return res;
  // return axiosInstance({
  //   url: `videos?key=${process.env.VUE_APP_KEY_API}&part=snippet&id=${id}`,
  // });
}

export { fetchInfoList, fetchHomeView, fetchComment, fetchVideo };
