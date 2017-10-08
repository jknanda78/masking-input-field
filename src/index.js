import { h, Component } from 'preact';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import CardNumberMasking from './js/components/card-number-masking';

const renderCardNumber = (MaskingComponent) => {
	class CardNumber extends Component {
		onKeyUpHandler = e => {
			const inputState = CardNumber.maskingOnKeyUp(e, this.props);

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
			propsForInput.mask = this.state.mask;
			propsForInput.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForInput} />
				</VaultDesignInputField>
			);
		}
	}

	CardNumber.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardNumber;
};

const CardNumber = renderCardNumber(CardNumberMasking);

const App = () => (
	<CardNumber
		label="Card Number"
		class="masked"
		type="tel"
		name="card-number"
		id="cardNumber"
		placeholder="XXXX XXXX XXXX XXXX"
		required="required"
	/>
);

export default App;
