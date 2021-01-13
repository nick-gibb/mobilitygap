import Layout from "../components/layout/layout";
import { Container, List, Divider, Header, Image } from "semantic-ui-react";

export default function About() {
  return (
    <Layout title={"About"}>
      <Container text>
        <Header as="h1" content="About" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <Divider horizontal>
          <Header as="h4">Mobility Gap Team</Header>
        </Divider>
        <List>
          <List.Item>
            <Image avatar src="/kevin.jpg" size="tiny" />
            <List.Content>
              <List.Header>Kevin Brown</List.Header>
              <List.Description>University of Toronto</List.Description>
              <List.Icon name="linkify" />
              <a href="https://www.dlsph.utoronto.ca/faculty-profile/brown-kevin/">
                dlsph.utoronto.ca/faculty-profile/brown-kevin/
              </a>
            </List.Content>
          </List.Item>

          <List.Item>
            <Image avatar src="jp.jpg" size="tiny" />
            <List.Content>
              <List.Header>Jean-Paul Soucy</List.Header>
              <List.Description>University of Toronto</List.Description>
              <List.Icon name="linkify" />
              <a href="https://jeanpaulsoucy.com/">
                https://jeanpaulsoucy.com/
              </a>
              <br />
              <List.Icon name="twitter" />
              <a href="https://www.twitter.com/jpsoucy">jpsoucy</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <Image avatar src="/amir.jpg" size="tiny" />
            <List.Content>
              <List.Header>Amir Ghasemi</List.Header>
              <List.Description>
                Communications Research Centre
              </List.Description>
            </List.Content>
          </List.Item>

          <List.Item>
            <Image avatar src="/me.jpg" size="tiny" />
            <List.Content>
              <List.Header>Nicholas Gibb</List.Header>
              <List.Description>
                Public Health Agency of Canada
              </List.Description>
              <List.Icon name="twitter" />
              <a href="https://www.twitter.com/gibbnicholas">gibbnicholas</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <Image avatar src="/isha.jpg" size="tiny" />
            <List.Content>
              <List.Header>Isha Berry</List.Header>
              <List.Description>University of Toronto</List.Description>
              <List.Icon name="twitter" />
              <a href="https://www.twitter.com/ishaberry2">ishaberry2</a>
            </List.Content>
          </List.Item>
        </List>
        <Header>And more... page still incomplete!</Header>
      </Container>
    </Layout>
  );
}
