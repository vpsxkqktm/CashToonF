# 목표

앱 개발과 원할한 유지 보수를 위해 조금 더 사람이 알아들을 수 있도록 코드를 수정, 정리하는 프로젝트.

# 수정 리스트 (프론트 엔드)

- [✅] 앱 로딩
- [✅] 로고, 폰트 이미지 preload
- [] 네비게이션 구조 개선
- [] global styles
- [] dark mode
- [] 기존 코드 재작성 및 재구현
- [✅] react hook form 도입
- [✅] 임시 로그인 화면
- [✅] asyncstorage
- [✅] backend 연결
- [✅] Apollo Client
- [] 파일 구조 개선
- [] 기능별 주석 추가

# 개선 사항

1. 이제 더이상 `로그인 < - > 홈` 화면 전환을 context를 통한 다중 상속으로 처리하지 않습니다. apollo 클라이언트를 통해 변수를 global로 처리하여 어디서든지 로그인 여부를 체크할 수 있습니다!

2.

# Q&A

Q: 앱 배경이 왜 검은색?  
A: 밤에 작업하니까 눈 아파서... 이건 나중에 **라이트/다크모드 기능** 추가로 개선할 예정

Q: 로그인 어떻게 합니까?  
A: 백엔드와 프론트엔드를 연결해서 회원가입 -> 로그인 절차를 거치면 됩니다. https://github.com/vpsxkqktm/cashToonB

Q: 백엔드 코드 언제 이해하고 로그인 합니까 홈으로 그냥 보내주세요

```javascript
// App.js를 보면 isLoggedIn ? 으로 로그인/로그아웃 네비게이션을 분기하고 있습니다.

<ApolloProvider client={client}>
  <NavigationContainer>
    {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
  </NavigationContainer>
</ApolloProvider>
```

```javascript
// isLoggedIn은 useReactiveVar(isLoggedInVar)로 true, false를 판단하고 있습니다.
// isLoggedInVar가 있는 apollo.js로 가면

import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false); // 기본값이 false. 즉, 초기 상태는 로그아웃 이걸 true로 바꾸면 강제로 로그인이 가능합니다.
```

Q: 소셜 로그인 ㅇㄷ?  
A: 소셜 로그인 도입하려면 카카오/네이버에 앱 등록하고 oauth 2.0 인증 받고.. 복잡한 절차가 존재하기 때문에 임시적으로 자체 로그인 기능으로 로그인 < - > 홈 화면을 이동할 수 있도록 함

Q: 기존에 작업해놨던 스택 일부가 사라졌습니다
A: 기능 없이 빈 페이지로 존재하던 것들은 일단 옮기지 않았습니다
