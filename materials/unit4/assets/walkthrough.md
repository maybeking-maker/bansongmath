# 📐 중학교 1학년 수학 도입 자료실 (V2) 사용 설명서

요청하신 **좌측 목차(사이드바) + 우측 실행 화면(Iframe)** 구조의 중학교 1학년 수학 전용 포털 사이트 구축이 완료되었습니다.

## 📂 새로운 폴더 구조

작업된 전체 프로젝트는 `math-portal-v2` 폴더 안에 저장되었습니다.

- [math-portal-v2/](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/)
  - [index.html](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/index.html) - 실행기 (이 파일을 열면 사이트가 켜집니다.)
  - [style.css](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/style.css) - 사이드바 및 뷰어 디자인
  - [data.js](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/data.js) - 1~8단원의 목차 데이터 설정
  - [materials/](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/materials/)
    - `unit1/` ~ `unit8/` (각 단원별로 자료를 보관할 폴더)
      - [primes.html](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/materials/unit1/primes.html) (1단원 테스트용 샘플 자료)

---

## 🚀 앞으로 자료를 추가하는 방법 (2단계)

학생들에게 새로운 자료를 보여주고 싶을 때는 다음과 같이 진행하시면 됩니다.

### Step 1. HTML 파일을 단원 폴더에 저장하기
예를 들어, "4단원 좌표평면" 자료를 새로 만드셨다면 `graph.html` 파일을 `materials/unit4/` 폴더 안에 복사하여 넣습니다.

### Step 2. `data.js` 파일에 등록하기
[data.js](file:///C:/Users/USER/.gemini/antigravity/scratch/math-portal-v2/data.js) 파일을 메모장이나 코드 에디터로 엽니다.  
추가하고 싶은 단원의 대괄호 `[ ]` 안쪽에 아래와 같은 형식으로 한 줄 적어주시면 됩니다.

```javascript
const mathData = {
  // ... 생략 ...
  "4단원 좌표평면과 그래프": [
    // 아래와 같이 한 줄을 추가합니다.
    { title: "보물찾기 좌표 게임", file: "materials/unit4/graph.html" }
  ],
  // ... 생략 ...
};
```
*주의사항: 한 단원 안에 여러 개의 자료를 넣으실 때는, 항목과 항목 사이에 쉼표(`,`)를 꼭 붙여주세요!*

---

## 💻 작동 확인해보기

1. 파일 탐색기를 열어 `C:\Users\USER\.gemini\antigravity\scratch\math-portal-v2\` 폴더로 이동합니다.
2. `index.html` 파일을 더블클릭하여 웹 브라우저로 엽니다.
3. 화면 왼쪽 사이드바에서 **1단원 소인수분해**를 클릭합니다.
4. 아래에 나타나는 **소수와 합성수 보드게임**을 클릭하면, 우측 화면에 즉시 게임이 실행되는 것을 보실 수 있습니다.

> [!TIP]
> 이제 이 `math-portal-v2` 폴더 전체를 이전에 설명해 드린 **Netlify** 등의 무료 호스팅에 업로드하시면 학생들도 스마트폰이나 태블릿으로 목차를 누르며 자료를 볼 수 있습니다!
