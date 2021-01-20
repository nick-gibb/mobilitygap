import { getAllPostIds, getPostData } from "../../../lib/posts";
import Post from "../../../components/post";

const region = "on";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id, region);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds(region);
  return {
    paths,
    fallback: false,
  };
}

export default function aPost({ postData }) {
  return <Post postData={postData} region={region} />;
}
