const projects = [
  {
    index: "01",
    period: "2024.10 — 2025.08",
    title: "AI EchoCare",
    subtitle: "실시간 심초음파 AI 분석 데스크톱 애플리케이션",
    summary:
      "심초음파 영상 수집부터 AI 분석, 측정값 보정, 리포트 작성과 PACS 전송까지 하나의 검사 흐름으로 연결했습니다.",
    challenge:
      "제조사와 장비 조합에 따라 영상이 수신되지 않았고, 실시간 촬영과 AI 모델·OCR을 함께 실행하면 프레임 저하가 발생했습니다.",
    work: [
      "React 화면과 Python 영상 처리 프로세스를 연결하는 Electron IPC 구조 구현",
      "HDCP, HDMI·DP, 캡처카드와 분배기 조합별 호환 조건 검증",
      "실시간 분류와 OCR·수치 해석을 별도 프로세스로 분리",
      "DICOM 생성 및 PACS C-STORE 전송, macOS·Hailo 환경 리팩터링",
    ],
    impact: "영상 처리 연산 부하 약 60% 감소",
    tags: ["React", "TypeScript", "Electron", "Python", "DICOM", "PACS", "Hailo"],
  },
  {
    index: "02",
    period: "2025.11 — 2026.08",
    title: "Cloud PACS Annotation",
    subtitle: "DICOM 의료영상 측정·주석 웹 시스템",
    summary:
      "의료영상 Viewer에서 Cornerstone 도구와 Canvas·SVG 사용자 정의 도구를 함께 사용하고, 작업 데이터와 원본 영상을 분리 관리하도록 구성했습니다.",
    challenge:
      "DICOM Viewport 전용 도구와 일반 Canvas 환경의 도구를 병행해야 했으며, 기존 PACS와 분리된 Annotation 운영 환경이 필요했습니다.",
    work: [
      "React·Cornerstone3D 기반 DICOM Viewer와 Measurement Tool 개발",
      "Canvas·SVG 도구의 이벤트 및 좌표 처리 구조 구성",
      "Zustand·React Query 기반 Viewer와 서버 상태 관리",
      "선택적 DICOM 익명화, MariaDB·MinIO 저장 구조 및 Apache 환경 구성",
    ],
    impact: "DICOM 수집·익명화·저장 흐름 자동화",
    tags: ["React", "TypeScript", "Cornerstone3D", "Zustand", "MinIO", "MariaDB", "Apache"],
  },
  {
    index: "03",
    period: "SIDE PROJECT",
    title: "BEBEU Work PWA",
    subtitle: "아기용품 세탁 매장 현장 운영 도구",
    summary:
      "주문 접수, 작업 단계별 사진, 고객 공유, 근태와 네이버 카페 업로드를 모바일 중심의 실제 매장 업무 흐름으로 구현했습니다.",
    challenge:
      "수기로 나뉘어 있던 주문·사진·배송·고객 안내 업무를 직원이 휴대폰에서 빠르게 처리할 수 있어야 했습니다.",
    work: [
      "주문 복사·붙여넣기 자동 파싱과 A/B 업무 구분",
      "작업 단계·사진·메모·완료 및 고객 공유 URL 관리",
      "관리자·직원 권한, 출퇴근과 급여 결산 기능 개발",
      "단일 파일 프론트엔드를 기능별 모듈 구조로 리팩터링",
    ],
    impact: "실제 매장 피드백을 반영해 지속 운영",
    tags: ["JavaScript", "Node.js", "PWA", "MariaDB", "Playwright", "Cloudflare Tunnel"],
  },
];

