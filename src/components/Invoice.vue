<template>
  <div class="invoice p-4">
    
    <h2></h2>
    
    
    <div class="border-solid border-2 border-sky-500 w-1/3 invoice p-4" > Company name </div>
      <p style="margin-left: 85vw;" class= "font-semibold text-2xl">Invoices</p> 
    

    <div class="grid grid-cols-1 gap-12">
      <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">

         
         <div class="text-sm font-light text-slate-500 "></div>
         <p style ="margin-left: 85vw;" class="text-sm font-normal text-slate-700 ">Date</p>
         
          
        </p>
        <p class="text-sm font-normal text-slate-700">Name</p>
        <p>Unwrapped</p>
        
      </div>
      <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">Address</p>
        <p>The 55 Group</p>
        
      </div>
      <div class="text-sm font-light text-slate-500">
        <p class="text-sm font-normal text-slate-700">City</p>
        <p>Hull</p>


        <p class="mt-2 text-sm font-normal text-slate-700">Email Address</p>
        <p>...</p>
      </div>
    </div>
  </div>
  <table>
    <thead>
      <tr class="bg-gray-300">
        <th>Item</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td class="">{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.unitPrice }}</td>
        <td>{{ calculateTotal(item) }}</td>
      </tr>
    </tbody>
  </table>
  <div class="total">Total: {{ calculateGrandTotal() }}
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        { name: 'Item 1', quantity: 2, unitPrice: 10 },
        { name: 'Item 2', quantity: 3, unitPrice: 15 },
        { name: 'Item 3', quantity: 1, unitPrice: 5 },
        { name: 'Item 4', quantity: 3, unitPrice: 15 },
        { name: 'Item 5', quantity: 4, unitPrice: 20 },
        { name: 'Item 6', quantity: 1, unitPrice: 5 },
        { name: 'Item 7', quantity: 2, unitPrice: 10 },
        { name: 'Item 8', quantity: 5, unitPrice: 25 },
      ],
    };
  },
  methods: {
    calculateTotal(item) {
      return item.quantity * item.unitPrice;
    },
    calculateGrandTotal() {
      return this.items.reduce((acc, item) => acc + this.calculateTotal(item), 0);
    },
  },
};
</script>
  
<style>
.invoice {
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

/* th {
    background-color: #f2f2f2;
  } */

.total {
  font-weight: bold;
  text-align: right;
}
</style>
  