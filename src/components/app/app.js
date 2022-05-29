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
import ErrorMessage from '../errors/errorMessage';
import CharacterPage from '../characterPage/characterPage';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            showRandomChar: true,
            error: false
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

    componentDidCatch() {
        console.log('componentDidCatch')
        this.setState(() => {
            return {
                error: true
            }
        })
    }

    render() {

        const {
            showRandomChar,
            error
        } = this.state;

        if (error) {
            return <ErrorMessage></ErrorMessage>
        }

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
                    <CharacterPage></CharacterPage>
                    <Col md='6' >
                        <ItemList
                            dataFunctionName={'getBooks'}
                            onItemSelected={this.onCharSelected}>
                        </ItemList>
                    </Col>
                </Row>
            </Container>
        </>
        );
    }
};

export default App;