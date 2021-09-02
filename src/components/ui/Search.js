import React from 'react'

const Search = ({ searchValue, setSearchValue, setQuery}) => {

    const handleChange = e => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(searchValue);
    }


    return (
        <section className="search">
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Search Characters"
                 value={searchValue}
                 onChange={handleChange}
                  />
            </form>
            
        </section>
    )
}

export default Search
