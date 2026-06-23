// 중학교 1학년 수학 단원별 도입 자료 목록
// 새로운 자료를 만드셨다면 해당 단원의 대괄호 [ ] 안에 추가해 주세요.
// 양식: { title: "화면에 보일 이름", file: "파일경로.html" }

const mathData = {
  "1단원 소인수분해": [
    { title: "소수와 합성수 보드게임", file: "materials/unit1/primes.html" }
    // 새 자료 추가 예시:
    // { title: "거듭제곱의 비밀", file: "materials/unit1/power.html" }
  ],
  "2단원 정수와 유리수": [
    { title: "2.4레일바이크", file: "materials/unit2/2.4레일바이크.html" },
    { title: "2.5분배법칙", file: "materials/unit2/2.5분배법칙.html" }
  ],
  "3단원 문자의 사용과 식": [
    { title: "3.1곱셈생략", file: "materials/unit3/3.1곱셈생략.html" },
    { title: "3.3용어미로찾기", file: "materials/unit3/3.3용어미로찾기.html" }
  ],
  "4단원 좌표평면과 그래프": [
    { title: "4.1데카르트의 파리", file: "materials/unit4/4.1데카르트의 파리.html" }
  ],
  "5단원 기본 도형과 작도": [
    // 여기에 자료 추가
  ],
  "6단원 평면도형의 성질": [
    // 여기에 자료 추가
  ],
  "7단원 입체도형의 성질": [
    // 여기에 자료 추가
  ],
  "8단원 자료의 정리와 해석": [
    // 여기에 자료 추가
  ]
};

// 포털 웹사이트에서 이 데이터를 가져갈 수 있도록 설정
window.mathData = mathData;
