import { Cloudinary } from "@cloudinary/url-gen";
import { limitFit } from "@cloudinary/url-gen/actions/resize";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { AdvancedImage, placeholder } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: { cloudName: process.env.VITE_CLOUD_NAME }
});

interface ICloudImageProps {
  publicId:string;
}

export default function CloudImage(props:ICloudImageProps) {

  const myImage = cld.image(props.publicId)
                  .resize(limitFit().width(50))
                  .delivery(format("auto"))
                  .delivery(quality("auto:low"));

  return  <AdvancedImage 
            cldImg={myImage} 
            style={{ maxWidth: "100%" }} 
            plugins={[placeholder()]} 
            className="rounded-lg shadow-lg" 
          />
}