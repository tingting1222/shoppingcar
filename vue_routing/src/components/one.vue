<template>
      <section class="content">
          <nav class="nav">
              <div class="nav_list">
              <router-link to="second" tag='p'>热门</router-link>
              </div>
              <div class="nav_list bg">
                <router-link to="types" tag='p'>分类</router-link>
              </div>
              <div class="nav_list">
              <router-link to="jingpin" tag='p'>精品</router-link>

              </div>
              <div class="nav_list">
               <router-link to="guangbo" tag='p'>广播</router-link>

              </div>
              <div class="nav_list">
               <router-link to="zhibo" tag='p'>直播</router-link>
              </div>
          </nav>
          <div>
             <router-view></router-view>
          </div>
        </section>
</template>