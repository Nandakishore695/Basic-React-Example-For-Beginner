import { useState } from 'react'

const Child = ({ callback }) => {
    const state = {
        example: '👋'
    }

    const handleCallback = () => callback(state)

    return (
        <button onClick={handleCallback}>Pass data to parent</button>
    )
}

export default function Parent() {
    const [state, setState] = useState({})
    const callback = payload => {
        setState(payload)

        console.log(state)
    }

    return (
        <div>
            <h1>Hello from Parent</h1>
            <Child callback={callback} />
        </div>
    )
}