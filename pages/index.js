import Layout from "../components/layout/layout";
import { Header, Icon, Container } from "semantic-ui-react";

<script type="text/javascript" src="Chart.js"></script>

<script type="text/javascript" src="chartjs-plugin-colorschemes.js"></script>

export default function Home() {
  return (
    <Layout title={"Home"}>
      <Container text>
        <Header as="h2" icon textAlign="center">
          <Icon name="street view" circular />
          <Header.Content>Mobility Gap</Header.Content>
          <Header.Subheader>
            We provide real-time information on cellular phone mobility measures
            and how they relate to COVID-19 transmission. On this site you can
            find regularly updated information on mobility across regions of
            Canada.
          </Header.Subheader>
        </Header>
      </Container>
    </Layout>
  );
}
