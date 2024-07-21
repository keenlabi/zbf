import { useEffect, useRef, useState } from "react";

export default function useImageColorPicker({ imageUrl, submitColor }:{imageUrl:string; submitColor:(color:string)=> void}){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const canvasRef = useRef<any>(null);

    const [color, setColor] = useState<string>("");
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = imageUrl;
  
      image.onload = () => {
        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);
  
        // Get the pixel data of the top-left corner (position: 0,0)
        const pixelData = ctx.getImageData(0, 0, 1, 1).data;
  
        // Extract RGB values from the pixel data
        const [red, green, blue] = pixelData;
  
        // Convert RGB values to hex code
        const hexCode:string = rgbToHex(red, green, blue);
        setColor(hexCode);
      };
    }, [imageUrl]);

    useEffect(()=> {
        submitColor(color)
    }, [color, submitColor])
  
    // Helper function to convert RGB values to hex code
    function rgbToHex(r:number, g:number, b:number) {
      return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }
  
    
    return <canvas ref={canvasRef} />
}