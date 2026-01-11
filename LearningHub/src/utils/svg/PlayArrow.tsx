import styles from './Svg.module.css';

export const PlayArrow = () => {
    return (
        <>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 4v16m14-8L6 20m14-8L6 4"/>
            </svg>
        </>
    )
}