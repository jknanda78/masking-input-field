import { h } from 'preact';

const MaskingUI = props => (
	<span class="shell">
		<span>
			<i arial-hidden="true">{props.value}</i>
			{props.mask}
		</span>
	</span>
);

MaskingUI.displayName = 'Masking UI Component';

export default MaskingUI;
