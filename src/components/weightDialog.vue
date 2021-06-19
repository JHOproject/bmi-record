<template>
  <el-dialog class="weightDialog" :visible="visible" :showClose="!visible">
    <el-row type="flex" justify="end">
      <el-tooltip
        :hide-after="hideToolTip"
        class="item"
        effect="dark"
        content="關閉視窗"
        placement="top"
      >
        <el-button icon="el-icon-close" circle @click="close"></el-button>
      </el-tooltip>
    </el-row>
    <el-row type="flex" justify="space-around">
      <el-form
        ref="form"
        :model="form"
        label-position="left"
        label-width="80px"
        size="medium"
      >
        <el-form-item label="體重">
          <el-input v-model="form.weight" clearable></el-input>
        </el-form-item>

        <el-form-item label="BMI">
          <el-form-item>{{ form.bmi }}</el-form-item>
        </el-form-item>

        <el-form-item label="檢測結果">
          <el-form-item v-if="form.msg === ''">請輸入您的體重</el-form-item>
          <el-form-item v-else>{{ form.msg }}</el-form-item>
        </el-form-item>

        <el-form-item label="紀錄時間">
          <el-time-picker
            placeholder="選擇時間"
            v-model="form.time"
            style="width: 100%;"
          ></el-time-picker>
        </el-form-item>

        <el-form-item label="備註">
          <el-input type="textarea" v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-button type="primary" @click="onSave">保存</el-button>
      </el-col>
      <el-col :span="4">
        <el-button @click="init">重設</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: "weightDialog",
  props: ["userTall"],
  data() {
    return {
      index: 0,
      form: {
        date: "",
        weight: 0,
        bmi: 0,
        msg: "",
        type: "",
        time: "",
        remark: ""
      },
      // allMsg: [
      //   { msg: "體重過輕", type: "date-light" },
      //   { msg: "體重正常", type: "date-normal" },
      //   { msg: "體重過重", type: "date-sfat" },
      //   { msg: "輕度肥胖", type: "date-mfat" },
      //   { msg: "中度肥胖", type: "date-lfat" },
      //   { msg: "重度肥胖", type: "date-xlfat" }
      // ],
      msg: {
        1: "體重過輕",
        2: "體重正常",
        3: "體重過重",
        4: "輕度肥胖",
        5: "中度肥胖",
        6: "重度肥胖"
      },
      type: {
        1: "date-light",
        2: "date-normal",
        3: "date-sfat",
        4: "date-mfat",
        5: "date-lfat",
        6: "date-xlfat"
      },
      record: [],
      visible: false,
      hideToolTip: 3000
    };
  },
  created() {
    // ** 將 localstorage 的 form 內容取出 **
    // if (!localStorage.getItem("record")) return;
    // this.record = JSON.parse(localStorage.getItem("record"));
  },
  methods: {
    getText(val) {
      // ** 判斷 BMI 區間並取得相對應 msg 跟 type 渲染到畫面上 **
      // if (!val) return;
      // let theCase = 0;
      // if (val < 18.5) {
      //   theCase = 0;
      // } else if (18.5 <= val && val < 24) {
      //   theCase = 1;
      // } else if (24 <= val && val < 27) {
      //   theCase = 2;
      // } else if (27 <= val && val < 30) {
      //   theCase = 3;
      // } else if (30 <= val && val < 35) {
      //   theCase = 4;
      // } else {
      //   theCase = 5;
      // }
      // for (let i = 0; i < 6; i++) {
      //   switch (theCase) {
      //     case i:
      //       this.form.msg = this.allMsg[i].msg;
      //       this.form.type = this.allMsg[i].type;
      //       break;
      //   }
      // }
    },

    onChange(val) {
      // ** 當身高或體重改變時，改變 bmi**
      // if (!this.form.weight) {
      //   this.form.bmi = 0;
      //   return;
      // }
      // let h = parseInt(this.userTall) / 100;
      // this.form.bmi = (parseInt(val) / (h * h)).toFixed(2) || 0;
    },

    onSave() {
      // ** 保存表單 **
      // 判斷表單未填值就不保存
      // const { form } = this;
      // const { weight, time, remark } = this.form;
      // if (
      //   (!localStorage["record"] && !weight && time === "" && remark === "") ||
      //   (!weight && time === "" && remark === "")
      // ) {
      //   this.$message({
      //     showClose: true,
      //     message: "請填寫內容",
      //     type: "warning"
      //   });
      //   return;
      // }
      // 判斷是否保存同樣日期的表單
      // let content = JSON.parse(JSON.stringify(form));
      // let theIndex = this.record.findIndex(x => x.date === content.date);
      // 未保存過的日期才把跳窗輸入的內容存到陣列 record[] 上，再利用 record[] 存入 local
      // if (theIndex < 0) {
      //   this.record.push(content);
      // } else {
      //   localStorage.removeItem("record");
      //   this.record.splice(theIndex, 1, content);
      // }
      // localStorage.setItem("record", JSON.stringify(this.record));
      // 將 form 表單內容透過父層傳給 weightRecord
      // this.$emit("saveWeight", this.form, this.index);
      // this.$message({
      //   showClose: true,
      //   message: "保存成功",
      //   type: "success"
      // });
    },

    open(index, date) {
      // ** 開啟表單跳窗 **
      this.index = index;
      this.visible = true;
      // ** 將 localstorage 的 form 內容取出 **
      // if (localStorage["allRecord"]) {
      //   const allRecord = JSON.parse(localStorage.getItem("allRecord"));
      //   for (let i = 0; i < allRecord.length; i++) {
      //     this.form = new UserRecord(allRecord[index].form);
      //   }
      // }
      // ** 覆寫日期 **
      //   this.form.date = date[index];
    },

    close() {
      // ** 關閉表單跳窗 **
      // this.visible = false;
      // setTimeout(() => {
      //   this.init();
      // }, 500);
    },

    init() {
      // ** 初始化表單 **
      //   const { form } = this;
      //   form.date = "";
      //   form.weight = 0;
      //   form.time = "";
      //   form.remark = "";
      //   form.bmi = 0;
      //   form.msg = "";
      //   form.time = "";
      //   this.index = 0;
    }
  },

  watch: {
    "form.weight": {
      handler(newVal) {
        this.onChange(newVal);
      }
    },
    userTall: {
      handler(newVal) {
        this.onChange(newVal);
      }
    },
    "form.bmi": {
      handler(newVal) {
        this.getText(newVal);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped></style>
