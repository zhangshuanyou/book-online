import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
    name: 'Home',
    data () {
      return {
        
      }
    },
    methods:{
      runSwiper(){
        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    },
    mounted() {
      this.runSwiper();
  }
  }