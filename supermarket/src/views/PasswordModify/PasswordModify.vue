<template>
    <div class="password-modify">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>修改账号密码</span>
            </div>
            <div class="text item">
                <el-form :model="passwordModifyForm" status-icon :rules="rules" ref="passwordModifyForm" label-width="100px" class="demo-ruleForm">

                    <el-form-item label="原密码" prop="lastPassword">
                        <el-input type="text" v-model="passwordModifyForm.lastPassword" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="新密码" prop="newPassword">
                        <el-input type="text" v-model="passwordModifyForm.newPassword" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="确认新密码" prop="checkNewPass">
                        <el-input type="text" v-model.number="passwordModifyForm.checkNewPass"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('passwordModifyForm')">修改</el-button>
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
                callback(new Error("请输入新密码"));
            }else if(value.length<3||value.length>6){
                callback(new Error("密码长度为3-6"))
            }else{
                if(this.passwordModifyForm.checkNewPass !== ""){
                    this.$refs.passwordModifyForm.validateField("checkPass");
                }
                callback();
            }
        };
        // 自定义确认密码验证
        const checkPass = (rule,value,callback)=>{
            if(value===""){
                callback(new Error("请再次输入新密码"));
            }else if(value !== this.passwordModifyForm.newPassword){
                callback(new Error("两次输入密码不一致"));
            }else{
                callback();
            }
        };
        return{
            passwordModifyForm:{
                lastPassword:"",
                newPassword:"",
                checkNewPass:""
            },
           rules:{
               lastPassword:[
                   {required:true,message:"请输入原密码",trigger:"blur"},
                   {min:3,max:6,message:"密码长度为3-6",trigger:"blur"}
               ],
               newPassword:[{required:true,validator:pass,trigger:"blur"}],
               checkNewPass:[{required:true,validator:checkPass,trigger:"blur"}]
           }
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate(valid => {
                if(valid){
                    alert("修改成功");

                    let params={
                        password:this.passwordModifyForm.newPassword
                    };
                    this.$router.push('/accountmanage')
                }else {
                    alert("修改失败 请重试");
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
.password-modify{
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
                    margin-top: 36px;
                }
            }
        }
    }
}
</style>


