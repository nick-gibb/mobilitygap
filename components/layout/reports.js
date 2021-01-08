import { Header } from "semantic-ui-react";
import Head from "next/head";
import Layout from "./layout";

export default function Report(props) {
  return (
    <Layout>
      <Head>
        <title>Mobility Gap - {props.region}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header as="h2">Mobility Gap: {props.region}</Header>
    </Layout>
  );
}
