import styles from "./headings.module.css";

export function Heading1({children}:{children:string}) {
    return <div className={styles.heading1}>{children}</div>
}

export function Heading2({children}:{children:string}) {
    return <div className={styles.heading2}>{children}</div>
}

export function Heading3({children}:{children:string}) {
    return <div className={styles.heading3}>{children}</div>
}

export function Heading4({children}:{children:string}) {
    return <div className={styles.heading4}>{children}</div>
}

export function Heading5({children}:{children:string}) {
    return <div className={styles.heading5}>{children}</div>
}

export function Heading6({children}:{children:string}) {
    return <div className={styles.heading6}>{children}</div>
}