import Head from "next/head";
import { HomeContent } from "src/components/HomeContent";
import { css } from "@emotion/react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Medimap TVMaze Coding Exercise</title>
        <meta
          name="description"
          content="TVMaze Coding Exercise for Medimap Engineering Candidates"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        css={css`display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 6rem;
        min-height: 100vh;
        max-width: 1200px;`}
      >
        <HomeContent />
      </main>
    </>
  );
}
