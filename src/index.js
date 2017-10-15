import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { AtomDesignInputField, VaultDesignInputField } from '@jsfoobar/design-patterns';
import { cardNumberMaskingHOC, cardExpiryMaskingHOC, cardCVVMaskingHOC, Masking } from '../';

class CardNumberWithAtomDesign extends Component {
	onKeyUpHandler = e => {
		const props = this.props;

		if (props.maskingOnKeyUp) {
			props.maskingOnKeyUp(e);
		}

		if (props.onKeyUp) {
			props.onKeyUp(e);
		}
	}

	constructor(props) {
		super(props);

		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
	}

	render() {
		const props = this.props;
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = props.maxLength;
		propsForInput.placeholder = props.placeholder;

		const propsForMasking = {};

		propsForMasking.mask = props.mask;
		propsForMasking.value = props.value;

		return (
			<VaultDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={props.value} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

class CardExpiryWithAtomDesign extends Component {
	onKeyUpHandler = e => {
		const inputState = this.props.maskingOnKeyUp(e, this.props);

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

	render() {
		const { label, ...propsForInput } = this.props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = this.props.placeholder.length;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<AtomDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
				<masking {...propsForMasking} />
			</AtomDesignInputField>
		);
	}
}

class CardCVVWithAtomDesign extends Component {
	onFocusHandler = e => {
		const { cardType, placeholder } = this.props;
		const card = (cardType) ? this.props.getMasking(cardType) : '';
		const maxlength = (cardType) ? card.mask.length : placeholder.length;

		this.setState({
			maxLength: maxlength
		});
	}

	onKeyUpHandler = e => {
		const inputVal = e.target.value;
		const { cardType } = this.props;
		const card = (cardType) ? this.props.getMasking(cardType) : '';
		const propsForCardCVVMasking = {
			value: inputVal,
			mask: card.mask
		};

		const inputState = this.props.maskingOnKeyUp(e, propsForCardCVVMasking);

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

	render() {
		const { label, ...propsForInput } = this.props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = this.state.maxLength;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<AtomDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</AtomDesignInputField>
		);
	}
}

const CardNumber1 = cardNumberMaskingHOC(CardNumberWithAtomDesign);
const CardExpiry1 = cardExpiryMaskingHOC(CardExpiryWithAtomDesign);
const CardCVV1 = cardCVVMaskingHOC(CardCVVWithAtomDesign);

class CardNumberWithVaultDesign extends Component {
	onKeyUpHandler = e => {
		const props = this.props;

		if (props.maskingOnKeyUp) {
			props.maskingOnKeyUp(e);
		}

		if (props.onKeyUp) {
			props.onKeyUp(e);
		}
	}

	constructor(props) {
		super(props);

		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
	}

	render() {
		const props = this.props;
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = props.maxLength;
		propsForInput.placeholder = props.placeholder;

		const propsForMasking = {};

		propsForMasking.mask = props.mask;
		propsForMasking.value = props.value;

		return (
			<VaultDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={props.value} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

class CardExpiryWithVaultDesign extends Component {
	onKeyUpHandler = e => {
		const inputState = this.props.maskingOnKeyUp(e, this.props);

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

	render() {
		const { label, ...propsForInput } = this.props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = this.props.placeholder.length;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<VaultDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

class CardCVVWithVaultDesign extends Component {
	onFocusHandler = e => {
		const { cardType, placeholder } = this.props;
		const card = (cardType) ? this.props.getMasking(cardType) : '';
		const maxlength = (cardType) ? card.mask.length : placeholder.length;

		this.setState({
			maxLength: maxlength
		});
	}

	onKeyUpHandler = e => {
		const inputVal = e.target.value;
		const { cardType } = this.props;
		const card = (cardType) ? this.props.getMasking(cardType) : '';
		const propsForCardCVVMasking = {
			value: inputVal,
			mask: card.mask
		};

		const inputState = this.props.maskingOnKeyUp(e, propsForCardCVVMasking);

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

	render() {
		const { label, ...propsForInput } = this.props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = this.state.maxLength;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<VaultDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

const CardNumber2 = cardNumberMaskingHOC(CardNumberWithVaultDesign);
const CardExpiry2 = cardExpiryMaskingHOC(CardExpiryWithVaultDesign);
const CardCVV2 = cardCVVMaskingHOC(CardCVVWithVaultDesign);

const App = () => (
	<div>
		<h2>Masking with Atom design</h2>
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
		<h2>Masking with Vault design</h2>
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
