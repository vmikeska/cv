<template src="./tech.html"></template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";


@Component({
  name: "Tech"
})
export default class Tech extends Vue {
  @Prop()
  public name!: string;

  @Prop()
  public years!: number;

  

//   public created() {}

//   public mounted() {}
}
</script>
