<template>
  <!-- <form
    action="https://sms-magician-backend-keanq.run.goorm.io/sms/bulk"
    method="POST"
    enctype="multipart/form-data"
  > -->
  <form @submit="onSubmit" method="POST">
    <div>
      <label>보내시는 분</label>
      <input type="text" v-model="sender" name="sender" />
    </div>
    <div>
      <label>내 용</label>
      <textarea v-model="content" name="content" rows="4" cols="50"> </textarea>
    </div>
    <div>
      <label
        >File
        <input type="file" id="file" ref="file" @change="handleFileUpload()" />
      </label>
    </div>
    <button type="submit">보내기</button>
  </form>
</template>

<script>
// import axios from "axios";

export default {
  name: "SendSMS",
  data() {
    return {
      sender: "",
      content: "",
      file: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.sender) {
        alert("보내시는 분을 입력해 주세요");
        return;
      }

      if (!this.content) {
        alert("내용을 입력해 주세요");
        return;
      }

      if (!this.file) {
        alert("업로드하실 파일을 선택해 주세요");
        return;
      }

      // const sms = {
      //   sender: this.sender,
      //   content: this.content,
      //   // number: this.file,
      // };

      this.sendSMS();
    },
    async sendSMS() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("sender", this.sender);
      formData.append("content", this.content);

      const res = await fetch(
        "https://sms-magician-backend-keanq.run.goorm.io/sms/bulk",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            // if add 'content-type', server can't receive parameters
            // "content-type": "multipart/form-data",
          },
          body: formData,
        }
      );

      // // const data = await res.json();

      console.log(res.status);

      // axios
      //   .post(
      //     "https://sms-magician-backend-keanq.run.goorm.io/sms/bulk",
      //     // "/apiv1/bulk",
      //     formData,
      //     {
      //       headers: {
      //         "Content-Type": "multipart/form-data",
      //         "Access-Control-Allow-Origin": "*",
      //         "Access-Control-Allow-Headers":
      //           "Origin,Content-Type,X-Requested-With,Accept,Authorization",
      //         "Access-Control-Allow-Methods":
      //           "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      //       },
      //       mode: "no-cors",
      //     }
      //   )
      //   .then(function () {
      //     console.log("SUCCESS!!");
      //   })
      //   .catch(function () {
      //     console.log("FAILURE!!");
      //   });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>