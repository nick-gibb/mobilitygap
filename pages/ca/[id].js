import Layout from "../../components/layout/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Container } from "semantic-ui-react";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, "ca");
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds("ca");
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <Container text>
        <h2>{postData.title}</h2>
        <h3>
          <Date dateString={postData.date} />
        </h3>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  );
}
