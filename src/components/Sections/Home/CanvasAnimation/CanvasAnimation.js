import React, { useRef, useEffect } from 'react';

const CanvasAnimation = props => {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;

        ctx.fillStyle = '#E8E8E8';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.closePath();
    }, []);
    

    return <canvas ref={canvasRef} {...props}></canvas>;
};

const animate = () => {
    requestAnimationFrame(animate);


};

export default CanvasAnimation;