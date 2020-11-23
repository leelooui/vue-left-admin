<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Todo Group List</span>
    </div>
    <el-row :gutter="24">
      <el-col :span="8">
        <span>待处理</span>
        <draggable
          v-model="list"
          class="list-group"
          tag="ul"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging = true"
          @end="isDragging = false"
        >
          <transition-group type="transition" :name="'flip-list'">
            <li
              v-for="element in list"
              :key="element.order"
              class="list-group-item"
            >
              <i
                :class="
                  element.fixed
                    ? 'el-icon-s-flag'
                    : ' el-icon-s-promotion'
                "
                aria-hidden="true"
                @click="element.fixed = !element.fixed"
              />
              {{ element.name }}
              <span class="badge">{{ element.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="8">
        <span>已过期</span>
        <draggable
          v-model="list2"
          class="list-group"
          tag="ul"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging = true"
          @end="isDragging = false"
        >
          <transition-group type="transition" :name="'flip-list'" tag="ul">
            <li
              v-for="element in list2"
              :key="element.order"
              class="list-group-item"
            >
              <i
                :class="
                  element.fixed
                    ? 'el-icon-s-flag'
                    : ' el-icon-s-promotion'
                "
                aria-hidden="true"
                @click="element.fixed = !element.fixed"
              />
              {{ element.name }}
              <span class="badge">{{ element.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
      <el-col :span="8">
        <span>已处理</span>
        <draggable
          v-model="list3"
          class="list-group"
          tag="ul"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging = true"
          @end="isDragging = false"
        >
          <transition-group type="transition" :name="'flip-list'" tag="ul">
            <li
              v-for="element in list3"
              :key="element.order"
              class="list-group-item"
            >
              <i
                :class="
                  element.fixed
                    ? 'el-icon-s-flag'
                    : ' el-icon-s-promotion'
                "
                aria-hidden="true"
                @click="element.fixed = !element.fixed"
              />
              {{ element.name }}
              <span class="badge">{{ element.order }}</span>
            </li>
          </transition-group>
        </draggable>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      list: [
        { name: '任务1', order: 1, fixed: false },
        { name: '任务2', order: 2, fixed: false },
        { name: '任务3', order: 3, fixed: false },
        { name: '任务4', order: 1, fixed: false },
        { name: '任务5', order: 2, fixed: false },
        { name: '任务6', order: 3, fixed: false },
        { name: '任务7', order: 1, fixed: false },
        { name: '任务8', order: 2, fixed: false }
      ],
      list2: [
        { name: '任务9', order: 1, fixed: false },
        { name: '任务10', order: 2, fixed: false },
        { name: '任务11', order: 3, fixed: false },
        { name: '任务12', order: 1, fixed: false },
        { name: '任务13', order: 2, fixed: false },
        { name: '任务14', order: 3, fixed: false },
        { name: '任务15', order: 1, fixed: false },
        { name: '任务16', order: 2, fixed: false }
      ],
      list3: [
        { name: '任务17', order: 1, fixed: false },
        { name: '任务18', order: 2, fixed: false },
        { name: '任务19', order: 3, fixed: false },
        { name: '任务20', order: 1, fixed: false },
        { name: '任务21', order: 2, fixed: false },
        { name: '任务22', order: 3, fixed: false },
        { name: '任务23', order: 1, fixed: false },
        { name: '任务25', order: 2, fixed: false }
      ],
      editable: true,
      isDragging: false,
      delayedDragging: false
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    },
    listString() {
      return JSON.stringify(this.list, null, 2)
    },
    list2String() {
      return JSON.stringify(this.list2, null, 2)
    }
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  },
  methods: {
    orderList() {
      this.list = this.list.sort((one, two) => {
        return one.order - two.order
      })
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    }
  }
}
</script>

<style>
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
  min-height: 20px;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: move;
}
.list-group-item > .badge {
  float: right;
}
.badge {
  display: inline-block;
  min-width: 18px;
  padding: 3px 5px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #ff5722;
  border-radius: 29px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
