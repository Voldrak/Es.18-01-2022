import Link from "next/link";
import styles from "./Layouts.module.scss";

export default function LayoutDefaults({children}) {
    return(
<>
    <div className={styles.nav}>
    <ul>
        <li>
            <Link href="/"><a>Home</a></Link>
            <Link href="/gallery"><a>Gallery</a></Link>

        </li>
    </ul>
    </div>
    <div className={styles.content}>{children}</div>
    <div className={styles.footer}>Copyright &copy; 2022</div>
</>
)
}