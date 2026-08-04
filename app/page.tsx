const skillGroups = [
  {
    title: "Language",
    items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Redux", "Zustand", "React Query", "Cornerstone3D", "Canvas · SVG"],
  },
  {
    title: "Application",
    items: ["Electron", "PWA", "Node.js", "Playwright"],
  },
  {
    title: "Data · Infra",
    items: ["MariaDB · MySQL", "MinIO", "Apache", "Cloudflare Tunnel", "Git · GitHub"],
  },
  {
    title: "AI · Medical",
    items: ["PyTorch", "OpenCV", "OCR", "DICOM", "PACS", "Hailo"],
  },
  {
    title: "AI Tools",
    items: ["Cursor", "Claude", "Codex", "Kiro", "ChatGPT Deep Research"],
  },
];

const projects = [
  {
    no: "01",
    type: "COMPANY PROJECT",
    title: "AI EchoCare",
    period: "2024.10.01 — 2025.08.31",
    description:
      "심초음파 영상을 실시간으로 수집하고 AI 분석 결과와 측정 수치를 제공하는 의료영상 데스크톱 프로그램",
    role: "Frontend-focused Full-stack",
    points: [
      "React 화면과 Python 영상 처리·AI 프로세스를 연결하는 Electron IPC 구조 구현",
      "실시간 분류와 OCR·수치 해석을 별도 프로세스로 분리해 연산 부하 약 60% 감소",
      "최근 40프레임의 결과를 누적해 대표 분류값을 결정하는 안정화 로직 구성",
      "HDCP, HDMI·DP, 캡처카드와 분배기 조합별 장비 호환 조건 검증",
      "검사 영상과 측정·리포트 데이터의 DICOM 생성 및 PACS C-STORE 전송",
      "macOS 및 산업용 PC용 Hailo 칩 환경에 맞춘 추론 구조 리팩터링",
    ],
    result: "환자 등록부터 촬영·분석·보정·리포트·PACS 전송까지 하나의 검사 흐름으로 통합",
    stack: ["React", "TypeScript", "Electron", "Python", "DICOM", "PACS", "Hailo"],
  },
  {
    no: "02",
    type: "COMPANY PROJECT",
    title: "Cloud PACS Annotation",
    period: "2025.11.01 — 2026.08.31",
    description:
      "DICOM 의료영상을 조회하고 Measurement·Annotation 데이터를 관리하는 웹 기반 작업 시스템",
    role: "Frontend · Data Pipeline · Infra",
    points: [
      "React·TypeScript·Cornerstone3D 기반 DICOM Viewer와 Measurement Tool 개발",
      "Cornerstone 도구와 Canvas·SVG 사용자 정의 도구의 이벤트·좌표 처리 구조 구성",
      "Zustand·React Query 기반 Viewer 상태 및 서버 데이터 조회·갱신 관리",
      "환자·의사·병원 정보를 선택적으로 제거하는 DICOM 익명화 기능 구현",
      "MariaDB 메타데이터와 MinIO DICOM 파일 저장 구조 분리",
      "기존 PACS와 Annotation 서버 분리 및 Apache·도메인 기반 운영 환경 구성",
    ],
    result: "DICOM 수집·익명화·저장과 Annotation 작업 흐름을 독립된 웹 환경으로 구축",
    stack: ["React", "TypeScript", "Cornerstone3D", "Zustand", "React Query", "MinIO", "MariaDB"],
  },
  {
    no: "03",
    type: "SIDE PROJECT",
    title: "BEBEU Work PWA",
    period: "실제 매장 운영 프로젝트",
    description:
      "아기용품 세탁 매장의 주문 접수, 작업 사진, 고객 공유, 근태와 게시 업무를 모바일에서 관리하는 현장 운영 도구",
    role: "Product · Full-stack · Operation",
    points: [
      "복사한 주문 내용을 분석하는 자동 파싱과 A/B 업무 유형 분류",
      "접수부터 배송까지 작업 단계와 단계별 사진·메모 관리",
      "고객 확인 URL, 문자 발송 상태와 네이버 카페 업로드 기능 개발",
      "관리자·직원 권한, 출퇴근 기록과 급여 결산 기능 구현",
      "단일 파일 프론트엔드를 기능별 모듈 구조로 분리하고 빌드 과정 구성",
      "로컬 서버와 Cloudflare Tunnel 기반의 매장 운영 환경 구축",
    ],
    result: "실제 사용자 피드백을 반영하며 반복 업무를 하나의 모바일 PWA로 통합",
    stack: ["JavaScript", "Node.js", "PWA", "MariaDB", "Playwright", "Cloudflare Tunnel"],
  },
];

