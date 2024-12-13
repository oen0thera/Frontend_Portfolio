import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import { TechStackEnum } from "@/type/Skills/SkillsItem.type";

export const projects: ProjectsItemProps[] = [
  {
    name: "Capstone Design - WIMF",
    preview: "/projects/WIMF.png",
    time: new Date(2022, 12).toISOString(),
    description: `국민대 2023년 캡스톤디자인 2인 방탈출 협동게임 프로젝트입니다.`,
    tech: [TechStackEnum.UNITY, TechStackEnum.C_S],
    links: { repository: "https://github.com/kookmin-sw/capstone-2023-20" },
    type: "default",
  },
  {
    name: "WellFitBeing",
    preview: "/projects/WellFitBeing.png",
    time: new Date(2023, 8).toISOString(),
    description: `국민대 소프트웨어 아키텍처 교내 팀 프로젝트 ― 사용자 지정 일정 기반 운동 및 식사 스케줄 추천 서비스입니다.`,
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
    description: `사용자 - 간판업체 견적 매칭 서비스 프론트엔드 QA 역할을 맡아 작업했습니다.`,
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
    description: ` 기업 고객 맞춤형 홈페이지 자동생성 및 운영 서비스로, 해당 프로젝트의 PM 및 프론트엔드 파트장으로써 활동했습니다.`,
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
    description: `다중 플랫폼 쇼팡몰 통합 관리 서비스로, 해당 프로젝트의 프론트엔드 파트장으로써 활동했습니다.`,
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
    description: `수강자 - 학원 견적 매칭 서비스로, 해당 프로젝트의 PM 및 프론트엔드 파트장으로써 활동했습니다.`,
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
