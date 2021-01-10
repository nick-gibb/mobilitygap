import Layout from "../../components/layout/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

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
      <section>
        <h2>{region}</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {id}
              <Link href={`/ca/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
