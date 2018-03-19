import { h } from 'preact';
import '../../scss/masking-kitkat-design.scss';
import '../../scss/masking-donut-design.scss';

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
