import React, { useState } from 'react'

const Search = ({ setSearchValue}) => {
    const [text, setText] = useState("")

    const handleChange = e => {
        const inputValue = e.target.value;
        setText(inputValue);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchValue(text);
    }


    return (
        <section className="search">
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Search Characters"
                 value={text}
                 onChange={handleChange}
                  />
            </form>
            
        </section>
    )
}

export default Search
