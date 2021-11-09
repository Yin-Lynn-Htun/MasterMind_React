import React from 'react'
import './HintHolder.css'

const HintHolder = (props) => {
    const attachClass = ['holder', props.type, `postion${props.id}`]

    return <div className={attachClass.join(' ')}></div>
}

export default HintHolder
