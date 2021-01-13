import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
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

      <Dropdown item scrolling text="Regional Reports">
        <Dropdown.Menu>
          <Dropdown.Header>Canada</Dropdown.Header>
          <Link href="/ca" passHref>
            <Dropdown.Item name="cad">Overview</Dropdown.Item>
          </Link>

          <Link href="/ca/ab" passHref={true}>
            <Dropdown.Item name="ab" key="Alberta">
              Alberta
            </Dropdown.Item>
          </Link>
          <Link href="/ca/bc" passHref={true}>
            <Dropdown.Item name="bc" disabled>
              British Columbia
            </Dropdown.Item>
          </Link>
          <Link href="/ca/mb" passHref={true}>
            <Dropdown.Item name="mb" disabled>
              Manitoba
            </Dropdown.Item>
          </Link>

          <Link href="/ca/nb" passHref={true}>
            <Dropdown.Item name="nb" disabled>
              New Brunswick
            </Dropdown.Item>
          </Link>

          <Link href="/ca/nl" passHref={true}>
            <Dropdown.Item name="nl" disabled>
              Newfoundland
            </Dropdown.Item>
          </Link>
          <Link href="/ca/ns" passHref={true}>
            <Dropdown.Item name="ns" disabled>
              Nova Scotia
            </Dropdown.Item>
          </Link>

          <Link href="/ca/on" passHref={true}>
            <Dropdown.Item name="on" disabled>
              Ontario
            </Dropdown.Item>
          </Link>

          <Link href="/ca/qc" passHref={true}>
            <Dropdown.Item name="qc" disabled>
              Quebec
            </Dropdown.Item>
          </Link>

          <Link href="/ca/sk" passHref={true}>
            <Dropdown.Item name="sk" disabled>
              Saskatchewan
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Header>USA - Coming Soon</Dropdown.Header>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position="right">
        <Link href="/about" passHref={true}>
          <Menu.Item name="about">About</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
