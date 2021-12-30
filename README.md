## Before Start
디자인은 정말 못하는걸로 회사에 유명하므로, 디자인은 빠르게 구글링하겠다고 다짐했다.
디자인은 아래 사이트에서 영감을 얻었다.
https://superdevresources.com/html-resume-templates/

이중 가장 내 역량을 보여줄 거라 생각된 Neu 씨의 포토폴리오를 대부분 참고하기로했다.

## 1. Outline
일단, 가장 큰 아웃라인으로 메뉴를 만들었다.
단촐하게, 이력서의 시작을 알리고, 나를 간략하게 설명하는 home, 나의 학력 등등 전반을 설명할 info,
내 동아리 경험, 인턴 경험, 그리고 1년의 front-end engineer로서의 경력을 담을 experience,
그리고 github을 통해 내가 코딩 테스트를 위해 준비한 노력을 적을 예정이다.

## 2. Home (12/30/2021 -  )
가장 먼저 welocome 아이콘과 앞서 말한 메뉴들을 이을 메뉴들을 만들었다.
사실 welcome 이미지 불러오는 것부터 고역이었다. 보통 require를 불러 img 태그안에 넣어주면 끝나는데 잘 되지않았다.
따라서, 원하는 svg 사진 파일을 import 시켜 svg 태그안에 넣으니 성공. 이 쉬운 일을 1시간이나 잡아먹었다. 휴.

import  inconIMG from '../shared/images/welcomIcon.png'  
&nbsp;
< img src={inconIMG} width={50} height={40} />  &nbsp;
