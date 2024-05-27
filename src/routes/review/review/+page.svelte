<script lang="ts">
	import TextField from '$lib/TextField.svelte';
	import { base } from '$app/paths';
	import { writable } from 'svelte/store';

	//const ID_PREFIX = 'BRV';

	type Review = {
		title: string;
		titleYomi: string;
		subtitle: string;
		subtitleYomi: string;
		series: string;
		author: string;
		startPage: string;
		endPage: string;
		includedIn: string;
		includedInId: string;
		note: string;
	};

	const idTupleString = writable('');
	let idTuple: { [key: string]: string } = {};

	idTupleString.subscribe((s) => {
		idTuple = Object.fromEntries(
			s.split('\n').map((v) => {
				const line = v.split('\t');
				return [line[0], line[1]];
			})
		);
	});

	const initReview = (): Review => {
		return {
			title: '',
			titleYomi: '',
			subtitle: '',
			subtitleYomi: '',
			series: '',
			author: '',
			startPage: '',
			endPage: '',
			includedIn: '',
			includedInId: '',
			note: ''
		};
	};

	const review = writable(initReview());
	let tsv: string;

	review.subscribe((b) => {
		tsv =
			b.title +
			'\t' +
			b.titleYomi +
			'\t' +
			b.subtitle +
			'\t' +
			b.subtitleYomi +
			'\t' +
			b.series +
			'\t' +
			b.author +
			'\t' +
			b.startPage +
			'\t' +
			b.endPage +
			'\t' +
			b.includedIn +
			'\t' +
			b.includedInId +
			'\t' +
			b.note;
	});

	const copy = () => {
		navigator.clipboard.writeText(tsv);
	};
	const clear = () => {
		review.set(initReview());
	};
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href={`${base}/`}>げんしけん</a></li>
		<li><a href={`${base}/review/`}>レビュー班</a></li>
		<li><a href={`${base}/review/book`}>冊子</a></li>
	</ul>
</div>
<TextField label="タイトル" bind:value={$review.title} inputType="text" required />
<TextField label="タイトルヨミ" bind:value={$review.titleYomi} inputType="text" />
<TextField label="サブタイトル" bind:value={$review.subtitle} inputType="text" />
<TextField label="サブタイトルヨミ" bind:value={$review.subtitleYomi} inputType="text" />
<TextField label="シリーズ" bind:value={$review.series} inputType="text" />
<TextField label="著者" bind:value={$review.author} inputType="text" required />
<TextField label="開始ページ" bind:value={$review.startPage} inputType="number" required />
<TextField label="終了ページ" bind:value={$review.endPage} inputType="number" required />

<details>
	<summary>掲載紙の補完の設定</summary>
	<p>スプレッドシートの1列目と2列目を選択しペーストしてください</p>
	<textarea bind:value={$idTupleString} class="textarea textarea-bordered w-full"></textarea>
</details>
<label for="included-in">掲載誌ID</label>
<input
	type="text"
	id="included-in"
	bind:value={$review.includedInId}
	list="id-tuple"
	class="input input-bordered w-full"
	class:input-error={!$review.includedInId}
	required
/>

<TextField label="備考" bind:value={$review.note} inputType="textarea" required />
<button class="btn btn-primary" on:click={copy}>copy</button>
<button class="btn btn-warning" on:click={clear}>clear</button>

<datalist id="id-tuple">
	{#each Object.keys(idTuple) as id}
		<option label={idTuple[id]} value={id} />
	{/each}
</datalist>
