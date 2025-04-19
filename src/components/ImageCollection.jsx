import React from 'react'
import assets from '../assets/assets'

const ImageCollection = () => {
    console.log('====================================');
    console.log(assets.image_collection[0]);
    console.log('====================================');
    return (
        <div>
            <div className='grid sm:grid-cols-2 grid-cols-1'>
                {
                    assets.image_collection.map((_, index) => {
                        return (
                            <img className='h-full' src={assets.image_collection[index]} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageCollection
