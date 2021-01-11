import Layout from "../../../components/layout/layout";
import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Date from "../../../components/date";
import { Container } from "semantic-ui-react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData("ab");
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Ab({ allPostsData }) {
  const region = "Alberta";
  return (
    <Layout title={region}>
      <Container>
        <section>
          <h2>{region}</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/ca/ab/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <Date dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </Layout>
  );
}
