import styles from "./formwrapper.module.css";

interface IFormWrapperProps {
    formHeading?:string; 
    extraStyle?:string;
    children:JSX.Element|JSX.Element[];
}

export default function FormWrapper(props:IFormWrapperProps) {
    return (
        <form 
            className={`${styles.form_container} ${props.extraStyle!}`}
            onSubmit={(e)=> e.preventDefault()}
        > 
            {(props.formHeading) ? <div className={styles.form_title}>{ props.formHeading }</div> : null }
            { props.children } 
        </form>
    );
}
