import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
    name: 'Home',
    data () {
      return {
        newBook:[],
        hotBook:[],
        groomBook:[],
        mask:false,
        obtainInfo:{
          name:"",
          describe:"",
          author:"",
          cover:"",
          price:""
        }
      }
    },
    created(){
      this.getNewBook();
      this.getGroomBook();
      this.getHotBook();
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
      },
      getNewBook(){
        axios.get('/static/api/newbook.json').then((res)=>{
          this.newBook=res.data
        })
      },
      getHotBook(){
        axios.get('/static/api/hotbook.json').then((res)=>{
          this.hotBook=res.data
        })
      },
      getGroomBook(){
        axios.get('/static/api/groombook.json').then((res)=>{
          this.groomBook=res.data
        })
      },
      clickBook(index){
        this.newBook.push(this.obtainInfo);
        this.obtainInfo={
          name:this.newBook[index].name,
          describe:this.newBook[index].describe,
          author:this.newBook[index].author,
          cover:this.newBook[index].cover,
          price:this.newBook[index].price
        }
        this.mask = true;
      },
      close(){
        this.mask=false;
      },
    },
    mounted() {
      this.runSwiper();
  }
  }