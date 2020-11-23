<template>
  <div class="dashboard-container">
    <div class="dashboard-box">
      <div v-viewer="options" class="images clearfix">
        <template v-for="{ source, thumbnail } in images">
          <img
            :key="source"
            :src="thumbnail"
            :data-source="source"
            class="image"
            :alt="source.split('?image=').pop()"
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const sourceImages = []
const base = parseInt(Math.random() * 60, 10) + 10
for (let i = 0; i < 1000; i++) {
  sourceImages.push({
    thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
    source: `https://picsum.photos/id/${base + i}/1440/900`
  })
}
export default {
  data() {
    return {
      options: {
        toolbar: true,
        url: 'data-source'
      },
      images: [...sourceImages]
    }
  },
  computed: {},
  methods: {
    toggleToolbar(toolbar) {
      // this.options = Object.assign({}, this.options, {toolbar})
      this.options.toolbar = toolbar
    },
    add() {
      this.images.push(sourceImages[this.images.length])
    },
    remove() {
      this.images.pop()
    },
    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: calc(20% - 10px);
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
