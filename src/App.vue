<template>
  <div id="app">
    <!-- 列表 -->
    <div class="list-top">
      <img src="./images/logo.png" alt="火鸡音乐">
      <span>Chicken Music</span>
      <router-link tag="i" to="/mine">
        <img src="./images/me.png" alt="">
      </router-link>
    </div>
    <div class="list-navigation">
      <router-link to="/">
        <span>推荐</span>
      </router-link>
      <router-link to="/singer">
        <span>歌手</span>
      </router-link>
      <router-link to="/ranking">
       <span>排行</span>
      </router-link>
      <router-link to="/seek">
        <span>搜索</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
  }
}
</script>

<style lang="less">
@import url(../static/css/reset.css);
*{
  margin: 0;
  padding: 0;
  background: #222222;
}
 #app .list-top{
  width: 100%;
  height: 69px;
  background: #222222;
  display: flex;
  position: relative;
  justify-content:center;
  align-items: center;
}
 #app .list-top img{
  height: 40px;
  margin: 0 15px;
}
.list-top i{
  border: 0px;
  position: absolute;
  right: 10px;
}
 #app .list-top i img{
  height: 30px;
  float: right;
}
#app .list-top span{
  color: #ffcd32;
  font-size: 20px;
  font-weight: 500;
}
.list-navigation{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}
.list-navigation a{
  text-decoration: none;
  height: 40px;
  color: #919191;
  font-size: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.list-navigation a ::after{
  width: 30px;
  height: 4px;
  background: white;
}
a.router-link-exact-active{
  color: #ffcd32;
}.list-top{
  width: 100%;
  height: 69px;
  background: #222222;
  display: flex;
  justify-content:center;
  align-items: center;
}
 .list-top img{
  height: 40px;
  margin: 0 10px;
}
 .list-top a img{
  height: 30px;
  float: right;
}
.list-top span{
  color: #ffcd32;
  font-size: 20px;
  font-weight: 500;
}
.list-navigation{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}
.list-navigation a{
  text-decoration: none;
  font-size: 20px;
  color: #919191;
  flex: 1;
  display: flex;
  align-items: center;
}
a.router-link-exact-active{
  color: #ffcd32;
  border-bottom: 3px solid #ffcd32;
}
</style>
