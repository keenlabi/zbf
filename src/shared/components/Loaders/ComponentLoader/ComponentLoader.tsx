import styles from "./componentloader.module.css";

export default function ComponentLoader({
    height, loaderHeight, loaderWidth
}:{height?:string, loaderHeight?:string, loaderWidth?:string}) {

    const loaderAfter = {
        "--loader-after-width": loaderWidth,
        "--loader-after-height": loaderHeight
    }

    return(
        <div className={styles.container} style={{ height }}>
            <span 
                className={styles.loader} 
                style={{ 
                    height: loaderHeight, 
                    width: loaderWidth,
                    ...loaderAfter
                }}
            />
        </div>
    )
}