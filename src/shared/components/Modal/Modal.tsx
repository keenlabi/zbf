import styles from "./modal.module.css";
import { useEffect } from "react";
import { useSetGeneralAppState } from "src/store/general/general.atom";
import { Heading5 } from "../Headings/Headings";

interface IModalProps {
  size:{
    width:string;
    height:string;
  };
  children:JSX.Element;
  close:()=> void;
  type:'centered'|'right-aligned';
  heading:string;
}

export default function ModalContainer(props:IModalProps) {

  const setGeneralAppState = useSetGeneralAppState();

  useEffect(()=> {
    setGeneralAppState(state => ({ ...state, isModalOn: true }));

    return(()=> setGeneralAppState(state => ({ ...state, isModalOn: false })))

  }, [setGeneralAppState])

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_bg} onClick={()=> props.close()}></div>

      <div 
        className={`${styles.content_container} ${styles[props.type]}`}
        style={{ width: props.size.width, height: props.size.height }}
      >
        {
          props.heading &&
          <div className={styles.headingSection}>
            <Heading5 children={props.heading} />
          </div>
        }
        <div className={styles.bodySection}>
          { props.children }
        </div>
      </div>
    </div>
  );
}
