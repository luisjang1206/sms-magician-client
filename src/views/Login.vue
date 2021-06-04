<template>
	<form @submit="onSubmit">
		<div>
			<input type="email" v-model="email" name="email" placeholder="이메일" /><br>
			<input type="password" v-model="pw" name="pw" placeholder="비밀번호" />
		</div>
		<input type="submit" value="로그인" />
	</form>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				email: '',
				pw: ''
			}
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();
				
				if (!this.email) {
					alert('이메일을 입력해 주세요');
					return
				}
				
				if (!this.pw) {
					alert('비밀번호를 입력해 주세요');
					return
				}
				
				const credential = {
					email: this.email,
					pw: this.pw,
				}
				
				this.$emit('login', credential)
			}
		}
	}
</script>