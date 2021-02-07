import Layout from "../components/layout/layout";
import {
  Container,
  List,
  Divider,
  Header,
  Image,
  Breadcrumb,
  Item,
  Icon,
  Grid,
} from "semantic-ui-react";
import Link from "next/link";
import PageTitle from "../components/title";

const BreadcrumbExample = () => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>About</Breadcrumb.Section>
  </Breadcrumb>
);

export default function About() {
  return (
    <Layout title={"About"}>
      <Container text>
        <BreadcrumbExample />
        <PageTitle titleText="About" subheader="" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Container>
      <Container>
        <Divider horizontal>
          <Header as="h4">Mobility Gap Team</Header>
        </Divider>
        <Grid stackable doubling columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Item.Group>
                <Item>
                  <Item.Image avatar src="/kevin.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Kevin Brown</Item.Header>
                    <Item.Description>University of Toronto</Item.Description>
                    <Icon name="linkify" />
                    <a href="https://www.dlsph.utoronto.ca/faculty-profile/brown-kevin/">
                      dlsph.utoronto.ca/faculty-profile/brown-kevin/
                    </a>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image avatar src="/dmacfadden.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Derek MacFadden</Item.Header>
                    <Item.Description>The Ottawa Hospital</Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image avatar src="/ndaneman.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Nick Daneman</Item.Header>
                    <Item.Description>
                      SunnyBrook Research Institute
                    </Item.Description>
                    <Icon name="linkify" />
                    <a href="https://sunnybrook.ca/research/team/member.asp?t=10&page=172&m=287">
                      sunnybrook.ca/research/team/member.asp?t=10&page=172&m=287
                    </a>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image avatar src="jp.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Jean-Paul Soucy</Item.Header>
                    <Item.Description>University of Toronto</Item.Description>
                    <Icon name="linkify" />
                    <a href="https://jeanpaulsoucy.com/">
                      https://jeanpaulsoucy.com/
                    </a>
                    <br />
                    <Icon name="twitter" />
                    <a href="https://www.twitter.com/jpsoucy">jpsoucy</a>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
            <Grid.Column>
              <Item.Group>
                <Item>
                  <Item.Image avatar src="/me.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Nicholas Gibb</Item.Header>
                    <Item.Description>
                      Public Health Agency of Canada
                    </Item.Description>
                    <Icon name="twitter" />
                    <a href="https://www.twitter.com/gibbnicholas">
                      gibbnicholas
                    </a>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image avatar src="/sbuchan.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Sarah Buchan</Item.Header>
                    <Item.Description>Sinai Health</Item.Description>
                    <Icon name="linkify" />
                    <a href="https://www.dlsph.utoronto.ca/faculty-profile/buchan-sarah/">
                      dlsph.utoronto.ca/faculty-profile/buchan-sarah/
                    </a>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image avatar src="/sturrock.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Shelby Sturrock</Item.Header>
                    <Item.Description>University of Toronto</Item.Description>
                    <Icon name="twitter" />
                    <a href="https://twitter.com/shelbysturrock">
                      shelbysturrock
                    </a>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
            <Grid.Column>
              <Item.Group>
                <Item>
                  <Image avatar src="/amir.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Amir Ghasemi</Item.Header>
                    <Item.Description>
                      Communications Research Centre
                    </Item.Description>
                  </Item.Content>
                </Item>
                <Item>
                  <Image avatar src="/isha.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Isha Berry</Item.Header>
                    <Item.Description>University of Toronto</Item.Description>
                    <Icon name="twitter" />
                    <a href="https://www.twitter.com/ishaberry2">ishaberry2</a>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image avatar src="/nstall.jpg" size="tiny" />
                  <Item.Content>
                    <Item.Header>Nathan Stall</Item.Header>
                    <Item.Description>Sinai Health</Item.Description>
                    <Icon name="twitter" />
                    <a href="https://twitter.com/nathanstall">nathanstall</a>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/*

        <Header>And more... page still incomplete!</Header> */}
      </Container>
    </Layout>
  );
}
