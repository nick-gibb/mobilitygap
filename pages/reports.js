import Layout from "../components/layout/layout";
import React from "react";
import { Container, List } from "semantic-ui-react";
import { getSortedRegions } from "../lib/posts";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";

import PageTitle from "../components/title";
import { regionNames } from "../components/constants";

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
    <Link href="/" passHref>
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>Reports</Breadcrumb.Section>
  </Breadcrumb>
);

export default function RegionalReports({ sortedRegions }) {
  const regionLinks = sortedRegions.map((region) => {
    const prefix = region == "ca" ? "/" : "/ca/";
    return (
      <Link key={region} href={prefix + region} passHref>
        <List.Item>{regionNames[region]}</List.Item>
      </Link>
    );
  });

  return (
    <Layout title={"Regional Reports"}>
      <Container text>
        <BreadcrumbExample />
        <PageTitle
          titleText="Mobility Gap Regional Reports"
          subheader="Generated every Sunday"
        />

        <List>{regionLinks}</List>
      </Container>
    </Layout>
  );
}
