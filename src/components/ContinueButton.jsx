import { useState } from "react"
export default function ContinueBtn() {
    const [active,setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <button style={{
            marginTop: '10px',
            borderRadius: '30px',
            height: '3rem',
            width: '20rem',
            outline: 'none',
            border: 'none',
            fontSize: '1rem',
            fontWeight: 700,
            background: active ? 'hsl(224, 30%, 27%)': 'hsl(241, 81%, 54%)',
            color: '#fff'}}
            onClick={handleClick}>
            Continue
        </button>
    )
}