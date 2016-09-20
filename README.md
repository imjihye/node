# React App on Express Server

## 모듈 설치
```
npm install
```
- express
- react
- react-dom
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- react-hot-loader
- webpack
- webpack-dev-server

## babel 컴파일
es6문법으로 작성된 코드를 es5문법으로 컴파일한다.
```
babel server -d build
```

## node 서버 띄우기
```
node build/main.js
```

## 테스트
```
http://localshot:3000/
```

## npm으로 한방에 실행하기 (npm scripts)
```
npm run clean
npm run build
npm run start or npm run development
```

## 환경에 따라 실행하기
- 프러덕션 환경 : npm run start (http://localhost:3000)
- 개발 환경 : npm run development (http://localhost:8123)

참고) 개발환경은 react-hot-loader를 사용하여 변경사항에 실시간으로 적용되도록 하였다.


## Directory
```
├── .babelrc                # babel 설정파일
├── build                   # babel로 컴파일된 서버 빌드 디렉토리
├── package.json 
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # webpack으로 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server                  # 서버 디렉토리 (ES6문법)
│    ├── main.js            # 서버 사이드 메인 스크립트
│    └── routes
│        └── posts.js       # 라우터
├── src
│    ├── App.js             # App 컴포넌트
│    └── index.js           # 클라이언트 사이드 메인 스크립트
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server를 위한 설정파일(개발 전용)
```


(https://velopert.com/1492 글을 참조 하였습니다.)