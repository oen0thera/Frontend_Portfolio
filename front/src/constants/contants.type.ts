import { CareerItemProps } from "@/type/Career/CareerItem.type";
import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import { TechStackEnum } from "@/type/Skills/SkillsItem.type";

export const careers: CareerItemProps[] = [
  {
    company: "㈜ 이모틱에이아이 (Emotic AI Co., Ltd.)",
    position: "수석연구원 · 연구전담요원 / Full Stack Developer",
    period: "2026.03 - 2026.10",
    description: `이모틱에이아이에서 젠잇 서비스 개발팀으로 매주 태스크 단위 개발 및 유지보수를 담당하고, 연구전담요원으로서 엔터테인먼트 분야 AI 모델 연구를 수행했습니다. 클로드 코드 기반 하네스 엔지니어링 및 MySQL Workbench를 활용해 AI 채팅 라이브 서비스 풀스택 개발, 데이터 모델 재구조화, 채팅 수·실제 유료 재화 기준 정산 시스템, Google Analytics 기반 유입 모니터링, 대규모 DB 인덱싱·백필, 프론트·반응형 페이지 개발 등을 진행했습니다.

• AI 장기기억 데이터 구조 개편
  - JSON 기반 통합 구조에서 이벤트-상세 이벤트-이력-장기기억의 계층화된 이벤트 기반 구조로 재설계하고, V1→V2 마이그레이션 및 누락 데이터 보완 스크립트를 구현했습니다.

• 정산 시스템
  - 작품·모델별로 실제 결제 금액 기준 정산 시스템을 구축하고, 정산 템플릿-모델-이력 구조와 관리자·제작자 페이지를 E2E로 통합 구현했습니다.
  - 정산 동의 기록 및 첨부 서류를 암호화하여 관리자 페이지에서만 복호화할 수 있도록 보안을 강화했습니다.

• 광고·유입 추적
  - Google Ads·Analytics 기반 광고 유입·전환 파이프라인을 유지보수하고, wbraid 식별자 길이 확장, 프로모션 페이지 URL 정리, 광고 채널 분류, 중복 발송 방지 등을 처리했습니다.

• 이미지 필터링
  - 잘못 출력된 이미지를 AI로 판단하여 프론트에서 필터링하는 E2E 구조를 구현해 불량 이미지 출력을 감소시켰습니다.

• 기타
  - 포럼 페이지, 공통 컴포넌트, 검색 정렬, 성인 작품 접근 제어, AI 모델 대시보드 통계 등 백엔드·프론트엔드 전반의 기능 개발과 유지보수를 진행했습니다.`,
  },
  {
    company: "모바일앱개발협동조합",
    position: "Frontend Developer · PM",
    period: "2023.12 - 2024.11",
    description: `외주·협업 프로젝트에서 PM 및 프론트엔드 파트장으로 활동했습니다.

• (주)애드원 프론트엔드 QA (2023.12 - 2024.02)
  - 간판업체-사용자 매칭·견적 서비스의 프론트엔드 QA를 담당했습니다.
  - Unity·WebGL 기반 3D 간판 견적, AI 간판 추천 기능이 있는 Next.js 프로젝트의 기능 검증 및 버그 수정을 진행했습니다.

• Webbizcraft (2024.05 - 2024.06)
  - 기업 맞춤형 홈페이지 자동생성·운영 서비스의 PM 및 프론트엔드 파트장으로 참여했습니다.
  - AWS 기반 클라우드 인프라에서 고객 입력으로 최대 3개 서브도메인 웹사이트를 자동 생성하는 기능을 개발했습니다.
  - Google Chart 기반 관리자 대시보드를 구현해 사용자 서브도메인의 트래픽·방문자·용량을 조회하고, 사이트 허용·파일 다운로드·트래픽 및 용량 제한 등을 관리할 수 있도록 했습니다.

• Commonplus (2024.07 - 2024.08)
  - 다중 플랫폼 쇼핑몰 통합 관리 서비스의 프론트엔드 파트장으로 참여했습니다.
  - 쿠팡·11번가·G마켓·옥션 등 외부 쇼핑몰 API 연동과 상품 등록·수정·삭제, 배송지·주문·반품·정산·고객문의 관리 기능을 개발했습니다.

• Bemo (배움의 모든것) (2024.09 - 2024.11)
  - 수강자-학원 견적 매칭 서비스의 PM 및 프론트엔드 파트장으로 참여했습니다.
  - 학원 검색(카테고리·위치·나이·이름), 상세정보·견적 요청, AI 취미 추천 기능을 개발했습니다.
  - Zustand·React Query 기반 상태 관리와 GitHub Actions 기반 CI/CD를 구축했습니다.`,
  },
];

