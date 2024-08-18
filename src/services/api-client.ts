import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eb84b0d997b64826bb339cb42bd2f22c'
  }
})