import Layout from "../components/layout/layout";
import React from "react";
import { Container, List } from "semantic-ui-react";
import { getSortedRegions } from "../lib/posts";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";

import PageTitle from "../components/title";

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

const BreadcrumbExample = () => (
  <Breadcrumb>
    <Breadcrumb.Section active>Reports</Breadcrumb.Section>
  </Breadcrumb>
);

export default function RegionalReports({ sortedRegions }) {
  const regionLinks = sortedRegions.map((region) => {
    const prefix = region == "ca" ? "/" : "/ca/";
    return (
      <List key={region}>
        <Link href={prefix + region} passHref>
          <List.Item>{regionNames[region]}</List.Item>
        </Link>
      </List>
    );
  });

  return (
    <Layout title={"Regional Reports"}>
      <Container text>
        <BreadcrumbExample />
        {/* <PageTitle titleText="Mobility Gap Regional Reports" /> */}

        {regionLinks}
      </Container>
    </Layout>
  );
}
