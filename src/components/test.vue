<template>
  <div class=" p-4" :class="getColor()">
    <h1>{{ text }}</h1>

    <input v-model="text" />
    
    </div>
  </template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text: 'Hello World'
    }
  },
  methods: {
    changeText() {
      if(this.msg == 1)
      {
        this.text = 'Bannana'
      }
      else{

      this.text = 'Apple'
      }
    },
    getColor() {
      if(this.msg == 1)
      {
        return 'bg-primary'
      }
      else{
        return 'bg-secondary'
      }
    }
  },
  mounted() {
    this.changeText()
  }
}
</script>
