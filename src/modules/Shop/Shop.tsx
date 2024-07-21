import styles from "./shop.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Heading3 } from "src/shared/components/Headings/Headings";
import SizedBox from "src/shared/components/SizedBox";
import { removeURLTrailingSlash } from "src/shared/utility/stringPrototype";

export default function Shop() {
    
    const location = useLocation();

    const shopNavigations = [
        {
            name: "Products",
            path:["/shop/add-product", "/shop"]
        },
        {
            name: "Orders",
            path:["/shop/orders"]
        },
        {
            name: "Customers",
            path:["/shop/customers"]
        }
    ]

    function isActivePath(path:string[]) {
        return path.includes(removeURLTrailingSlash(location.pathname))
    }

    return  <section className={styles.shopSection}>
                <Heading3> Shop </Heading3>
                
                <SizedBox height="20px" />
            
                <div className={styles.shopWrapper}>
                    <div className={styles.shopNavSideBar}>
                        {
                            shopNavigations.map(shopNavigation => {
                                return  <Link
                                    key={shopNavigation.path[0]}
                                    to={shopNavigation.path[0]}
                                    className={`${styles.shopNavItem} ${ isActivePath(shopNavigation.path) && styles._active}`}
                                    children={shopNavigation.name}
                                />
                            })
                        }
                    </div>
                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                </div>
            </section>
}