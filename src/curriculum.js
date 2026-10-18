export const curriculum = [
  {
    number: '01', title: 'Read Scientific Literature', summary: 'Understand what scientific literature is, identify its types, and learn how to read it effectively.', tags: ['Peer review', 'Literature reviews', 'Paper anatomy', '4Cs framework'],
    days: [
      { title: 'Understand what scientific literature is', sections: [
        { heading: 'Identifying scientific literature & its types', intro: 'Learn the difference between key types of scientific literature:', bullets: ['Peer-reviewed articles — Original research evaluated by experts before publication', 'Literature review articles — Summaries and analyses of existing research on a topic', 'Systematic reviews — Comprehensive, methodical reviews following strict protocols', 'Conference abstracts — Brief summaries of research presented at academic conferences'], note: 'Understanding the peer review process helps explain why sources differ: each has its own strengths and limitations.' },
        { heading: 'How research papers cite one another', body: 'Learn why and how research papers cite one another by identifying credible sources and understanding citation practices through real article examples.' },
        { heading: 'Activity: Open article discussion', intro: 'Students are given an article and asked to identify:', bullets: ['Cited papers within the article', 'How the paper connects to its topic', 'What type of research article it is', 'The overall goal of the paper'] }
      ]},
      { title: 'Parts of a paper', sections: [
        { heading: 'Primary vs. secondary literature', intro: 'Start by reviewing Day 1 content, then explore:', bullets: ['Why each type of literature exists', 'Pros and cons of primary vs. secondary literature'] },
        { heading: 'Anatomy of a research paper', intro: 'Identify the purpose and learn how to read each section:', chips: ['Abstract', 'Introduction', 'Methods', 'Results', 'Discussion'] },
        { heading: 'The 4Cs framework', fourCs: [['Clear','Easy to read, well-organized, no jargon'],['Concise','To the point, no fluff'],['Cohesive','Flowing logically from section to section'],['Complete','Background, methods, results, conclusion']] },
        { heading: 'Activity: Passage rotation', intro: 'Students rotate through short passages and identify:', bullets: ['Paper type (Day 1 review)', 'Which section it belongs to', 'What the passage is asking or presenting', 'If primary, what type of study (RCT, case-control, case study, etc.)', 'What population types influence the study design'] }
      ]},
      { title: 'Literature review (optional)', sections: [
        { heading: 'What is a literature review?', bullets: ['Focus on what it is and is not', 'When it is used and performed', 'Why it matters in research', 'Real examples of literature reviews', 'Differentiate literature, systematic, and scoping reviews', 'Understand how a review is structured'] },
        { heading: 'Activity: Sample literature review', body: 'Students are given an article and conduct a brief sample literature review to practice identifying key themes and synthesizing information.' }
      ]}
    ]
  },
  {
    number: '02', title: 'Develop a Research Question', summary: 'Define and justify a focused research question, then refine it using the PCC framework.', tags: ['Research questions', 'PCC framework', 'Peer review'],
    outcomes: ['Define a research question', 'Differentiate a topic from a question', 'Justify a chosen research question'],
    days: [
      { title: 'Identifying a research question', sections: [
        { heading: 'What is a research question?', body: 'A clear and concise question that you center your research around.', bullets: ['Start with something you are interested in studying, then do a deep literature search', 'Turn a chosen topic into a question about what the study aims to figure out', 'Ensure it is novel and has not been done before in primary research', 'Make it researchable and answerable', 'Keep it neither too broad nor too narrow; avoid yes/no and opinionated questions', 'Describe what research will be done'] },
        { heading: 'Example: Topic → Question', comparison: [['Topic','Fast Fashion and the Environment'],['Research question','How does Fast Fashion Contribute to Textile Waste and Pollution?']] },
        { heading: 'Activity', bullets: ['Identify topics and questions in articles', 'Rewrite topics as research questions', 'Use a worksheet, discussion, or group concept map', 'Develop 3–5 research questions'] }
      ]},
      { title: 'PCC framework', sections: [
        { heading: 'PCC: Population, Concept, Context', threeCols: [['Population','Defines the participants being studied'],['Concept','Identifies the core concept and intervention'],['Context','Sets geographical location, setting, community, etc.']] },
        { heading: 'A useful way to think about it', body: 'Who is being examined, what is being examined, what is being compared, and what is the final outcome?' },
        { heading: 'Activity: Peer review', bullets: ['Check whether Day 1 questions follow the PCC framework; revise if needed', 'Follow a checklist to evaluate each question', 'Explain the framework and how it applies to the question'] }
      ]},
      { title: 'Justification & finalization', sections: [
        { heading: 'Why developing the research question matters', bullets: ['Starts the search process', 'Provides purpose for the literature review', 'Allows sources to be tailored to what you want to research'], note: 'Have students justify their research to each other in discussion.' },
        { heading: 'Activity: Present & justify', intro: 'Students explain their finalized research question and justification to peers and instructors:', bullets: ['Why it was chosen', 'What is being addressed'] }
      ]}
    ]
  },
  {
    number: '03', title: 'Developing Objectives', summary: 'Turn a research question into aligned, practical objectives for a scoping review.', tags: ['PCC', 'SMART criteria', 'PRISMA-ScR', 'Scoping reviews'],
    frameworks: 'PCC (Population–Concept–Context), JBI Scoping Review Guidance, and PRISMA-ScR',
    outcomes: ['Differentiate a research question from research objectives', 'Write a clear primary objective aligned with the research question', 'Develop 2–4 secondary objectives', 'Ensure objectives are SMART (Specific, Measurable, Achievable, Relevant, Time-bound)', 'Align objectives with inclusion/exclusion criteria and protocol planning'],
    days: [
      { title: 'Understanding objectives', sections: [
        { heading: 'What are research objectives?', body: 'The objective explains what will happen in the review to answer the research question.', bullets: ['Developed at the beginning of the research journey, but can be refined later', 'Should align with the title, hypotheses, and model', 'Should be clear, concise, and communicate the study’s contribution', 'Typically broad, focusing on mapping and describing characteristics of included studies'], note: 'When defining an objective, consider what you aim to learn or clarify about the topic under review.' },
        { heading: 'Scoping reviews should…', bullets: ['Map existing literature', 'Identify key concepts', 'Examine types of evidence', 'Clarify definitions', 'Identify research gaps', 'Describe methodological trends'] },
        { heading: 'PCC example', body: 'The role of urban green spaces in promoting health and well-being in the general population', threeCols: [['Population','All age groups; general population'],['Concept','Exposure to or interaction with green spaces'],['Context','Urban settings — community, residential, school, etc.']] },
        { heading: 'Activities', bullets: ['Entry ticket: Review the PCC framework', 'Exit ticket: Read 3 scoping reviews and identify the research question, primary objective, secondary objective, and mapping'] }
      ]},
      { title: 'Writing the primary objective', sections: [
        { heading: 'Objectives determine…', bullets: ['Eligibility criteria', 'Search strategies', 'Data collection', 'Data synthesis or interpretation'] },
        { heading: 'Common verbs: “To…”', chips: ['Map', 'Identify', 'Investigate', 'Describe', 'Characterize', 'Summarize'], note: 'The verb depends on the study type. Descriptive studies describe a variable, while comparative studies compare a variable across groups.' },
        { heading: 'Example: Question → Primary Objective', comparison: [['Research question','What is the role of exposure to, or interaction with, green spaces in promoting health and well-being among the general population in urban settings?'],['Primary objective','To identify and present the available information regarding exposure to, or interaction with green spaces in urban settings in the general population on health outcomes (mental health, physical activity, cardiovascular health, social cohesion, etc.).']] },
        { heading: 'Activity', body: 'Convert your research question into a primary objective and align it with the PCC framework.' }
      ]},
      { title: 'Developing secondary objectives', sections: [
        { heading: 'Secondary objectives address…', bullets: ['Types of study designs used', 'Geographic distribution of studies', 'Theoretical frameworks applied', 'Definitions used for key terms', 'Measurement tools or instruments', 'Reported outcomes', 'Gaps in literature'] },
        { heading: 'Secondary objectives aim to…', bullets: ['Identify types of interventions studied', 'Describe study designs used', 'Summarize outcome measures reported', 'Examine geographic distribution of research', 'Identify research gaps'], note: 'Explore patterns, context, or outcomes beyond the main goal of the study.' },
        { heading: 'Examples', comparison: [['Secondary research questions','What physical and mental health outcomes are associated with exposure to green spaces?\n\nWhat is known about the relationship between exposure to green spaces and subjective well-being and quality of life?'],['Secondary objectives','To identify and describe the physical and mental health outcomes associated with exposure to green spaces.\n\nTo examine the existing evidence on the relationship between exposure to green spaces and subjective well-being and quality of life.']] },
        { heading: 'Activity', body: 'Write 3–4 secondary objectives and ensure they align with the PCC framework.' }
      ]},
      { title: 'Refinement & SMART criteria', sections: [
        { heading: 'SMART criteria', fourCs: [['Specific','Objective clearly defines what will be studied'],['Measurable','Can success be determined?'],['Achievable','Is scope realistic given time and resources?'],['Relevant','Does it address the research question and PCC?'],['Time-bound','Can it be completed within the review timeline?']] },
        { heading: 'Avoid objectives that are…', bullets: ['Too narrow — systematic review territory', 'Too broad — unmanageable scope'], note: 'Ensure feasibility (2,000 abstracts max) and check consistency with PRISMA-ScR.' },
        { heading: 'Activity: Peer review', intro: 'Review checklist:', bullets: ['Does it reflect mapping?', 'Are primary and secondary objectives distinct but interconnected?', 'Is it aligned with PCC?', 'Is it SMART and feasible?'] },
        { heading: 'Deliverable', bullets: ['Research question in PCC format', 'Primary research objective', 'Secondary research objectives'] }
      ]}
    ]
  }
];
