<template>
  <div class="field">
      <label class="label">{{label}}</label>
    <div class="control">
        <input v-if="required" class="input" :class="{'is-danger': field.length < 1}" :type="type" v-model="field" />
        <input v-if="!required" class="input" :type="type" v-model="field" />
    </div>
  </div>
</template>

<script setup lang="ts">
    const field = defineModel("field", { type: String, required: true });

    defineProps({
        "label": {type: String, required: true},
        "type": {type: String, default: "text"},
        "required": { type: Boolean, default: true},
    })
</script>
