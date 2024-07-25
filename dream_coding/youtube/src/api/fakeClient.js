import axios from "axios";

export default class FakeClient {
  async search(params) {
    return params.isRelatedId
      ? axios.get(`/videos/search.json`)
      : axios.get(`/videos/related.json`);
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }
}
