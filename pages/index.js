import Layout from "../components/layout/layout";
import { Header, Container } from "semantic-ui-react";
import Link from "next/link";
import { Image } from "semantic-ui-react";

export default function Home() {
  return (
    <Layout title="Mobility Gap">
      <Container text>
        <Image
          src="/mglogo.png"
          alt="Mobility Gap Logo"
          width={263}
          height={298}
          responsive
          style={{
            margin: "0 auto",
          }}
        />
        <Header as="h4" icon textAlign="center">
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
        </Header>
      </Container>
    </Layout>
  );
}
