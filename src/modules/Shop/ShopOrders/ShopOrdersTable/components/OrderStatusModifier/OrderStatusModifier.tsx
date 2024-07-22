import DropDownField from "src/shared/components/DropDownField/dropdownfield";
import styles from "./orderstatusmodifier.module.css";
import { useEffect, useState } from "react";
import { DropDownFormData, DropDownOption, setDropDownFormData } from "src/shared/components/DropDownField/types";
import { UpdateOrderStatusAction } from "src/shared/api/shopOrders.api";
import { createAlert } from "src/store/alert/atom";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";

interface IOrderStatusPillProps {
  status:"PENDING"|"PROCESSING"|"SHIPPING"|"DELIVERED";
  orderId:string;
}

export default function OrderStatusModifier(props:IOrderStatusPillProps) {
  
    const [isLoading, setIsLoading] = useState(false);

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

    const [orderStatus] = useState<DropDownOption[]>([
        {
            id: "1",
            label: "PENDING",
            value: "PENDING"
        },
        {
            id: "2",
            label: "PROCESSING",
            value: "PROCESSING"
        },
        {
            id: "3",
            label: "SHIPPING",
            value: "SHIPPING"
        },
        {
            id: "4",
            label: "DELIVERED",
            value: "DELIVERED"
        }
    ])

    const [orderStatusModel, setOrderStatusModel] = useState<DropDownFormData>({
        name: "order-status",
        options: orderStatus,
        selected: true,
        selectedOptionIndex: 0,
        error: "",
    });

    useEffect(()=> {
        const selectedOptionIndex = orderStatus.findIndex(status =>  status.value === props.status)
        setOrderStatusModel(state => ({
            ...state,
            value: orderStatus[selectedOptionIndex],
            selected: true,
            selectedOptionIndex: selectedOptionIndex,
        }))
    }, [orderStatus, props.status])

    function selectOption(index: number, model: DropDownFormData, setModel: setDropDownFormData) {
        model.value = model.options[index];
        model.selected = true;
        model.selectedOptionIndex = index;
        setModel({ ...model });

        setIsLoading(true);
        
        UpdateOrderStatusAction(props.orderId, model.value.value!)
        .then((response)=> createAlert("success", response.message))
        .catch((error)=> createAlert("error", error.message))
        .finally(()=> setIsLoading(false))
    }

    return <div className={`${styles.container} ${detStyle(orderStatusModel.value?.value ?? props.status)}`}>
                {
                    isLoading
                    ?   <ComponentLoader  />
                    :   <DropDownField
                            options={orderStatusModel.options} 
                            selected={orderStatusModel.selected} 
                            selectedOptionIndex={orderStatusModel.selectedOptionIndex}
                            error={orderStatusModel.error}
                            onSelect={(optionIndex:number)=> selectOption(optionIndex, orderStatusModel, setOrderStatusModel)}
                        />
                }
            </div>
}
