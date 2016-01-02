const React = require('react') ;
const {
    Button, Input, ButtonGroup, ButtonInput, 
    Nav, Navbar, NavItem, NavDropdown,
    MenuItem, Tabs, Tab, ListGroup, ListGroupItem, 
    Grid, Row, Col, form
} = require('react-bootstrap');

const Post = require('./Post');

class GameCommunity extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usr: "lin",
    };
  }

  render(){
    const {usr, post} = this.state;
    return(
      <Grid fluid>
        <Row className = 'Toolbar'>
          <Navbar inverse>
            <Col lg={11}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href='#'>Game Community</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href='#'>Irtoduction</NavItem>
                  <NavItem eventKey={2} href='#'>News</NavItem>
                  <NavDropdown eventKey={3} title="Games">
                    <MenuItem eventKey={3.1}>LOL</MenuItem>
                    <MenuItem eventKey={3.2}>Hearthstone</MenuItem>
                  </NavDropdown>
                  <Navbar.Form pullLeft>
                    <Input type='text' placeholder="search"/>
                    <Button type='submit'>Search</Button>
                  </Navbar.Form>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href='#'>{usr}</NavItem>
                  <NavItem eventKey={2} href='#'>Home</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
        <Col lg={10} className = 'Features'>
          <Tabs position='left' tabWidth={2}>
            <Tab eventKey={1} title="News Feed">
              <Post/>
            </Tab>
          </Tabs>
        </Col>
      </Grid>
    );
  }
}

module.exports = GameCommunity ;