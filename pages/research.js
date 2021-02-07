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
        <Header
          as="h4"
          href="https://www.medrxiv.org/content/10.1101/2021.01.28.21250622v1"
          target="_blank"
        >
          The Mobility Gap: Mobility Reductions Needed to Suppress COVID-19
          through the Winter Surge in Canada
        </Header>
        <p>
          Kevin A. Brown, Jean-Paul R. Soucy, Sarah A. Buchan, Shelby L.
          Sturrock, Isha Berry, Nathan M. Stall, Peter Juni, Amir Ghasemi,
          Nicholas Gibb, Derek R. MacFadden, Nick Daneman{" "}
        </p>
        <p>Manuscript under review.</p>
        <Divider />
        <Item.Group link divided relaxed>
          <Item
            href="https://www.medrxiv.org/content/10.1101/2021.01.28.21250622v1"
            target="_blank"
          >
            <Item.Content>
              <Item.Header>
                The Mobility Gap: Mobility Reductions Needed to Suppress
                COVID-19 through the Winter Surge in Canada
              </Item.Header>
              <Item.Meta>
                Kevin A. Brown, Jean-Paul R. Soucy, Sarah A. Buchan, Shelby L.
                Sturrock, Isha Berry, Nathan M. Stall, Peter Juni, Amir Ghasemi,
                Nicholas Gibb, Derek R. MacFadden, Nick Daneman
              </Item.Meta>
              <Item.Description>Manuscript under review</Item.Description>
            </Item.Content>
          </Item>
          <Item
            href="https://www.medrxiv.org/content/10.1101/2020.04.05.20054288v3"
            target="_blank"
          >
            <Item.Content>
              <Item.Header>
                Estimating effects of physical distancing on the COVID-19
                pandemic using an urban mobility index
              </Item.Header>
              <Item.Meta>
                Jean-Paul R. Soucy, Shelby L. Sturrock, Isha Berry, Duncan J.
                Westwood, Nick Daneman, Derek R. MacFadden, Kevin A. Brown
              </Item.Meta>
              <Item.Description>
                <i>MedRxiv</i>
              </Item.Description>
              <Item.Description>May 24, 2020</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </Layout>
  );
}
