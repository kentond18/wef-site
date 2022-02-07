const renderers = () => {
	return {
		blockquote: ({ children }) => (
			<div className="blockquote text-black-50">{children}</div>
		),
	};
};

export default renderers;
