# Reusable component for undefinedist
base on pluralsight tutorial and styled-components with rebass


## generateComponentData.js
### fs and path
node에서 딸려 오는거 file system과 path에 사용

### chalk
command line out 색깔 입히기

## react-docgen
coponenet를 보고 metadata를 빼오는 작업을 하는 library

## chokidar
watch file run function in a cross platform way

1. example file path, component path 그리고 결과물 데이터 path설정해놓기
2. enableWatchMode -> chokidar로 example, component path가 바뀌는지보고
   generate하는거임.
3. generate -> component아래에 있는 directories을 가져오고 getComponentData로
   데이터를 가져온다.
4. getComponentData -> file읽고 content를 가져오고 react-docgen의 parse로
   metadata 가져온다. getExampleData로 example데이터도 가져온다.
5. getExampleData -> 위에꺼랑 비슷하다.

## npm-run-all

## highlight.js


