import axios from "axios";

class cotube {
  constructor() {
    const api = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3/`,
    });
  }
}
