import Layout from "../../../components/layout/layout";
import { getSortedPostsData } from "../../../lib/posts";
import ListItem from "../../../components/listitem";
import { Container, List } from "semantic-ui-react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("ab");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Ab({ allPostsData }) {
  const region = "Alberta";
  return (
    <Layout title={region}>
      <Container text>
        <section>
          <h2>{region}</h2>
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
