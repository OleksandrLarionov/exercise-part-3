import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class CommentList extends Component {
	render() {
		return (
			<ListGroup>
				{this.props.comment.map((comment) => {
					return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>;
				})}
			</ListGroup>
		);
	}
}

export default CommentList;
