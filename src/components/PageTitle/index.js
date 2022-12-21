import Head from "next/head";

export default function PageTitle({ children, title }) {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
}
