<script lang="ts">
	import TextField from '$lib/TextField.svelte';
	import { base } from '$app/paths';
	import { writable } from 'svelte/store';

	const speciations = [
		'新歓',
		'冬コミ',
		'夏コミ',
		'学園祭',
		'一年生本',
		'追いコン',
		'新歓冊子',
		'憂刊',
		'その他'
	];

	type Book = {
		title: string;
		speciation: string;
		size: string;
		pubDate: string;
    author: string;
		pubPerson: string;
		pubPlace: string;
		frontCoverIllustlator: string;
		logo: string;
		bookmaking: string;
		chefEditor: string;
		note: string;
	};

	const initBookData = () => {
		return {
			title: '',
			speciation: '',
			size: '',
			pubDate: '',
    author: "",
			pubPerson: '',
			pubPlace: '',
			logo: '',
			frontCoverIllustlator: '',
			bookmaking: '',
			printOffice: '',
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
			b.speciation +
			'\t' +
			b.size +
			'\t' +
			b.pubDate +
			'\t' +
			b.author +
			'\t' +
			b.pubPerson +
			'\t' +
			b.pubPlace +
			'\t' +
			b.logo +
			'\t' +
			b.frontCoverIllustlator +
			'\t' +
			b.bookmaking +
			'\t' +
			b.printOffice +
			'\t' +
			b.chefEditor +
			'\t' +
			b.note;
	});

	const copy = () => {
		navigator.clipboard.writeText(tsv);
	};
	const clear = () => {
		book.set(initBookData());
	};
</script>

<div class="text-sm breadcrumbs">
	<ul>
		<li><a href={`${base}/`}>げんしけん</a></li>
		<li><a href={`${base}/review/`}>レビュー班</a></li>
		<li><a href={`${base}/review/book`}>冊子</a></li>
	</ul>
</div>
<TextField label="タイトル" bind:value={$book.title} inputType="text" required />
<div class="field">
	<div class="form-control">
		<div class="label">
			<label>
				<span class="label-text"> 種別 </span>
			</label>
		</div>
		<select bind:value={$book.speciation} class="select select-borderd">
			{#each speciations as classiation}
				<option value={classiation}>{classiation}</option>
			{/each}
		</select>
	</div>
</div>
<TextField label="サイズ" bind:value={$book.size} inputType="text" required />
<TextField label="発行日" bind:value={$book.pubDate} inputType="date" required />
<TextField label="著者" bind:value={$book.author} inputType="text" required />
<TextField label="発行者" bind:value={$book.pubPerson} inputType="text" required />
<TextField label="発行所" bind:value={$book.pubPlace} inputType="text" required />
<TextField label="表紙ロゴ" bind:value={$book.logo} inputType="text" required />
<TextField
	label="表紙イラスト制作者"
	bind:value={$book.frontCoverIllustlator}
	inputType="text"
	required
/>
<TextField label="製本" bind:value={$book.bookmaking} inputType="text" required />
<TextField label="印刷所" bind:value={$book.printOffice} inputType="text" required />
<TextField label="編集長" bind:value={$book.chefEditor} inputType="text" required />
<TextField label="備考" bind:value={$book.note} inputType="textarea" required />
<button class="btn btn-primary" on:click={copy}>copy</button>
<button class="btn btn-warning" on:click={clear}>clear</button>
