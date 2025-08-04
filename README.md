# UBCN QR Generator

## 📋 개요
`ubcn-qr-generater`는 **사내 QR 코드 생성**을 위한 프로젝트입니다.  
최초 요구사항은 **Welpoint(사원카드)** 시스템의 카드번호를 기반으로 한 QR 코드 발급이며,  
향후 확장성을 고려하여 사내 전반에 활용 가능한 **범용 QR 코드 생성기**의 계획을 염두해두고 있습니다.


## 📌특징
본 프로젝트는 **백엔드 서버 없이** 동작하며,  
**GET URL 파라미터**를 기반으로 QR 코드를 생성합니다.  
생성된 QR 코드는 브라우저에서 바로 다운로드할 수 있습니다.

**GET URL 파라미터**의 생성은 해당 프로젝트의 기능을 필요로 하는 각 서비스에서 구현을 진행합니다.


## 🚀 기술 스택
- **프론트엔드**
    - React (TypeScript)
    - Tailwind CSS


## 🏗️ 빌드 및 배포
- **배포는 GitHub Pages를 통해 진행하고 있습니다.**
- 아래 명령어를 통해 빌드 및 즉시 배포가 가능합니다.
```bash
# 프로젝트 빌드 및 GitHub Pages 배포 
# gh-pages Branch로 빌드 및 배포가 진행됩니다.
npm run deploy
```


## 📚사용 라이브러리
- **QR 코드 생성**
    - [qrcode](https://www.npmjs.com/package/qrcode)