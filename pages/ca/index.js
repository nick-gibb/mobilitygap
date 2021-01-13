import Layout from "../../components/layout/layout";
import ListItem from "../../components/listitem";
import { getSortedPostsData } from "../../lib/posts";
import { Header, List } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("ca");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Ca({ allPostsData }) {
  const region = "Canada";
  return (
    <Layout title={region}>
      <Container text>
        <Header as="h1" content={region} />
        <List divided>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem id={id} title={title} date={date} region={region} />
          ))}
        </List>
      </Container>
    </Layout>
  );
}
