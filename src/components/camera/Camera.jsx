import React, { useEffect, useState } from 'react'



function Camera() {


const [stream, setStream] = useState(null)
const [error, setError] = useState(null)

useEffect(() => {
    async function getCameraAccess() {
        try {
            if(!navigator.mediaDevices) {
                console.log('Media devices are not supported');
            }
            const mediaStream = await
            navigator.mediaDevice.getUserMedia({video: true});

            if(!mediaStream) {
                console.log('Fail to get media stream');
            }

            setStream(mediaStream);
        } catch (error) {
            setError(error.message)
        }
    }
    getCameraAccess();
}, [])

  return (
    <div>
        {stream && (
            <video autoPlay playsInline>
                <source srcObject = {stream} type="video/mp4" />
            </video>
        )}
        {error && <p>Error: {error} </p>}
    </div>
  )
}

export default Camera