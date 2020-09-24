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

const kiteColors = [
    '#D9042B',
    '#049DD9',
    '#0487D9',
    '#F2CB05',
    '#F27405'
];

/**
 * 
 * class Rhombus {
    constructor(ctx, xCenter, yCenter, sideLength, rotation, color) {
        this.ctx = ctx;
        this.xCenter = xCenter;
        this.yCenter = yCenter;
        this.sideLength = sideLength;
        this.rotation = rotation;
        this.color = color;
    }

    draw() {
        const numberOfSides = 4;

        this.ctx.beginPath();
        this.ctx.moveTo(
            this.xCenter + this.sideLength * Math.cos(this.rotation), 
            this.yCenter + this.sideLength * Math.sin(this.rotation)
        );

        this.ctx.lineTo(
            this.xCenter + (this.sideLength - 10) * Math.cos(this.rotation + (1 * 2 * Math.PI / numberOfSides)),
            this.yCenter + (this.sideLength - 10) * Math.sin(this.rotation + (1 * 2 * Math.PI / numberOfSides))
        );    
        this.ctx.lineTo(
            this.xCenter + (this.sideLength + 10) * Math.cos(this.rotation + (2 * 2 * Math.PI / numberOfSides)),
            this.yCenter + (this.sideLength + 10) * Math.sin(this.rotation + (2 * 2 * Math.PI / numberOfSides))
        );
        this.ctx.lineTo(
            this.xCenter + (this.sideLength - 10) * Math.cos(this.rotation + (3 * 2 * Math.PI / numberOfSides)),
            this.yCenter + (this.sideLength - 10) * Math.sin(this.rotation + (3 * 2 * Math.PI / numberOfSides))
        );
        
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}*/

const drawRhombus = (ctx, xCenter, yCenter, sideLength, rotation, color) => {
    const numberOfSides = 4;

    ctx.beginPath();
    ctx.moveTo(
        xCenter + sideLength * Math.cos(rotation), 
        yCenter + sideLength * Math.sin(rotation)
    );

    ctx.lineTo(
        xCenter + (sideLength - 10) * Math.cos(rotation + (1 * 2 * Math.PI / numberOfSides)),
        yCenter + (sideLength - 10) * Math.sin(rotation + (1 * 2 * Math.PI / numberOfSides))
    );    
    ctx.lineTo(
        xCenter + (sideLength + 10) * Math.cos(rotation + (2 * 2 * Math.PI / numberOfSides)),
        yCenter + (sideLength + 10) * Math.sin(rotation + (2 * 2 * Math.PI / numberOfSides))
    );
    ctx.lineTo(
        xCenter + (sideLength - 10) * Math.cos(rotation + (3 * 2 * Math.PI / numberOfSides)),
        yCenter + (sideLength - 10) * Math.sin(rotation + (3 * 2 * Math.PI / numberOfSides))
    );
    
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

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

    const xCenter = ctx.canvas.width / 2;

    drawRhombus(ctx, xCenter - speed, ctx.canvas.height / 2, 40, Math.PI, kiteColors[0]);
    drawRhombus(ctx, xCenter - speed + 85, ctx.canvas.height / 2, 35, Math.PI, kiteColors[1]);
    drawRhombus(ctx, xCenter - speed + 160, ctx.canvas.height / 2, 30, Math.PI, kiteColors[2]);
    drawRhombus(ctx, xCenter - speed + 225, ctx.canvas.height / 2, 25, Math.PI, kiteColors[3]);
    drawRhombus(ctx, xCenter - speed + 280, ctx.canvas.height / 2, 20, Math.PI, kiteColors[4]);
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