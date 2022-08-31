import axios from "axios";

export class HttpClient {
  mainUrl;

  constructor(url) {
    this.mainUrl = url;
  }

  async get(endpoin) {
    return await axios.get(`${this.mainUrl}/${endpoin}`);
  }

  async post(endpoin,body) {
    return await axios.post(`${this.mainUrl}/${endpoin}`,body);
  }

  async put(endpoin,body,id) {
    return await axios.put(`${this.mainUrl}/${endpoin}`/{id},body);
  }
  
  async patch(endpoin,body,id) {
    return await axios.patch(`${this.mainUrl}/${endpoin}`/{id},body);
  }

}
