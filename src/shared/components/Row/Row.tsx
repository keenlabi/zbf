import styles from "./row.module.css"

export default function Row({
    children, alignment, gapType
}:{children:JSX.Element[], alignment?:"top"|"center"|"bottom", gapType?:"space-between"}) {
    return  <div 
                className={`
                    ${styles.row_container}
                    ${  alignment === "top" 
                        ?   styles.align_top 
                        :   alignment === "center"
                            ?   styles.align_center
                            :   styles.align_bottom 
                    }
                `}
                style={{justifyContent: gapType}}
            > 
                { children } 
            </div>
}