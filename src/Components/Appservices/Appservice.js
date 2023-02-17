import Axios from "axios";
import { URL } from "./API_URL";
import AuthHeader from "./auth-header";

const GetList = (e) => {
  return Axios.get(`${URL}/${e}`, {
    headers: AuthHeader(),
  });
};

const GetDetail = (e, id) => {
  return Axios.get(`${URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const Patch = (e, data) => {
  return Axios.patch(`${URL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Create = (e, data) => {
  return Axios.post(`${URL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Update = async (e, id, data) => {
  return await Axios.put(`${URL}/${e}/${id}`, data, {
    headers: AuthHeader(),
  });
};

const Delete = (e, id) => {
  return Axios.delete(`${URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const AppService = {
  GetList,
  GetDetail,
  Patch,
  Create,
  Update,
  Delete,
};

export default AppService;
