import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { css } from "@emotion/react";

export const SearchResult = (props) => {
    const { show, onCardClickHandler } = props;
    const { name, image } = show;

    return (
        <Card
            css={css`
                display: flex;
                flex-direction: column;
                height: 100%;
            `}
            onClick={onCardClickHandler}
        >
            <CardHeader title={name} style={{ flex: 1 }} />
            <CardMedia component="img" image={image?.medium || image?.original} alt={name} />
        </Card>
    );
};
