<template>
  <div>
    <!-- 推荐 -->
    <div class="recommend">
      <!-- 导航 -->
      <div class="recommend-content">
        <!-- 滚动 -->
        <div v-if="homes.length" class="slider-wrapper">
          <slider>
            <div v-for ="(item,index) in homes" :key="index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <!-- 列表 -->
        <div class="recommend-list">
          <!-- 头部 -->
          <h1 class="list-title">热门歌单推荐</h1>
          <!-- 内容 -->
          <ul></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommend } from '@/api/recommend'
import { ERR_OK } from '@/api/config'
import slider from '@/base/slider/slider'

export default {
  data () {
    return {
      homes: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.homes = res.data.slider
        }
      })
    }
  },
  components: {
    slider
  }
}
</script>
<style scoped>
.recommend {
  width: 100%;
  position: fixed;
  top: 120px;
  bottom: 0;
}
.recommend .slider-wrapper {
  width: 100%;
  height: 165px;
  position: relative;
  overflow: hidden;
}
.recommend .list-title {
  width: 100%;
  height: 65px;
  line-height: 65px;
  color: #ffcd32;
  text-align: center;
  font-size: 14px;
}
</style>
