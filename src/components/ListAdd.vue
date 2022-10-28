<template>
  　<!-- ★ここから追記 -->
  <form :class="classList" @submit.prevent="addList">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
           @focusin="startEdting"
           @focusout="finishEditing"
    >
    <button  type="submit"
             class="add-button"
             v-if="isEditing || titleExists"
    >
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
      isEditing: false,
      // stateから取る場合
      lists: this.$store.state.lists
      // localstrageからデータを取る場合
      // lists: JSON.parse(localStorage.getItem("trello-lists"))
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addlist",{title: this.title})
    },
    startEdting: function (){
      this.isEditing = true
    },
    finishEditing: function (){
      this.isEditing = false
    },
  },
  computed: {
    classList() {
      const classList = ["addlist"]
      if (this.isEditing){
        classList.push("active")
      }
      if (this.titleExists){
        classList.push("addable")
      }
      return classList
    },
    titleExists(){
      return this.title.length > 0
    }
  },
}
</script>
