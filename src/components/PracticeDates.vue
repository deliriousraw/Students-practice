<template>
    <div>
        <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="Дата початку практики"
            @change="$emit('changeStart', startDate)">
        </el-date-picker>
        <el-date-picker
            v-model="finishDate"
            type="date"
            placeholder="Дата закінчення практики"
            @change="$emit('changefinish', finishDate)">
        </el-date-picker>
    </div>
</template>
<script>
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)
export default {
    name: 'PracticeDates',
    data () {
        return {
            startDate: '',
            finishDate: ''
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
