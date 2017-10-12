import { h, Component } from 'preact';
import { AtomDesignInputField, VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import CardNumberMasking from './js/components/card-number-masking';
import CardExpiryMasking from './js/components/card-expiry-masking';
import CardCVVMasking from './js/components/card-cvv-masking';

const renderCardNumber1 = (MaskingComponent) => {
	class CardNumber extends Component {
		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const card = CardNumber.getCardDetails(inputVal.charAt(0));
			const { placeholder } = this.props;
			const maxlength = (card.mask.length)? card.mask.length : placeholder.length;
			const propsForCardNumberMasking = {
				value: inputVal,
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
		onFocusHandler = e => {
			const { cardType, placeholder } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';
			const maxlength = (cardType) ? card.mask.length : placeholder.length;

			this.setState({
				maxLength: maxlength
			});
		}

		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const { cardType } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';
			const propsForCardCVVMasking = {
				value: inputVal,
				mask: card.mask
			};

			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
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
			this.onFocusHandler = this.onFocusHandler.bind(this);
		}

		componentDidMount() {
			console.log("renderCardCVV1::componentDidMount"); //eslint-disable-line
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<AtomDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</AtomDesignInputField>
			);
		}
	}

	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardCVV.getMasking = MaskingComponent.getMasking;

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
		onFocusHandler = e => {
			const { cardType, placeholder } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';
			const maxlength = (cardType) ? card.mask.length : placeholder.length;

			this.setState({
				maxLength: maxlength
			});
		}

		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const { cardType } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';
			const propsForCardCVVMasking = {
				value: inputVal,
				mask: card.mask
			};

			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
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
			this.onFocusHandler = this.onFocusHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</VaultDesignInputField>
			);
		}
	}

	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardCVV.getMasking = MaskingComponent.getMasking;

	return CardCVV;
};

const CardNumber1 = renderCardNumber1(CardNumberMasking);
const CardExpiry1 = renderCardExpiry1(CardExpiryMasking);
const CardCVV1 = renderCardCVV1(CardCVVMasking);

const CardNumber2 = renderCardNumber2(CardNumberMasking);
const CardExpiry2 = renderCardExpiry2(CardExpiryMasking);
const CardCVV2 = renderCardCVV2(CardCVVMasking);

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
				id="cvv1"
				cardType="VISA"
				placeholder=""
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
				cardType="American Express"
				placeholder="3 to 4 digits"
				required="required"
			/>
		</form>
	</div>
);

export default App;