export const projects: ProjectsItemProps[] = [
  {
    name: "Capstone Design - WIMF",
    preview: "/projects/WIMF.png",
    time: new Date(2022, 12).toISOString(),
    description: `국민대 2023년 캡스톤디자인 2인 방탈출 협동게임 프로젝트입니다. 유니티 기반으로 만든 2인협동 멀티플레이 방탈출 프로젝트로, 본인은 해당 프로젝트에서 게임 내부 퍼즐로직, 인벤토리, 미니맵, UI/UX부문을 맡아서 작업을 했으며, 본 프로젝트를 하면서 사용자 기반 UI/UX에 관심을 가지게 되어 프론트엔드로써의 개발 커리어를 시작하는 계기가 되었습니다.
해당 프로젝트는 캡스톤디자인 프로젝트에 제출하여 게임부문 인기상을 받았습니다.`,
    tech: [TechStackEnum.UNITY, TechStackEnum.C_S],
    links: { repository: "https://github.com/kookmin-sw/capstone-2023-20" },
    type: "default",
  },
  {
    name: "WellFitBeing",
    preview: "/projects/WellFitBeing.png",
    time: new Date(2023, 8).toISOString(),
    description: `국민대 소프트웨어 아키텍처 교내 팀 프로젝트 ― 사용자 지정 일정 기반 운동 및 식사 스케줄 추천 서비스입니다. 본 프로젝트는 Well-fit-Being이라는 사용자 지정된 일정 기반 운동 및 식사 스케줄 추천 서비스로 본인은 해당 프로젝트에서 프론트엔드 파트 개발 및 SOA 및 4tier-architecture의 전반적인 프로젝트 구조 설계를 맡았습니다.`,
    tech: [
      TechStackEnum.REACT,
      TechStackEnum.JAVASCRIPT,
      TechStackEnum.CSS,
      TechStackEnum.TAILWIND,
      TechStackEnum.MYSQL,
    ],
    links: { repository: "https://github.com/oen0thera/WellFitBeing" },
    type: "default",
  },
  {
    name: "Adone QA",
    preview: "/projects/Adone.png",
    time: new Date(2023, 12).toISOString(),
    description: `사용자 - 간판업체 견적 매칭 서비스 프론트엔드 QA 역할을 맡았습니다. 본 프로젝트에서 프론트엔드 파트의 일원으로써 구현된 부분 및 업데이트된 부분을 테스트후 오류/버그사항 발견시 수정 후 검수를 받는 방식으로 작업했습니다.`,
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.TYPESCRIPT,
      TechStackEnum.REDUX,
      TechStackEnum.WEBGL,
      TechStackEnum.JENKINS,
      TechStackEnum.VERCEL,
      TechStackEnum.GITHUB,
    ],
    type: "important",
  },
  {
    name: "Webbizcraft",
    preview: "/projects/Webbizcraft.png",
    time: new Date(2024, 5).toISOString(),
    description: ` 기업 고객 맞춤형 홈페이지 자동생성 및 운영 서비스로, 해당 프로젝트의 PM 및 프론트엔드 파트장으로써 활동했습니다. 본 프로젝트에서 전반적인 관리 및 일정 조율과 함께 메인페이지 및 관리자 페이지 제작 및 백엔드 측과의 협업을 통한 생성페이지 서브도메인 생성 구현을 맡았습니다.`,
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.JAVASCRIPT,
      TechStackEnum.CSS,
      TechStackEnum.JENKINS,
      TechStackEnum.GITHUB,
      TechStackEnum.MYSQL,
      TechStackEnum.STYLED_COMPONENTS,
    ],
    links: {
      repository:
        "https://github.com/oen0thera/Webbizcraft_Frontend_Only_Readme",
    },
    type: "important",
  },
  {
    name: "Commonplus",
    preview: "/projects/Commonplus.png",
    time: new Date(2024, 7).toISOString(),
    description: `다중 플랫폼 쇼팡몰 통합 관리 서비스로, 해당 프로젝트의 프론트엔드 파트장으로써 활동했습니다. 본 프로젝트에서 프론트엔드 파트 내부 인원의 태스크 관리 및 상품 카테고리 및 고시정보등 상품 정보에 필요한 모달을 비롯해 상품 조회/등록/수정/삭제를 구현했습니다.`,
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.TYPESCRIPT,
      TechStackEnum.CSS,
      TechStackEnum.JENKINS,
      TechStackEnum.GITHUB,
    ],
    type: "important",
  },
  {
    name: "Bemo",
    preview: "/projects/Bemo.png",
    time: new Date(2024, 9).toISOString(),
    description: `수강자 - 학원 견적 매칭 서비스로, 해당 프로젝트의 PM 및 프론트엔드 파트장으로써 활동했습니다. 본 프로젝트에서 전반적인 관리, 일정 조율과 함께 클라이언트 측 요청 반영등을 맡았으며, 추가적으로 프론트엔드 파트장으로써 파트 내부 인원의 태스크 관리 및 메인페이지 및 로그인/회원가입 페이지 개발, 작업사항 피드백등을 수행했습니다.`,
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.TYPESCRIPT,
      TechStackEnum.SASS,
      TechStackEnum.ZUSTAND,
      TechStackEnum.QUERY,
      TechStackEnum.MYSQL,
      TechStackEnum.GITHUB,
      TechStackEnum.GITHUB_ACTIONS,
    ],
    links: {},
    type: "important",
  },
  {
    name: "Frontend Portfolio",
    preview: "/projects/Portfolio.png",
    time: new Date(2024, 11).toISOString(),
    description:
      "현재 작업중인 포트폴리오 프로젝트입니다. 상기의 기술 스택을 사용했으며, Vercel을 통해 개발(develop) 브랜치와 메인(main) 브랜치를 구분 배포 중입니다. 진행중인 프로젝트임에 따라 추가적인 변동사항이 반영될 수 있습니다.",
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.TYPESCRIPT,
      TechStackEnum.SASS,
      TechStackEnum.REDUX,
      TechStackEnum.WEBGL,
    ],
    type: "important",
  },
  {
    name: "MOG(My Own Gym)",
    preview: "/projects/MOG.png",
    time: new Date(2025, 9).toISOString(),
    description:
      "사용자 맞춤 운동 스케줄러 서비스입니다. 상기의 기술 스택을 사용했으며, 프론트엔드는 Vercel로 배포, 백엔드는 OCI로 구축 후 배포했습니다. 현재는 OCI 백엔드가 비활성화된 상태입니다.",
    tech: [
      TechStackEnum.REACT,
      TechStackEnum.JAVASCRIPT,
      TechStackEnum.CSS,
      TechStackEnum.VERCEL,
      TechStackEnum.GITHUB,
      TechStackEnum.GITHUB_ACTIONS,
      TechStackEnum.JAVA,
      TechStackEnum.SPRING,
      TechStackEnum.ORACLE,
      TechStackEnum.DOCKER,
      TechStackEnum.OCI,
      TechStackEnum.NGINX,
      TechStackEnum.LINUX,
      TechStackEnum.PYTHON,
      TechStackEnum.FASTAPI,
    ],
    type: "important",
    links: {
      repository: "https://github.com/MOG-My-Own-Gym",
      portfolio:
        "https://drive.google.com/file/d/1lAiIfDus2d9ssWijAQjKEVd8rnnNWyE-/view",
    },
  },
  {
    name: "Dadum(다듬)",
    preview: "/projects/Dadum.png",
    time: new Date(2025, 11).toISOString(),
    description:
      "AI 기반 운동 분석 및 루틴 관리 서비스입니다. 상기의 기술 스택을 사용했으며, Suricata로 IDS를 구성, nginx로 프록시를 구축한 후 Ollama의 Gemma3:1b-it-qat 로그분석을 통해 XDR 및 SOAR를 소프트웨어적으로 구현했습니다. 또한 사용자를 위한 루틴 서비스, 운동 통계와 함께 건강 이슈외 오프토픽이 적용된 Dadum-챗봇이 구현됐으며, YOLO, ResNet50, CLIP 등을 통한 실시간 자세 분석 및 식단 분석, Kotlin을 통한 모바일 중계 앱 구현 및 워치 내 Health Connect 연동, Isolation Forest를 활용한 이상거래 탐지 시스템, Google tag manager와 Google Analytics를 통한 실시간 페이지 통계를 비롯하여 Firebase 연동을 통한 웹푸시, VM 내 Docker로 구성된 인증서버 - 패스워드리스 로그인을 통한 인증 로직 강화등을 구현했습니다.",
    tech: [
      TechStackEnum.REACT,
      TechStackEnum.JAVASCRIPT,
      TechStackEnum.CSS,
      TechStackEnum.GITHUB,
      TechStackEnum.JAVA,
      TechStackEnum.SPRING,
      TechStackEnum.ORACLE,
      TechStackEnum.DOCKER,
      TechStackEnum.PYTHON,
      TechStackEnum.FASTAPI,
      TechStackEnum.OLLAMA,
      TechStackEnum.SURICATA,
      TechStackEnum.SCIKIT_LEARN,
    ],
    type: "important",
    links: {
      repository: "https://github.com/Dadum-Health-Care-Service",
      portfolio:
        "https://drive.google.com/file/d/13YuFvXAaR2Vxzy50jtMZMEa-15-Q-bui/view",
    },
  },
];

const ProjectName: Record<string, string> = {
  "Capstone Design - WIMF": "Capstone Design - WIMF",
  WellFitBeing: "WellFitBeing (웰핏빙)",
  "Adone QA": "Adone QA ((주)애드원 QA)",
  Webbizcraft: "Webbizcraft (웹비즈크래프트)",
  Commonplus: "Commonplus (커먼플러스)",
  Bemo: "배움의 모든것",
  "Frontend Portfolio": "Frontend Portfolio",
  MOG: "MOG (My Own Gym)",
  Dadum: "Dadum (다듬)",
};

export const getProjectName = (key: string): string => ProjectName[key];
