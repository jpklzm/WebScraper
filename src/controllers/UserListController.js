"use strict";
const db = require("../models");
const axios = require("axios");
const baseUrl = "https://reqres.in/api/users";

const _getUsers = async (page) => {
  const query = `${baseUrl}?page=${page}`;
  const response = await axios.get(query);
  const data = response.data.data;

  if (response.data.total_pages > page) {
    return data.concat(await _getUsers(page + 1));
  } else {
    return [].concat.apply([], data);
  }
};

exports.getUsers = async (req, res) => {
  const data = await _getUsers(1);
  data.forEach((el) => {
    db.User.create({
      first_name: el.first_name,
      last_name: el.last_name,
      email: el.email,
      avatar: el.avatar,
    });
  });
  res.send(data);
};
