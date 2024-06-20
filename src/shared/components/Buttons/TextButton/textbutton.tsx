import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import styles from "./textbutton.module.css";

interface ITextButtonProps{
	extraStyles:string;
	type?:"button"|"submit"|"reset";
	label:string;
	isLoading?:boolean;
	loaderColor?:string;
	onClick:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?:boolean;
}

export default function TextButton(props:ITextButtonProps) {
	return (
		<button
			type={props.type ?? "button"}
			className={`${styles.text_btn_container} ${props.extraStyles}`}
			style={{ 
				cursor:  props.disabled ?"not-allowed" :"initial"
			}}
			onClick={(e) => (!props.isLoading ? props.onClick?.(e) : null)}
			disabled={props.disabled}>
			{props.isLoading ? (
				<div className={styles.loader_wrapper}>
					<CircularRingLoader color={props.loaderColor || "white"} />
				</div>
			) : (
				props.label
			)}
		</button>
	);
}
