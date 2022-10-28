<template>
  　<!-- ★ここから追記 -->
  <form class="addlist" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
    >
    <button type="submit" class="add-button">
      Add
    </button>
    <ul>
      <li v-for="list in lists">{{list}}
        <br><br></li>
    </ul>
  </form>
  <!-- ★ここまで追記 -->
</template>

<script>
export default {
  data() {
    return {
      title: "",
      // stateから取る場合
      lists: this.$store.state.lists
      // localstrageからデータを取る場合
      // lists: JSON.parse(localStorage.getItem("trello-lists"))
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addlist",{title: this.title})
    }
  },
}
</script>
