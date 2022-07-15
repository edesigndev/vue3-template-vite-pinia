# Vue 3 + Vite + Pinia + Vue Router

Template basico de Vue3 con Vite, se le agrego un ejemplo basico de Pinia(Vuex 5)

## Configuración de ESLint y Prettier con VS Code para Vue 3

Desactivar la validación de la plantilla de Vetur y dejar que ESLint la maneje según las reglas del .eslintrc.js archivo.

// Code/User/settings.json
```Javascript
"vetur.validation.template": false
```
Configuración de automatización para que Prettier vuelva a formatear el código o para que ESLint corrija automáticamente los problemas reparables.
// Code/User/settings.json
```Javascript
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

También debemos asegurarnos de que nuestros archivos vue y js estén mejor configurados como el formateador predeterminado con la siguiente configuración:
// Code/User/settings.json
```Javascript
"[vue]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
