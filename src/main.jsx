import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './portal.css';
import './curriculum.css';
import './pages.css';
import { curriculum } from './curriculum.js';

const applicationModules = [
  {
    number: '01', title: 'Applicant strategy & prerequisites', tag: 'Build your plan',
    description: 'Understand the application landscape and turn your next steps into a plan that fits your goals.',
    topics: ['Understand the dental school application timeline and deadlines', 'Identify schools that align with applicant goals; compare Canadian and/or American dental schools', 'Understand school-specific prerequisites and identify missing or incomplete requirements', 'Plan DAT, CASPer, application, and where applicable CDAT timelines; consider Australian and Irish pathways', 'Avoid common application mistakes and build a checklist', 'Recorded introductory workshop covering the application process from beginning to end', 'Personalized application planning assignment/checklist'],
    icon: 'compass'
  },
  {
    number: '02', title: 'CASPer preparation', tag: 'Think with confidence',
    description: 'Build the reasoning and communication skills to approach unfamiliar scenarios with care.',
    topics: ['What CASPer is, what skills it evaluates, and how to approach different question types', 'Time management, response structure, ethical and situational reasoning, and common mistakes', 'Strategies for unfamiliar scenarios, emphasizing critical thinking, communication, empathy, and decision-making rather than memorized formulas', 'Mock scenarios, timed questions, written-response practice, and video-response practice where applicable', 'Peer discussion, feedback, and sample high-quality approaches', 'Potential sponsorships with CASPer preparation organizations for resources, practice materials, or participant discounts'],
    icon: 'spark'
  },
  {
    number: '03', title: 'Personal Statement Lab', tag: 'Tell your story',
    description: 'Shape your experiences and motivations into a reflective, cohesive story about why dentistry.',
    topics: ['Purpose of the personal statement and what admissions committees look for', 'Storytelling rather than listing accomplishments; reflection and connections to dentistry', 'Creating a strong introduction and cohesive narrative', 'Common mistakes, editing, and revision strategies', 'Peer discussion and general feedback from other applicants', 'Optional individualized review by current dental students, recent graduates, dentists, experienced D4Y members, admissions professionals, or other qualified reviewers', 'A reviewer network gives students different perspectives and supports scalable feedback'],
    icon: 'pen'
  },
  {
    number: '04', title: 'Experiences & application entries', tag: 'Show your impact',
    description: 'Communicate what you did, what you learned, and why it matters within application limits.',
    topics: ['Experiences may include research, volunteering, leadership, employment, community involvement, shadowing, awards, and clubs', 'Select and prioritize meaningful experiences; describe responsibilities effectively', 'Show impact beyond duties, demonstrate transferable skills, and connect experiences to personal growth', 'Avoid repetitive descriptions and work within character or word limits', 'Optional review assesses clarity, concision, reflection, specificity, impact, and consistency with the overall application narrative'],
    icon: 'layers'
  },
  {
    number: '05', title: 'Final application check-in', tag: 'Bring it together',
    description: 'Talk through your remaining questions with a dental student, dentist, or qualified D4Y mentor.',
    topics: ['Book an individual session with a current dental student, dentist, or qualified D4Y mentor', 'Discuss overall application strategy, school selection, personal statement, experiences, CASPer, DAT, interview preparation, outstanding concerns, and general questions about the dental school journey', 'Positioned as a “Final Application Check,” not a guarantee of admission or admissions evaluation'],
    icon: 'check'
  }
];

