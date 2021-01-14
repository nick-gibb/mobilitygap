import { getSortedPostsData } from "../../lib/posts";
import PostList from "../../components/postlist";

const region = "ca";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(region);
  return {
    props: {
      allPostsData,
      region,
    },
  };
}

export default function Ca({ allPostsData, region }) {
  return <PostList allPostsData={allPostsData} region={region} />;
}
