import React, { useRef, useEffect } from 'react';
import { openSimplexNoise } from '../../../../utils/OpenSimplexNoise/SimplexNoise';
import { noise } from '@chriscourses/perlin-noise';

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

const drawClouds = (ctx, speed) => {
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

const drawRhombus = (ctx, xCenter, yCenter, sideLength, rotation, color) => {
    const numberOfSides = 4;
    // uncomment to enter rotation in degrees. 
	// rotation *= Math.PI/180;

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
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

const rhombusLengths = [40, 35, 30, 25, 20];
let rhombusDistances = [0, 85, 160, 225, 280];
let previousRotationAngle = 0;

const distance = (xA, yA, xB, yB) => {
    const horizontalDistance = (xA - xB);
    const verticalDistance = (yA - yB);

    return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
}

const polarToCartesian = (angle, distance) => {
    return {
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle)
    }
}

const cartesianToPolar = (x1, y1, x2, y2) => {
    const x = x2 - x1;
    const y = y2 - y1;

    return {
        distance: Math.sqrt(Math.pow(2, x) + Math.pow(2, y)),
        angle: Math.atan2(y, x)
    };
}

const degreesToRadians = (degrees) => {
    return Math.PI / 180;
}

const changeSign = (sign, number) => {
    if (sign === 0) {
        sign = 1;
    }
    else if (sign === -0) {
        sign = -1;
    }

    return sign * number;
}

let transitionX = 0;
let transitionY = (window.innerHeight - 60) / 4 ;
let previousX = 0;
let previousY = 0;
let frameCount = 0;
let sign = 1;

const draw = (ctx, speed) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#E8E8E8';

    const currentTime = new Date() * 0.000005;

    const noiseX = noise(currentTime) * ctx.canvas.width;
    const noiseY = noise(currentTime);

    const rotationAngle = noise(currentTime) * Math.pow(2, Math.PI);
    // const rotationAngle = 3.14159;

    if (frameCount === 50) {
        sign = Math.round(Math.sin(Math.sin(noiseX)));
        frameCount = 0;
    }

    transitionX = transitionX + Math.cos(changeSign(sign, speed)) * 5;
    transitionY = transitionY + Math.sin(changeSign(sign, speed)) * 5;
    let rhombusX = transitionX + noiseX;
    let rhombusY = transitionY * noiseY;

    // if ((rhombusX >= ctx.canvas.width - 70) || (rhombusX <= 70)) {
    //     rhombusX = changeSign(Math.sign(rhombusX), rhombusX);
    // }

    if ((rhombusY >= ctx.canvas.height - 70) || (rhombusY <= 70)) {
        rhombusY = changeSign(Math.sign(rhombusY), rhombusY);
    }

    for (let i = 0; i < 1; i++) {
        const rhombusLength = rhombusLengths[i];
        const angle = cartesianToPolar(previousX, previousY, rhombusX, rhombusY).angle;

        drawRhombus(
            ctx, 
            rhombusX,
            rhombusY,
            rhombusLength, 
            angle,
            kiteColors[i]
        );
    }

    previousRotationAngle = rotationAngle;
    previousX = rhombusX;
    previousY = rhombusY;
    frameCount++;
}

const CanvasAnimation = props => {
    const canvasRef = useRef(null);

    useEffect(() => {        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 60;

        ctx.fillStyle = 'blue';
        ctx.moveTo(940, 330);
        // ctx.beginPath();
        // ctx.lineTo(650, 800);
        // ctx.lineTo(1400, 770);
        // ctx.closePath();
        // ctx.fill();

        let animationFrameId = null;
        let speed = 0;
        const simplexSeed = Date.now();
        
        const render = () => {            
            speed += 0.03;
            draw(ctx, speed, simplexSeed);
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