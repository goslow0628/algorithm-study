# [level 0] 배열 만들기 3 - 181895

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181895)

### 성능 요약

메모리: 41.9 MB, 시간: 0.96 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2026년 03월 15일 23:40:06

### 문제 설명

<p>정수 배열 <code>arr</code>와 2개의 구간이 담긴 배열 <code>intervals</code>가 주어집니다.</p>

<p><code>intervals</code>는 항상 <code>[[a1, b1], [a2, b2]]</code>의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.</p>

<p>이때 배열 <code>arr</code>의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>arr</code>의 길이 ≤ 100,000

<ul>
<li>1 ≤ <code>arr</code>의 원소 &lt; 100</li>
</ul></li>
<li>1 ≤ <code>a1</code> ≤ <code>b1</code> &lt; <code>arr</code>의 길이</li>
<li>1 ≤ <code>a2</code> ≤ <code>b2</code> &lt; <code>arr</code>의 길이</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>arr</th>
<th>intervals</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[1, 2, 3, 4, 5]</td>
<td>[[1, 3], [0, 4]]</td>
<td>[2, 3, 4, 1, 2, 3, 4, 5]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li>첫 번째 구간에 해당하는 배열은 [2, 3, 4] 입니다.</li>
<li>두 번째 구간에 해당하는 배열은 [1, 2, 3, 4, 5] 입니다.</li>
<li>따라서 이 두 배열을 앞뒤로 붙인 배열인 [2, 3, 4, 1, 2, 3, 4, 5]를 return 합니다.</li>
</ul>

---

### 풀이

문제를 보고 `intervals`에 들어 있는 두 구간을 각각 잘라서 앞뒤로 이어 붙이면 된다고 생각했다.  
구간은 닫힌 구간이므로 `slice()`를 사용할 때 끝 인덱스를 포함시키기 위해 `b + 1`로 잘랐다.  
이후 두 배열을 `concat()`으로 이어 붙여 결과를 만들었다.

### 소스 코드

```javascript
function solution(arr, intervals) {
  const a1 = intervals[0][0];
  const b1 = intervals[0][1];
  const a2 = intervals[1][0];
  const b2 = intervals[1][1];

  return arr.slice(a1, b1 + 1).concat(arr.slice(a2, b2 + 1));
}
```

---

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
