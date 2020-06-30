/*
 * @Modules: 组件入口 
 * @Author: zhouyu 
 * @Date: 2020-06-30 22:37:54 
 * @Last Modified by: zhouyu
 * @Last Modified time: 2020-06-30 22:51:00
 */
<template>
    <div>
        <el-table
            :data="list"
            border
            stripe
        >
            <el-table-column
                v-for="col in columns"
                :prop="col.id"
                :key="col.id"
                :label="col.label"
                :width="col.width"
            >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import { tableCol } from '@/utils/static'
export default {
    name: 'Base',
    data() {
        return {
            list: [],
            columns: tableCol
        }
    },
}
</script>

<style scoped>
</style>