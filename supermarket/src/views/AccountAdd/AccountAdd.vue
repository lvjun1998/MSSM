<template>
    <div class="account-add">
        <!-- 面板组件 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加管理员账号</span>
            </div>
            <div class="text item">
                <el-form :model="accountAddForm" status-icon :rules="rules" ref="accountAddForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="accountAddForm.username" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="text" v-model="accountAddForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="text" v-model.number="accountAddForm.checkPass"></el-input>
                    </el-form-item>

                    <el-form-item label="选择用户组" prop="userGroup">
                        <el-select v-model="accountAddForm.userGroup" placeholder="请选择">
                            <el-option label="普通用户" value="普通用户"></el-option>
                            <el-option label="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('accountAddForm')">添加</el-button>
                        <el-button @click="resetForm('accountAddForm')">重置</el-button>
                    </el-form-item>

                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        // 自定义密码验证
        const pass = (rule,value,callback)=>{
            if(value === ""){
                callback(new Error("请输入密码"));
            }else if(value.length<3||value.length>6){
                callback(new Error("密码长度为3-6"))
            }else{
                if(this.accountAddForm.checkPass !== ""){
                    this.$refs.accountAddForm.validateField("checkPass");
                }
                callback();
            }
        };
        // 自定义确认密码验证
        const checkPass = (rule,value,callback)=>{
            if(value===""){
                callback(new Error("请再次输入密码"));
            }else if(value !== this.accountAddForm.password){
                callback(new Error("两次输入密码不一致"));
            }else{
                callback();
            }
        };
        return{
           accountAddForm:{
               username:"",
               password:"",
               checkPass:"",
               userGroup:""
           },
           rules:{
               username:[
                   {required:true,message:"请输入账号",trigger:"blur"},
                   {min:3,max:6,message:"账号长度为3-6",trigger:"blur"}
               ],
               password:[{required:true,validator:pass,trigger:"blur"}],
               checkPass:[{required:true,validator:checkPass,trigger:"blur"}],
               userGroup:[{required:true,message:"请选择用户组",trigger:"change"}]
           } 
        };
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if(valid){
                    alert("验证通过 可以提交");

                    let params={
                        username:this.accountAddForm.username,
                        password:this.accountAddForm.password,
                        userGroup:this.accountAddForm.userGroup
                    };
                    this.$router.push('/accountmanage')
                }else {
                    alert("验证失败 不能提交");
                    return false;
                }
            });
        },
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="less">
.account-add{
    .el-card{
        .el-card__header{
            text-align: left;
            font-size: 20px;
            font-weight: 600;
            background-color: #f1f1f1;
        }
        .el-card__body{
            text-align: left;
            .el-form{
                width: 290px;
                .el-form-item{
                    margin-bottom: 24px;
                }
            }
        }
    }
}
</style>


