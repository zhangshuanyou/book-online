export default {
    name: 'ClassIficaton',
    data () {
      return {
         bookInfo:[],
         searchBook:[],
         inputVal:""
      }
    },
    created(){
      this.getBookInfo();
      
    },
    methods:{
      getBookInfo(){
        axios.get('/static/api/book-info.json').then((res)=>{
            this.bookInfo=res.data;
            this.load();
        })
      },
      load(){
        this.searchBook=this.bookInfo;
      },
      searchInfo(){
        const val = this.inputVal;
        if(val.trim() === ""){
          this.searchBook=this.bookInfo;
        }else{
          this.searchBook = this.bookInfo.filter((item) => {
            const searchInfo = new RegExp(val, "ig");
            return searchInfo.test(item.name) || searchInfo.test(item.author);   
            });
        }
      }
    }
  }