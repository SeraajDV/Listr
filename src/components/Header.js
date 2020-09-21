import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lottie/logo.json'
 
export default function Header() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1 className="header">MyListr</h1>
        <Lottie 
          options={defaultOptions}
          height={50}
          width={50}
          style={{margin: 0}}
        />
      </div>
    );
}