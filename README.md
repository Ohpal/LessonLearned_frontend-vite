# Micro frontend by [UAngel + RIMS]

## Node Version Check

```sh
nvm -v
nvm install 20.18.3
nvm use 20.18.3
```

Reference : https://funveloper.tistory.com/203

## Delete package-lock.json or node_modules

```
node_modules 폴더와 package-lock.json 파일을 삭제합니다.
재설치 시 손상된 버전을 사용하지 않아 오류가 발생하지 않습니다.
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

## Compiles and minifies for production

```
npm run build
```

## Build Server Check

```sh
cd deploy
node server.js
```

```
에러 발생 시 Delete package-lock.json or node_modules
npm install
node server.js
```

## Server.js Port Change

```
RIMS Port : 4500
Xinnos Port : 4600
Begas Port : 4700
KDT Port : 4800
MRC Port : 4900
```

## REFERENCE

```
https://www.jaenung.net/tree/550
https://jaehan.blog/posts/frontend/%EC%8C%A9-npm%EC%9C%BC%EB%A1%9C-MFE-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-(1)-:-%EA%B0%9C%EB%85%90
https://blog.gangnamunni.com/post/saas-microfrontends/
```
