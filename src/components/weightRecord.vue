<template>
  <el-container>
    <el-row type="flex" class="el-row" align="middle">
      <el-col :span="6">
        <p class="title">BMI 記錄（30日）</p>
      </el-col>
      <el-col
        v-for="(item, index) in recordRange"
        :key="index"
        :span="3"
        class="el-col"
      >
        <el-button
          :class="allRecord[index].form.type"
          type="text"
          @click="onDialog(index)"
          >{{ item }}</el-button
        >
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { UserRecord } from "../../utils/class";
export default {
  name: "weightRecord",
  props: ["userTall"],
  data() {
    return {
      startDay: new Date(),
      recordRange: [],
      allRecord: []
    };
  },
  created() {
    let { startDay, recordRange, allRecord } = this;
    // ** 取得 30 天日期，最後一天為今天 **
    let rangeStart = "";
    for (let i = 0; i < 30; i++) {
      startDay.setDate(startDay.getDate() - 29 + i);
      rangeStart = this.rangeText(startDay);
      recordRange.push(rangeStart);
      allRecord.push({
        date: rangeStart,
        form: {
          date: "",
          weight: 0,
          bmi: 0,
          msg: "",
          type: "recordBtn",
          time: "",
          remark: ""
        }
      });
      // allRecord[i].date = rangeStart; // 無效
      // this.$set(allRecord[i], 'date', rangeStart); // 無效
      startDay = new Date();
    }

    // ** 將 localstorage 的 form 內容取出 **
    if (localStorage["allRecord"]) {
      const oldRecord = JSON.parse(localStorage.getItem("allRecord"));
      for (let i = 0; i < oldRecord.length; i++) {
        this.allRecord[i].form = new UserRecord(oldRecord[i].form);
      }
    }
  },
  methods: {
    onSave(recordForm, index) {
      // ** 跳窗保存時，同步進行總內容保存 **
      this.allRecord[index].form = new UserRecord(recordForm);

      // 將資料存入 local
      localStorage.setItem("allRecord", JSON.stringify(this.allRecord));
      return;
    },

    onDialog(index) {
      // ** 開啟跳窗 **
      // 判斷有填寫身高才能開啟 BMI 紀錄
      // if (!this.userTall) {
      //   this.$message({
      //     showClose: true,
      //     message: "請先填寫身高",
      //     type: "warning"
      //   });
      //   // getWarnMsg("請先填寫身高", "warning"); // 引用失敗
      //   return;
      // }

      // 將"日期區間"及"被點擊的按鈕索引值"傳到外層
      this.$emit("openDialog", index, this.recordRange);
    },

    rangeText(x) {
      // ** 取得日期格式 **
      const [, , , , , m1, m2, , d1, d2] = x.toISOString();
      let recordDay = `${m1}${m2} / ${d1}${d2}`;
      return recordDay;
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../assets/common/variables'
.title
  width: 200px
  margin: auto
  border: 3px solid $primary_bg
  border-radius: 30px

.el-row
  width: 60%
</style>
