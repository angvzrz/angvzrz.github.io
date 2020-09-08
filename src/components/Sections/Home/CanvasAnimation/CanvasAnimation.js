import React, { useRef } from 'react';

const CanvasAnimation = () => {
    const canvas = <canvas></canvas>
    const canvasRef = useRef(null);
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');

    return canvas;
};

export default CanvasAnimation;