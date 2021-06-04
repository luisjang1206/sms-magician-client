<template>
  <SendSMS />
  <router-link to="/bulk">대량문자</router-link>
</template>

<script>
import SendSMS from "../components/SendSMS";

export default {
  name: "Dashboard",
  components: {
    SendSMS,
  },
};
</script>