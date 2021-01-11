import Layout from "../../components/layout/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
// import React from "react";
import { Card, Container } from "semantic-ui-react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("ca");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Ca({ allPostsData }) {
  const region = "Canada";
  return (
    <Layout>
      <Container>
        <section>
          <h2>{region}</h2>
          <Card.Group>
            {allPostsData.map(({ id, date, title, description }) => (
              <Card key={id} href={`/ca/${id}`}>
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>
                    <Date dateString={date} />
                  </Card.Meta>
                  <Card.Description>{description}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </section>
      </Container>
    </Layout>
  );
}