const stackGroups = [
  { label: "Frontend", value: "React · TypeScript · JavaScript · Redux · Zustand · HTML · CSS" },
  { label: "Application", value: "Electron · PWA · Cornerstone3D · Canvas · SVG" },
  { label: "Backend / Data", value: "Node.js · Python · MariaDB · MySQL · MinIO" },
  { label: "AI / Imaging", value: "PyTorch · OpenCV · OCR · DICOM · PACS · Hailo" },
  { label: "Infrastructure", value: "Apache · Cloudflare Tunnel · Git · GitHub" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="포트폴리오 처음으로">
          PORTFOLIO<span> / 2026</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#stack">Stack</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FRONTEND-FOCUSED FULL-STACK DEVELOPER</p>
          <h1>
            의료영상과 현장 업무를
            <br />
            <span>실제로 작동하는 제품</span>으로 만듭니다.
          </h1>
          <p className="hero-description">
            React·TypeScript 기반 화면부터 Electron, Python AI 연동, DICOM/PACS와 데이터 저장 환경까지 제품 단위로 개발해 왔습니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#experience">프로젝트 보기</a>
            <a className="text-button" href="#summary">경력 요약 ↓</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="핵심 경력 지표">
          <div className="signal-line"><span>STATUS</span><strong>OPEN TO WORK</strong></div>
          <div className="metric"><strong>2</strong><span>의료영상<br />프로젝트</span></div>
          <div className="metric"><strong>1</strong><span>실제 운영<br />사이드 프로젝트</span></div>
          <div className="metric accent"><strong>60%</strong><span>영상 처리<br />연산 부하 감소</span></div>
        </aside>
      </section>

      <section className="summary-section" id="summary">
        <p className="section-label">PROFILE</p>
        <div className="summary-grid">
          <h2>화면 구현에서 끝내지 않고<br />운영 환경까지 연결합니다.</h2>
          <div className="summary-copy">
            <p>
              ㈜인비즈에서 AI EchoCare와 Cloud PACS Annotation을 개발하며 실시간 영상 처리, 의료영상 Viewer, 측정 도구와 DICOM 데이터 흐름을 다뤘습니다.
            </p>
            <p>
              장비 호환 문제부터 사용자 화면, AI 프로세스, 데이터 저장과 배포까지 실제 사용 환경에서 발생한 문제를 기준으로 개선해 왔습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section" id="experience">
        <div className="section-heading">
          <p className="section-label">SELECTED EXPERIENCE</p>
          <h2>요구사항에서 결과까지</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.index}</span>
                <time>{project.period}</time>
              </div>
              <div className="project-main">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="problem-solution">
                  <div>
                    <span className="micro-label">REQUIREMENT / ISSUE</span>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <span className="micro-label">IMPLEMENTATION</span>
                    <ul>
                      {project.work.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="impact-row">
                  <span>RESULT</span>
                  <strong>{project.impact}</strong>
                </div>
                <div className="tag-list" aria-label={`${project.title} 기술 스택`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="research-copy">
          <p className="section-label">MASTER&apos;S RESEARCH</p>
          <h2>CT 팬텀 영상 기반<br />공간분해능 Q-score 개발</h2>
          <p>
            DICOM 영상의 ROI와 점군을 자동 검출하고 밝기·형태·배열 특성을 결합해 육안 평가를 보조하는 정량 지표를 설계했습니다.
          </p>
          <div className="research-flow" aria-label="연구 처리 과정">
            <span>DICOM ROI</span><i>→</i><span>DoG 검출</span><i>→</i><span>Q-score</span><i>→</i><span>GroupKFold</span>
          </div>
        </div>
        <div className="research-metrics">
          <div><span>ROC-AUC</span><strong>0.989</strong></div>
          <div><span>PR-AP</span><strong>0.900</strong></div>
          <div><span>ACCURACY</span><strong>94.7%</strong></div>
          <div><span>BALANCED ACC.</span><strong>96.1%</strong></div>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="section-heading">
          <p className="section-label">TECH STACK</p>
          <h2>실제 프로젝트에 사용한 기술</h2>
        </div>
        <div className="stack-list">
          {stackGroups.map((group) => (
            <div className="stack-row" key={group.label}>
              <span>{group.label}</span>
              <p>{group.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="working-style">
        <p className="section-label">AI-ASSISTED DEVELOPMENT</p>
        <p>
          2024년부터 Cursor·Claude를 코드 분석과 구현에 활용했으며, 이후 Kiro·Codex를 요구사항 정리, 구조 설계, 리팩터링과 운영 환경 구축에 적용했습니다. 생성 결과는 실제 요구사항과 실행 환경을 기준으로 검토하고 수정합니다.
        </p>
      </section>

      <footer>
        <p>FRONTEND-FOCUSED FULL-STACK DEVELOPER</p>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </main>
  );
}
