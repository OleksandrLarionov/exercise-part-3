import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
	state = {
		comment: [],
	};
	getCooments = async () => {
		try {
			const response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId,
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjBmYWY2ZTNkZDAwMTQ5NWU0NGEiLCJpYXQiOjE2OTgzMjQ3MzAsImV4cCI6MTY5OTUzNDMzMH0.Wlw5f_Urd-k5h2lUH8SIchHaEY2HVol_3nh8P6Yz8bA',
					},
				}
			);
			if (response.ok) {
				const data = await response.json();
				this.setState({ comment: data });
				console.log('Questi sono i miei dati', data);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	componentDidMount() {
		this.getCooments();
	}
	render() {
		return (
			<Row className='d-flex flex-column'>
				<Col>
					<CommentList comment={this.state.comment} />
				</Col>

				<Col>
					<AddComment bookId={this.props.bookId} />
				</Col>
			</Row>
		);
	}
}

export default CommentArea;
