import styles from './Svg.module.css';

export const LeftArrow = () => {
    return (
        <>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m11 5-7 7 7 7m-7-7h16"/>
            </svg>
        </>
    )
}