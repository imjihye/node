# React App on Express Server
## node project 생성
```
npm init
```

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

## 한방에 실행하기
```
npm run
```

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
└── webpack.dev.config.js   # webpack-dev-server를 위한 설정파일
```


(https://velopert.com/1492 글을 참조 하였습니다.)