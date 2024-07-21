import styles from "./customersList.module.css";
import { useEffect } from "react"
import { FetchShopCustomersAction } from "src/shared/api/shopCustomers.api"
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader"
import { useShopCustomersState } from "src/store/shop/shopCustomers/shopCustomers.atom"
import CustomersTable from "../CustomersTable";
import Pagination from "src/shared/components/Pagination";

export default function CustomersList() {

    const [shopCustomersState, setShopCustomersState] = useShopCustomersState();

    useEffect(()=> {
        setShopCustomersState(state => ({ ...state, status:"loading" }));

        FetchShopCustomersAction(shopCustomersState.currentPage)
        .then((response)=> {
            setShopCustomersState(state => ({ 
                ...state, 
                ...response.data
            }))
        })
        .catch((error)=> {
            setShopCustomersState(state => ({
              ...state,
              status:"failed",
              message: error.message
            }))
        })
        .finally(()=> setShopCustomersState(state => ({ ...state, status:"idle" })))

    }, [setShopCustomersState, shopCustomersState.currentPage])

    if (shopCustomersState.status === "loading") return <ComponentLoader />
    return  <section className={styles.customerList}>
                <CustomersTable customers={shopCustomersState.list} />
                <Pagination
                    currentPage={shopCustomersState.currentPage}
                    totalPages={shopCustomersState.totalPages}
                    goToPageAction={(newPageNumber)=> setShopCustomersState(state => ({ ...state, currentPage: newPageNumber }))}
                />
            </section>
}