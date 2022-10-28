<template>
  <!-- ★ここから追記 -->
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-title">{{ listIndex }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
  </div>
  <!-- ★ここまで追記 -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
  },
  methods: {
    removeList() {
      if (confirm("確認")){
        this.$store.dispatch("removelist",{listindex: this.listIndex})
      }
    }
  },
}

</script>