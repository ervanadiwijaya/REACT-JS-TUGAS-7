import React from "react";
import { Container, Row, Col, Button, Card, Breadcrumb, CardGroup, Navbar, Badge } from "react-bootstrap";


function App() {
  return (
    <div>
      <Navbar>
        <Container className="p-3">
          <div className="bg-primary rounded p-1">
            <Navbar.Brand href="#home" className="text-white">Website React Bootstrap</Navbar.Brand>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="mx-4">
              <Button variant="primary" className="mx-1">
                Notification <Badge bg="secondary">9</Badge>
              </Button>
              <Button variant="primary">
                Message <Badge bg="secondary">19</Badge>
              </Button>
            </div>

            <Navbar.Text>
              <img
                src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top mr-2"
                alt="React Bootstrap logo"
              />
              <a href="#login">Andreas</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col sm="8"></Col>
        <Col sm="4">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Berita
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Container>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg" />
            <Card.Body>
              <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
              <Card.Text>
                Godin sekarang menjasi pemain uruguay denagn caps terbanyak setelah membantu negaranya melibas thailand di final piala tiongkok.
                Diego Godin boleh berbangga setelah resmi menjadi.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg" />
            <Card.Body>
              <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint Germain</Card.Title>
              <Card.Text>
                Ayah sang pemain bintang brasil berusaha meredam rumor ketertarikan madrid. neymar sedang berdiskusi dengan paris saint german soal perpanjangan kontrak bersama kampiun ligue prancis{' '}
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg" />
            <Card.Body>
              <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
              <Card.Text>
                Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis.Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg" />
            <Card.Body>
              <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
              <Card.Text>
                Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pemungkas grup K
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default App;
