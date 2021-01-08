import Head from "next/head";
import Layout from "../components/layout/layout";
import { Container, List } from "semantic-ui-react";

export default function Home() {
  return (
    <Layout title={"Contact"}>
      <Container text>
        <h2>Contact</h2>
        <List horizontal>
          <List.Item>
            <List.Content>
              <List.Header>Kevin Brown</List.Header>
              <a href="mailto:jack@semantic-ui.com">Kevin.Brown@example.ca</a>
              <List.Description>University of Toronto</List.Description>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <List.Header>Nicholas Gibb</List.Header>
              <a href="mailto:jack@semantic-ui.com">nicholas.gibb@example.ca</a>
              <List.Description>
                Public Health Agency of Canada
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    </Layout>
  );
}
