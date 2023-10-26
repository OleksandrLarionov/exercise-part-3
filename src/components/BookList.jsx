import { Component } from 'react';
import SingleBook from './SingleBook';
import { Container, Row, Form, Col } from 'react-bootstrap';

class BookList extends Component {
	state = {
		bookTitle: '',
		selectGenre: '',
	};
	render() {
		return (
			<Container>
				<Row className='justify-content-center'>
					<Col md={6} className='my-4'>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='Cerca un libro...'
								value={this.state.bookTitle}
								onChange={(e) => {
									this.setState({
										bookTitle: e.target.value,
									});
								}}
							/>
						</Form.Group>
					</Col>
					<Col md={4} className='align-items-center d-flex'>
						<Form.Select>
							<option>Select Genre</option>
							<option>Fantasy</option>
							<option>Horror</option>
							<option>History</option>
							<option>Romance</option>
							<option>Scifi</option>
						</Form.Select>
					</Col>
				</Row>
				<Row>
					{this.props.genre[0]
						.filter((book) =>
							book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase())
						)
						.map((oneBook) => {
							return <SingleBook book={oneBook} key={oneBook.asin} />;
						})}
				</Row>
			</Container>
		);
	}
}

export default BookList;
