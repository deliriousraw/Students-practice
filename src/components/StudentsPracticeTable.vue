<template>
    <el-table
        ref="multipleTable"
        :data="data"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        label="Прізвище"
        width="120">
        <template slot-scope="scope">{{ scope.row.lastname }}</template>
        </el-table-column>
        <el-table-column
        property="firstname"
        label="Ім'я"
        width="120">
        </el-table-column>
        <el-table-column
        property="surname"
        label="По-батькові"
        show-overflow-tooltip>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    name: 'StudentsPracticeTable',
    props: {
        data: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    data () {
        return {
            multipleSelection: []
        }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

