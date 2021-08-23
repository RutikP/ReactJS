import React from 'react';
import img1 from '../assets/img1.jpg';
import classes from '../components/Carousel.module.css';
import { useState } from 'react';


// let pos = 0;

const Carousel = () => {
    let [pos, setpos] = useState(0);

    
    const mainHead = "Life’s too short for boring food";
    const contents = [
        "If you’re writing a Word document and need to insert placeholder text into a template or outline, there’s an easy way to generate sample text. Sure, you can type your own nonsense words to generate placeholder text, but Word actually has a built-in function to generate random text.",
        "Seocond One If you’re writing a Word document and need to insert placeholder text into a template or outline, there’s an easy way to generate sample text. Sure, you can type your own nonsense words to generate placeholder text, but Word actually has a built-in function to generate random text.",
        "Third One If you’re writing a Word document and need to insert placeholder text into a template or outline, there’s an easy way to generate sample text. Sure, you can type your own nonsense words to generate placeholder text, but Word actually has a built-in function to generate random text.",
        "Fourth One If you’re writing a Word document and need to insert placeholder text into a template or outline, there’s an easy way to generate sample text. Sure, you can type your own nonsense words to generate placeholder text, but Word actually has a built-in function to generate random text.",
        "Fifth One If you’re writing a Word document and need to insert placeholder text into a template or outline, there’s an easy way to generate sample text. Sure, you can type your own nonsense words to generate placeholder text, but Word actually has a built-in function to generate random text."
    ]

    const NextMove = () => {
        console.log(contents.length)
        if (pos === (contents.length - 1)) {
            pos = 0
            setpos(pos)
        }
        else {
            pos = pos + 1
            setpos(pos)
        }
    }
    const PrevMove = () => {
        console.log(contents.length)
        if (pos === 0) {
            pos = contents.length - 1
            setpos(pos)
        }
        else {
            pos = pos - 1
            setpos(pos)
        }
    }
    return (
        <div className={classes.layout}>
            <div className={classes.content}>
                <h1>{mainHead}</h1><br></br>
                {contents[pos]}
            </div>
            <div className={classes.botbuttons}>
                <button className={classes.btnNext} onClick={NextMove}>&raquo;</button>
                <button className={classes.btnPrev} onClick={PrevMove}>&laquo;</button>
            </div>
        </div>

    )
}

export default Carousel
