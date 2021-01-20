import Layout from "./layout/layout";
import ListItem from "./listitem";
import { Container, List } from "semantic-ui-react";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";
import PageTitle from "./title";
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

const BreadcrumbExample = ({ regionName }) => (
  <Breadcrumb>
    <Link href="/reports">
      <Breadcrumb.Section link>Reports</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>{regionName}</Breadcrumb.Section>
  </Breadcrumb>
);

export default function postlist({ allPostsData, region }) {
  const regionName = regionNames[region];
  return (
    <Layout title={regionName}>
      <Container text>
        <section>
          <BreadcrumbExample regionName={regionName} />
          {/* <PageTitle titleText={`${regionName} Reports`} /> */}
          <List>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem id={id} title={title} date={date} region={region} />
            ))}
          </List>
        </section>
      </Container>
    </Layout>
  );
}
