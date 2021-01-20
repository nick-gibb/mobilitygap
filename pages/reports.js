import Layout from "../components/layout/layout";
import React from "react";
import { Container, List } from "semantic-ui-react";
import { getSortedRegions } from "../lib/posts";
import Link from "next/link";
import { Header } from "semantic-ui-react";

const regionNames = {
  ca: "Canada",
  ab: "Alberta",
  mb: "Manitoba",
  bc: "British Colombia",
  sk: "Saskatchewan",
  on: "Ontario",
  nl: "Newfoundland",
  nb: "New Brunswick",
  ns: "Nova Scotia",
};

export async function getStaticProps() {
  const sortedRegions = getSortedRegions();
  return {
    props: {
      sortedRegions,
    },
  };
}

export default function RegionalReports({ sortedRegions }) {
  const regionLinks = sortedRegions.map((region) => {
    const prefix = region == "ca" ? "" : "ca/";
    return (
      <List link>
        <Link href={prefix + region} passHref>
          <List.Item>{regionNames[region]}</List.Item>
        </Link>
      </List>
    );
  });

  return (
    <Layout title={"Regional Reports"}>
      <Container text>
        <Header as="h1" content="Mobility Gap Regional Reports" dividing />
        {regionLinks}
      </Container>
    </Layout>
  );
}
