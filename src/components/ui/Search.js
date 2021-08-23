import React, { useState } from 'react'

const Search = () => {
    const [text, setText] = useState("")

    const handleChange = e => {
        const inputVariable = e.target.value;
        setText(inputVariable)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(text)
    }


    return (
        <section className="search">
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 className="form-control"
                 value={text}
                 onChange={handleChange}
                 placeholder="Search Characters"
                  />
            </form>
            
        </section>
    )
}

export default Search
