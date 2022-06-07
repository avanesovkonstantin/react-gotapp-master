import React from 'react';
import {
    Col,
    Row,
    Container,
    Button
} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errors/errorMessage';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import BooksItem from '../pages/booksItem';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

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

        return (
            <Router>
                <>
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
                        <Routes>
                            <Route path="/" element={< RandomChar />} />
                            <Route path='/characters' element={<CharacterPage />} />
                            <Route path='/books' exact element={<BooksPage />} />
                            <Route path='/books/:id' element={<BooksItem />} />
                        </Routes>
                    </Container>
                </>
            </Router>
        );
    }
};

export default App;