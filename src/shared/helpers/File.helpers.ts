import { uploadToCloudinary } from "../api/cdn.api";

export function uploadToCDN(allImages:File[]) {
  return new Promise<string[]>((resolve, reject)=> {
    if(!allImages.length) return resolve([])
    const uploadPromises = allImages.map((file)=> uploadToCloudinary(file));
    Promise.all(uploadPromises)
    .then((responses)=> resolve(responses))
    .catch((error)=> reject(error))
  })
}