---
title: MediaPipe + Arduino 기반 손동작 IoT 제어 시스템
summary: 손가락 개수를 인식해 LED, 모터, 부저를 손대지 않고 제어하는 시스템
period: 2026.03 ~ 2026.04
startDate: 2026-03-25
team: 2인 팀 (김재표, 오성원)
role: Arduino 핵심 기술 개발, 하드웨어 제작, MediaPipe Hand Landmarker 개발
tags: [Python, MediaPipe, OpenCV, Raspberry Pi, Bluetooth, Arduino Uno]
badge: 2026 창의융합 프로젝트
---

## 개요

라즈베리파이 카메라로 손을 찍고 MediaPipe가 찾은 21개 손 랜드마크로 펼친 손가락 개수를 셉니다. 그 숫자를 블루투스로 Arduino에 보내면 Arduino가 LED, 서보모터(선풍기 역할), 부저를 켜고 끕니다.

| 손가락 | 동작 |
| --- | --- |
| 1개 | LED 켜기 |
| 2개 | 선풍기(서보) 작동 |
| 3개 | 경보 부저 |
| 5개 | 전체 정지 |

## 시스템 구조

```
카메라 → Raspberry Pi (MediaPipe 손 랜드마크 → 손가락 개수)
       → Bluetooth 시리얼 → Arduino Uno → LED · 서보 · 부저 · LCD
```

## 내가 맡은 일

- MediaPipe Hand Landmarker로 손가락 개수를 세는 Python 코드
- Arduino 제어 코드와 회로·하드웨어 제작

## 기술적 고민과 해결

- **손가락 판정:** 네 손가락은 끝 마디가 중간 마디보다 위에 있으면 편 것으로 봤습니다. 엄지는 위아래가 아니라 옆으로 펴지기 때문에, 왼손·오른손 정보를 받아 좌우 위치로 따로 판정했습니다.
- **라즈베리파이 성능:** 한 손만 인식하도록 하고 신뢰도 기준을 0.7로 높여 처리량과 오인식을 함께 줄였습니다.
- **동시에 여러 일 하기:** `delay()`를 쓰면 그동안 블루투스 수신이 멈추기 때문에, `millis()` 타이머로 서보 왕복, LCD 갱신, 수신을 같은 루프에서 처리했습니다.
- **안전:** 손이 1초 이상 안 보이면 모든 장치를 끄도록 했습니다.

## 결과

- 손가락 1·2·3·5개 제스처로 장치 3종을 비접촉 제어
- 포스터 제작 및 발표
