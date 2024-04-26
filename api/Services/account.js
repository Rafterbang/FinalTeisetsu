import { apiGet } from "../http-get";

const AccountDataService = {
  create(cardId) {
    return apiGet.get(`/card/get-card/${cardId}`);
  },
  get(id) {
    console.log("apiGet kepanggil");
    return apiGet.get(`/api/users/${id}`);
  },
  edit(data, token) {
    return ApiAuth(token).put("/api/user/edit-user", data);
  },
  delete(data, token) {
    return ApiAuth(token).delete(`/api/user/delete-user`, { data });
  },
  changePassword(data, token) {
    return ApiAuth(token).put("/api/user/change-password", data);
  },
};

export default AccountDataService;
