<template>
  <el-select v-model="value" placeholder="Группа">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Автомеханічний',
          label: 'Автомеханічний'
        }, {
          value: 'Транспортних та Інформаційних Технологій',
          label: 'Транспортних та Інформаційних Технологій'
        }, {
          value: 'Транспортного Будівництва',
          label: 'Транспортного Будівництва'
        }, {
          value: 'Менеджменту, Логістики та Туризму',
          label: 'Менеджменту, Логістики та Туризму'
        }, {
          value: 'Економіки та Права',
          label: 'Економіки та Права'
        }],
        value: ''
      }
    }
  }
</script>