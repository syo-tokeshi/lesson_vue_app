<template>
  <div>
    <h1>test</h1>
    <ListAdd />
    <br><br>
    <list v-for="(item,index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
    />
  </div>

</template>

<script>
import ListAdd from "@/components/ListAdd";
import List from "@/components/List";
import {mapState} from "vuex"

export default {
  components: {
    ListAdd,
    List,
  },
  computed: {
    ...mapState([
        "lists"
    ]),
  },
}
</script>