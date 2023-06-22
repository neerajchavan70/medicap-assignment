import React, { useCallback, useContext, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { css } from "@emotion/react";
import { AppContext } from "src/context/context";

export const SearchBar = (props) => {
    const { onSearch } = props;
    const {searchText, handleSearchTextChange} = useContext(AppContext)

    const handleSearchClicked = useCallback(
        (evt) => {
            evt.preventDefault();
            onSearch(searchText);
        },
        [onSearch, searchText]
    );

    return (
        <Box
            css={css`
                display: flex;
                flex-direction: row;
                width: 480px;
                max-width: 100%;
                margin-top: 24px;
            `}
        >
            <TextField
                id="query"
                variant="outlined"
                placeholder="TV Show Query"
                value={searchText}
                onChange={handleSearchTextChange}
                css={css`flex: 1;`}
            />
            
            <Button variant="contained" color="primary" onClick={handleSearchClicked}>
                Search
            </Button>
        </Box>
    );
};
