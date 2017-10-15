import { h } from 'preact';

const Masking = props => (
	<span class="shell">
		<span>
			<i arial-hidden="true">{props.value}</i>
			{props.mask}
		</span>
	</span>
);

Masking.displayName = 'Masking Functional Component';

export default Masking;
