<template>
  <SendBulkSMS />
  <router-link to="/dashboard">한건문자</router-link>
</template>

<script>
import SendBulkSMS from "../components/SendBulkSMS";

export default {
  name: "Bulk",
  components: {
    SendBulkSMS,
  },
};
</script>