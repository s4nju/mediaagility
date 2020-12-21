import { React, useState } from 'react';
import './search-style.css';

export default function SearchBar(props) {
    const {
        setSearchQuery
    } = props;
    const [ tempSearch, setTempSearch ] = useState('')
    function handleChange(e) {
        let temp = e.target.value;
        setTempSearch(temp);
        setSearchQuery(temp);
    }

    return (
        <>
            <input
                onChange={handleChange}
                value={tempSearch}
                className='search-input'
                placeholder='City Name'
            />
        </>
    )
}