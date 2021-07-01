import React from 'react';


const FaceRecognition = ({imageurl}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                 <img alt='' src={imageurl} width='500px' height='auto'/>
            </div>
        </div>   
     );
}

export default FaceRecognition;