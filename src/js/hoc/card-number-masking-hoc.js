import { h, Component } from 'preact';

const CardNumberMaskingHOC = WrappedComponent => {
	class HOC extends Component {
		getMasking = cardFirstDigit => {
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

		setMasking = (e, props) => {
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

		maskingOnKeyUp = (e, props) => {
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

			return this.setMasking(e, props);
		}

		constructor(props) {
			super(props);

			this.getMasking = this.getMasking.bind(this);
			this.setMasking = this.setMasking.bind(this);
			this.maskingOnKeyUp = this.maskingOnKeyUp.bind(this);
		}

		render() {
			return (
				<WrappedComponent {...this.props} getMasking={this.getMasking} setMasking={this.setMasking} maskingOnKeyUp={this.maskingOnKeyUp} />
			);
		}
	}

	HOC.displayName = 'Card Number Masking';
	return HOC;
};

export default CardNumberMaskingHOC;
