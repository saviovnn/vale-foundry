# 🚀 Deploy no GitHub Pages

## Passo a Passo

### 1. **Ajustar o nome do repositório**
No arquivo `vite.config.js`, substitua `'ValeFoundryLP'` pelo nome do seu repositório:

```js
base: '/SEU-REPOSITORIO-AQUI/',
```

**Exemplo:** Se seu repo é `https://github.com/usuario/meu-site`, use:
```js
base: '/meu-site/',
```

Se você quer usar um domínio personalizado ou hospedar na raiz (`usuario.github.io`), use:
```js
base: '/',
```

### 2. **Fazer o push para o GitHub**

```bash
git add .
git commit -m "feat: adiciona configuração para GitHub Pages"
git push origin main
```

### 3. **Configurar GitHub Pages no repositório**

1. Vá ao repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione: **GitHub Actions**
5. Pronto! O deploy vai acontecer automaticamente

### 4. **Acompanhar o deploy**

1. Vá na aba **Actions** do repositório
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde alguns minutos até completar
4. O site estará disponível em: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

## ⚙️ Como funciona

- O arquivo `.github/workflows/deploy.yml` contém o workflow do GitHub Actions
- Sempre que você fizer push para a branch `main`, o site é automaticamente reconstruído e publicado
- O build é feito com `npm run build` e o resultado vai para a pasta `dist`
- O GitHub Actions faz o upload e deploy automático

## 🛠️ Comandos úteis

```bash
# Testar o build localmente
npm run build

# Visualizar o build localmente
npm run preview
```

## 📝 Nota importante

Certifique-se de que o repositório seja **público** ou você tenha **GitHub Pages habilitado no plano pago** para repositórios privados.

