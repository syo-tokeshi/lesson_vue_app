<template>
  <form class="addcard" @submit.prevent="addCardToList">
    <input v-model="body"
        class="text-input"
           type="text"
           placeholder="test"
    >
    <button type="submit" class="add-button">
      add
    </button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      body: "",
    }
  },
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addCardToList() {
      this.$store.dispatch("addCardToList",{body: this.body, listIndex: this.listIndex})
      this.body=""
    }
  },
}
</script>
