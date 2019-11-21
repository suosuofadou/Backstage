<template>
  <el-form ref="form" :model="organizationDate" label-width="80px">
    <el-form-item label="组织名称">
      <el-input v-model="organizationDate.name"></el-input>
    </el-form-item>
    <el-form-item label="组织区域">
      <el-select v-model="organizationDate.region" placeholder="请选择组织区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="组织时间">
      <el-col :span="6">
        <el-date-picker type="date" placeholder="选择日期" v-model="organizationDate.date1" style="width: 100%;"></el-date-picker>
      </el-col>&nbsp;&nbsp;&nbsp;
      <el-col class="line" :span="1" style="text-align: center">-</el-col>
      <el-col :span="6">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="organizationDate.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="组织状态">
      <el-switch v-model="organizationDate.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="组织性质">
      <el-checkbox-group v-model="organizationDate.type">
        <el-checkbox label="娱乐性质" name="type"  value="1"></el-checkbox>
        <el-checkbox label="盈利性质" name="type"  value="2"></el-checkbox>
        <el-checkbox label="半娱乐性质" name="type"  value="3"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="组织资源">
      <el-radio-group v-model="organizationDate.resource">
        <el-radio label="线上品牌商赞助" value="1"></el-radio>
        <el-radio label="线下场地免费" value="2"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="organizationDate.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">返回上级</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { fetchArticle } from '@/api/article'
  export default {
    data() {
      return {
        organizationDate: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    mounted() {
      this.initdata()
    },
    methods: {
      initdata: function() {
        let that= this
        fetchArticle().then( function(res) {
          that.organizationDate= res.data
        })
      },
      onSubmit() {
        console.log('返回上一级')
      }
    }
  }
</script>