const introItems = [
  ["직무", "프론트엔드 중심 풀스택 개발자"],
  ["경력", "㈜인비즈 · 2024.10 — 2026.08"],
  ["도메인", "의료영상 · Edge AI · 현장 운영"],
  ["주요 경험", "DICOM/PACS · Electron · PWA"],
  ["개발 범위", "화면 · AI 연동 · 데이터 · 배포"],
  ["연구", "CT 팬텀 공간분해능 Q-score"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="logo" href="#top">PORTFOLIO</a>
        <nav aria-label="포트폴리오 메뉴">
          <a href="#about">소개</a>
          <a href="#skills">스킬</a>
          <a href="#archive">아카이브</a>
          <a href="#projects">프로젝트</a>
          <a href="#career">커리어</a>
        </nav>
      </header>

      <section className="masthead">
        <div className="masthead-grid" aria-hidden="true" />
        <div className="masthead-content">
          <p>FRONTEND-FOCUSED FULL-STACK DEVELOPER</p>
          <h1>개발자 포트폴리오</h1>
          <span className="masthead-rule" />
          <h2>의료영상과 현장 업무를<br />실제로 작동하는 제품으로 만듭니다.</h2>
          <a href="#about" className="scroll-button">더 알아보기 ↓</a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-inner">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="lead">
            React·TypeScript 기반 화면부터 Electron, Python AI 연동, DICOM/PACS와 데이터 저장 환경까지 제품 단위로 개발해 왔습니다.
          </p>
          <div className="about-grid">
            {introItems.map(([label, value]) => (
              <div className="about-item" key={label}>
                <span className="about-icon" aria-hidden="true">{label.slice(0, 1)}</span>
                <div><strong>{label}</strong><p>{value}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-inner">
          <h2 className="section-title">SKILLS</h2>
          <p className="section-description">프로젝트에서 직접 사용하고 설명할 수 있는 기술을 중심으로 정리했습니다.</p>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-header"><span>{group.title.slice(0, 2).toUpperCase()}</span><h3>{group.title}</h3></div>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-inner">
          <h2 className="section-title light">ARCHIVING</h2>
          <div className="archive-grid">
            <a className="archive-card" href="https://github.com/bebeu-app" target="_blank" rel="noreferrer">
              <span className="archive-kicker">GITHUB ORGANIZATION</span>
              <h3>github.com/bebeu-app</h3>
              <p>사이드 프로젝트의 소스 코드와 버전 관리 기록</p>
              <strong>방문하기 ↗</strong>
            </a>
            <a className="archive-card" href="https://github.com/bebeu-app/bebeu_web" target="_blank" rel="noreferrer">
              <span className="archive-kicker">SOURCE REPOSITORY</span>
              <h3>BEBEU Work PWA</h3>
              <p>실제 매장 운영 도구의 기능별 소스와 빌드 구조</p>
              <strong>코드 보기 ↗</strong>
            </a>
            <a className="archive-card internal" href="#research">
              <span className="archive-kicker">MASTER&apos;S RESEARCH</span>
              <h3>CT Q-score Research</h3>
              <p>의료영상 처리와 정량 검증 결과 요약</p>
              <strong>연구 보기 ↓</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-inner wide">
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-description center">요구사항, 구현 내용과 결과가 드러나는 프로젝트를 선별했습니다.</p>
          <div className="project-stack">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-aside">
                  <span className="project-number">{project.no}</span>
                  <span className="project-type">{project.type}</span>
                  <p>{project.period}</p>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-detail">
                    <h4>주요 구현</h4>
                    <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                  <div className="result-box"><span>RESULT</span><strong>{project.result}</strong></div>
                  <div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section career" id="career">
        <div className="section-inner">
          <h2 className="section-title">CAREER</h2>
          <div className="career-layout">
            <div className="company-card">
              <span>2024.10 — 2026.08</span>
              <h3>㈜인비즈</h3>
              <p>Full-stack Developer</p>
              <div className="company-tags"><span>Medical Imaging</span><span>Edge AI</span><span>Frontend</span></div>
            </div>
            <div className="timeline">
              <article>
                <time>2024.10 — 2025.08</time>
                <h3>AI EchoCare 개발</h3>
                <p>실시간 심초음파 영상 수집, AI·OCR 처리, 측정값 보정과 PACS 연동 개발</p>
              </article>
              <article>
                <time>2025.11 — 2026.08</time>
                <h3>Cloud PACS Annotation 개발</h3>
                <p>DICOM Viewer, Measurement Tool, 익명화·저장 파이프라인 및 운영 환경 구축</p>
              </article>
            </div>
          </div>

          <div className="research" id="research">
            <div className="research-heading">
              <span>MASTER&apos;S RESEARCH</span>
              <h3>CT 팬텀 영상 기반<br />공간분해능 Q-score 개발</h3>
              <p>DICOM 영상의 ROI와 점군을 자동 검출하고 밝기·형태·배열 특성을 결합해 육안 평가를 보조하는 정량 지표를 설계했습니다.</p>
            </div>
            <div className="research-metrics">
              <div><span>ROC-AUC</span><strong>0.989</strong></div>
              <div><span>PR-AP</span><strong>0.900</strong></div>
              <div><span>ACCURACY</span><strong>94.7%</strong></div>
              <div><span>BALANCED ACC.</span><strong>96.1%</strong></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div><strong>DEVELOPER PORTFOLIO</strong><p>의료영상과 현장 운영 제품을 구현한 프론트엔드 중심 풀스택 개발자</p></div>
        <a href="#top">TOP ↑</a>
      </footer>
    </main>
  );
}