const goals = [
  'Understand the dental school application process',
  'Develop a strategic, personalized application plan',
  'Navigate school-specific prerequisites and requirements',
  'Prepare for CASPer with structured practice',
  'Strengthen personal statements and application entries',
  'Learn from dental students and dental professionals',
  'Access individualized feedback and mentorship',
  'Connect with a supportive applicant community'
];

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    compass: <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/></>,
    pen: <><path d="m4 20 4.5-1 10.8-10.8a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z"/><path d="m14.8 6.2 3 3"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    tooth: <><path d="M7.2 3.6c2.5 0 3.1 1.3 4.8 1.3s2.3-1.3 4.8-1.3c2.8 0 4 2.3 3.6 5.5-.4 3.1-2.3 10.8-4.2 11.2-1.7.4-2.3-5.9-4.2-5.9s-2.5 6.3-4.2 5.9C5.9 19.9 4 12.2 3.6 9.1c-.4-3.2.8-5.5 3.6-5.5Z"/><path d="M9 7.5c1.1-.5 1.9-.5 3-.1"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={nodeRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>;
}

function CurriculumSection({ module }) {
  return <section className="curriculum-panel" aria-label={`Module ${module.number}: ${module.title}`}>
    <div className="curriculum-overview">
      <div className="curriculum-module-label">MODULE {module.number}</div>
      <h3>{module.title}</h3><p>{module.summary}</p>
      {module.frameworks && <p className="framework-note"><strong>Frameworks used:</strong> {module.frameworks}</p>}
      <div className="curriculum-tags">{module.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {module.outcomes && <div className="outcomes-box"><strong>By the end of this module, students should be able to:</strong><ul>{module.outcomes.map(item => <li key={item}>{item}</li>)}</ul></div>}
    </div>
    <div className="curriculum-days">{module.days.map((day, dayIndex) => <section className="curriculum-day" key={day.title}>
      <div className="day-heading"><span>DAY {dayIndex + 1}</span><h4>{day.title}</h4></div>
      <div className="lesson-grid">{day.sections.map(section => <article className="lesson-card" key={section.heading}>
        <h5>{section.heading}</h5>
        {section.intro && <p>{section.intro}</p>}{section.body && <p>{section.body}</p>}
        {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        {section.chips && <div className="lesson-chips">{section.chips.map(item => <span key={item}>{item}</span>)}</div>}
        {section.threeCols && <div className="concept-grid">{section.threeCols.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>}
        {section.fourCs && <div className="framework-grid">{section.fourCs.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>}
        {section.comparison && <div className="comparison-grid">{section.comparison.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div>}
        {section.note && <p className="lesson-note">{section.note}</p>}
      </article>)}</div>
    </section>)}</div>
  </section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || 'home');
  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash.slice(1) || 'home');
    window.addEventListener('hashchange', updateRoute);
    return () => window.removeEventListener('hashchange', updateRoute);
  }, []);
  useEffect(() => {
    if (route === 'modules') document.getElementById('modules')?.scrollIntoView({ block: 'start' });
    else if (route === 'approach' || route === 'goals' || route === 'community') document.getElementById(route)?.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, [route]);
  const moduleIndex = route.startsWith('module-') ? Math.max(0, curriculum.findIndex(module => `module-${module.number}` === route)) : -1;
  const isProgramModel = route === 'program-model' || route === 'goals' || route === 'community';
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Dentistry for Youth home" onClick={closeMenu}>
        <span className="brand-mark"><Icon name="tooth" size={22}/></span>
        <span className="brand-copy"><strong>D4Y</strong><small>DENTISTRY FOR YOUTH</small></span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name="menu"/></button>
      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Overview</a>
        <a href="#modules" onClick={closeMenu}>Modules</a>
        <a href="#application-support" onClick={closeMenu}>Application support</a>
        <a href="#program-model" onClick={closeMenu}>Program details</a>
        <a href="#modules" className="nav-cta" onClick={closeMenu}>Explore the modules <Icon name="arrow" size={16}/></a>
      </nav>
    </header>

    <main>
    {(route === 'home' || route === 'modules' || route === 'approach') && <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> DENTISTRY FOR YOUTH <span className="eyebrow-rule"/> DENTAL RESEARCH PROGRAM</div>
          <h1>Learn to read,<br/>question &amp; <em>plan research.</em></h1>
          <p className="hero-lede">Build research foundations step by step: understand scientific literature, develop a focused research question, and write clear objectives.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#modules">Explore the modules <Icon name="arrow" size={17}/></a>
            <a className="text-link" href="#approach">Learning approach <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-line"/> Three modules for the foundations of research</div>
        </div>
        <div className="hero-art" aria-label="Illustration of a student's dental research learning journey">
          <div className="art-wash"/>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-label label-top"><span className="label-dot coral"/>YOUR RESEARCH JOURNEY</div>
          <div className="art-card main-card">
            <div className="card-top"><div className="mini-mark"><Icon name="tooth" size={17}/></div><span>RESEARCH, IN FOCUS</span><span className="card-menu">···</span></div>
            <div className="card-title">A question<br/><em>worth exploring.</em></div>
            <div className="progress-label"><span>LEARNING JOURNEY</span><span>01 / 03</span></div>
            <div className="progress-track"><span/></div>
            <div className="card-steps"><span className="step-active">Read</span><i/><span>Question</span><i/><span>Plan</span></div>
            <div className="card-bottom"><span className="avatar-stack"><i> D</i><i>Y</i><i>+</i></span><span>Foundations for research</span><Icon name="arrow" size={16}/></div>
          </div>
          <div className="floating-note"><span className="floating-icon"><Icon name="spark" size={17}/></span><span><strong>Learn by doing</strong><small>Questions, practice, reflection.</small></span></div>
          <div className="art-stamp"><span>LEARN<br/>WITH PURPOSE</span><b>✳</b></div>
          <div className="art-caption">A clear structure for learning research <span>↗</span></div>
        </div>
        <div className="hero-bottom"><span>01 — A FOUNDATION FOR WHAT’S NEXT</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
      </section>

      <section className="intro-section section-wrap">
        <Reveal className="intro-kicker"><span className="section-index">01</span><span>THE PROGRAM</span></Reveal>
        <div className="intro-content">
          <Reveal><h2>Research begins<br/><em>with good questions.</em></h2></Reveal>
          <Reveal delay={100}><div className="intro-text"><p>This learning pathway builds core research skills in a clear sequence: read scientific literature, develop a research question, then set objectives that can guide a scoping review.</p><p>Each module pairs key concepts with examples, discussion, peer review, and practice activities.</p><a href="#modules" className="under-link">Explore the learning modules <Icon name="arrow" size={16}/></a></div></Reveal>
        </div>
        <div className="value-strip"><div><span className="value-number">01</span><strong>Read critically</strong><small>Understand papers and evidence types</small></div><div><span className="value-number">02</span><strong>Ask focused questions</strong><small>Use PCC to shape a research question</small></div><div><span className="value-number">03</span><strong>Plan the review</strong><small>Build aligned, feasible objectives</small></div></div>
      </section>

      <section className="pathway-section" id="modules">
        <div className="section-wrap pathway-wrap">
          <Reveal className="section-heading"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-dot"/> LEARNING MODULES</div><h2>Build your research<br/><em>skills step by step.</em></h2></div><p>Explore each module on its own page. Lessons, examples, and activities are arranged by day.</p></Reveal>
          <div className="module-preview-grid">{curriculum.map(module => <article className="module-preview" key={module.number}><div className="preview-meta"><span>MODULE {module.number}</span><span>{module.days.length} DAYS{module.days.some(day => day.title.toLowerCase().includes('optional')) ? ' + OPTIONAL' : ''}</span></div><h3>{module.title}</h3><p>{module.summary}</p><div className="curriculum-tags">{module.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="preview-link" href={`#module-${module.number}`}>Open module <Icon name="arrow" size={16}/></a></article>)}</div>
          <a href="#application-support" className="support-inline-link">Looking for dental school application guidance? <span>Explore application support <Icon name="arrow" size={15}/></span></a>
        </div>
      </section>

      <section className="approach-section section-wrap" id="approach">
        <Reveal className="approach-heading"><div className="eyebrow"><span className="eyebrow-dot"/> LEARN BY DOING</div><h2>Read closely.<br/><em>Think it through.</em></h2><p>Activities move from identifying evidence in real papers to refining research questions and reviewing objectives with peers. The emphasis is on understanding how research decisions fit together.</p></Reveal>
        <div className="approach-grid">
          <Reveal><div className="approach-card"><span className="approach-index">01 / READ</span><div className="approach-visual visual-plan"><div className="plan-sheet"><i/><i/><i/><b>RESEARCH PAPER</b><span>✓</span></div><div className="plan-orb">01</div></div><h3>Understand the evidence.</h3><p>Identify literature types, examine paper sections, and consider how articles cite and build on previous research.</p></div></Reveal>
          <Reveal delay={100}><div className="approach-card"><span className="approach-index">02 / QUESTION</span><div className="approach-visual visual-practice"><div className="practice-bubble">Who? What? Where?</div><div className="practice-lines"><i/><i/><i/></div><span className="practice-spark">✳</span></div><h3>Shape a research question.</h3><p>Move from a topic to a researchable question, then use Population, Concept, and Context to check its focus.</p></div></Reveal>
          <Reveal delay={200}><div className="approach-card"><span className="approach-index">03 / OBJECTIVES</span><div className="approach-visual visual-refine"><div className="refine-paper"><b>REVIEW OBJECTIVES</b><i/><i/><i/><span>clear &amp; aligned ↗</span></div><div className="refine-pen">✎</div></div><h3>Plan a feasible review.</h3><p>Write primary and secondary objectives, align them to PCC, and refine them using SMART criteria and PRISMA-ScR.</p></div></Reveal>
        </div>
      </section>
    </>}

    {moduleIndex >= 0 && <section className="module-page pathway-section"><div className="section-wrap pathway-wrap"><a href="#modules" className="breadcrumb-link">← All learning modules</a><div className="page-module-nav">{curriculum.map((module, index) => <a key={module.number} className={moduleIndex === index ? 'page-module-link active' : 'page-module-link'} href={`#module-${module.number}`}><span>MODULE {module.number}</span><strong>{module.title}</strong></a>)}</div><CurriculumSection module={curriculum[moduleIndex]}/><div className="module-pagination">{moduleIndex > 0 ? <a href={`#module-${curriculum[moduleIndex - 1].number}`}><span>PREVIOUS MODULE</span><strong>← {curriculum[moduleIndex - 1].title}</strong></a> : <span/>}{moduleIndex < curriculum.length - 1 && <a className="next-module" href={`#module-${curriculum[moduleIndex + 1].number}`}><span>NEXT MODULE</span><strong>{curriculum[moduleIndex + 1].title} →</strong></a>}</div></div></section>}

    {route === 'application-support' && <>
      <section className="support-page-intro section-wrap"><div className="eyebrow"><span className="eyebrow-dot"/> DENTAL SCHOOL APPLICATION SUPPORT</div><h1>Guidance for each<br/><em>part of the process.</em></h1><p>Choose individual modules or a package that fits your needs. The program is designed to bring resources, workshops, practice, and feedback together.</p></section>
      <section className="pathway-section"><div className="section-wrap pathway-wrap"><Reveal className="section-heading"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-dot"/> APPLICATION SUPPORT MODULES</div><h2>Explore the areas<br/><em>where you need help.</em></h2></div><p>Each module can stand alone or connect with the rest of your application plan.</p></Reveal><div className="application-support"><div className="module-list">{applicationModules.map(module => <article className="module-card" key={module.number}><div className="module-number">{module.number}</div><div className="module-icon"><Icon name={module.icon} size={23}/></div><div className="module-main"><span className="module-tag">{module.tag}</span><h3>{module.title}</h3><p>{module.description}</p></div><details className="module-details"><summary aria-label={`More about ${module.title}`}><span>Explore topics</span><b>+</b></summary><div className="details-content"><p>Topics may include:</p><ul>{module.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div></details></article>)}</div><div className="modules-footnote"><span>*</span> Individualized reviews and mentorship may be available as selected options. Final application check-ins are guidance, not admissions evaluations.</div><div className="reviewer-network"><div><span>MENTOR &amp; REVIEWER NETWORK</span><p>A future network could include current dental students, recent graduates, dentists, D4Y alumni, former board members, and other qualified application mentors.</p></div><p>Reviewers could be compensated per review or session, allowing individualized feedback to scale beyond the executive team.</p></div></div><a href="#program-model" className="program-details-link">Explore the digital platform, packages, community, goals, and pilot plan <Icon name="arrow" size={16}/></a></div></section>
      </>}

    {isProgramModel && <>
      <section className="support-page-intro program-page-intro section-wrap"><div className="eyebrow"><span className="eyebrow-dot"/> HOW THE PROGRAM WORKS</div><h1>Resources, feedback,<br/><em>and people in one place.</em></h1><p>Explore the proposed student portal, flexible program options, community, and pilot plan.</p><a href="#application-support" className="breadcrumb-link">← Application support modules</a></section>
      <section className="portal-section">
        <div className="section-wrap portal-wrap">
          <Reveal className="portal-heading"><div className="eyebrow"><span className="eyebrow-dot"/> YOUR PROGRAM, IN ONE PLACE</div><h2>Keep your next steps<br/><em>close at hand.</em></h2><p>The digital platform is designed as a central student portal, bringing the resources and touchpoints of your pathway together.</p></Reveal>
          <div className="portal-grid">
            <Reveal><article className="portal-card"><span className="portal-number">01 / YOUR DASHBOARD</span><div className="portal-icon"><Icon name="compass"/></div><h3>See where you’re headed.</h3><p>Keep track of purchased modules, upcoming workshops, assignments, deadlines, submitted work, feedback, and resources.</p></article></Reveal>
            <Reveal delay={90}><article className="portal-card"><span className="portal-number">02 / FLEXIBLE ACCESS</span><div className="portal-icon"><Icon name="layers"/></div><h3>Choose what you need.</h3><p>Access individual modules or bundled options, with registration and payment managed through the platform.</p></article></Reveal>
            <Reveal delay={180}><article className="portal-card"><span className="portal-number">03 / SUBMIT & REFLECT</span><div className="portal-icon"><Icon name="pen"/></div><h3>Practice, then get feedback.</h3><p>Submit personal statements, application entries, CASPer practice responses, and application planning documents, then receive feedback in one place.</p></article></Reveal>
          </div>
          <Reveal className="access-options"><div className="access-head"><span>WAYS TO TAKE PART</span><p>Modular access keeps the program responsive to what each applicant needs.</p></div><div className="access-list"><div><b>01</b><span><strong>Individual modules</strong><small>Choose Applicant Strategy, CASPer, Personal Statement, Application Entries, or Final Check-In.</small></span><i>↗</i></div><div><b>02</b><span><strong>Essential package</strong><small>Educational workshops and resources.</small></span><i>↗</i></div><div><b>03</b><span><strong>Application package</strong><small>Workshops, application resources, and selected feedback.</small></span><i>↗</i></div><div><b>04</b><span><strong>Premium package</strong><small>Full program with individualized reviews and mentorship or check-in.</small></span><i>↗</i></div></div><p className="pricing-note">Pricing would be set after researching comparable services, reviewer compensation, platform costs, and D4Y’s reinvestment goals.</p></Reveal>
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="section-wrap community-wrap">
          <Reveal className="community-copy"><div className="eyebrow light-eyebrow"><span className="eyebrow-dot"/> PEOPLE MAKE THE DIFFERENCE</div><h2>You don’t have to<br/>figure it out <em>alone.</em></h2><p>Applications may be personal, but the journey can be shared. D4Y’s community is designed to help applicants learn from one another and hear directly from people with dental school experience.</p><a className="button button-light" href="#goals">What the program is working toward <Icon name="arrow" size={17}/></a></Reveal>
          <Reveal delay={120}><div className="community-panel"><div className="community-panel-head"><span>ROOM TO LEARN TOGETHER</span><span className="panel-spark">✳</span></div><div className="community-quote">“Going through the process with a community, not on your own.”</div><div className="community-list"><div><span className="community-icon">↗</span><span><strong>Applicant discussion groups</strong><small>Share questions and perspectives</small></span></div><div><span className="community-icon">◉</span><span><strong>Group workshops & Q&A</strong><small>Learn together, ask what matters</small></span></div><div><span className="community-icon">✳</span><span><strong>Dental student panels & mentor events</strong><small>Hear different paths into dentistry</small></span></div><div><span className="community-icon">↻</span><span><strong>Peer accountability & cycle check-ins</strong><small>Stay connected as you move forward</small></span></div></div></div></Reveal>
        </div>
      </section>

      <section className="goals-section section-wrap" id="goals">
        <Reveal className="goals-heading"><div><div className="eyebrow"><span className="eyebrow-dot"/> WHAT WE’RE WORKING TOWARD</div><h2>A stronger start<br/>to <em>what comes next.</em></h2></div><p>The Dental Pathway Program aims to make reliable application guidance more accessible, organized, and personal.</p></Reveal>
        <div className="goals-layout"><Reveal className="outcomes-card"><div className="outcomes-label">STUDENTS LEAVE WITH</div><div className="outcomes-big">Clearer<br/><em>next steps.</em></div><ul className="outcomes-list"><li>A clear application timeline</li><li>Prerequisite requirements mapped</li><li>Improved CASPer preparation</li><li>A stronger personal statement</li><li>More effective application entries</li><li>Dental student and dentist perspectives</li><li>Greater confidence in the process</li><li>A community of peers and mentors</li></ul><div className="outcomes-bottom"><span>CONFIDENCE IS BUILT ALONG THE WAY</span><span>✳</span></div></Reveal><div className="goals-list">{goals.map((goal, i) => <Reveal key={goal} delay={i * 35}><div className="goal-row"><span>{String(i + 1).padStart(2, '0')}</span><p>{goal}</p><b>↗</b></div></Reveal>)}</div></div>
      </section>

      <section className="pilot-section">
        <div className="section-wrap pilot-wrap"><Reveal><div className="eyebrow dark-eyebrow"><span className="eyebrow-dot"/> BUILT TO KEEP GETTING BETTER</div><h2>Start thoughtfully.<br/><em>Learn as we go.</em></h2></Reveal><Reveal delay={100}><div className="pilot-content"><p>A small pilot cohort can help D4Y understand what works best before a full launch. Student feedback would guide improvements to the platform, workshops, reviewer experience, and pricing.</p><div className="pilot-points"><span>Student satisfaction</span><span>Platform usability</span><span>Workshop effectiveness</span><span>Reviewer quality</span><span>Time per student</span><span>Pricing</span><span>Areas needing added support</span></div><div className="pilot-note"><span>✳</span><p><strong>Suggested pilot reviewer group.</strong> Start with 1–2 dental student reviewers for personal statements and application entries, 1–2 CASPer facilitators for mock scenarios and feedback, and 1–2 dental student mentors for a final check-in or Q&amp;A.</p></div></div></Reveal></div>
      </section>
    </>}
    </main>

    <footer className="site-footer"><div className="section-wrap footer-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Icon name="tooth" size={22}/></span><span className="brand-copy"><strong>D4Y</strong><small>DENTISTRY FOR YOUTH</small></span></a><div className="footer-message">A stronger foundation<br/><em>for dental research.</em></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dentistry for Youth</span><span>DENTAL RESEARCH PROGRAM</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
