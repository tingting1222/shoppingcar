<template>

    <section>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
         <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <swiper-slide><img src="../static/images/header_swiper/01.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../static/images/header_swiper/02.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../static/images/header_swiper/03.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
            <article>
                <mt-swipe :auto='2000'>
                    <mt-swipe-item>
                           <div class="sec_head">
                                <img src="../static/images/header_swiper/newpeople.jpg" alt="">
                            </div>
                    </mt-swipe-item>
                     <mt-swipe-item>
                           <div class="sec_head">
                                <img src="../static/images/header_swiper/newpeople.jpg" alt="">
                            </div>
                    </mt-swipe-item>
                </mt-swipe>
                <nav>
                    <ul>
                        <li v-for='i in count'>
                            <span><img :src="i.img" alt=""></span>
                            <p>{{i.letter}}</p>
                        </li>

                    </ul>
                </nav>
                <div class="sec_more">
                    <p>京东<span>快报</span>iPhone手机最神奇的功能，原来这 | 更多</p>
                </div>
                <div class="product">
                    <dl>
                        <dt><img src="../static/images/product/pic1.jpg" alt=""></dt>
                        <dd>￥29.9</dd>
                    </dl>
                    <dl>
                        <dt><img src="../static/images/product/pic4.jpg" alt=""></dt>
                        <dd>￥29.9</dd>
                    </dl>
                    <dl>
                        <dt><img src="../static/images/product/pic3.jpg" alt=""></dt>
                        <dd>￥19.9</dd>
                    </dl>
                    <dl>
                        <dt><img src="../static/images/product/pic4.jpg" alt=""></dt>
                        <dd>￥129.9</dd>
                    </dl>
                </div>
                <div class="lala">
                    <div class="zhuanshu">
                        <img src="../static/images/youhui/youhui_02.jpg" alt="">
                    </div>
                    <div class="classify_find">
                        <div class="child">
                            <h4><img src="../static/images/youhui/youhui_05.jpg" alt=""/></h4>
                            <p>发现品质生活</p>
                            <div class="imgs">
                                <p><img src="../static/images/productzhuan/01 (103).jpg" alt=""/></p>
                                <p><img src="../static/images/productzhuan/01 (121).jpg" alt=""/></p>
                            </div>
                        </div>
                        <div class="child">
                            <h4><img src="../static/images/youhui/youhui_07.jpg" alt=""/></h4>
                            <p>教你买买买</p>
                            <div class="imgs">
                                <p><img src="../static/images/productzhuan/01 (102).jpg" alt=""/></p>
                                <p><img src="../static/images/productzhuan/01 (130).jpg" alt=""/></p>
                            </div>
                        </div>
                        <div class="child">
                            <h4><img src="../static/images/youhui/youhui_11.jpg" alt=""/></h4>
                            <p>专属你的购物指南</p>
                            <div class="imgs">
                                <p><img src="../static/images/productzhuan/01 (121).jpg" alt=""/></p>
                                <p><img src="../static/images/productzhuan/01 (25).jpg" alt=""/></p>
                            </div>
                        </div>
                        <div class="child">
                            <h4><img src="../static/images/youhui/youhui_12.jpg" alt=""/></h4>
                            <p>你不必花大钱 精选1元购</p>
                            <div class="imgs">
                                <p><img src="../static/images/productzhuan/01 (97).jpg" alt=""/></p>
                                <p><img src="../static/images/productzhuan/01 (121).jpg" alt=""/></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='bigimg'>
                    <p>
                        <img src="../static/images/youhui/youhui_23.jpg" alt=""/>
                    </p>
                     <p>
                        <img src="../static/images/hr/1 (6).jpg" alt=""/>
                    </p>
                </div>

                 <div class="classify_find classify_find2">
                    <div class="child">
                        <h4>玩3C</h4>
                        <p>iphone8 新品上市 现货抢购</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (116).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (117).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>京东家电</h4>
                        <p>满减风暴 每满1500减1000</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (119).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (129).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>京东超市</h4>
                        <p>买一赠一 满99减50</p>
                        <div class="imgs">
                            <p class='chi'><img src="../static/images/productzhuan/01 (125).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (133).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>爱家</h4>
                        <p>家装满499-100 自营199-100</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (121).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (182).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="classify_find_box">
                         <div class="classify_find_sub">
                            <h4>爱宝宝</h4>
                            <p>新品1元起</p>
                            <div class="imgs">
                            <img src="../static/images/productzhuan/01 (16).jpg" alt=""/>
                            </div>
                         </div>
                         <div class="classify_find_sub">
                            <h4>爱美丽</h4>
                            <p>梵希小粉皮</p>
                            <div class="imgs">
                            <img src="../static/images/productzhuan/01 (166).jpg" alt=""/>
                            </div>
                         </div>
                         <div class="classify_find_sub">
                            <h4>爱吃</h4>
                            <p>抢99-150券</p>
                            <div class="imgs">
                            <img src="../static/images/productzhuan/01 (132).jpg" alt=""/>

                            </div>
                         </div>
                         <div class="classify_find_sub">
                            <h4>爱穿搭</h4>
                            <p>穿新衣出游</p>
                            <div class="imgs">
                            <img src="../static/images/productzhuan/01 (198).jpg" alt=""/>
                            </div>
                         </div>
                    </div>
                </div>
                <div id='wrapper'>
                    <div id='sroller'>
                    <div class='banner_shop'>
                        <img src="../static/images/product/01.jpg" alt=""/>
                    </div>
                    <div class='banner_shop'>
                        <img src="../static/images/product/02.jpg" alt=""/>
                    </div>
                    <div class='banner_shop'>
                        <img src="../static/images/product/03.jpg" alt=""/>
                    </div>
                    <div class='banner_shop'>
                        <img src="../static/images/product/04.jpg" alt=""/>
                    </div>
                    </div>
                </div>

                <div class='pinzhi'>
                    <img src="../static/images/hr/1 (7).jpg" alt=""/>
                </div>
                <div class="classify_find classify_find2 classify_find3">
                    <div class="child">
                        <h4>品牌秒杀</h4>
                        <p>服装爆款 全场低至5折</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (116).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (116).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>精选品类</h4>
                        <p>家装节装修盛宴</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (119).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (129).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>券集市</h4>
                        <p>全品类券</p>
                        <div class="imgs">
                            <p class='chi'><img src="../static/images/productzhuan/01 (125).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (133).jpg" alt=""/></p>
                        </div>
                    </div>
                    <div class="child">
                        <h4>量贩生活</h4>
                        <p>好货 屯起来</p>
                        <div class="imgs">
                            <p><img src="../static/images/productzhuan/01 (121).jpg" alt=""/></p>
                            <p><img src="../static/images/productzhuan/01 (182).jpg" alt=""/></p>
                        </div>
                    </div>
                </div>
               <div class="content">

                    <dl v-for="i in brr">
                      <dt><img :src="i.url" alt=""/></dt>
                      <dd>
                          <p class="tit text-nowrap">{{i.title}}</p>
                          <p class="price">¥{{i.price}}</p>
                          <p class="bottom">好评率{{i.lv}} <span>{{i.btn}}</span></p>
                      </dd>
                  </dl>

               </div>
            </article>
            </mt-loadmore>
        </section>

</template>
<script>
import {mapState} from 'vuex';
   export default {
      name: 'carrousel',
      data() {
        return {
          notNextTick: true,
          swiperOption: {
            autoplay: 3000,
            loop:true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            mousewheelControl : true,
          }
        }
      },
       methods:{
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            this.$refs.loadmore.onBottomLoaded();
            var len=this.brr.length;
            for(var i=0;i<len;i++){
                this.brr.push(this.brr[i])
            }
        }
      },
      computed: {
        ...mapState(["count"]),
        ...mapState(["brr"]),
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted(){
        new this.$iscroll.iScroll("wrapper",{
            scrollX:true,
            scrollY:false,
            hScrollbar:false
        })
        const {$} =this;
        $(document).on('mousewheel', function(){
            var top=$("section").scrollTop();
            if(top>40){
                $("header").addClass("active");
            }else{
                $("header").removeClass("active");
            }
        });
      }
    }
</script>