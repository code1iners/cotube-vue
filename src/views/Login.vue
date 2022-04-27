<template>
  <div class="videobox">
    <form action="" id="frm" @submit.prevent="loginVue" @keyup.enter="loginVue">
      <div class="loginbox">
        <p class="title">로그인</p>
        <label class="check" v-text="form.text"></label>
        <div class="login_part">
          <input
            type="email"
            v-model="form.id"
            placeholder="아이디를 입력해주세요"
          />
          <input
            type="password"
            v-model="form.pass"
            placeholder="비밀번호를 입력해주세요"
          />
          <input type="submit" value="로그인" class="btn loginbtn" />
          <input type="button" value="카카오 로그인하기" class="kakaobtn btn" />
        </div>
        <div class="id_passbox">
          <input type="button" value="아이디찾기" class="btn" />
          <input type="button" value="패스워드찾기" class="btn" />
        </div>
        <div class="form">
          <p>cotube 회원이 아닌가요? 지금 가입하세요.</p>
          <router-link to="singup">
            <input type="button" value="회원가입" class="startbtn" />
          </router-link>
        </div>
      </div>
    </form>
    <video muted autoplay loop playsinline class="mpplayer">
      <source src="../sauce/event.mp4.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import useUser from "../api/users/useUser.js";
export default {
  name: "Login",

  setup() {
    const router = useRouter(); //*
    const form = reactive({ id: "", pass: "", text: "" });

    if (sessionStorage.getItem("ACCESS_TOKEN") !== null) {
      router.push("home");
    }
    const loginVue = () => {
      form.pass === "" || form.pass.length < 6
        ? (form.text = "패스워드를 정확하게 입력하여주시길 바랍니다")
        : loginCode();
    };
    const loginCode = async () => {
      const { login } = useUser();

      const { ok, token } = await login({
        email: form.id,
        password: form.pass,
      });

      if (!ok) return alert("아이디 정보가 없습니다");

      sessionStorage.setItem("ACCESS_TOKEN", token);
      router.replace("/home");
    };

    return { form, loginVue, loginCode };
  },

  // components: {},
  // created() {
  //   if (sessionStorage.getItem("ACCESS_TOKEN") !== null) {
  //     this.$router.push("Home");
  //   }
  // const { join } = useUser();
  // join({
  //   email: "rbgodsla@naver.com",
  //   username: "괭이",
  //   password: "111111",
  // });
  // },
  //   data() {
  //     return {
  //       form: {
  //         id: "",
  //         pass: "",
  //         text: "",
  //       },
  //     };
  //   },
  //   methods: {
  //     kakaologin() {},
  //     loginVue() {
  //       this.form.pass === "" || this.form.pass.length < 6
  //         ? (this.text = "패스워드를 정확하게 입력하여주시길 바랍니다")
  //         : this.loginCode();
  //     },
  //     async loginCode() {
  //       const { login } = useUser();

  //       const { ok, token } = await login({
  //         email: this.form.id,
  //         password: this.form.pass,
  //       });

  //       if (!ok) return alert("아이디 정보가 없습니다");

  //       sessionStorage.setItem("ACCESS_TOKEN", token);
  //       this.$router.replace("/home");
  //     },
  //   },
};
</script>
<style scoped>
.videobox {
  position: relative;
}
.check {
  display: block;
  color: red;
  font-size: 16px;
  font-weight: 800;
}
.loginbox {
  /* width: 450px;
  height: 670px; */
  width: 80%;
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
.loginbox .title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  color: white;
}
.loginbox .login_part {
  width: 100%;
  height: 250px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.loginbox .login_part > input {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 0;
}
.loginbox .login_part > input::placeholder {
  font-size: 12px;
  text-indent: 5px;
}
.btn {
  font-size: 12px;
  cursor: pointer;
  font-weight: 800;
}
.loginbtn {
  background-color: red;
  color: white;
}
.kakaobtn {
  background-color: #fee500;
}
.id_passbox {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.id_passbox > input {
  width: 48%;
  height: 45px;
  border: 0;
  border-radius: 5px;
  background-color: #ccc;
  font-weight: 900;
}
.form {
  width: 100%;
  height: auto;
}
.form > p {
  font-size: 17px;
  color: white;
}
.form .startbtn {
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
}
.mpplayer {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  position: absolute;
  z-index: 9999;
}
</style>
