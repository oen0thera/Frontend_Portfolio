import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import { TechStackEnum } from "@/type/Skills/SkillsItem.type";

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
    links: {
      repository: "https://github.com/oen0thera/Commonplus_Only_Readme",
      production: "https://commonplus.store/",
    },
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
    links: {
      repository: "https://github.com/oen0thera/Bemo_Frontend_Only_Readme",
      production: "https://front.bemo.pe.kr/",
    },
    type: "important",
  },
  {
    name: "Frontend Portfolio",
    preview: "/projects/Webbizcraft.png",
    time: new Date(2024, 11).toISOString(),
    description: "",
    tech: [
      TechStackEnum.NEXT,
      TechStackEnum.TYPESCRIPT,
      TechStackEnum.SASS,
      TechStackEnum.REDUX,
      TechStackEnum.WEBGL,
    ],
    type: "important",
  },
];

const ProjectName: Record<string, string> = {
  "Capstone Design - WIMF": "Capstone Design - WIMF",
  WellFitBeing: "WellFitBeing (웰핏빙)",
  "Adone QA": "Adone QA ((주)애드원 QA)",
  Webbizcraft: "Webbizcraft (웹비즈크래프트)",
  Commonplus: "Commonplus (커먼플러스)",
  Bemo: "배움의 모든것",
};

export const getProjectName = (key: string): string => ProjectName[key];
