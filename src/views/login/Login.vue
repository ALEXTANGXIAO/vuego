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
      this.axios.get("http://localhost:5000/api/auth/info").then(response => {
        console.log(response.data);
      });
      console.log("login");
    }
  }
};
</script>

<style  lang="scss">
</style>