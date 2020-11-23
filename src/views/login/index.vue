<template>
  <div class="login-container">
    <transition name="el-zoom-in-top">
      <div class="login-weaper">
        <div class="login-box">
          <h1 style="text-align: center">{{ title }}</h1>
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            autocomplete="on"
            label-position="left"
            style="margin: 0 auto"
          >
            <div class="title">登录</div>
            <el-form-item prop="userCode">
              <el-input
                ref="userCode"
                v-model="loginForm.userCode"
                placeholder="帐号"
                name="userCode"
                type="text"
                tabindex="1"
                autocomplete="on"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                autocomplete="on"
                show-password
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="rememberUserCode" style="color: white;">记住密码</el-checkbox>
              <el-button type="text" style="float: right;color: white;" @click="forgetPwd">【忘记密码】</el-button>
            </el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              style="width: 100%; padding: 12px 20px"
              @click.native.prevent="handleLogin"
            >登录</el-button>
            <div class="login-tip">温馨提示：推荐使用Chrome浏览器</div>
          </el-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { title } from '@/settings'
import Wonder from './canvas2.js'
export default {
  name: 'Login',
  data() {
    const validateUserCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入帐号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (value && value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        userCode: 'admin',
        password: '123456',
        validateCode: null,
        uuid: null
      },
      imageData: null,
      rememberUserCode: null,
      loginRules: {
        userCode: [
          { required: true, trigger: 'blur', validator: validateUserCode }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        validateCode: [
          { required: true, trigger: 'blur', message: '请输入验证码' }
        ]
      },
      title: title,
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  mounted() {
    if (this.loginForm.userCode === '') {
      this.$refs.userCode.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    new Wonder({
      el: '.login-container',
      dotsNumber: 230,
      lineMaxLength: 300,
      dotsAlpha: 1,
      speed: 2,
      clickWithDotsNumber: 5
    })
  },
  methods: {
    forgetPwd() {
      this.$alert('温馨提示：若遇到账号异常请联系管理员（****）', '忘记密码', {
        confirmButtonText: '确定'
      })
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then((res) => {
              this.$router.push({
                path: this.redirect || '/',
                query: this.otherQuery
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
$bg: linear-gradient(235deg, #2196f3, #cad4de, #84b2e0c9);
$light_gray: black;
$cursor: black;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.login-container {
  background-image: url(~@/assets/img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .el-input {
    display: inline-block;
    line-height: 48px;
    height: 48px;
    width: 100%;
    input {
      color: black;
      line-height: 48px;
      height: 48px;
      caret-color: black;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #dcdfe6;
$dark_gray: #1890ff;
$light_gray: #1890ff;
.login-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .login-weaper {
    z-index: 99999;
    margin: 0 auto;
    width: 500px;
    -webkit-box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
    box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
    .login-tip {
      text-align: center;
      padding: 29px 0;
      font-size: 13px;
    }
    .login-left::before,
    .login-left::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .login-box {
      height: 500px;
      display: inline-block;
      width: 100%;
      background: rgb(6 6 6 / 0.6);
      padding: 40px;
      color: white;
      .title {
        position: relative;
        font-size: 1.2rem;
        padding-bottom: 16px;
        font-weight: bold;
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
