<template>
  <el-select v-model="value" placeholder="Кафедри">
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
          value: 'Автомобілів',
          label: 'Автомобілів'
        }, {
          value: 'Аеропортів',
          label: 'Аеропортів'
        }, {
          value: 'Виробництва, ремонту та матеріалознавства',
          label: 'Виробництва, ремонту та матеріалознавства'
        }, {
          value: 'Технічної експлуатації автомобілів та автосервісу',
          label: 'Технічної експлуатації автомобілів та автосервісу'
        }, {
          value: 'Вищої математики',
          label: 'Вищої математики'
        }, {
          value: 'Двигунів і теплотехніки',
          label: 'Двигунів і теплотехніки'
        }],
        value: ''
      }
    }
  }
</script>