import React from 'react';

const LoadingSpinner = ({ size = "md" }) => { //"md = medium"
	const sizeClass = `loading-${size}`;

	return <span className={`loading loading-spinner ${sizeClass}`} />;
};
export default LoadingSpinner;