<template>
  <div class="dashboard-container">
    <el-row :gutter="24">
      <el-col :span="8">
        <TodoList />
      </el-col>
      <el-col :span="16">
        <TodolGroupList />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { TodoList, TodolGroupList } from './components/index'
export default {
  components: {
    TodoList,
    TodolGroupList
  }
}
</script>
