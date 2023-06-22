import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SearchResult } from "./SearchResult";
import Link from "next/link";
import { css } from "@emotion/react";

export const SearchResults = (props) => {
    const { tvShows } = props;

    return (
        <Box
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: stretch;
            `}
        >
            <Typography variant="h4" component="h2">
                Search Results
            </Typography>

            <Grid container spacing={2} mt={"12px"}>
                {tvShows.map(({ show }) => {
                    const { id } = show;
                    return (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={id}
                        >
                            <Link href={`/shows/${show?.id}`}>
                                <SearchResult show={show} />
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
