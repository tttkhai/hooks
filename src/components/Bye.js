import React from 'react'
import useCountRender from './useCountRender'

const Bye= React.memo(({increment}) => {
    useCountRender()
    return (
        <div>
            <button onClick={()=>increment(3)}> increment</button>
        </div>
    )
})

export default Bye