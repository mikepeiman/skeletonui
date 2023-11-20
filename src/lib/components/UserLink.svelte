<script>
	export let icon = 'default';
	export let url = 'foo';
	export let title = 'some cool title';
	import 'iconify-icon';
</script>

<a
	href={url}
	class="stack w-full  text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"
>
	<!-- <img src={`$lib/assets/icons/${icon}.png`} alt={icon} width="32" height="32" class="w-8" /> -->
	<iconify-icon icon="{icon}" style="color: #ba3329; font-size: 48px" />
	<span class="text-lg text-white font-bold">{title}</span>
</a>
