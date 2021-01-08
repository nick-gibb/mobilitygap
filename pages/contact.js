import Head from "next/head";
import Layout from "../components/layout/layout";
import { Container } from "semantic-ui-react";

export default function Home() {
  return (
    <Layout>
      <Container text>
        <h2>Contact us</h2>
        <p>Here goes some text!</p>
      </Container>
    </Layout>
  );
}
