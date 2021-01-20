import Layout from "../components/layout/layout";
import React from "react";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";

export default function Trends() {
  return (
    <Layout title={"Trends"}>
      <Container text>
        <Header
          as="h1"
          content="Mobility Trends"
          dividing
          subheader="The latest mobility data from Google"
        />
      </Container>
    </Layout>
  );
}
