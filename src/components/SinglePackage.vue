<template>
  <div class="w-11/12">
    <div class="head flex items-center mb-3 w-full">
      <p @click="$emit('close')" class="cursor-pointer self-end mr-3 mt-2 text-sm w-1/3 text-px-pri">Go Back</p>
      <p class="font-bold text-sm w-1/2">Beauty Campaign</p>
    </div>
    <div class="packages text-left text-sm w-full">
      <div class="pack-head px-5 py-3 rounded bg-px-list flex items-center justify-between">
        <h4 class="w-1/4">Package Item</h4>
        <h4 class="w-1/6">Quantity</h4>
        <h4 class="w-1/6">Price</h4>
        <h4 class="w-1/6">Amount</h4>
      </div>
      <div class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-1/4">150 edited images</p>
        <p class="w-1/6">1</p>
        <p class="w-1/6">0</p>
        <p class="w-1/6">0</p>
      </div>
      <div @click="showSingle = !showSingle" class="pack cursor-pointer px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-1/4">Pack of balloon</p>
        <p class="w-1/6">1</p>
        <p class="w-1/6">15000</p>
        <p class="w-1/6">15000</p>
      </div>
      <div class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-1/4">Big Circular Ear rings</p>
        <p class="w-1/6">2</p>
        <p class="w-1/6">10000</p>
        <p class="w-1/6">20000</p>
      </div>
      <div class="line w-full"></div>
      <div class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <div class="w-48 mr-1 flex items-center"><div class="rounded bg-px-btn p-1 mr-2"><img class="w-2 h-2" src="../assets/close-line.svg" alt=""></div><p>Confetti and Flowers</p></div>
        <p class="w-1/4">2</p>
        <p class="w-1/4">3,000</p>
        <p class="w-1/6">6,000</p>
      </div>
      <div class="pack px-5 py-3 text-px-base flex items-center text-xs justify-between">
        <p class="w-1/2">Service Charge</p>
        <p class="w-1/6 font-medium">N10,000</p>
        <p class="w-1/6 font-medium">N10,000</p>
      </div>
      <div class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <p class="w-1/6 text-px-book">Total</p>
        <p class="w-1/6 font-medium">N51,000</p>
      </div>
      <div class="pack px-5 py-3 text-px-base flex items-center justify-between">
        <div class="addon flex items-center p-3"><p>Select Addons</p><img class="ml-4" src="../assets/arrow-down-s-line.svg" alt="line-down-arrow"></div>
        <a href="#" class="package bg-px-pri flex items-center justify-center text-sm text-white px-7 py-3">Select Package</a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
.line {
  border: 1px solid #70707020;
}
.package {
  border-radius: 100px;
}
.addon {
  border: 1px solid #4D4D4D40;
}
</style>