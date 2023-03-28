<template>
  <!--
		Seeing type errors on the word `class`?
		This unfortunately happens because @types/react's JSX definitions leak into every file due to being declared globally.
		There's currently no way to prevent this when using both Vue and React with TypeScript in the same project.
		You can read more about this issue here: https://github.com/johnsoncodehk/volar/discussions/592
	-->
  <div>
    <div
      class="bg-green-400 p-4 rounded-lg flex flex-col items-center justify-center"
    >
      <h2 class="text-2xl mb-4">Vue Component</h2>
      <div class="flex flex-row">
        <button class="bg-white rounded-md w-6 mr-3" @click="subtract()">
          -
        </button>
        <div class="text-2xl font-bold">{{ $count }}</div>
        <button class="bg-white rounded-md w-6 ml-3" @click="add()">+</button>
      </div>
			<div class="counter-message mt-5 mb-2">
				<slot />
			</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { counter } from '@stores/demoStore';
import { useStore } from '@nanostores/vue';

const $count = useStore(counter);
const add = () => (counter.set(JSON.stringify(parseInt(counter.get()) + 1)));
const subtract = () => (counter.set(JSON.stringify(parseInt(counter.get()) - 1)));
</script>
