import Layout from "../components/layout/layout";
import React from "react";
import {
  Item,
  Container,
  Breadcrumb,
  Header,
  Divider,
} from "semantic-ui-react";
import Link from "next/link";
import PageTitle from "../components/title";

const BreadcrumbExample = () => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>Research</Breadcrumb.Section>
  </Breadcrumb>
);

export default function Research() {
  return (
    <Layout title={"Research"}>
      <Container text>
        <BreadcrumbExample />
        <PageTitle
          titleText="Research"
          subheader="Pre-prints and published peer-reviewed articles on mobility patterns
  and COVID-19"
        />
        <Link
          href="https://www.medrxiv.org/content/10.1101/2021.01.28.21250622v1"
          target="_blank"
          passHref
        >
          <a>
            <Header as="h4">
              The Mobility Gap: Mobility Reductions Needed to Suppress COVID-19
              through the Winter Surge in Canada
            </Header>
          </a>
        </Link>
        <p>
          Kevin A. Brown, Jean-Paul R. Soucy, Sarah A. Buchan, Shelby L.
          Sturrock, Isha Berry, Nathan M. Stall, Peter Juni, Amir Ghasemi,
          Nicholas Gibb, Derek R. MacFadden, Nick Daneman{" "}
        </p>
        <p>Manuscript under review</p>
        {/* <Divider /> */}
        <Link
          href="https://www.medrxiv.org/content/10.1101/2020.04.05.20054288v3"
          target="_blank"
          passHref
        >
          <a>
            <Header as="h4">
              Estimating effects of physical distancing on the COVID-19 pandemic
              using an urban mobility index
            </Header>
          </a>
        </Link>
        <p>
          Jean-Paul R. Soucy, Shelby L. Sturrock, Isha Berry, Duncan J.
          Westwood, Nick Daneman, Derek R. MacFadden, Kevin A. Brown
        </p>
        <p>MedRxiv, May 24 2020</p>
      </Container>
    </Layout>
  );
}
