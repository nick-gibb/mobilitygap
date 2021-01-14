import Layout from "./layout/layout";
import ListItem from "./listitem";
import { Container, List } from "semantic-ui-react";

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

export default function postlist({ allPostsData, region }) {
  const regionName = regionNames[region];
  return (
    <Layout title={regionName}>
      <Container text>
        <section>
          <h3>{regionName} Reports</h3>
          <List celled>
            {allPostsData.map(({ id, date, title }) => (
              <ListItem id={id} title={title} date={date} region={region} />
            ))}
          </List>
        </section>
      </Container>
    </Layout>
  );
}
