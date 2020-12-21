import React, { useEffect, useState } from 'react';
import './toggle-style.css';

export default function ToggleButton(props) {
    const {
        value,
        setCurrentPage
    } = props;
    const [buttons, setButtons] = useState([])

    useEffect(() => {
        setButtons(Array.from({ length: value }, (_, i) => i+1))
    }, [value])

    return (
        <div className='button-list'>
            {buttons.map((v, i) => <button className='btn' key={v} onClick={() => setCurrentPage(i)}>{v}</button> )}
        </div>
    )
}