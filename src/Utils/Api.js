const onResponse = (data) =>
  data.ok ? data.json() : Promise.reject(`Error: ${data}`);

class Api {
  constructor({ baseUrl, token }) {
    this._token = token;
    this._baseUrl = baseUrl;
  }

  getAllPosts() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponse);
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiY2QiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.LurnltY6vdlMBlntpI1-wyZRJ-tezwzChO-Sp8VPgrA",
  "Content-Type": "application/json",
};

const api = new Api(config);

export default api;