import { useEffect, useState } from "react"
import './color.css';

export default function RandomColor(){
    
    const[typeOfColor , setTypeOfColor] = useState('hex');
    const[color , setColor] = useState('#000000');

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function handleGenerateRandomHexColor(){

        const hex = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"];
        let hexColor = "#";

        for(let i=0 ; i<6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleGenerateRandomRGBColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);

    }

    useEffect(()=> {
        if(typeOfColor==='hex') handleGenerateRandomHexColor();
        else handleGenerateRandomRGBColor();
    }, [typeOfColor])

    return <div className="container" style={{
        width: "100vw",
        height: "110vh",
        background: color,
    }}>
        <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor==='hex'? handleGenerateRandomHexColor : handleGenerateRandomRGBColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems : 'center',
            color: 'white',
            fontSize : '30px',
            marginTop: '40px',
            flexDirection : 'column',
            gap: '20px',
        }}>
            <h3>{typeOfColor==='rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}