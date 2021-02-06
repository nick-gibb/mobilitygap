import Layout from "../components/layout/layout";
import { Header, Icon, Container } from "semantic-ui-react";
import Link from "next/link";

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
            Canada, including{" "}
            <Link href="/trends">
              <a>
                <b>Mobility Trends</b>
              </a>
            </Link>{" "}
            and{" "}
            <Link href="/reports">
              <a>
                <b>Mobility Gap Regional Reports</b>
              </a>
            </Link>
            .
          </Header.Subheader>
        </Header>
      </Container>
    </Layout>
  );
}
