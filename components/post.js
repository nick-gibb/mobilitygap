import Layout from "./layout/layout";
import { Container, Breadcrumb } from "semantic-ui-react";
// import Date from "./date";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "./title";
import { regionPaths, regionNames } from "./constants";
import Markdown from "markdown-to-jsx";

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
  // console.log(postData.contentHtml);
  const date = format(parseISO(postData.date), "LLLL d, yyyy");
  // <time dateTime={postData.date}>{date}</time>

  return (
    <Layout
      title={postData.og_title}
      img_url={`https://mobilitygap.ca${postData.og_img}`}
      description={postData.og_description}
    >
      <Container text>
        <BreadcrumbExample regionName={region} reportDate={postData.date} />

        <PageTitle titleText={postData.og_description} subheader={date} />
        <Markdown
          options={{
            overrides: {
              img: {
                component: Image,
                props: {
                  layout: "responsive",
                },
              },
            },
          }}
        >
          {postData.contentHtml}
        </Markdown>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </Container>
    </Layout>
  );
}
