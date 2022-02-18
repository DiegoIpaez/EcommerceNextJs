import { Container, Grid, Image, Input } from "semantic-ui-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Link href="/">
              <a>
                <Image src="/logo.png" alt="logo-nav" />
              </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__rigth">
            <Input id="search-game" icon={{name: "search"}}/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
