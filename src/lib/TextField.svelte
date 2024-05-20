<script lang="ts">
	import { generateId } from '$lib/util';
	export let value: string;
	export let label: string;
	export let inputType: 'number' | 'textarea' | 'text' | 'date' = 'text';
	export let required: boolean = false;

	const id = generateId(8);
</script>

<div class="field">
	<div class="form-control">
		<label class="label" for={id}>
			<span class="label-text">{label}</span>
		</label>
		{#if inputType === 'number'}
			<input
				type="number"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
				{id}
			/>
		{:else if inputType === 'textarea'}
			<textarea class="textarea textarea-bordered" bind:value id></textarea>
		{:else if inputType === 'date'}
			<input
				type="date"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
				{id}
			/>
		{:else}
			<input
				type="text"
				class="input input-bordered {required && value.length === 0 ? 'input-error' : ''}"
				bind:value
				{id}
			/>
		{/if}
	</div>
</div>
