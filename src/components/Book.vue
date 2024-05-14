<template>
  <h2>冊子</h2>
  <div>
    <label for="book--title">タイトル</label>
    <input v-model="book.title" placeholder="タイトル" />
  </div>
  <div>
    <label for="book--pubdate">発行日</label>
    <input id="book--pubdate" type="date" v-model="book.pubdate" />
  </div>
  <div>
    <label for="book--publisher">発行者</label>
    <input id="book--publisher" type="text" v-model="book.publisher" />
  </div>
  <div>
    <label for="book--publisher">発行所</label>
    <input id="book--publisher" type="text" v-model="book.pubplace" />
  </div>
  <div>
    <label for="book--logo">表紙ロゴ</label>
    <input id="book--logo" type="text" v-model="book.logo" />
  </div>
  <div>
    <label for="book--bookmaking">製本</label>
    <input id="book--bookmaking" type="text" v-model="book.bookmaking" />
  </div>
  <div>
    <label for="book--edit-chef">編集長</label>
    <input id="book--edit-chef" type="text" v-model="book.editChef" />
  </div>
  <div>
    <label for="book--edit-chef">備考</label>
    <textarea v-model="book.note" placeholder="add multiple lines"></textarea>
  </div>
  <div>
    <code>{{tsv}}</code>
  </div>
  <button @click="copyTSV(tsv.value)">copy</button>
</template>

<script lang="ts">
import { watchEffect , ref, reactive, computed, defineComponent } from 'vue'

type Book = {
  title: string
  pubdate: string
  publisher: string
  pubplace: string
  logo: string
  bookmaking: string
  editChef: string
  note: string
}

export default defineComponent({
  setup() {
    const tsv = ref("");
    const book: Book = reactive({
      title: '',
      pubdate: '',
      publisher: '',
      pubplace: '',
      logo: '',
      bookmaking: '',
      editChef: '',
      note: ''
    });
    watchEffect(() => {
      tsv.value = (
        book.title +
        '\t' +
        book.pubdate +
        '\t' +
        book.publisher +
        '\t' +
        book.pubplace +
        '\t' +
        book.logo +
        '\t' +
        book.bookmaking +
        '\t' +
        book.editChef +
        '\t' +
        book.note +
        '\t'
      );
      //console.log(tsv);
    });
    function copyTSV() {
      navigator.clipboard.writeText(tsv.value)
    };
    return {
      book,
      tsv,
      copyTSV,
    }
  }
})

</script>
