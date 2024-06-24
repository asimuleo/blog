import { useRouter } from 'next/router'

export const ActiveLink = ({ children, num}) => {
    const router = useRouter()
    const style = {
        marginRight: 10
    }

    const href = router.asPath + '/' + num

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <a href={href} onClick={handleClick} style={style}>
            {num}↗
        </a>
    )
}
