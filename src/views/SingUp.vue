<template>
  <div class="main">
    <form @submit.prevent="SingUp">
      <div class="singup">
        <p class="title">간편회원가입</p>
        <label class="text" v-text="text"></label>
        <div>
          <p>이메일</p>
          <input type="email" v-model="form.id" placeholder="@naver.com" />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            v-model="form.password"
            placeholder="6자리 이상입력해주세요"
          />
        </div>
        <div>
          <p>비밀번호확인</p>
          <input
            type="password"
            v-model="form.password2"
            placeholder="동일한 패스워드를 입력바랍니다"
          />
        </div>

        <input type="submit" value="회원가입" class="btn" />
        <router-link to="/">
          <input type="button" value="로그인" class="btn2"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import useUser from "../api/users/useUser.js";
export default {
  name: "OneProjectSingup",

  data() {
    return {
      text: "",
      form: {
        id: "",
        password: "",
        password2: "",
      },
    };
  },

  mounted() {},

  methods: {
    SingUp() {
      if (this.form.password.length < 6) {
        this.text = "비밀번호 6 자리 이상 입력바랍니다";
      } else if (this.form.password2 != this.form.password) {
        this.text = "동일한 패스워드를 입력바랍니다";
      } else {
        this.Join();
      }
    },
    async Join() {
      const { join } = useUser();
      const { ok } = await join({
        email: this.form.id,
        username: this.form.id.split("@")[1],
        password: this.form.password,
      });
      if (!ok) return (this.text = "중복된 아이디 입니다");
      alert("가입이 완료되었습니다");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 800;
}
.text {
  color: red;
  font-size: 14px;
  font-weight: 800;
}
.main {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  padding-top: 10%;
  box-sizing: border-box;
}
.singup {
  width: 300px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.singup > div {
  border-bottom: 2px solid gray;
  margin-bottom: 20px;
}
.singup > div > p {
  font-size: 12px;
  font-weight: 800;
}
.singup > div > input {
  width: 80%;
  height: 30px;
  border: 0;
  outline: 0;
}
.btn {
  border: 0;
  cursor: pointer;
  height: 50px;
  font-weight: 800;
}
.btn2 {
  background-color: black;
  color: white;
  border: 0;
  margin-top: 20px;
  cursor: pointer;
  height: 50px;
  font-weight: 800;
  width: 100%;
  height: 50px;
}
</style>
