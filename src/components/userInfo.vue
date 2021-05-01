<template>
  <el-container>
    <el-form
      class="user-form"
      ref="form"
      :model="form"
      label-width="60px"
      size="medium"
    >
      <el-row type="flex">
        <el-col :span="24">
          <p class="title">點擊編輯鈕進行修改</p>
        </el-col>
      </el-row>

      <el-row type="flex" style="margin-bottom: 50px;">
        <el-col :span="8">
          <el-button :disabled="disabled" @click="init">重設</el-button>
        </el-col>

        <el-col :span="8">
          <el-button @click="disabled = !disabled">編輯</el-button>
        </el-col>

        <el-col :span="8">
          <el-button :disabled="disabled" type="primary" @click="onSave"
            >保存</el-button
          >
        </el-col>
      </el-row>

      <el-row type="flex" justify="start">
        <el-col :span="24">
          <el-form-item label="姓名">
            <el-input
              v-model="form.name"
              :disabled="disabled"
              placeholder="請輸入姓名"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="start">
        <el-col :span="24">
          <el-form-item label="性別">
            <el-select
              v-model="form.gender"
              :disabled="disabled"
              placeholder="請選擇性別"
            >
              <el-option label="男" value="b"></el-option>
              <el-option label="女" value="g"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="start">
        <el-col :span="24">
          <el-form-item label="身高">
            <el-input
              v-model.number="form.tall"
              :disabled="disabled"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "UserInfo",
  data() {
    return {
      disabled: true,
      form: {
        name: "",
        gender: "",
        tall: 0
      }
    };
  },
  methods: {
    onSave() {},
    init() {}
  }
};
</script>

<style scoped lang="sass">
.user-form
  margin-top: 50px
  border: 3px solid #FFF5EE
  background-color: #A9A9A9
  padding: 15px 30px
  box-shadow: 3px 10px 10px 0 rgba(100,100,100,10%)
</style>
