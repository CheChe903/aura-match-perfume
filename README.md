# 향수 관리 및 향수 추천 서비스

배포 URL: https://aura-match-perfume.lovable.app/

```
# 향수 추천 애플리케이션 기획서

## 문제 정의

향수를 선택할 때 개인의 취향과 상황에 맞는 제품을 찾기 어려움. 많은 향수 브랜드와 종류가 있지만, 자신에게 맞는 향수를 찾거나 보유한 향수 중에서 상황에 적합한 것을 선택하는 것이 어려움. (실제 향수 애호가들이 겪는 선택의 어려움)

## 핵심 기능

1. **설문조사 기반 향수 추천**
    - 개인 취향 분석
    - 라이프스타일 파악
    - 선호 향조 분석
    - 맞춤형 향수 추천
2. **일정 기반 향수 추천**
    - 보유 향수 등록 관리
    - 오늘의 일정 입력
    - 상황별 최적 향수 추천
    - 날씨/계절 고려 추천
3. **향수 컬렉션 관리**
    - 보유 향수 등록
    - 사용 기록 관리
    - 향수별 평가 및 메모
4. **향수 커뮤니티**
    - 사용 후기 공유
    - 추천 및 정보 교환

## 페르소나

### 향수 초보자

**이름:** 이소영  
**나이:** 24세  
**역할:** 직장인 (신입사원)  
**목표:** 향수에 대해 잘 모르지만 자신에게 맞는 향수를 찾고 싶다.  
**니즈:** 설문조사를 통한 개인 맞춤 향수 추천, 향수 기초 정보 제공

### 향수 애호가

**이름:** 박민준  
**나이:** 29세  
**역할:** 마케팅 매니저  
**목표:** 다양한 향수를 보유하고 있어 상황에 맞는 향수를 효과적으로 선택하고 싶다.  
**니즈:** 일정 기반 향수 추천, 향수 컬렉션 관리 기능

### 향수 컬렉터

**이름:** 최하늘  
**나이:** 32세  
**역할:** 패션 에디터  
**목표:** 많은 향수를 소장하고 있으며, 체계적으로 관리하고 다른 사람들과 정보를 공유하고 싶다.  
**니즈:** 향수 컬렉션 관리, 커뮤니티 기능, 상세한 향수 정보

## 사용자 시나리오 및 스토리

### 상황 1: 처음으로 향수를 구매하고 싶음

**사용자 시나리오:**

1. 애플리케이션에서 '향수 추천받기' 메뉴 접속
2. '설문조사 시작하기' 버튼 클릭
3. 개인 취향, 라이프스타일, 선호 향조에 대한 질문 답변
4. 분석 결과에 따른 맞춤형 향수 리스트 확인
5. 추천 향수의 상세 정보 및 구매처 정보 확인

**사용자 스토리:** 향수 초보자로서, 저는 제가 어떤 향수를 좋아할지 모르겠습니다. 설문조사를 통해 제 취향을 분석하고, 그에 맞는 향수를 추천받아 향수 선택에 대한 부담을 줄이고 싶습니다.

### 상황 2: 오늘 일정에 맞는 향수를 선택하고 싶음

**사용자 시나리오:**

1. 애플리케이션에서 '오늘의 향수' 메뉴 접속
2. '일정 추가하기' 버튼 클릭
3. 오늘의 주요 일정 입력 (회사 프레젠테이션, 저녁 데이트 등)
4. 현재 날씨 및 기분 상태 선택
5. 보유 향수 중에서 가장 적합한 향수 추천 확인
6. 추천 이유 및 사용법 팁 확인

**사용자 스토리:** 향수 애호가로서, 저는 여러 향수를 보유하고 있지만 매일 상황에 맞는 향수를 선택하기 어려워합니다. 오늘의 일정과 날씨를 고려해서 가장 적합한 향수를 추천받아 더 효과적으로 향수를 활용하고 싶습니다.

### 상황 3: 향수 정보를 다른 사람들과 공유하고 싶음

**사용자 시나리오:**

1. 애플리케이션에서 '커뮤니티' 메뉴 접속
2. '후기 작성하기' 버튼 클릭
3. 사용한 향수와 평점, 상세 후기 작성
4. 다른 사용자들의 후기 및 추천 확인
5. 관심 있는 향수에 대한 질문 작성 및 답변 확인

**사용자 스토리:** 향수 컬렉터로서, 저는 다양한 향수 경험을 가지고 있습니다. 제 경험을 다른 사람들과 공유하고, 새로운 향수 정보도 얻어서 더 풍부한 향수 라이프를 즐기고 싶습니다.

## 핵심 가치 제안

1. **개인화된 추천**: 설문조사 기반으로 개인의 취향과 라이프스타일에 맞는 향수 추천
2. **상황별 최적화**: 일정과 날씨를 고려한 스마트한 향수 선택 도우미
3. **체계적 관리**: 보유 향수를 효율적으로 관리하고 활용도 극대화
4. **커뮤니티 기반 정보 공유**: 향수 애호가들 간의 정보 교환 및 경험 공유

## 주요 기능 상세

### 1. 설문조사 기반 향수 추천

- **개인 정보**: 성별, 연령대, 직업
- **라이프스타일**: 활동 패턴, 선호 장소, 패션 스타일
- **향수 경험**: 기존 사용 경험, 선호/비선호 향수
- **향조 선호도**: 플로럴, 우디, 프레시, 오리엔탈 등 8가지 향조별 선호도 테스트
- **추천 결과**: 상위 5개 향수 추천 및 상세 설명

### 2. 일정 기반 향수 추천 (오늘의 향수)

- **보유 향수 등록**: 브랜드, 향수명, 향조, 개인 평점 등록
- **일정 입력**: 업무 미팅, 데이트, 운동, 파티 등 카테고리별 일정 선택
- **환경 요소**: 날씨, 계절, 시간대 자동 반영
- **추천 알고리즘**: 일정 유형 + 날씨 + 향수 특성을 매칭하여 최적 향수 제안
- **사용 기록**: 선택한 향수와 만족도 기록

### 3. 향수 컬렉션 관리

- **향수 등록**: 사진, 브랜드, 향수명, 구매일, 가격 등
- **사용 기록**: 언제, 어떤 상황에서 사용했는지 기록
- **평가 시스템**: 5점 만점 평가 및 개인 메모
- **통계 기능**: 가장 많이 사용한 향수, 향조별 선호도 분석

### 4. 향수 정보 및 커뮤니티

- **향수 데이터베이스**: 주요 브랜드 향수 정보 및 향조 분석
- **사용자 리뷰**: 평점 및 상세 후기 작성/조회
- **Q&A 게시판**: 향수 관련 질문 및 답변
- **추천 게시판**: 상황별 향수 추천 요청 및 제안

## 구현 범위

- **실제 AI 연동 없이 목업(Mocking) 데이터로 구현**
- **설문조사의 UI/UX와 기본적인 추천 로직을 보여주는 프로토타입 수준**
- **사용자 입력에 대한 미리 정의된 추천 패턴 활용**
- **일정 입력과 향수 매칭 알고리즘의 기본 흐름 시연**
- **향수 컬렉션 관리 기능의 CRUD 기본 기능**
- **커뮤니티 기능은 정적 데이터로 UI/UX 중심 구현**

```








# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/29de7205-21dd-43e4-b4f5-3a8ecd951f3c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/29de7205-21dd-43e4-b4f5-3a8ecd951f3c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/29de7205-21dd-43e4-b4f5-3a8ecd951f3c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
