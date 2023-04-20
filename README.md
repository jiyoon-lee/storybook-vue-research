# 회사에 Storybook을 도입한다.

## 발단
사내에서 다양한 서비스 페이지가 존재한다.<br>
이번에 모든 서비스의 관리자 페이지의 톤앤매너를 맞추게 되었다.<br>
내가 제일 처음으로 변경작업을 시작했는데 너무 힘들었다.<br>

힘들었던 이유를 설명하겠다.
- vuetify를 사용중이나 디자인에 이 점이 고려하지 않아 대부분 커스텀해야했다.
- 각 서비스 페이지의 분위기는 같아졌을지 몰라도 UX가 각각 달라서 통일감이 느껴지지 않았다.
- 디자인팀이 디자인을 조금만 변경해도 각 서비스 페이지가 영향을 받았다.

이 때문에 공통 컴포넌트 프로젝트를 제안했다.
공통컴포넌트 프로젝트를 위해 필요한 항목
1. 사내 내부망에 레포지토리를 구축했다.
2. 명령어로 쉽게 컴포넌트를 설치하고 사용할 수 있도록 했다.
3. 모아놓은 공통컴포넌트를 쉽게 찾아보고 사용할 수 있도록 가이드 문서를 만들어야했다.<br>
   storybook을 도입하고자 한다.일단은 혼자만 결정한거다.<br>
   다음주 월요일에 중간 발표를 진행해서 storybook으로 결정될 수 있도록 팀원들을 설득할거다.<br>

## 발표
회의 목표:<br>
사내에 공통컴포넌트를 운영하고 관리할 수 있는 방향을 제시하고 그 방향이 맞는지 또 이외에 내가 놓친 부분이 있는지 함께 검토하고 업무를 분배한다.<br>
<br>
회의에서 내가 전달할 안건을 리스트업해보자.<br>

- [버전 호환]현재 사내에서는 vue2, vuetify2를 사용중이다. 최신 버전에서도 호환이 되도록 한다.
- [storybook 작성]컴포넌트를 사용하는 목적을 식별하고 목적을 충족하는 기능들을 제공하는지 확인한다.
   - 컴포넌트에 데이터를 주면 데이터를 표시한다.
   - 컴포넌트에서 액션이 발생하면 부모 컴포넌트에 전달한다.
   - computed, watch, lifecycle 등 vue 기능들을 사용할 수 있다.
   - 컴포넌트 리렌더링을 어떻게하는지
- [storybook 사용]공통 컴포넌트를 사용하고 배포하는 방법에 대해 시연한다.

- 공통 컴포넌트 운영 로직
  [사용]스토리북에서 원하는 컴포넌트를 찾는다. -> 사내 공통 레포지토리에서 pull받는다. -> storybook에서 소스코드를 copy해서 개발중인 소스코드에 paste한다.

## 발표때까지 못하겠지만 이후 진행해야할 것
  - 각 서비스 사이트에서 공통적으로 vue2와 vuetify2를 사용하긴 하지만 sass나 다른 라이브러리를 사용할지도 모른다. 다른 서비스들의 라이브러리를 취합해서 공통적으로 도입가능하도록 한다.
  - storybook 가이드 사이트를 호스팅해서 디자인팀도 볼 수 있게 한다.
  - storybook과 figma가 연동이 가능하다고 하는데 연동하므로써 얻을 수 있는 이점 리서치
  - storybook에서는 테스트 기능 등 다른 다양한 기능들을 제공한다. storybook의 숨은 다양한 좋은 기능들을 리서치하고 도입한다.
  
  
  230420(목): storybook에 vue2와 vuetify2를 사용해 버튼 컴포넌트를 올렸다.
  
  ===
  230421(금): [storybook 작성]을 완료한다.<br>
  230422(토): [storybook 사용]을 완성한다.<br>
  230423(일): [버전 호환]을 완성한다.<br>
  
  
  으흠....혹 할만한 더욱 설득력있게 하기위해서 이게 맞는지 잘 생각해보자
