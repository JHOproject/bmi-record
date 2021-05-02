export class UserRecord {
  constructor(data) {
    if (!data) return;
    const {
      date,
      weight,
      bmi,
      msg,
      type,
      time,
      remark
    } = data;
    this.date= date;
    this.weight= weight;
    this.bmi= bmi;
    this.msg =msg;
    this.type =type;
    this.time= time;
    this.remark = remark;
  }
}

