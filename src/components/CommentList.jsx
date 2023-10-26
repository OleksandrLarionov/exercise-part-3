import { Component } from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';

class CommentList extends Component {
	render() {
		return (
			<div>
				{this.props.comment.map((comment) => {
					return (
						<Row key={comment._id}>
							<Col>{comment.comment}</Col>
						</Row>
					);
				})}
			</div>
		);
	}
}

export default CommentList;
