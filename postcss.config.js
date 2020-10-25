module.exports = {
  plugins: [
    require("postcss-import"),
    require('postcss-apply'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: "autoplace",
        flexbox: false,
      },
      preserve: true, //Valor por defecto de "true".Se asemeja a customProperties
	//cambiar a false para notar el cambio
    }),
    require("css-mqpacker"),
    require("postcss-custom-properties"),
    require('cssnano')({
      preset: 'default',
  })
  ],
};