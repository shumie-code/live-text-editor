import React, { Component } from "react";
import {
  Markup,
  Editor,
  Container,
  Row,
  RuleInput,
  RuleLabel,
  StyleInput,
  Button,
  Document,
  Column
} from "./styled";
class App extends Component {

  state = {
    editor: ""
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }


  render() {
    let {handleChange} = this
    let {value} = this.state
    return (
      <Container>
        <Column>
          <Button>New Rule</Button>
        </Column>
        <Column>
          <Button>Random Text</Button>
          <Document>
            <Editor 
            name={"Editor"}
            value={value}
            onChange={handleChange}

            />
              <Markup />
          </Document>
        </Column>
      </Container>
    );
  }
}

export default App;
