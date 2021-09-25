<template>
  <div class="login">
    <b-row class="mt-5">
      <b-col
        md="8"
        offset-md="2"
      >
        <b-card title="登录">
          <b-form>
            <b-form-group label="账号">
              <b-form-input
                v-model="user.name"
                type="text"
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="手机">
              <b-form-input
                v-model="user.telephone"
                type="number"
                placeholder="Enter telephone"
              ></b-form-input>

              <b-form-text
                id="password-help-block"
                text-variant="danger"
                v-if="ShowTelephoneDanger"
              >
                手机号的长度必须为11位
              </b-form-text>
            </b-form-group>
            <b-form-group label="密码">
              <b-form-input
                v-model="user.password"
                type="password"
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-button
                variant="primary"
                block
                @click="login"
              >登录</b-button>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import storage from "@/service/storageService"
export default {
  data() {
    return {
      user: {
        name: "",
        telephone: "",
        password: ""
      },
      ShowTelephoneDanger: false
    };
  },
  methods: {
    register() {
      if (this.user.telephone.length != 11) {
        this.ShowTelephoneDanger = true;
      }
      console.log("register");
    },
    login() {
      if (this.user.telephone.length != 11) {
        this.ShowTelephoneDanger = true;
      }
      const api = "http://localhost:5000/api/auth/login";
      this.axios.post(api,{...this.user}).then(res => {
        console.log(res)
        //保存token
        // storageService.set(storageService.USER_TOKEN,res.data.data.token)
        localStorage.setItem("token", res.data.data.token);
        //跳转到主页
        this.$router.replace({ name:"Home"})
      }).catch(
        err => {
          console.log(res.data.msg)
        }
      );
      console.log("login");
    }
  }
};
</script>

<style  lang="scss">
</style>