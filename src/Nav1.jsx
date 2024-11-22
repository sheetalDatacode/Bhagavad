import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav1.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
const Nav1 = () => {
  const chapter = [
    {
      DROPITEM: "chapter 1",
    },
    {
      DROPITEM: "chapter 2",
    },
    {
      DROPITEM: "chapter 3",
    },
    {
      DROPITEM: "chapter 4",
    },
    {
      DROPITEM: "chapter 5",
    },
    {
      DROPITEM: "chapter 6",
    },
    {
      DROPITEM: "chapter 7",
    },
    {
      DROPITEM: "chapter 8",
    },
    {
      DROPITEM: "chapter 9",
    },
    {
      DROPITEM: "chapter 10",
    },
    {
      DROPITEM: "chapter 11",
    },
    {
      DROPITEM: "chapter 12",
    },
    {
      DROPITEM: "chapter 13",
    },
    {
      DROPITEM: "chapter 14",
    },
    {
      DROPITEM: "chapter 15",
    },
    {
      DROPITEM: "chapter 16",
    },
    {
      DROPITEM: "chapter 17",
    },
    {
      DROPITEM: "chapter 18",
    },
  ];
  return (
    <div>
      <div className="navdiv">
        <div className="Navdiv_2">
          <div className="Navdiv_3">
            <div className="Navdiv_4">
              <div className="Navdiv_5">
                <Navbar expand="lg" className="Navbarclass">
                  <Container fluid>
                    {/* <Navbar.Brand href="#" className='head'>Bhagavad Gita</Navbar.Brand> */}
                    <Link to="/" className="head">
                      {" "}
                      Bhagavad Gita{" "}
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "90%" }}
                        navbarScroll
                      >
                        <NavDropdown
                          title="Chapters"
                          id="navbarScrollingDropdown"
                        >
                          <div className="ch_div_1">
                            <div className="ch_div_2">
                              <div className="ch_div_3">
                                <div>
                                  <div className="row">
                                    {chapter.map((item) => (
                                      <div className="col-6">
                                        <NavDropdown.Item
                                          href="#action3"
                                          className="DROPITEM"
                                        >
                                          {item.DROPITEM}
                                        </NavDropdown.Item>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <NavDropdown.Divider />
                        </NavDropdown>
                        <Link to="/Quotes" className="TabLink">
                          Quotes
                        </Link>
                        <Link to="/AboutGita" className="TabLink">
                          About Gita
                        </Link>
                        <Link to="/GitaAI" className="TabLink">
                          GitaAI
                        </Link>
                        <Link to="/Donate" className="TabLink">
                          Donate
                        </Link>
                      </Nav>
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                      </Form>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav1;
