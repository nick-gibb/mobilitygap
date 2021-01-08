import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import Link from "next/link";

export default function TopMenu() {
  return (
    <Menu stackable borderless>
      <Link href="/" passHref>
        <Menu.Item header>Mobility Gap</Menu.Item>
      </Link>
      <Link href="/paper" passHref>
        <Menu.Item name="paper">Paper</Menu.Item>
      </Link>

      <Dropdown item scrolling text="Reports by Region">
        <Dropdown.Menu>
          <Dropdown.Header>Canada</Dropdown.Header>
          <Link href="/ca" passHref>
            <Dropdown.Item name="cad">Overview</Dropdown.Item>
          </Link>

          <Link href="/ca/ab" passHref={true}>
            <Dropdown.Item name="ab">Alberta</Dropdown.Item>
          </Link>
          <Link href="/ca/bc" passHref={true}>
            <Dropdown.Item name="bc">British Columbia</Dropdown.Item>
          </Link>
          <Link href="/ca/mb" passHref={true}>
            <Dropdown.Item name="mb">Manitoba</Dropdown.Item>
          </Link>

          <Link href="/ca/nb" passHref={true}>
            <Dropdown.Item name="nb">New Brunswick</Dropdown.Item>
          </Link>

          <Link href="/ca/nl" passHref={true}>
            <Dropdown.Item name="nl">Newfoundland</Dropdown.Item>
          </Link>
          <Link href="/ca/ns" passHref={true}>
            <Dropdown.Item name="ns">Nova Scotia</Dropdown.Item>
          </Link>

          <Link href="/ca/on" passHref={true}>
            <Dropdown.Item name="on">Ontario</Dropdown.Item>
          </Link>

          <Link href="/ca/qc" passHref={true}>
            <Dropdown.Item name="qc">Quebec</Dropdown.Item>
          </Link>

          <Link href="/ca/sk" passHref={true}>
            <Dropdown.Item name="sk">Saskatchewan</Dropdown.Item>
          </Link>

          <Dropdown.Divider />
          <Dropdown.Header>USA - Coming Soon</Dropdown.Header>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Menu position="right">
        <Link href="/contact" passHref={true}>
          <Menu.Item name="contact">Contact</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
