import {useRef} from 'react'

function useCountRender() {
    let render=useRef(0)
    console.log("Render in useCountRender: "+render.current++);
}

export default useCountRender
