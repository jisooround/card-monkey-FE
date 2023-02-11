import axios from "axios";
import instance from "./apiController";

class MonkeyGetToken {
  axiosInstance;

  constructor() {
    this.axiosInstance = instance;
  }
}
export default MonkeyGetToken;
