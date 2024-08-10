import {useRouter} from 'next/router'

export const ActiveLink = ({children, num, title}) => {
    const router = useRouter()

    const href = router.asPath + '/' + num

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
    return (
        <a href={href} onClick={handleClick} className={"nx-mx-2 nx-p-1 w-max inline-block"}>
            <div className={"nx-flex nx-flex-col nx-justify-center leading-tight"}>
                <div className={"text-xs text-blue-500 font-thin"}>{num}</div>
                <div className={"text-blue-500"}>{title}</div>
            </div>
        </a>
    )
}
