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
        showmask:false,
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
         this.getBookArr(index,this.newBook);
         this.getBookArr(index,this.hotBook);
         this.getBookArr(index,this.groomBook);         
      },
      close(){
        this.mask=false; 
      },
      getBookArr(index,arr){
        arr.push(this.obtainInfo);
        this.obtainInfo={
          name:arr[index].name,
          describe:arr[index].describe,
          author:arr[index].author,
          cover:arr[index].cover,
          price:arr[index].price
        }
      this.mask = true;
      arr.splice(arr.length-1,1)
      },
      clickShopping(){
       
          let shoppingInfo = {
              "name":this.obtainInfo.name,
              "author":this.obtainInfo.author,
              "cover":this.obtainInfo.cover,
              "price":this.obtainInfo.price
          };
        this.$emit('shoppingInfo',shoppingInfo)   
        },
        maskbtn(){
          this.showmask=false
        } 
    },
    mounted() {
      this.runSwiper();
  }
  }