const assetPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const skillGroups = [
  {
    title: "Language",
    iconClass: "fi fi-rr-code-simple",
    items: [
      { name: "TypeScript", tone: "blue" },
      { name: "JavaScript", tone: "yellow" },
      { name: "Python", tone: "steel" },
    ],
  },
  {
    title: "Frontend",
    iconClass: "fi fi-rr-browser",
    items: [
      { name: "React", tone: "navy" },
      { name: "HTML5 · CSS3", tone: "orange" },
      { name: "Redux", tone: "purple" },
      { name: "Zustand", tone: "brown" },
      { name: "React Query", tone: "pink" },
      { name: "Cornerstone3D", tone: "indigo" },
      { name: "Canvas · SVG", tone: "violet" },
    ],
  },
  {
    title: "Backend · Data",
    iconClass: "fi fi-rr-database",
    items: [
      { name: "Node.js", tone: "green" },
      { name: "MariaDB · MySQL", tone: "teal" },
      { name: "MinIO", tone: "red" },
    ],
  },
  {
    title: "AI · Medical",
    iconClass: "fi fi-rr-brain-circuit",
    items: [
      { name: "PyTorch", tone: "orange" },
      { name: "OpenCV", tone: "blue" },
      { name: "OCR", tone: "pink" },
      { name: "DICOM", tone: "navy" },
      { name: "PACS", tone: "indigo" },
      { name: "Hailo", tone: "green" },
    ],
  },
  {
    title: "Platform · Tools",
    iconClass: "fi fi-rr-tools",
    items: [
      { name: "Electron", tone: "violet" },
      { name: "PWA", tone: "blue" },
      { name: "Apache", tone: "red" },
      { name: "Cloudflare Tunnel", tone: "orange" },
      { name: "Playwright", tone: "green" },
      { name: "Git · GitHub", tone: "navy" },
      { name: "Cursor · Claude · Codex", tone: "black" },
    ],
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
    period: "2026.06.01 ~",
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
  { label: "이름", value: "방찬유", iconClass: "fi fi-rr-user" },
  { label: "생년월일", value: "99.09.07", iconClass: "fi fi-rr-calendar" },
  { label: "위치", value: "광주광역시 북구", iconClass: "fi fi-rr-marker" },
  { label: "연락처", value: "010-9148-6553", iconClass: "fi fi-rr-phone-call" },
  { label: "이메일", value: "cksdb0907@naver.com", iconClass: "fi fi-rr-envelope" },
  { label: "학력", value: "전남대학교\n지능정보융합학과 석사과정 재학 중", iconClass: "fi fi-rr-graduation-cap" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="logo" href="#top">PORTFOLIO</a>
        <nav aria-label="포트폴리오 메뉴">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#archive">ARCHIVING</a>
          <a href="#projects">PROJECTS</a>
          <a href="#career">CAREER</a>
        </nav>
      </header>

      <section className="masthead">
        <div className="masthead-grid" aria-hidden="true" />
        <div className="masthead-content">
          <p>FRONTEND-FOCUSED FULL-STACK DEVELOPER</p>
          <h1>찬유의 포트폴리오</h1>
          <span className="masthead-rule" />
          <h2>개발부터 적용까지<br />다양한 분야의 개발을 진행합니다.</h2>
          <a href="#about" className="scroll-button">더 알아보기 ↓</a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-inner">
          <h2 className="section-title about-title"><i className="fi fi-rr-link" aria-hidden="true" />ABOUT ME</h2>
          <div className="about-content">
            <figure className="profile-photo">
              <img src={`${assetPath}/about/profile.jpg`} alt="방찬유 프로필 사진" />
            </figure>
            <div className="about-grid">
              {introItems.map((item) => (
                <div className="about-item" key={item.label}>
                  <i className={`about-icon ${item.iconClass}`} aria-hidden="true" />
                  <div><strong>{item.label}</strong><p>{item.value}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-inner">
          <h2 className="section-title skills-title"><i className="fi fi-rr-link" aria-hidden="true" />SKILLS</h2>
          <div className="skill-panel">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.title}>
                <div className="skill-category">
                  <i className={`skill-row-icon ${group.iconClass}`} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => <span className={`tone-${item.tone}`} key={item.name}>{item.name}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section archive" id="archive">
        <div className="section-inner">
          <h2 className="section-title light archive-title"><i className="fi fi-rr-link" aria-hidden="true" />ARCHIVING</h2>
          <div className="archive-grid single">
            <a className="archive-card" href="https://github.com/bebeu-app" target="_blank" rel="noreferrer">
              <span className="github-wordmark"><i className="fi fi-brands-github" aria-hidden="true" /> GitHub</span>
              <h3>github.com/bebeu-app</h3>
              <p>사이드 프로젝트 소스 코드와 버전 관리 저장소</p>
              <strong>GitHub 방문하기 ↗</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-inner wide">
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-description center">실제 매장 업무를 개선하기 위해 개발하고 운영한 사이드 프로젝트입니다.</p>
          <div className="project-stack single">
            {projects.filter((project) => project.type === "SIDE PROJECT").map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-aside">
                  <span className="project-number">01</span>
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

          <details className="research-disclosure" id="research">
            <summary>
              <span>ACADEMIC PAPER</span>
              <strong>CT 팬텀 영상 기반 공간분해능 Q-score 개발</strong>
              <i className="fi fi-rr-angle-small-down" aria-hidden="true" />
            </summary>
            <div className="research-disclosure-body">
              <div className="research">
                <div className="research-heading">
                  <span>RESEARCH OVERVIEW</span>
                  <h3>육안 판정을 정량 평가로 전환</h3>
                  <p>CT 팬텀의 점 패턴을 육안으로 판정하던 과정을 자동화하기 위해 DICOM 영상에서 ROI와 5점 점군을 검출하고, 밝기·형태·배열 특성을 결합한 정량 지표를 설계했습니다.</p>
                </div>
                <div className="research-metrics">
                  <div><span>ROC-AUC</span><strong>0.989</strong></div>
                  <div><span>PR-AP</span><strong>0.900</strong></div>
                  <div><span>ACCURACY</span><strong>94.7%</strong></div>
                  <div><span>BALANCED ACC.</span><strong>96.1%</strong></div>
                </div>
              </div>

              <div className="research-method">
                <div className="research-method-heading">
                  <span>METHOD</span>
                  <h3>영상 전처리부터 임계값 판정까지</h3>
                  <p>공간분해능 DICOM 376장을 대상으로 동일 영상이 학습과 검증에 중복되지 않도록 영상 단위 GroupKFold를 적용했습니다.</p>
                </div>
                <ol className="research-steps">
                  <li><span>01</span><div><strong>ROI 추출 및 정규화</strong><p>공간분해능 점 패턴 영역을 추출하고 512×512 크기로 정규화</p></div></li>
                  <li><span>02</span><div><strong>점 후보 검출</strong><p>DoG를 적용해 배경과 구분되는 검은 점 후보를 자동 검출</p></div></li>
                  <li><span>03</span><div><strong>5점 점군 선별</strong><p>간격·반지름·배열 조건이 일정한 5개 점군만 분석 대상으로 선택</p></div></li>
                  <li><span>04</span><div><strong>특징 추출</strong><p>밝기 대비와 변화량, 반지름 변동, 중심점 일렬성 오차를 계산</p></div></li>
                  <li><span>05</span><div><strong>Q-score 산출</strong><p>중앙값·IQR 기반으로 정규화한 특징을 가중 결합해 점수 산출</p></div></li>
                  <li><span>06</span><div><strong>임계값 판정</strong><p>Q-score 임계값으로 0.75 mm와 1.00 mm 공간분해능을 분류</p></div></li>
                </ol>

                <figure className="research-wide-visual">
                  <img src={`${assetPath}/research/roi-extraction.png`} alt="원본 CT 팬텀에서 공간분해능 ROI와 5점 점군을 추출하는 과정" />
                  <figcaption>원본 CT 팬텀 → 공간분해능 ROI 추출 → 5점 점군 선별</figcaption>
                </figure>

                <div className="research-gallery">
                  <figure className="research-gallery-main">
                    <img src={`${assetPath}/research/qscore-method.png`} alt="밝기와 형상 특징을 결합한 Q-score 산출 방법" />
                    <figcaption>밝기 대비·변화량과 형상 안정성을 결합한 Q-score 설계</figcaption>
                  </figure>
                  <div className="research-result-visuals">
                    <figure>
                      <img src={`${assetPath}/research/qscore-distribution.png`} alt="0.75 mm와 1.00 mm Q-score 분포 비교 그래프" />
                      <figcaption>등급별 Q-score 분포</figcaption>
                    </figure>
                    <figure>
                      <img src={`${assetPath}/research/roc-curve.png`} alt="Q-score 분류 성능 ROC 곡선" />
                      <figcaption>ROC-AUC 0.989</figcaption>
                    </figure>
                  </div>
                </div>

                <div className="research-result-note">
                  <span>RESULT</span>
                  <p>균형형 임계값 기준 정확도 94.7%, 균형 정확도 96.1%, 0.75 mm 재현율 98.1%를 확인해 육안 평가를 보조할 수 있는 정량적 판정 가능성을 제시했습니다.</p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      <footer>
        <div><strong>DEVELOPER PORTFOLIO</strong><p>개발부터 적용까지 다양한 분야의 개발을 진행합니다.</p><p className="icon-credit">Uicons by <a href="https://www.flaticon.com/uicons" target="_blank" rel="noreferrer">Flaticon</a></p></div>
        <a href="#top">TOP ↑</a>
      </footer>
    </main>
  );
}
