<template>
  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user.name" placeholder="姓名" style="width: 140px;"></el-input>
      </el-form-item>
      <el-form-item label="年份">
        <el-date-picker
          v-model="formInline.user.date"
          align="right"
          type="year"
          placeholder="选择年份">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
        <el-cascader expand-trigger="hover" :options="options" v-model="formInline.user.address"></el-cascader>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-select v-model="formInline.user.place" placeholder="请选择">
          <el-option
            v-for="item in places"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <a href="javascript:;" id="download" style="background-color:#409EFF;color: #fff;padding: 12px 10px!important;margin-left: 10px!important;border-radius:4px " @click="download()" download="download.csv">导出数据</a>
    </el-form>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
    <el-row>
      <el-col :span="24">
        <!--表格-->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            prop="date"
            label="创建日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="修改个人信息" :visible="dialogFormVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;" ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        formInline: {
          user: {
            name: '',
            date: '',
            address: [],
            place: ''
          }
        },
        tableData: [
          {
            "date": '2016-07-16',
            "name": "斩三",
            "address": "广东省",
            "status" : "激活"
          },
          {
            "date": '2016-07-16',
            "name": "留言",
            "address": "广东省",
            "status" : "激活"
          },
          {
            "date": '2016-07-16',
            "name": "也一样",
            "address": "广东省",
            "status" : "未激活"
          }
        ],
        options: [
          {
            "label": '广东省',
            "value": "10",
            "children": [
              {
                "label": '深圳市',
                "value": "12",
                "children": [
                  {
                    "label": '南山区',
                    "value": "14"
                  }
                ]
              }
            ]
          }
        ],
        places: [
          {
            "label": '广东省',
            "value": "10"
          }
        ],
        dialogFormVisible: false,
        editLoading: false,
        form: {
          name: '',
          address: '',
          date: '',
        },
        currentPage: 4,
        table_index: 999,
      }
    },
    methods: {
      onSubmit () {
        this.$message('筛选~');
      },
      handleDelete (index, row) {
        this.tableData.splice(index, 1);
        this.$message({
          message: "操作成功！",
          type: 'success'
        });
      },
      handleEdit (index, row) {
        this.dialogFormVisible = true;
        this.form = Object.assign({}, row);
        this.table_index = index;
      },
      handleSave () {
        this.$confirm('确认提交吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          cancelButtonClass: 'cancel'
        }).then(() => {
          this.editLoading = true;
          let date = this.form.date;
          if (typeof date === "object") {
            date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-');
            this.form.date = date
          }
          this.tableData.splice(this.table_index, 1, this.form);
          this.$message({
            message: "操作成功！",
            type: 'success'
          });
          this.editLoading = false;
          this.dialogFormVisible = false;
        }).catch(() => {

        });
      },
      download: function() {
        var obj = document.getElementById('download');
        var str = "姓名,出生日期,地址\n";
        for (var i = 0; i < this.tableData.length; i++) {
          var item = this.tableData[i];
          str += item.name + ',' + item.date + ',' + item.address;
          str += "\n";
        }
        str = encodeURIComponent(str);
        obj.href = "data:text/csv;charset=utf-8,\ufeff" + str;
        obj.download = "download.csv";
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }
  .el-message-box__btns .cancel {
    float: right;
    margin-left: 10px;
  }
</style>
