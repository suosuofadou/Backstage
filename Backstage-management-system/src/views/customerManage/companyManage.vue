<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="车系全称">
      <el-input v-model="sizeForm.name" style="width: 180px"></el-input>
    </el-form-item>
    <el-form-item label="汽车属性">
      <el-select v-model="sizeForm.region" placeholder="请选择汽车属性">
        <el-option label="轿车" value="shanghai"></el-option>
        <el-option label="SUV" value="beijing"></el-option>
        <el-option label="商务车" value="mpv"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="出库时间">
      <el-col :span="5">
        <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width:180px;"></el-date-picker>
      </el-col>
      <el-col :span="5">
        <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width:180px;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item
      label="出库数量"
      prop="age"
      :rules="[
      { required: true, message: '数量不能为空'},
      { type: 'number', message: '数量必须为数字值'}
    ]"
    >
      <el-input type="age"  autocomplete="off" style="width: 180px"></el-input>
    </el-form-item>
    <el-form-item label="出库备注">

      <el-input type="textarea"></el-input>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>

</template>
<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          mpv: '',
          numberValidateForm: {
            age: ''
          }
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      /* submitForm(formName) {
         this.$refs[formName].validate((valid) => {
           if (valid) {
             alert('submit!');
           } else {
             console.log('error submit!!');
             return false;
           }
         });
       }*/
    },
    /*resetForm(formName) {
      this.$refs[formName].resetFields();
    }*/
  }
</script>
<style scoped>
</style>
