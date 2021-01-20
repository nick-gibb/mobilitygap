import Layout from "./layout/layout";
import { Container } from "semantic-ui-react";
import Date from "./date";
import { Breadcrumb } from "semantic-ui-react";
import Link from "next/link";
import PageTitle from "./title";
import { regionPaths, regionNames } from "./constants";

const BreadcrumbExample = ({ regionName, reportDate }) => (
  <Breadcrumb>
    <Link href="/reports" passHref>
      <Breadcrumb.Section>Reports</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Link href={regionPaths[regionName]} passHref>
      <Breadcrumb.Section>{regionNames[regionName]}</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>{reportDate}</Breadcrumb.Section>
  </Breadcrumb>
);

export default function Post({ postData, region }) {
  return (
    <Layout title={postData.title}>
      <Container text>
        <BreadcrumbExample regionName={region} reportDate={postData.date} />

        <PageTitle titleText={postData.title} />
        <h4>
          <Date dateString={postData.date} />
        </h4>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  );
}
