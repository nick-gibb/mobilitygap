import Layout from "./layout/layout";
import ListItem from "./listitem";
import { Container, List } from "semantic-ui-react";
import Link from "next/link";
import { Breadcrumb } from "semantic-ui-react";
import PageTitle from "./title";
import { regionNames } from "./constants";

const BreadcrumbExample = ({ regionName }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />

    <Link href="/reports" passHref>
      <Breadcrumb.Section>Reports</Breadcrumb.Section>
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
          <PageTitle titleText={`Mobility Gap Reports: ${regionName}`} />
          <List divided>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem
                key={id}
                id={id}
                title={title}
                date={date}
                region={region}
              />
            ))}
          </List>
        </section>
      </Container>
    </Layout>
  );
}
