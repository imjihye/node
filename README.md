# express.js 서버와 react 시작하기
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
- abel-preset-es2015
- abel-preset-react

## babel 컴파일
es6문법으로 작성된 코드를 es5문법으로 컴파일합니다.
```
babel server -d build
```

## node 서버 띄우기
```
node build/main.js
```

## Directory
```
├── .babelrc                # babel 설정파일
├── build                   # 서버 빌드 디렉토리
├── package.json 
├── public                  # 클라이언트 디렉토리
│    ├── bundle.js          # 컴파일된 스크립트
│    └── index.html         # 메인 페이지
├── server                  # 서버 디렉토리 (ES6)
│    ├── main.js            # 서버 사이드 메인 스크립트
│    └── routes
│        └── posts.js       # 예제 라우터
├── src
│    ├── App.js             # App 컴포넌트
│    └── index.js           # 클라이언트 사이드 메인 스크립트
├── webpack.config.js       # webpack 설정파일
└── webpack.dev.config.js   # webpack-dev-server 를 위한 설정파일
```


(https://velopert.com/1492 글을 참조 하였습니다.)