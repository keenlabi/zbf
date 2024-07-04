import axios from "axios";
import { INetworkResponse } from "./types";

export function getFetch<T>(url:string, params?:object){
  return new Promise<INetworkResponse<T>>((resolve, reject) => {
    fetch(url, "GET", params)
    .then((response)=> resolve(response.data))
    .catch((error)=> {
      console.log(error)
      reject(error.response.data)
    });
  });
}

export function postFetch<T>(url:string, body:object) {
  return new Promise<INetworkResponse<T>>((resolve, reject) => {
    fetch(url, "POST", body)
    .then((response)=> resolve(response.data))
    .catch((error)=> reject(error.response.data));
  });
}

export function patchFetch<T>(url:string, body:object) {
  return new Promise<INetworkResponse<T>>((resolve, reject) => {
    fetch(url, "PATCH", body)
    .then((response)=> resolve(response.data))
    .catch((error)=> reject(error));
  });
}

export function deleteFetch(url:string, body?:object){
  return new Promise((resolve, reject) => {
    fetch(url, "DELETE", body)
    .then((response)=> resolve(response.data))
    .catch((error)=> reject(error.response));
  });
}

function fetch(url:string, method:"GET"|"POST"|"PATCH"|"DELETE", data?:object){
  return axios({
    url,
    method,
    baseURL: process.env.VITE_BASE_URL,
    data,
    withCredentials: true,
  });
}
