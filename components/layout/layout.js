import Link from "next/link";
import Head from "next/head";
import TopMenu from "./menu";
import { Container, Segment, List } from "semantic-ui-react";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Mobility Gap - {title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
