<template>
  <div class="videobox">
    <div class="loginbox">
      <p class="title">로그인</p>
      <label class="check"  v-text="text"></label>
      <div class="login_part">
        <input type="text" v-model="form.id" placeholder="아이디를 입력해주세요">
        <input type="password" v-model="form.pass" placeholder="비밀번호를 입력해주세요">
        <input type="button" @click="login" value="로그인" class="btn loginbtn">
        <input type="button" value="카카오 로그인하기" class="kakaobtn btn" @click="kakaologin">
      </div>
      <div class="id_passbox">
        <input type="button" value="아이디찾기" class="btn" >
        <input type="button" value="패스워드찾기" class="btn">
      </div>
      <div class="form">
        <p>cotube 회원이 아닌가요? 지금 가입하세요.</p>
        <input type="button" value="회원가입" class="startbtn">
      </div>
    </div>
    <video muted autoplay loop class="mpplayer">
      <source src="../sauce/event.mp4.mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {},
  mounted() {
    console.log("hello", process.env.VUE_APP_USER_API_URI); // 0
  },
  data (){
    return{
      check:false,
      text:"",
      form:{
        id:"",
        pass:"",
        text:""
      }
    }
  },
  methods:{
    kakaologin(){
      //  Kakao.Auth.login({
      //       success:function(response){
      //           Kakao.API.request({
      //               url:"/v2/user/me",
      //               success:function(response){
      //                   console.log(response)
      //               },
      //               fail:function(error){
      //                   console.log(error)
      //               }
      //           })
      //       },
      //       fail:function(error){
      //           console.log(error)
      //       }
      //   })
    },
    login(){
     
      // (this.form.id===""||this.form.id.length<6||Number(this.form.id))
      // ?this.check=true  
      //  this.form.check = this.form.id_check
      // :(this.form.pass===""||this.form.id.length<6)
      // ?this.check=true 
      // this.form.check = this.form.pass_check
      // :alert("login성공")
      // this.check=false

      (this.form.id===""||this.form.id.length<6||Number(this.form.id))
      ?this.text="아이디를 정확하게 입력하여주시길 바랍니다"
      :(this.form.pass===""||this.form.pass.length<6)
      ?this.text="패스워드를 정확하게 입력하여주시길 바랍니다"
      :this.text="로그인" 
      
      
    }
  }
};
</script>
<style  scoped>
.videobox{
  position: relative;
}
.check{
  display: block;
  color: red;
  font-size: 16px;
  font-weight: 800;
}
.loginbox{
  width: 450px;
  height: 670px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10000;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  /* justify-content: space-between; */
  padding: 50px;
  box-sizing: border-box;
}
.loginbox .title{
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  color: white;
}
.loginbox .login_part{
  width: 100%;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.loginbox .login_part>input{
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 0;
}
.loginbox .login_part>input::placeholder{
font-size: 12px;
text-indent: 5px;
}
.btn{
font-size: 12px;
  cursor: pointer;
  font-weight: 800;
}
.loginbtn{
  background-color:red ;
  color: white;
}
.kakaobtn{
  background-color: #fee500;
}
.id_passbox{
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.id_passbox>input{
  width: 48%;
  height: 45px;
  border: 0;
  border-radius: 5px;
  background-color: #ccc;
  font-weight: 900;
}
.form{
  width: 100%;
  height: auto;
}
.form>p{
  font-size: 17px;
  color: white;
}
.form .startbtn{
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
}
.mpplayer{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    z-index: 9999;
}
</style>