import React, { useRef, useEffect } from 'react';

const CanvasAnimation = props => {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }, []);
    

    return <canvas ref={canvasRef} {...props}></canvas>;
};

export default CanvasAnimation;