import React from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default function TopMenu() {
  return (
    <Menu stackable borderless>
      <Link href="/" passHref>
        <Menu.Item header>Mobility Gap</Menu.Item>
      </Link>

      <Link href="/research" passHref>
        <Menu.Item name="research">Research</Menu.Item>
      </Link>
      <Link href="/trends" passHref>
        <Menu.Item>Mobility Trends</Menu.Item>
      </Link>
      <Link href="/reports" passHref>
        <Menu.Item>Mobility Gap Regional Reports</Menu.Item>
      </Link>
      <Menu.Menu>
        <Link href="/about" passHref={true}>
          <Menu.Item name="about">About</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
