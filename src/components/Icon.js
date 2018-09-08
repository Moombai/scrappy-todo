import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export const Icon = (props) => {
	return props.status === "incomplete" ? (
		<Glyphicon glyph="remove" />
	) : (
			<Glyphicon glyph="ok" />
	);
}