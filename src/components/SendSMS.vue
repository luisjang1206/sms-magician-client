<template>
  <form @submit="onSubmit" method="POST">
    <div>
      <label>보내시는 분</label>
      <input type="text" v-model="pender" name="sender" />
    </div>
    <div>
      <label>휴대폰 번호</label>
      <input type="number" v-model="number" name="number" />
    </div>
    <div>
      <label>내 용</label>
      <textarea v-model="content" name="content" rons="4" tols="50"> </textarea>
    </div>
    <button type="submit">보내기</button>
  </form>
</template>

<script>
export default {
  name: "SendSMS",
  data() {
    return {
      sender: "",
      // const res = await fetch(
      //   "https://sms-magician-backend-keanq.run.goorm.io/sms/"
      // );
      number: "",
      content: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.sender) {
        alert("보내시는 분을 입력해 주세요");
        return;
      }

      if (!this.number) {
        alert("휴대폰 번호를 입력해 주세요");
        return;
      }

      if (!this.content) {
        alert("내용을 입력해 주세요");
        return;
      }

      const sms = {
        sender: this.sender,
        number: this.number,
        content: this.content,
      };

      this.sendSMS(sms);
    },
    async sendSMS(sms) {
      const res = await fetch(
        "https://sms-magician-backend-keanq.run.goorm.io/sms/single",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(sms),
        }
      );

      // const data = await res.json();

      console.log(res.status);
    },
  },
};
</script>