import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { AppContext } from "src/context/context";
import { css } from "@emotion/react";

export const HomeContent = () => {
    const { searchResults, handleSearch } = useContext(AppContext);

    return (
        <Box
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `}
        >
            <Typography variant="h3" component="h1">
                Medimap TVMaze Coding Exercise
            </Typography>

            <SearchBar onSearch={handleSearch} />
            <div
                css={css`
                    margin-top: 120px;
                `}
            />

            {searchResults?.length ? <SearchResults tvShows={searchResults} /> : null}
        </Box>
    );
};
