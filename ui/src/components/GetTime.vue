<template>
	<div>
		<h1>Get Time</h1>
		<h2>Current time: {{ time }}</h2>
	</div>
</template>
<script>
export default {
	sockets: {
		time(m) {
			this.time = m;
		},
	},
	data() {
		return {
			time: 'initial time',
		};
	},
};
</script>
