<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'gettime' }">Get Time</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
};
</script>
