import React from 'react';
import ImagesCard from '../imageCard/imagesCard'

const ImagesList = ({imagesData}) =>{
    return(
        <div>
            {
                imagesData.map(dataSource => {
                    return(<ImagesCard key={dataSource.image_id} dataSource={dataSource}/>)
                })
            }
        </div>
    )
}


export default ImagesList;