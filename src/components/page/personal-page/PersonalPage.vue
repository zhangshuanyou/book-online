<template>
  <div class="PersonalPage">
    <header>
    <i class="fa fa-angle-left backbtn" v-show="showback" @click="back"></i>
        <i class="fa fa-angle-left backbtn" v-show="showback2" @click="back2"></i>
       {{ logtitle }}
        </header>
      <div class="content">
        <!-- 登录注册页面 -->
        <div class="notlog" v-show="notlogstates">
          <div class="title">
            <div class="land" :class="logfontcolor" @click="logtitlebtn">登录</div>
            <div class="register" @click="registbtn" :class="regsitfontcolor">注册</div>
          </div>
          <div class="telinput">
            <i class="fa fa-mobile-phone"></i>
            <input type="number" placeholder="请输入您的手机号" v-model="telval">
          </div>
           <div class="nicknameinput" v-show="shownickname">
            <i class="fa fa-user"></i>
            <input type="text" placeholder="请输入您的昵称" v-model="nicknameval">
          </div>
          <div class="pwdinput">
            <i class="fa fa-unlock-alt"></i>
            <input type="password" placeholder="请输入您的密码" v-model="pwdval">
          </div>
           <div class="confirmpwdinput" v-show="showconfirmpwd">
            <i class="fa fa-lock"></i>
            <input type="password" placeholder="请确认您的密码" v-model="confirpwdval">
          </div>
          <p class="wrongcue" v-show="showwrongcue">未注册手机或密码输入错误！</p>
          <button @click="logon" class="logbtn" v-show="showlogonbtn">登录</button>
          <button @click="regist" class="logbtn" v-show="showregistbtn">注册</button>
          <section class="mask" v-show="showmask">
            <div>
              <p>注册成功!</p>
              <button @click="maskbtn">确认</button>
              <button @click="maskbtn">取消</button>
            </div> 
           </section>
        </div>
        <!-- 个人中心页面 -->
        <div class="logsuceess" v-show="logsucessstates">
        <section class="personimgcont"></section>
        <div class="personimgcontdiv">
           <div class="personimg"></div>
           <p class="personname">{{personname}}</p>
        </div>
        <ul class="personinfo">
          <router-link @click="topersondata" tag="li" :to="{name:'PersonalData'}"><a >设置个人资料</a><span>></span></router-link>
          <li @click="toaddress"><a >收货地址管理</a><span>></span></li>
        </ul>
        <ul class="mycomment">
          <li><a>我的订单</a><span>></span> </li>
          <li><a >我的评价</a><span>></span></li>
        </ul>
        <ul class="collection">
          <li><a >商品收藏</a><span>></span></li>
          <li><a >店铺收藏</a><span>></span></li>
          <li><a >浏览记录</a><span>></span></li>
        </ul>
        <div class="clean"></div>
        <div class="outlogbutton">
          <button type="button" @click="logoff">退出登录</button>
        </div>
      
      </div>
        <!-- <transition name="slide-fade">
          <PersonalData v-show="showpersonerdata" @showdatachange= "showdatachanges"></PersonalData>
        </transition>
        <transition name="slide-fade">
         <Changge v-show="showaddress"></Changge>
        </transition> -->
      </div>
  </div>

  
</template>

<script>
export default { 
  name: 'PersonalPage', 
  data () {
    return {
    logtitle:'登录/注册',
              logsucessstates: false,
              notlogstates: true,
              showwrongcue:false,
              telval:'',
              pwdval:'',
              nicknameval:'',
              confirpwdval:'',
              logfontcolor:{
                'fontgreen':true,
              },
              regsitfontcolor:{
                'fontgreen':false
              },
              shownickname:false,
              showconfirmpwd:false,
              showlogonbtn:true,
              showregistbtn:false,
              showmask:false,
              personname:'',
              showpersonerdata:false,
              showback:false,
              showaddress:false,
              showback2:false
    }
  },
  methods:{
     //点击注册标题按钮
      registbtn(){
         this.logfontcolor.fontgreen =  false;
         this.regsitfontcolor.fontgreen = true;
         this.shownickname = true;
         this.showconfirmpwd = true;
         this.showregistbtn = true;
         this.showlogonbtn = false,
         this.showwrongcue = false;
      },
      //点击登录标题按钮
      logtitlebtn(){
         this.logfontcolor.fontgreen =  true;
         this.regsitfontcolor.fontgreen = false;
         this.shownickname = false;
         this.showconfirmpwd = false;
         this.showlogonbtn = true,
         this.showregistbtn = false;
         this.showwrongcue = false;
      },
       //确认注册
      regist(){
       //验证是否手机格式
        var reg1 = /^1(3|5|4|0|)\d{9}$/;
        var registtelresult = reg1.test(this.telval);
        //验证是否为密码格式
        var reg2 = /^[a-zA-Z]\w{5,17}$/;
        var registpwdresult = reg2.test(this.pwdval);
        //验证两次密码是否一样
       //如果全部验证通过，则注册成功
       if(registtelresult && registpwdresult && (this.pwdval === this.confirpwdval)){
         this.showmask = true;
         //存储值
         localStorage.setItem('telval',this.telval);
         localStorage.setItem('nickname',this.nicknameval);
         localStorage.setItem('pwdval',this.pwdval);
         //清空输入框
          this.telval = '';
          this.pwdval = '';
          this.nicknameval = '';
          this.confirpwdval = '';
       }
       else{
         //输入错误，弹出提示消息并且清空原来的值
          this.showwrongcue = true;
          this.telval = '';
          this.pwdval = '';
          this.nicknameval = '';
          this.confirpwdval = '';
       }
      },
      //确认登录
      logon(){
        //验证是否登录成功
        //如果登录不成功，则显示登录失败提示语
        //验证手机号码是否为注册的手机号
        var telvalregist = localStorage.getItem('telval');
        var pwdvalregist = localStorage.getItem('pwdval');
        if(telvalregist === this.telval && pwdvalregist === this.pwdval){
          //登录成功显示个人中心页面
          this.logtitle = '个人中心';
          this.notlogstates = false;
          this.logsucessstates = true;
          this.showwrongcue = false ;
          this.personname = localStorage.getItem('nickname');
          //清空原来的值
          this.telval = "";
          this.pwdval = ""
        }
        else{
          this.showwrongcue = true;
          this.telval = "";
          this.pwdval = ""
        }
      },
      //退出登录
      logoff(){
        this.logtitle = '登录/注册';
        this.logsucessstates = false;
        this.notlogstates = true;
      },
      maskbtn(){
        this.showmask = false;
        this.showwrongcue = false;
      },
      //点击个人资料事件
      topersondata(){
        this.logtitle = '个人资料修改';
        this.showback = true;
        this.logsucessstates = false;
        this.showpersonerdata = true;
      },
     //子组件事件
     showdatachanges(){
       this.showpersonerdata = false;
       this.logsucessstates = true;
       this.showback = false;
       this.personname = localStorage.getItem('nickname');
     },
     back(){
       this.showpersonerdata = false;
       this.logsucessstates = true;
       this.showback = false;
     },
     //点击收货地址
     toaddress(){
       this.showaddress = true;
       this.logtitle = '个人资料修改';
       this.showback2 = true;
     },
     back2(){
        this.showaddress = false;
         this.showback2 = false;
     }

    }
  }
  

</script>


<style scoped>
@import './PersonalPage.scss';
</style>
