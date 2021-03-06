import { List } from "semantic-ui-react";
import Date from "./date";
import Link from "next/link";
import { regionPaths } from "./constants";

export default function ListItem({ id, title, date, region }) {
  const postLink = regionPaths[region] + id;
  return (
    <List.Item key={id}>
      <Link href={postLink}>
        <a>
          <List.Content>
            <Date dateString={date} />
          </List.Content>
          {/* <List.Content>{title}</List.Content> */}
        </a>
      </Link>
    </List.Item>
  );
}
