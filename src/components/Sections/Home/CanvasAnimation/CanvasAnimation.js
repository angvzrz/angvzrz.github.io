import React, { useRef, useEffect } from 'react';

const randomIntFromRange = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

const clouds = [
    {id:'a', x: 920, y: 550, radius: 20},
    {id:'b', x: 880, y: 600, radius: 30},
    {id:'c', x: 850, y: 640, radius: 20},
    {id:'d', x: 800, y: 690, radius: 30},
    {id:'e', x: 780, y: 720, radius: 20},
    {id:'f', x: 780, y: 740, radius: 20},
    {id:'g', x: 760, y: 800, radius: 30},
    {id:'h', x: 980, y: 570, radius: 30},
    {id:'i', x: 1040, y: 600, radius: 20},
    {id:'j', x: 1080, y: 640, radius: 30},
    {id:'k', x: 1130, y: 670, radius: 20},
    {id:'l', x: 1160, y: 700, radius: 20},
    {id:'m', x: 1180, y: 750, radius: 20},
    {id:'n', x: 1180, y: 750, radius: 20},
    {id:'o', x: 1220, y: 790, radius: 20},
    {id:'p', x: 1260, y: 820, radius: 20},
];


const draw = (ctx, speed) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#E8E8E8';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    clouds.forEach(circleProps => {
        
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(
        circleProps.x - speed,
        circleProps.y - 200, 
        circleProps.radius + 20, 
        0, Math.PI * 2, false);
        ctx.fill();

        // ctx.font = '20px Arial';
        // ctx.fillStyle = 'red';
        // ctx.fillText(circleProps.id, circleProps.x, circleProps.y - 200);
        ctx.closePath();
    });
}

const CanvasAnimation = props => {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 60;
        

        console.log(canvas.width)

        ctx.fillStyle = 'blue';
        ctx.moveTo(940, 330);
        // ctx.beginPath();
        // ctx.lineTo(650, 800);
        // ctx.lineTo(1400, 770);
        // ctx.closePath();
        // ctx.fill();

        let animationFrameId = null;
        let speed = 0;
        const render = () => {            
            speed += 0.5;
            draw(ctx, speed);
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return() => {
            cancelAnimationFrame(animationFrameId);
        }

    }, [draw]);
    

    return <canvas ref={canvasRef} {...props}></canvas>;
};

export default CanvasAnimation;