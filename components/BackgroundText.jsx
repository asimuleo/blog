import { useTheme } from 'next-themes'


export const Yellow = ({children}) => {

    const { theme, setTheme } = useTheme()

    const style = {
        backgroundColor: theme === "dark" ? "#59442a": "#fff5b1"
    }

    return (
        <span style={style}>{children}</span>
    );
}

export const RED = ({children}) => {

    const { theme, setTheme } = useTheme()

    const style = {
        backgroundColor: theme === "dark" ? "#502a28": "#ffe6e6"
    }

    return (
        <span style={style}>{children}</span>
    );
}