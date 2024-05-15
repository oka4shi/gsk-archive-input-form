<template>
  <h2>レビュー冊子</h2>
  <!--
  <div class="field">
    <label class="label">タイトル</label>
    <div class="control">
      <input class="input" v-model="book.title" placeholder="タイトル" />
    </div>
  </div>-->
  <TextField label="タイトル" v-model:field="book.title" />
  <TextField label="発行日" v-model:field="book.pubdate" type="date"/>
  <TextField label="発行者" v-model:field="book.publisher" />
  <TextField label="発行所" v-model:field="book.pubplace" />
  <TextField label="表紙ロゴ" v-model:field="book.logo"/>
  <TextField label="製本" v-model:field="book.bookmaking"/>
  <TextField label="編集長" v-model:field="book.editChef"/>
  <TextField label="備考" v-model:field="book.note" :required=false type="textarea"/>
  <div>
    <code>{{ tsv }}</code>
  </div>
  <div class="control">
    <button class="button" @click="copyTSV">copy</button>
  </div>
</template>

<script lang="ts">
import { watch, ref, reactive, computed, defineComponent } from 'vue'
import TextField from "./TextField.vue";

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
  components: {
    TextField,
  },
  setup() {
    const tsv = ref('')
    const book: Book = reactive({
      title: '',
      pubdate: '',
      publisher: '',
      pubplace: '',
      logo: '',
      bookmaking: '',
      editChef: '',
      note: ''
    })
    watch(book, (newBook, oldBook) => {
      tsv.value =
        newBook.title +
        '\t' +
        newBook.pubdate +
        '\t' +
        newBook.publisher +
        '\t' +
        newBook.pubplace +
        '\t' +
        newBook.logo +
        '\t' +
        newBook.bookmaking +
        '\t' +
        newBook.editChef +
        '\t' +
        newBook.note +
        '\t'
      //console.log(tsv);
    })
    function copyTSV() {
      navigator.clipboard.writeText(tsv.value)
    }
    return {
      book,
      tsv,
      copyTSV
    }
  }
})
</script>

<style lang="scss">
@use 'bulma/sass/form/input-textarea';
@use 'bulma/sass/elements/button';
</style>
