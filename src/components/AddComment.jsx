import { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

class AddComment extends Component {
	state = {
		commentAdd: {
			comment: '',
			rating: '1',
			elementId: this.props.bookId,
		},
	};

	formSubmit = (e) => {
		e.preventDefault();

		fetch('https://striveschool-api.herokuapp.com/api/comments/', {
			method: 'POST',
			body: JSON.stringify(this.state.commentAdd),
			headers: {
				contentType: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA',
			},
		})
			.then((res) => {
				if (res.ok) {
					console.log('é annata!');
				} else {
					throw new Error('Errore Nel Invio');
				}
			})

			.catch((err) => {
				console.log('error', err);
			});
	};
	render() {
		return (
			<Row>
				<Col>
					<Form onSubmit={this.formSubmit}>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='Aggiungi un commento'
								value={this.state.commentAdd.comment}
								onChange={(e) => {
									this.setState({
										commentAdd: {
											...this.state.commentAdd,
											comment: e.target.value,
										},
									});
								}}
							/>
							<Form.Select
								aria-label='Rate'
								value={this.state.commentAdd.rating}
								onChange={(e) => {
									this.setState({
										commentAdd: {
											...this.state.commentAdd,
											rating: e.target.value,
										},
									});
								}}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Select>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Send
						</Button>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default AddComment;
