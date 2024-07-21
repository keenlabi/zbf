export function uploadToCloudinary(file:File) {
    return new Promise<string>((resolve, reject) => {
  
        if (!file) return reject(Error("Invalid selected file"));

        const formData = new FormData();
        formData.append("file", file);
        formData.append("cloud_name", process.env.VITE_CLOUD_NAME!);
        formData.append('upload_preset', process.env.VITE_CLOUD_UPLOAD_PRESET!);
        formData.append('tags', 'admin_app_upload'); 

        const url = `https://api.cloudinary.com/v1_1/${process.env.VITE_CLOUD_NAME!}/upload`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data)=> resolve(data.secure_url))
        .catch((error)=> reject(error));
    })
}