<script lang="ts">
	import TextField from '$lib/TextField.svelte';
	import { base } from '$app/paths';
	import { writable } from 'svelte/store';

	type Book = {
		title: string;
		pubDate: string;
		pubPerson: string;
		pubPlace: string;
		logo: string;
		bookmaking: string;
		chefEditor: string;
		note: string;
	};

	const initBookData = () => {
		return {
			title: '',
			pubDate: '',
			pubPerson: '',
			pubPlace: '',
			logo: '',
			bookmaking: '',
			chefEditor: '',
			note: ''
		};
	};

	const book = writable(initBookData());
	let tsv: string;

	book.subscribe((b) => {
		tsv =
			b.title +
			'\t' +
			b.pubDate +
			'\t' +
			b.pubPerson +
			'\t' +
			b.pubPlace +
			'\t' +
			b.logo +
			'\t' +
			b.bookmaking +
			'\t' +
			b.chefEditor +
			'\t' +
			b.note;
	});

	const copy = () => {
		navigator.clipboard.writeText(tsv);
	};
	const clear = () => {
		book.set(initBookData())
	}
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href={`${base}/`}>げんしけん</a></li>
		<li><a href={`${base}/review/`}>レビュー班</a></li>
		<li><a href={`${base}/review/book`}>冊子</a></li>
	</ul>
</div>
<TextField label="タイトル" bind:value={$book.title} inputType="text" required />
<TextField label="発行日" bind:value={$book.pubDate} inputType="date" required />
<TextField label="発行者" bind:value={$book.pubPerson} inputType="text" required />
<TextField label="発行所" bind:value={$book.pubPlace} inputType="text" required />
<TextField label="表紙ロゴ" bind:value={$book.logo} inputType="text" required />
<TextField label="製本" bind:value={$book.bookmaking} inputType="text" required />
<TextField label="編集長" bind:value={$book.chefEditor} inputType="text" required />
<TextField label="備考" bind:value={$book.note} inputType="textarea" required />
<button class="btn btn-primary" on:click={copy}>copy</button>
<button class="btn btn-warning" on:click={clear}>clear</button>
