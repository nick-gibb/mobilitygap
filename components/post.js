import Layout from "./layout/layout";
import { Container } from "semantic-ui-react";
// import Date from "./date";
import { Breadcrumb } from "semantic-ui-react";
import Link from "next/link";
import PageTitle from "./title";
import { regionPaths, regionNames } from "./constants";

import { parseISO, format } from "date-fns";

const BreadcrumbExample = ({ regionName, reportDate }) => (
  <Breadcrumb>
    <Link href="/" passHref>
      <Breadcrumb.Section>Home</Breadcrumb.Section>
    </Link>
    <Breadcrumb.Divider />
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
  const date = format(parseISO(postData.date), "LLLL d, yyyy");
  // <time dateTime={postData.date}>{date}</time>

  return (
    <Layout title={postData.title}>
      <Container text>
        <BreadcrumbExample regionName={region} reportDate={postData.date} />

        <PageTitle
          titleText={`Estimates of mobility and the required mobility to control COVID-19 in ${regionNames[region]}`}
          subheader={date}
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  );
}
