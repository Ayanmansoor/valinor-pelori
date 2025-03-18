import { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const api = import.meta.env.VITE_BACKEND_URL;
// axios instance for network request

const instance = axios.create({
  baseURL: api,
  headers: {
    Authorization: `Token ${Cookies.get("Token")}`,
  },
});

// getItem setItem hasOwnProperty localStorage

function setTokenOnSession(Token, status) {
  try {
    Cookies.set("Token", Token, { expires: 7, secure: true });
    Cookies.set("Admin", status, { expires: 7, secure: true });
  } catch (error) {
    console.log("some exception occur in setting the status ");
  }
}

async function authorize() {
  try {
    const token = Cookies.get("Token");
    if (token) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

async function adminAuthoeize() {
  try {
    const admin = Cookies.get("Admin");
    if (admin) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function hookLogin(data) {
  try {
    const response = await axios.post(`${api}/api/login`, data);
    console.log(response);
    if (setTokenOnSession(response.data?.key, response?.data?.is_admin))
      return response;
  } catch (error) {
    throw error;
  }
}

async function hookRegister(data) {
  try {
    const response = await axios.post(`${api}/api/register`, data);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

async function hookcurrentUser() {
  try {
    const token = Cookies.get("Token");
    if (token) {
      const response = instance.get(`/api/currentuser`);
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { hookLogin, hookRegister, authorize, adminAuthoeize ,hookcurrentUser};
