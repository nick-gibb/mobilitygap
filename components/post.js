import Layout from "./layout/layout";
import { Container } from "semantic-ui-react";
import Date from "./date";

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
