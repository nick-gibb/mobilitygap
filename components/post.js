import Layout from "./layout/layout";
import { Container } from "semantic-ui-react";
import Date from "./date";
import { Breadcrumb } from "semantic-ui-react";
import Link from "next/link";
import PageTitle from "./title";

const regionPaths = {
  ca: "/ca/",
  ab: "/ca/ab/",
  mb: "/ca/mb/",
  bc: "/ca/bc/",
  sk: "/ca/sk/",
  on: "/ca/on/",
  nl: "/ca/nl/",
  nb: "/ca/nb/",
  ns: "/ca/ns/",
};

const regionNames = {
  ca: "Canada",
  ab: "Alberta",
  mb: "Manitoba",
  bc: "British Colombia",
  sk: "Saskatchewan",
  on: "Ontario",
  nl: "Newfoundland",
  nb: "New Brunswick",
  ns: "Nova Scotia",
};

const BreadcrumbExample = ({ regionName, reportDate }) => (
  <Breadcrumb>
    <Link href="/reports">
      <a>
        <Breadcrumb.Section link>Reports</Breadcrumb.Section>
      </a>
    </Link>
    <Breadcrumb.Divider />
    <Link href={regionPaths[regionName]}>
      <a>
        <Breadcrumb.Section>{regionNames[regionName]}</Breadcrumb.Section>
      </a>
    </Link>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>{reportDate}</Breadcrumb.Section>
  </Breadcrumb>
);

export default function Post({ postData, region }) {
  console.log(region);
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
