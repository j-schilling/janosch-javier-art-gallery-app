import { useState } from "react";
import Link from "next/link";
import { Container, Group } from "@mantine/core";
import classes from "./Navigation.module.css";

const links = [
  { link: "/", label: "Get inspired" },
  { link: "/art-pieces", label: "All the art" },
  { link: "/favorites", label: "My favorites" },
];

export function Navigation() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container size="md" className={classes.inner}>
        <Group gap={5}>{items}</Group>
      </Container>
    </div>
  );
}
