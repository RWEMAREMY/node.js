// <---- CLOUDINARY UPLOAD --->
import cloudinary from "cloudinary";



const handleUpload = async (file) => {
    let imageURL = null;
  
  
  const result = await cloudinary.uploader.upload(file, options);

    imageURL = result.url;

    console.log(imageURL);
    return imageURL;
};

export default handleUpload;
