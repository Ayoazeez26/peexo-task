<template>
  <div class="mt-8" v-if="selectedTab === 'Availability'">
    <FunctionalCalendar
      v-model="calendarData"
      :configs="calendarConfigs"
    ></FunctionalCalendar>
    <div class="avail-desc text-sm ">
      <div class="booked flex items-center">
        <div class="yel-dot mr-6"></div>
        <p class="text-px-book mr-8">Booked</p>
        <p class="text-px-desc text-opacity-40">Orange shaded dates are booked days</p>
      </div>
      <div class="avail flex items-center mt-4">
        <div class="blank-dot mr-6"></div>
        <p class="text-px-base pl-0.5 mr-5">Available</p>
        <p class="text-px-desc text-opacity-40">Unshaded dates are free days</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
export default {
  components: {
    FunctionalCalendar
  },
  props: {
    selectedTab: {
      type: String,
      default: "Availability"
    },
  },
  data() {
    return {
      calendarData: {},
      calendarConfigs: {
        sundayStart: true,
        markedDates: ['8/8/2021', '9/8/2021', '10/8/2021', '11/8/2021', '12/8/2021', '13/8/2021', '14/8/2021', '15/8/2021']
      }
    }
  }
}
</script>

<style>
.vfc-main-container {
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
}
.vfc-week .vfc-day span.vfc-span-day.vfc-marked {
  margin: auto;
  background-color: #F29F05;
  border-radius: 50%;
  opacity: 1;
  z-index: 1;
}
.vfc-week .vfc-day span.vfc-span-day.vfc-today {
  background-color: #fff;
  color: #000;
}
.vfc-cursor-pointer {
  left: -5px;
  background-color: #EBEBEB;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vfc-navigation-buttons.vfc-space-between, .vfc-separately-navigation-buttons.vfc-space-between{
  position: absolute;
  top: 163px;
  left: -10px;
  width: 101%;
}
.vfc-dayNames {
  border-top: 1px solid #EDEDED;
  border-bottom: 1px solid #EDEDED;
  padding-top: 5px;
  padding-bottom: 5px;
}
.yel-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #F29F05;
}
.blank-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #F4F3F0;
}
</style>