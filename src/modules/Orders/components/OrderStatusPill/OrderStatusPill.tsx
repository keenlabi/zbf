import styles from "./orderstatuspill.module.css";

interface IOrderStatusPillProps {
  status:"PENDING"|"PROCESSING"|"SHIPPING"|"DELIVERED";
}

export default function OrderStatusPill(props:IOrderStatusPillProps) {
  
  const detStyle = (status:string) => {
    switch (status) {
      case "PENDING":
        return styles.pending;
      case "PROCESSING":
        return styles.processing;
      case "SHIPPING":
        return styles.shipping;
      case "DELIVERED":
        return styles.delivered;
    }
  };

  return (
    <div 
      className={`${styles.container} ${detStyle(props.status)}`} 
      children={props.status}
    />
  );
}
