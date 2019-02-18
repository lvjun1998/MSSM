<template>
    <div class="coods-add">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加商品</span>
            </div>
            <div class="text-item">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    
                    <el-form-item label="所属分类" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="--请选择分类--">
                        <el-option label="分类一" value="shanghai"></el-option>
                        <el-option label="分类二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="会员优惠" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="优惠"></el-radio>
                        <el-radio label="不优惠"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择所属分类", trigger: "change" }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.coods-add {
  .el-card {
    .el-card__header {
      text-align: left;
      font-size: 20px;
      font-weight: 600;
      background-color: #f1f1f1;
    }
    .el-card__body {
      text-align: left;
      .el-form {
        width: 290px;
        .el-form-item {
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>



