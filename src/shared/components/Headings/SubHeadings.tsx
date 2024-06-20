import styles from "./headings.module.css";

export function SubHeading1({children}:{children:string}) {
    return <div className={styles.subHeading1}>{children}</div>
}

export function SubHeading2({children}:{children:string}) {
    return <div className={styles.subHeading2}>{children}</div>
}

export function SubHeading3({children}:{children:string}) {
    return <div className={styles.subHeading3}>{children}</div>
}

export function SubHeading4({children}:{children:string}) {
    return <div className={styles.subHeading4}>{children}</div>
}

export function SubHeading5({children}:{children:string}) {
    return <div className={styles.subHeading5}>{children}</div>
}

export function SubHeading6({children}:{children:string}) {
    return <div className={styles.subHeading6}>{children}</div>
}