import { useNavigate } from "react-router-dom";
import PrimaryTextButton from "../Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import SizedBox from "../SizedBox";
import styles from "./emptylist.module.css";

interface IEmptyListProps {
    path:string;
    message:string;
}

export default function EmptyList(props:IEmptyListProps) {

    const navigate = useNavigate();

    return  <div className={styles.no_item}>
                <div className={styles.message}>{props.message}</div>
                <SizedBox height="10px" />
                <PrimaryTextButton 
                label={"Start shopping now"}
                action={()=> navigate(props.path)}
                />
            </div>
}