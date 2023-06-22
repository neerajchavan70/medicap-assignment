import React, { createContext, useCallback, useState } from 'react';
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = useCallback(async (query) => {
        if (!query) {
            alert("Please enter a query before pressing search");
        }
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
        setSearchResults(data);
    }, []);

    const handleSearchTextChange = useCallback((evt) => {
        const { value } = evt.target;
        setSearchText(value);
    }, []);

    return (
        <AppContext.Provider value={{ searchResults, handleSearch, searchText, handleSearchTextChange }}>
            {children}
        </AppContext.Provider>
    );
};
