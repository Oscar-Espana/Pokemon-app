import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Oscar España" />
        <meta
          name="description"
          content={`Información sobre pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};
