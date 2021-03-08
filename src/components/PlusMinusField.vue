<template>
  <div class="minusplusnumber">
    <div class="mpbtn minus" v-on:click="mpminus()">
      -
    </div>
    <div id="field_container">
      <input type="number" v-model="newValue" disabled/>
    </div>
    <div class="mpbtn plus" v-on:click="mpplus()">
      +
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    }
  },
  data() {
    return {
      newValue: 0
    }
  },
  methods: {
    getNotificationClass(notification) {
      return `alert alert-${notification.type}`
    },
    mpplus: function () {
      if (this.max === undefined || (this.newValue < this.max)) {
        this.newValue = this.newValue + 1
        this.$emit('input', this.newValue)
      }
    },
    mpminus: function () {
      if ((this.newValue) > this.min) {
        this.newValue = this.newValue - 1
        this.$emit('input', this.newValue)
      }
    }
  },
  watch: {
    value: {
      handler: function (newVal) {
        this.newValue = newVal
      }
    }
  },
  created: function () {
    this.newValue = this.value
  }
}
</script>
<style scoped>
.minusplusnumber {

  margin: auto;
  text-align: center;
  font-size: 30vw;
  user-select: none;
}

.minusplusnumber div {
  display: inline-block;
}

.minusplusnumber #field_container input {
  font-family: DS-Digital, sans-serif;
  text-align: center;
  font-size: 24vw;
  padding: 3px;
  border: none;
  background-color: transparent;
  color: chartreuse;
  width: 24vw;
  height: 24vw;
}

.minusplusnumber .mpbtn {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 24vw;
  height: 24vw;
}

.minusplusnumber .mpbtn:hover {
  background-color: #000;
}

.minusplusnumber .mpbtn:active {
  background-color: #000;
}
</style>
