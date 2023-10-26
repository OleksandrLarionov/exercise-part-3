import { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';

class AddComment extends Component {
	state = {
		comment: '',
	};

	formSubmit = (e) => {
		e.preventDefault();
		console.log('ora inviamo il commento');

		fetch('https://striveschool-api.herokuapp.com/api/comments/', {
			method: 'POST',
			body: JSON.stringify(this.state.comment),
			headers: {
				contentType: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA',
			},
		})
			.then((res) => {
				if (res.ok) {
				} else {
					throw new Error('Errore Nel Invio');
				}
			})

			.catch((err) => {
				console.log('error', err);
			});
		//  per svotare il form
		this.setState({
			comment: '',
		});
	};
	render() {
		return (
			<Row>
				<Col>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Aggiungi un commento'
							value={this.state.comment}
							onChange={(e) => {
								this.setState({
									comment: e.target.value,
								});
							}}
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Send
					</Button>
				</Col>
			</Row>
		);
	}
}

export default AddComment;
