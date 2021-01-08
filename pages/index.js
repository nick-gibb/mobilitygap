import Layout from "../components/layout/layout";
import { Header, Icon } from "semantic-ui-react";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="street view" circular />
          <Header.Content>Mobility and Covid-19</Header.Content>
          <Header.Subheader>
            Insert here a layman explanation about mobility and its connection
            to COVID-19 transmission, including concepts of mobility gap and
            mobility threshold.
          </Header.Subheader>
        </Header>
      </div>
    </Layout>
  );
}
