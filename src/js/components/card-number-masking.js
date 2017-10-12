import { h, Component } from 'preact';
import '../../scss/masking-with-designs.scss';

class CardNumberMasking extends Component {
	static getCardDetails = cardFirstDigit => {
		const fistDigit = parseInt(cardFirstDigit, 10);

		switch (fistDigit) {
			case 3:
				return {
					type: 'American Express',
					mask: 'XXXX XXXXXX XXXXX',
					length: 15
				};
			case 4:
				return {
					type: 'VISA',
					mask: 'XXXX XXXX XXXX XXXX',
					length: 16
				};
			case 5:
				return {
					type: 'MasterCard',
					mask: 'XXXX XXXX XXXX XXXX',
					length: 16
				};
			case 6:
				return {
					type: 'Discover',
					mask: 'XXXX XXXX XXXX XXXX',
					length: 16
				};
			default:
				return {
					type: '',
					mask: ''
				};
		}
	}

	static setMasking = (e, props) => {
		let currentValue = e.target.value,
			newValue = '';

		const len = currentValue.length,
			maskedNumber = 'XdDmMyY9';

		if (currentValue.match(/[A-Z]/i)) {
			currentValue = currentValue.substr(0, len-1);
		}

		const strippedValue = currentValue.replace(/\D/g, '');
		const l = props.mask.length;

		for (let i = 0, j = 0; i < l; i++) {
			let isInt = !isNaN(parseInt(strippedValue[j], 10));
			let matchesNumber = maskedNumber.indexOf(props.mask[i]) >= 0;

			if (matchesNumber && isInt) {
				newValue += strippedValue[j++];
			}
			else if (matchesNumber && !isInt) {
				return {
					value: newValue
				};
			}
			else {
				newValue += props.mask[i];
			}

			if (strippedValue[j] === undefined) {
				break;
			}
		}

		return {
			value: newValue,
			mask: props.mask.substr(newValue.length)
		};
	}

	static maskingOnKeyUp = (e, props) => {
		switch (e.keyCode) { // allows navigating thru input
			case 20: // caplocks
			case 17: // control
			case 18: // option
			case 16: // shift
			case 37: // arrow keys
			case 38:
			case 40:
				return;
		}

		return CardNumberMasking.setMasking(e, props);
	}

	componentWillMount() {
		console.log("card-number-masking::componentWillMount"); //eslint-disable-line
	}

	componentDidMount() {
		console.log("card-number-masking::componentDidMount"); //eslint-disable-line
	}

	render(props) {
		return (
			<span class="shell">
				<span>
					<i arial-hidden="true">{props.value}</i>
					{props.mask}
				</span>
			</span>
		);
	}
}

export default CardNumberMasking;
