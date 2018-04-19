<template>
  <div class="changeaddress">
      <div class="title">
        <div class="goback" @click="$emit('closeone')"></div>
        <p>收货地址</p>
      </div>
      <div class="addressBox">
          <div class="nameBox">
              <label for="">姓名</label>
              <input type="text" placeholder="请填写您的真实姓名">
          </div>
          <div class="tellBox">
              <label for="">联系电话</label>
              <input type="text" placeholder="请填写我们联系您的电话">
          </div>
          <div class="postBox">
              <label for="">邮政编码</label>
              <input type="text" placeholder="请填写您所在地区的邮政编码">
          </div>
          <div class="selectBox">
              <select name="" id="">
                  <option value="">四川省</option>
                  <option value="">广东省</option>
                  <option value="">湖北省</option>
                  <option value="">山东省</option>
                  <option value="">河南省</option>
                  <option value="">...</option>
              </select>
              <select name="" id="">
                  <option value="">成都市</option>
                  <option value="">绵阳市</option>
                  <option value="">攀枝花市</option>
                  <option value="">德阳市</option>
                  <option value="">雅安市</option>
                  <option value="">...</option>
              </select>
              <select name="" id="">
                  <option value="">金牛区</option>
                  <option value="">高新区</option>
                  <option value="">武侯区</option>
                  <option value="">景江区</option>
                  <option value="">成华区</option>
                  <option value="">...</option>
              </select>
          </div>
          <div class="writeaddress">
              <label for="">详细地址</label>
              <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
          </div>
      </div>
      <button class="changebtn">确认修改</button>
  </div>
</template>


<script>
    export default{
        name:'Change',
        
    }
</script>

<style>
  
</style>