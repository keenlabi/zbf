import { useState } from "react";
import styles from "./imagepicker.module.css";
import UploadImage from "src/shared/assets/icons/upload-image.svg?react";
import SizedBox from "../SizedBox";

interface IImagePickerProps {
    label?:string;
    selectAction:(selectedImages:File)=> void;
}

export default function ImagePicker(props:IImagePickerProps) {

    const [selectedImage, setSelectedImage] = useState<File>();

    function selectImageFile(event:React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.files?.length) {
            setSelectedImage(event.currentTarget.files[0]);
            props.selectAction(event.currentTarget.files[0])
        }
    }

    return  <div>
                {
                    props.label && <label
                        className={styles.label}
                        children={props.label}
                    />
                }
                <SizedBox height="10px" />
                <div className={styles.imagePicker}>
                    <label htmlFor="profile_picture">
                        {
                            selectedImage
                            ?   <img 
                                    className={styles.selectedImage}
                                    src={URL.createObjectURL(selectedImage as Blob)}
                                    alt=""
                                />
                            :   <UploadImage className={styles.imagePlaceholder} />
                        }
                        <div className={styles.text}>
                            Click to upload
                        </div>
                    </label>
                    <input
                        type="file"
                        id="profile_picture"
                        accept="image/*"
                        onChange={(e) => selectImageFile(e)}
                        hidden
                    />
                </div>
            </div>
}