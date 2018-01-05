import React from 'react';

export const Icon = (props) => {

	if (props.status === "incomplete") {
		return <span>✅</span>;
	} else {
		return 	<span>❌</span>	
	}
}