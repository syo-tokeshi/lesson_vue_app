<template>
  <!-- ★ここから追記 -->
  <div class="list">
    <div class="listheader">
      <p class="list-title"><input v-model=" title "></p>
      <p class="list-title">{{ listIndex }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <CardAdd :list-index="listIndex"/>

  </div>
  <!-- ★ここまで追記 -->
</template>

<script>
import CardAdd from "@/components/CardAdd";
export default {
  components: {
    CardAdd
  },

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