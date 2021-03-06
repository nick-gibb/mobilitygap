import Link from "next/link";
import Head from "next/head";
import TopMenu from "./menu";
import { Container, Segment, List } from "semantic-ui-react";

export default function Layout({
  children,
  title,
  img_url = "https://mobilitygap.ca/mglogo_resized.png",
  description = "Real-time information on cellular phone mobility measures and how they relate to COVID-19 transmission.",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="og:image" name="og:image" content={img_url} />

        <meta name="description" content={description} />

        <meta property="og:url" content="https://mobilitygap.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img_url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mobilitygap.ca" />
        <meta property="twitter:url" content="https://mobilitygap.ca/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img_url} />
      </Head>
      <TopMenu />

      {children}

      <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
        <Container textAlign="center">
          <List horizontal divided link size="small">
            <Link href="/" passHref>
              <List.Item>Home</List.Item>
            </Link>
            <Link href="/research" passHref>
              <List.Item>Research</List.Item>
            </Link>
            <Link href="/trends" passHref>
              <List.Item>Trends</List.Item>
            </Link>
            <Link href="/reports" passHref>
              <List.Item>Reports</List.Item>
            </Link>
            <Link href="/about" passHref>
              <List.Item>About</List.Item>
            </Link>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
