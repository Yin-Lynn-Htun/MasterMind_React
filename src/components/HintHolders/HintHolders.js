import React from 'react'
import HintHolder from './HintHolder/HintHolder'
import './HintHolders.css'

const HintHolders = (props) => {
    return (
        <div className={'hintHolder'}>
            {props.checkNumber.map((type, index) => {
                return <HintHolder key={index} type={type} />
            })}
        </div>
    )
}
export default React.memo(HintHolders, (prevProps, nextProps) => {
    return prevProps.checkNumber === nextProps.checkNumber
})
