import React from 'react';
import {
    Col,
    Row,
    Container,
    Button
} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            showRandomChar: true,
            selectedCharId: null
        }
    }

    toggleshowRandomChar = () => {
        this.setState(({
            showRandomChar
        }) => {
            return {
                showRandomChar: !showRandomChar
            }
        })
    }

    onCharSelected = (selectedCharId) => {
        this.setState({ selectedCharId })
    }

    render() {

        const {
            showRandomChar
        } = this.state;

        const RandomCharContent = showRandomChar ? < RandomChar /> : null;

        return (<>
            <Container >
                <Header />
            </Container>
            <Container>
                <Row >
                    <Col lg={
                        {
                            size: 5,
                            offset: 0
                        }
                    }>
                        <Button color="dark"
                            onClick={
                                this.toggleshowRandomChar
                            } > Toggle random character
                        </Button> {
                            RandomCharContent
                        } </Col>
                </Row>
                <Row >
                    <Col md='6' >
                        <ItemList
                            onCharSelected={this.onCharSelected}>
                        </ItemList>
                    </Col>
                    <Col md='6' >
                        <CharDetails
                            selectedCharId={this.state.selectedCharId} />
                    </Col>
                </Row>
            </Container>
        </>
        );
    }
};

export default App;