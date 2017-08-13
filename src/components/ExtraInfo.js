import React from 'react';
import EmojiField from './EmojiField';

function ExtraInfo(props) {
	const numComps = props.competitor.comps;
	const delegate = props.competitor.delegate === '1';
	const staff = props.competitor.staff === '1';

	return (
		<div>
			<CompetitionNumber numComps={numComps} />
			<Delegate delegate={delegate} />
			<Staff staff={staff} />
			<EmojiField numComps={numComps} delegate={delegate} />
		</div>
	);
}

function CompetitionNumber(props) {
	function nth(d) {
		if (d > 3 && d < 21) return 'th';
		switch (d % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	return (
		<div>
			{props.numComps}
			{nth(props.numComps)} competition
		</div>
	);
}

function Delegate(props) {
	if (!props.delegate) {
		return null;
	}
	return <span className="delegate">WCA Delegate</span>;
}

function Staff(props) {
	if (!props.staff) {
		return null;
	}
	return <span className="staff">Staff</span>;
}

export default ExtraInfo;
