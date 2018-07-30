<template>
    <div class='q-login'>
        <div class="left">
            <div class="header">
                <div class="logo">Logo</div>
                
            </div>
            <div class="content">
                 <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="rule-form">
                     <el-form-item label="用户名" prop="name">
                         <el-row>
                            <el-col :span="18">
                                <el-input v-model.number="ruleForm2.name" placeholder="用户名只能包含数字和字母"></el-input>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-row>
                            <el-col :span="18">
                                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码不得少于6位;不得大于12位"></el-input>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-row>
                            <el-col :span="18">
                                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-row>
                            <el-col :span="18">
                                 <el-input v-model="ruleForm2.email"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-button @click="getEmailCode" class="margin-l-10">{{getEmailMsg}}</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="验证码" prop="emailCode">
                        <el-row>
                            <el-col :span="18">
                                 <el-input v-model.number="ruleForm2.emailCode"></el-input>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <el-row>
                            <el-col :span="18">
                                 <el-button type="primary" class="btn red" @click="submitForm('ruleForm2')">注  册</el-button>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                        
                    </el-form-item>
                    <el-form-item>
                        <el-row>
                            <el-col :span="18">
                                 <div class="login">
                                    <span>如果您已注册，请</span>
                                    <span class="login-btn" @click="login">登录</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right">
            <div class="content">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        const RE = /[A-Za-z\d][0-9][`~!@#$%^&*()_+<>?:"{},.\/;'[\]]$/
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length < 6 || value.length > 12){
            callback(new Error('密码最少6位，最大12位'));
        }else{
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var VemailCode = (rule, value, callback) => {
          if(value === ''){
              callback(new Error('请输入验证码'));
          }else if(!Number.isInteger(value)){
              callback(new Error('请输入正确的数字'));
          }else{
              callback();
          }
      };
      var Vemail = (rule, value, callback) => {
          const RE = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
          if(value === ''){
              callback(new Error('请输入邮箱'));
          }else if(!RE.test(value)){
              callback(new Error('请输入正确的邮箱'));
          }else{
              callback();
          }
      };
      var Vname = (rule, value, callback) => {
          const RE = /[A-Za-z\d][0-9]$/
          if(value === ''){
              callback(new Error('请输入用户名'));
          }else if(!RE.test(value)){
              callback(new Error('只能包含数字和字母'));
          }else{
              callback();
          }
      };
      return {
        ruleForm2: {
          name:'',
          pass: '',
          checkPass: '',
          email:'',
          emailCode:''
        },
        rules2: {
            name: [
                { validator: Vname, trigger: 'blur' }
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            email:[
                { validator: Vemail, trigger: 'blur' }
            ],
            emailCode: [
                { validator: VemailCode, trigger: 'blur' }
            ],
        },
        loginType:true,
        getEmailMsg:'获取验证码'
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
            } else {
                return false;
            }
            });
        },
        getEmailCode(){//获取验证码
            if(this.loginType){
                let time = 60;
                const _this = this;
                _this.getEmailMsg = time+'s'
                function countdown(){//倒计时
                    let Timeer = 
                        setInterval(function(){
                            time--;
                            _this.getEmailMsg = time+'s'
                            if(time<=0){//倒计时结束
                                clearInterval(Timeer)
                                _this.loginType = true
                                _this.getEmailMsg = '获取验证码'
                                return;
                            }
                        },1000)
                }
                countdown()
                this.loginType = false
            }
        },
        login(){//登录

        }
    }
}
</script>

<style lang="scss">
@import '../../assets/css/color.sass';
@import '../../assets/css/media.scss';

$width:(
    null   : 0px,
    1200px : 350px,
    1400px : 400px,
    1920px : 600px
);

$fromWidth:550px;

.q-login{
    width: 100%;
    height: 100%;
    .left{
        @include getMediaAttr2($width,width)
    }
    .left{
        float: left;
        height: 100%;
        display: flex;
        align-items:center;
        position: relative;
        .content{
            width: $fromWidth;
            padding: 20px;
            margin: 0 auto;
        }
        .header{
            position: absolute;
            top: 0;
            left: 0;
            height: 60px;
            width: 100%;
            box-sizing: border-box;
            padding: 15px 60px;
            display: flex;
            justify-content: space-between;
            
        }
        .login-btn{
            color: $red;
            font-size: 14px;
            cursor: pointer;
        }
        .message{
            color: $red;
            font-size: 12px;
            width: auto;
            line-height: 14px;
        }
        .margin-l-10{
            margin-left: 10px;
        }
    }
    .right{
        @include getMediaAttr($width,width)
    }
    .right{
        height: 100%;
        background: url('../../assets/image/login1.jpg') center no-repeat;
        float: right;
    }
    .btn{
        width: 100%;
    }
    .red{
        background: $red;
        border-color: $red;
        &:active{
            background: rgba($red,.8);
            border-color: rgba($red,.8);
        }
    }
}
</style>
