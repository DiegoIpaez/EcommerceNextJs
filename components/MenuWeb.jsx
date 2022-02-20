import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "./BasicModal";
import { useState } from "react";

export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);

  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <Menu>
              <Link href="/playstation">
                <Menu.Item as="a">PlayStation</Menu.Item>
              </Link>
              <Link href="/playstation">
                <Menu.Item as="a">Xbox</Menu.Item>
              </Link>
              <Link href="/playstation">
                <Menu.Item as="a">Pc</Menu.Item>
              </Link>
            </Menu>
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <Menu>
              <Menu.Item onClick={onShowModal}>
                <Icon name="user outline" />
                Mi usuario
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title="Iniciar Sesion "
      >
        <h2>Contenido de Modal</h2>
      </BasicModal>
    </div>
  );
}
