import styles from "./column.module.css";

interface IColumnProps{
    children:JSX.Element[];
    startsAt?:"top"|"bottom";
    height:string;
    padding?:{
        left?:string;
        right?:string;
    }
}

export default function Column(props:IColumnProps) {
    return  <div 
                className={styles.columnContainer}
                style={{
                    justifyContent: props.startsAt === "top"
                                    ? "flex-start"
                                    : "flex-end",
                    height: props.height,
                    paddingLeft: props.padding?.left,
                    paddingRight: props.padding?.right,
                }}
            >
                { props.children }
            </div>
}