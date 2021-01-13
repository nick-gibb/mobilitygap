import { List } from "semantic-ui-react";
import Date from "./date";
import Link from "next/link";

const regionPaths = {
  Canada: "/ca/",
  Alberta: "/ca/ab/",
};

export default function ListItem({ id, title, date, region }) {
  const postLink = regionPaths[region] + id;
  return (
    <List.Item key={id}>
      <List.Content floated="right">
        <Date dateString={date} />
      </List.Content>
      <List.Content>
        <Link href={postLink}>
          <a>{title}</a>
        </Link>
      </List.Content>
    </List.Item>
  );
}
