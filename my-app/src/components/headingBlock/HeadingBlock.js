import React from 'react'
import './headingBlock.css'

const HeadingBlock = (probs) => {
    return (
        <>
            <div className='Heading-container'>
                <h1 class=" aboutMainHeading py-2 ">{probs.heading}</h1>
                <div class="block">
                    <span>{probs.blockL }|</span> {probs.blockR}
                </div>
            </div>
        </>
    )
}

export default HeadingBlock;
