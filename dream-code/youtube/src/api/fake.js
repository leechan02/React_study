import axios from "axios";

export default class Fake {
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#popular();
  }

  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #popular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
