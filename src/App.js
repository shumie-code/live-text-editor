import React, { Component } from 'react'
import {Markup, Editor, Container, Row, RuleInput, RuleLabel, StyleInput, Button, Document, Column}
 from './styled'
class App extends Component {
  render() {
    return (
      <Container>
        <Column>
          <Button>
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Editor>
            <Markup/>
          </Editor>
        </Column>
      </Container>
    )
  }
}

export default App
