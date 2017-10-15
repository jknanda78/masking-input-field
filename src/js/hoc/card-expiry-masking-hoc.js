import { h, Component } from 'preact';

const cardExpiryMaskingHOC = WrappedComponent => {
	class HOC extends Component {
		setMasking = (e, props) => {
			let currentValue = e.target.value,
				newValue = '';

			const len = currentValue.length,
				maskedNumber = 'XdDmMyY9';

			if (currentValue.match(/[A-Z]/i)) {
				currentValue = currentValue.substr(0, len-1);
			}

			const strippedValue = currentValue.replace(/\D/g, '');
			const l = props.placeholder.length;

			for (let i = 0, j = 0; i < l; i++) {
				let isInt = !isNaN(parseInt(strippedValue[j], 10));
				let matchesNumber = maskedNumber.indexOf(props.placeholder[i]) >= 0;

				if (matchesNumber && isInt) {
					newValue += strippedValue[j++];
				}
				else if (matchesNumber && !isInt) {
					return {
						value: newValue
					};
				}
				else {
					newValue += props.placeholder[i];
				}

				if (strippedValue[j] === undefined) {
					break;
				}
			}

			if (newValue.length === 1 && props.placeholder.toUpperCase().substr(0,2) === 'MM') {
				if (newValue > 1 && newValue < 10) {
					newValue = '0' + newValue;
				}
			}

			return {
				value: newValue,
				mask: props.placeholder.substr(newValue.length)
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

			this.setMasking = this.setMasking.bind(this);
			this.maskingOnKeyUp = this.maskingOnKeyUp.bind(this);
		}

		render() {
			return (
				<WrappedComponent {...this.props} setMasking={this.setMasking} maskingOnKeyUp={this.maskingOnKeyUp} />
			);
		}
	}

	HOC.displayName = 'Card Expiry Masking';
	return HOC;
};

export default cardExpiryMaskingHOC;
