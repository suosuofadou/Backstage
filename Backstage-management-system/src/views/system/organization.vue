<template>
  <el-table
    :data="organizationDate">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="组织名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="组织介绍">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="组织 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="组织分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="组织地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="组织描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
          <el-form-item label="编辑">
            <router-link :to="{ path: 'organdeatils' }">
              <el-button icon="el-icon-search" circle></el-button>
            </router-link>
            <router-link :to="{ path: 'organedit' }">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="组织ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="组织名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="组织描述"
      prop="desc">
    </el-table-column>
  </el-table>
</template>


<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  import { fetchList } from '@/api/article'

  export default {
    data() {
      return {
        organizationDate: null,
        listQuery: {
          page: 1,
          limit: 6,
          type: this.type,
          sort: '+id'
        }
      }
    },
    mounted() {
      this.initdata()
    },
    methods: {
      initdata: function() {
        let that= this
        fetchList(this.listQuery).then(function(res) {
          that.organizationDate= res.data.items
        })
      }
    }
  }
</script>
