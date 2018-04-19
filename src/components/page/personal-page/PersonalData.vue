<template>
  <div id="personaldata" v-show="showpersondatacomp">
   <header class="fa fa-angle-left fa-2x">修改个人资料</header>
   <div class="header"></div>
    <div>
      <span>昵称</span>
      <input type="text" v-model="changenickname">
    </div>
    <div>
      <span>E-mail</span>
      <input type="email" placeholder="请填写您的安全邮箱" v-model="changeemail">
    </div>
    <div class="choosegender">
      <span>性别</span>
      <div v-for="(gender,index) in genders " :key="gender.id">
        <div class="genderchoose" :class="{checked:gender.states}" @click="checkItem(index)">{{gender.name}}</div>
      </div>
    </div>
    <div>
      <span>生日</span>
      <input type="date" v-model="changebirth">
    </div>
    <div>
      <span>身份证号</span>
      <input type="text" placeholder="请输入您的身份证号" v-model="changeid">
    </div>
    <div id="medescipbediv">
      <span>个人描述</span>
      <textarea name="medescipbe" v-model="changedes"></textarea>
    </div>
    <p v-show="showemialwrong">邮箱或身份证格式错误</p>
    <button @click="confirmchangeper">确认修改</button>
    <section class="mask" v-show="showchangemask">
      <div>
        <p>修改成功!</p>
        <button @click="changemaskbtn">确认</button>
      </div>
    </section>
  </div>

</template>

<script>
 
  export default {
    name:'PersonalData',
    data(){
      return{
        showpersondatacomp:true,
        showchangemask:false,
        changenickname:"",
        changeemail:"",
        changegender:"",
        changebirth:"1991-03-17",
        changeid:"",
        changedes:"",
        checkstates:true,
        genders:[
          {name:'男',states:true},
          {name:'女',states:false},
          {name:'保密',states:false},
        ],
        showemialwrong:false
      }
    },
    methods:{
      confirmchangeper(){
        //验证是否为邮箱格式和身份证格式
        var reg1 = /^\w+@[a-z0-9]+\.([a-z]){1,3}$/;
        var reg2 = /^[1-9]\d{14}|^[1-9]\d{17}|^[1-9]\d{16}x/;
        var emailresult = reg1.test(this.changeemail);
        var idresult = reg2.test(this.changeid);
        if(emailresult && idresult){
          this.showchangemask = true;
        }
        else{
          this.showemialwrong = true;
        }

      },
      changemaskbtn(){
        //   this.showpersondatacomp = false;
        this.showemialwrong = false;
        this.showchangemask = false;
        localStorage.setItem('nickname',this.changenickname);
        localStorage.setItem('email',this.changeemail);
        localStorage.setItem('gender',this.changegender);
        localStorage.setItem('birth',this.changebirth);
        localStorage.setItem('id',this.changeid);
        localStorage.setItem('des',this.changedes);
        this.$emit('showdatachange');
      },
      checkItem(index){
        const genderleng = this.genders.length;
        for(var i = 0;i < genderleng;i++){
          if( i != index){
            this.genders[i].states = false;
          }
          else{
            this.genders[i].states = true;
          }
        }
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/common.scss';
  @import './PersonalData.scss';
</style>
