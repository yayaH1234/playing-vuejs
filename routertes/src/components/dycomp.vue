<template>
<div>
Other page component....
  <p>{{ this.getid }}</p>
</div>
</template>

<script>
export default {
  name: "dycomp",
  props :{
    id:String
  },
  watch: {
    id : function(){console.log("Changed value"+this.id)}
  },
    data: function ()
        {return {
           getid:this.id
         }}
}
</script>

<style scoped>

</style>