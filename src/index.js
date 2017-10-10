import { h, Component } from 'preact';
import { AtomDesignInputField, VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import CardNumberMasking from './js/components/card-number-masking';
import CardExpiryMasking from './js/components/card-expiry-masking';

const renderCardNumber1 = (MaskingComponent) => {
	class CardNumber extends Component {
		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const card = CardNumber.getCardDetails(inputVal.charAt(0));
			const { placeholder, value } = this.props;
			const maxlength = (card.mask.length)? card.mask.length : placeholder.length;
			const propsForCardNumberMasking = {
				value,
				mask: card.mask
			};
			const inputState = CardNumber.maskingOnKeyUp(e, propsForCardNumberMasking);

			this.setState({
				type: card.type,
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: '',
				placeholder: props.placeholder,
				maxLength: props.placeholder.length
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength;
			propsForInput.placeholder = this.state.placeholder;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<div>
					<h2>Masking with Atom design</h2>
					<AtomDesignInputField label={label}>
						<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
						<MaskingComponent {...propsForMasking} />
					</AtomDesignInputField>
				</div>
			);
		}
	}

	CardNumber.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardNumber.getCardDetails = MaskingComponent.getCardDetails;

	return CardNumber;
};

const renderCardExpiry1 = (MaskingComponent) => {
	class CardExpiry extends Component {
		onKeyUpHandler = e => {
			const inputState = CardExpiry.maskingOnKeyUp(e, this.props);

			if (inputState && (inputState.value || inputState.mask)) {
				this.setState({
					value: inputState.value,
					mask: inputState.mask
				});
			}
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: props.placeholder
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<AtomDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</AtomDesignInputField>
			);
		}
	}

	CardExpiry.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardExpiry;
};

const renderCardCVV1 = (MaskingComponent) => {
	class CardCVV extends Component {
		onKeyUpHandler = e => {
			const inputState = CardCVV.maskingOnKeyUp(e, this.props);

			if (inputState && (inputState.value || inputState.mask)) {
				this.setState({
					value: inputState.value,
					mask: inputState.mask
				});
			}
		}

		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			// const card = CardNumber.getCardDetails(inputVal.charAt(0));
			const { placeholder, value } = this.props;
			const maxlength = placeholder.length;
			const propsForCardCVVMasking = {
				value,
				mask: placeholder
			};
			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: props.placeholder
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<AtomDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</AtomDesignInputField>
			);
		}
	}

	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardCVV;
};

const renderCardNumber2 = (MaskingComponent) => {
	class CardNumber extends Component {
		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const card = CardNumber.getCardDetails(inputVal.charAt(0));
			const { placeholder, value } = this.props;
			const maxlength = (card.mask.length)? card.mask.length : placeholder.length;
			const propsForCardNumberMasking = {
				value,
				mask: card.mask
			};
			const inputState = CardNumber.maskingOnKeyUp(e, propsForCardNumberMasking);

			this.setState({
				type: card.type,
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: '',
				placeholder: props.placeholder,
				maxLength: props.placeholder.length
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength;
			propsForInput.placeholder = this.state.placeholder;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<div>
					<h2>Masking with Vault design</h2>
					<VaultDesignInputField label={label}>
						<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
						<MaskingComponent {...propsForMasking} />
					</VaultDesignInputField>
				</div>
			);
		}
	}

	CardNumber.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardNumber.getCardDetails = MaskingComponent.getCardDetails;

	return CardNumber;
};

const renderCardExpiry2 = (MaskingComponent) => {
	class CardExpiry extends Component {
		onKeyUpHandler = e => {
			const inputState = CardExpiry.maskingOnKeyUp(e, this.props);

			if (inputState && (inputState.value || inputState.mask)) {
				this.setState({
					value: inputState.value,
					mask: inputState.mask
				});
			}
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: props.placeholder
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</VaultDesignInputField>
			);
		}
	}

	CardExpiry.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardExpiry;
};

const renderCardCVV2 = (MaskingComponent) => {
	class CardCVV extends Component {
		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const { placeholder, value } = this.props;
			const maxlength = placeholder.length;
			const propsForCardCVVMasking = {
				value,
				mask: placeholder
			};
			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: props.placeholder
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</VaultDesignInputField>
			);
		}
	}

	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardCVV;
};

const CardNumber1 = renderCardNumber1(CardNumberMasking);
const CardExpiry1 = renderCardExpiry1(CardExpiryMasking);
const CardCVV1 = renderCardCVV1(CardNumberMasking);

const CardNumber2 = renderCardNumber2(CardNumberMasking);
const CardExpiry2 = renderCardExpiry2(CardExpiryMasking);
const CardCVV2 = renderCardCVV2(CardNumberMasking);

const App = () => (
	<div>
		<form>
			<CardNumber1
				label="Card Number"
				class="masked"
				type="tel"
				name="card-number"
				id="cardNumber1"
				placeholder="15 to 16 digits"
				required="required"
			/>
			<CardExpiry1
				label="Expiry"
				class="masked"
				type="tel"
				name="cvv"
				id="cvv1"
				placeholder="MM/YY"
				required="required"
			/>
			<CardCVV1
				label="CVV"
				class="masked"
				type="tel"
				name="cvv"
				id="cvv"
				placeholder="XXX"
				required="required"
			/>
		</form>
		<form>
			<CardNumber2
				label="Card Number"
				class="masked"
				type="tel"
				name="card-number"
				id="cardNumber2"
				placeholder="15 to 16 digits"
				required="required"
			/>
			<CardExpiry2
				label="Expiry"
				class="masked"
				type="tel"
				name="cvv"
				id="cvv2"
				placeholder="MM/YY"
				required="required"
			/>
			<CardCVV2
				label="CVV"
				class="masked"
				type="tel"
				name="cvv"
				id="cvv"
				placeholder="XXX"
				required="required"
			/>
		</form>
	</div>
);

export default App;
