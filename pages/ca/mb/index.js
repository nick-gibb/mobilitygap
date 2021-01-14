import { getSortedPostsData } from "../../../lib/posts";
import PostList from "../../../components/postlist";

const region = "mb";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData(region);
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Ab({ allPostsData }) {
  return <PostList allPostsData={allPostsData} region={region} />;
}
