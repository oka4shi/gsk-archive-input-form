<script lang="ts">
	import TextField from '$lib/TextField.svelte';
	import { base } from '$app/paths';
	import { writable } from 'svelte/store';

	type Review = {
		title: string;
		titleYomi: string;
		subtitle: string;
		subtitleYomi: string;
		author: string;
		startPage: string;
		endPage: string;
    includedIn: string;
    note: string;
	};

	const initReview = (): Review => {
		return {
			title: '',
		  titleYomi: "",
		  subtitle: "",
		  subtitleYomi: "",
		  author: "",
		  startPage: "",
		  endPage: "",
      includedIn: "",
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
			b.author +
			'\t' +
			b.startPage
			'\t' +
			b.endPage +
			'\t' +
			b.includedIn +
			'\t' +
			b.note;
	});

	const copy = () => {
		navigator.clipboard.writeText(tsv);
	};
	const clear = () => {
		review.set(initReview())
	}
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href={`${base}/`}>げんしけん</a></li>
		<li><a href={`${base}/review/`}>レビュー班</a></li>
		<li><a href={`${base}/review/book`}>冊子</a></li>
	</ul>
</div>
<TextField label="タイトル" bind:value={$review.title} inputType="text" required />
<TextField label="タイトルヨミ" bind:value={$review.titleYomi} inputType="text" required />
<TextField label="サブタイトル" bind:value={$review.subtitle} inputType="text" required />
<TextField label="サブタイトルヨミ" bind:value={$review.subtitleYomi} inputType="text" required />
<TextField label="著者" bind:value={$review.author} inputType="text" required />
<TextField label="開始ページ" bind:value={$review.startPage} inputType="number" required />
<TextField label="終了ページ" bind:value={$review.endPage} inputType="number" required />
<TextField label="掲載誌" bind:value={$review.includedIn} inputType="text" required />
<TextField label="備考" bind:value={$review.note} inputType="textarea" required />
<button class="btn btn-primary" on:click={copy}>copy</button>
<button class="btn btn-warning" on:click={clear}>clear</button>
