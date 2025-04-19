import React from 'react'
import assets from '../assets/assets'

const ImageCollection = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                {
                    assets.image_collection.map((_, index) => {
                        return (
                            <img className='h-full w-full' src={assets.image_collection[index]} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageCollection
