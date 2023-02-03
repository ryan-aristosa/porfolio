function TechStackTag(props) {
	return (
		<div>
			<div
				className={props.color + ' py-1 px-3 me-2 mt-2'}
				style={{ backgroundColor: props.bgColor }}
				key={props.stack}
			>
				{props.stack}
			</div>
		</div>
	);
}

export default TechStackTag;
