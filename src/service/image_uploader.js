class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.REACT_APP_IMAGE_UPLOADER_PRESET);
    const result = await fetch(process.env.REACT_APP_IMAGE_UPLOADER_DB_URL, {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}

export default ImageUploader;
