import { useState } from "react"

const useDisclose = () => {

    const [isopen, setIsopen] = useState(false)

    const onopen = () => {
        setIsopen(true)
    }

    const onclose = () => {
        setIsopen(false)
    }
    return {isopen, onopen, onclose};
}

export default useDisclose;
