import {useRouter} from 'next/router'

import styles from './problemlink.module.css'

export const ProblemLink = ({num, tier}) => {

    const router = useRouter()

    const href = router.asPath + '/' + num

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <div className={styles.problem}>
            <a href={href} onClick={handleClick} data-problem-id={num} data-tier={tier}></a>
        </div>
    )

}