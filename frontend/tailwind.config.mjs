export default {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  safelist: [
    'text-center',
    'text-right',
    /* Add your classes coming from typo3 here */
  ]
}