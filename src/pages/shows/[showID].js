import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import { css } from "@emotion/react"

const ShowsDetailsPage = ({ show }) => {

    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const formattedSchedule = show?.schedule.days.slice(0, -1).join(", ") + " " + show?.schedule.days.slice(-1);

    return (
        <div css={css`width: 100%`}>
            <h2>{show?.name}</h2>
            <div css={css`display: flex; column-gap: 20px;`}>

                <Image alt="img" src={show?.image?.medium} width={400} height={400} />

                <div css={css`
                    display: flex; 
                    column-gap: 20px; 
                    
                    @media (max-width: 576px) {
                        flex-direction: column;
                    }
                `}>
                    {show?.summary && <div css={css`width: 70%;`} dangerouslySetInnerHTML={{ __html: show?.summary }} />}

                    {/* Show Info Section */}
                    <div
                        css={css`
                            border: 1px solid lightgray;
                            background-color: dimgrey;
                            padding: 10px 20px;
                            width: max-content;
                        `}
                    >
                        <h3>Show Info</h3>
                        <div>
                            <label>Network: </label>
                            <span>{show?.network?.name}</span>
                        </div>
                        <div>
                            <label>Schedule:</label>
                            <span>{formattedSchedule} {show?.schedule.time && `at ${show?.schedule.time}`}  {show?.runtime && `(${show?.runtime} min)`}</span>
                        </div>
                        <div>
                            <label>Status: </label>
                            <span>{show?.status}</span>
                        </div>
                        <div>
                            <label>Show Type: </label>
                            <span>{show?.type}</span>
                        </div>
                        <div>
                            <label>Genres: </label>
                            <span>{show?.genres.join(" | ")}</span>
                        </div>
                        <div>
                            <label>Official Site: </label>
                            <a css={css`color: blue`} href={show?.officialSite}>link</a>
                        </div>
                        <div>
                            <label>Rating: </label>
                            <span>{show?.rating?.average}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { showID: '1' }
            }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const showID = params.showID;

    const res = await fetch(`https://api.tvmaze.com/shows/${showID}`);
    const data = await res.json();

    return {
        props: {
            show: data,
        },
        // Re-generate the page after 1 hour (3600 seconds)
        revalidate: 3600,
    };
}

export default ShowsDetailsPage