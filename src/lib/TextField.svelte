<script lang="ts">
	export let value: string;
	export let label: string;
	export let inputType: 'number' | 'textarea' | 'text' | 'date' = 'text';
	export let required: boolean = false;
</script>

<div class="field">
	<div class="form-control">
		<div class="label">
			<span class="label-text">{label}</span>
		</div>
		{#if inputType === 'number'}
			<input
				type="number"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
			/>
		{:else if inputType === 'textarea'}
			<textarea class="textarea textarea-bordered" bind:value></textarea>
		{:else if inputType === 'date'}
			<input
				type="date"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
			/>
		{:else}
			<input
				type="text"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
			/>
		{/if}
	</div>
</div>
