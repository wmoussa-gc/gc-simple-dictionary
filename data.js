var data = [
    { label: 'ADM', value: 'Assistant Deputy Minister'},
    { label: 'API', value: 'Application Programming Interface', explanation:"This is a concept in software technology that essentially refers to how multiple applications can interact with and obtain data from one another."},
    { label: 'ATI', value: 'Access to Information'},
    { label: 'ATIP', value: 'Access to Information and Privacy', explanation: 'Canadians can request internal records and communications from the government (i.e. ATIP requests). Recent ones have included records of Slack and email chats around COVID Alert.'},
    { label: 'ATO', value: 'Authority To Operate', explanation: "This is the compliance paperwork that gets filed by software operators within in government. Approvers are often CTOs or CISOs, and they are evaluating risk. However, the paperwork and processes are very burdensome, stem from waterfall days where there were only 1-2 releases a year, and often don't provide the information someone would actually need to measure risk. Streamlining this process is a goal of CDS's. Based on US's NIST 800-53 rev 4."},
    { label: 'ATS', value: 'Applicant Tracking System', explanation: 'We use Lever at CDS'},
    { label: 'CBSA', value: 'Canada Border Services Agency'},
    { label: 'CBSO', value: 'Cloud-based Service Owner'},
    { label: 'CCCS', value: 'Canadian Centre for Cyber Security'},
    { label: 'CDS', value: 'Canadian Digital Service', explanation: 'yours truly', link: 'https://digital.canada.ca'},
    { label: 'Celery', explanation: 'A python library. Celery is an open source asynchronous task queue or job queue which is based on distributed message passing.', link: 'https://docs.celeryproject.org/en/stable/index.html'},
    { label: 'CFIA', value: 'Canadian Food Inspection Agency'},
    { label: 'CIO', value: 'Chief Information Officer'},
    { label: 'CIS', value: 'Centre for Internet Security'},
    { label: 'CPP', value: 'Canada Pension Plan'},
    { label: 'CPP-D', value: 'Canada Pension Plan Disability'},
    { label: 'CRA', value: 'Canada Revenue Agency'},
    { label: 'CSE', value: 'Communications Security Establishment'},
    { label: 'CSEMP', value: 'Cyber Security Event Management Plan'},
    { label: 'CSP', value: 'Cloud Service Provider'},
    { label: 'CSPS', value: 'Canada School of Public Service'},
    { label: 'CSS', value: 'Corporate Services Sector'},
    { label: 'DG', value: 'Director General'},
    { label: 'DM', value: 'Deputy Minister'},
    { label: 'DND', value: 'Department of National Defence', link:"https://www.canada.ca/en/department-national-defence.html"},
    { label: 'DTO', value: 'Digital Transformation Office'},
    { label: 'ELB', value: 'Elastic Load Balancer', explanation:'an AWS service', link:"https://aws.amazon.com/elasticloadbalancing/"},
    { label: 'ESDC', value: 'Employment and Social Development Canada'},
    { label: 'FES', value: 'Fall Economic Statement', explanation:"The budget, usually tabled early in the year, is generally preceded in the fall by another major statement, the Fall Economic Statement.", link:"https://www.canada.ca/en/department-finance/services/publications/fall-economic-statement.html"},
    { label: 'FIP', value: 'Federal Identity Program'},
    { label: 'Float', value: 'Resource Planning & Management Software'},
    { label: 'Form 9200', explanation: "Requisition for Goods and Services and Construction form"},
    { label: 'FTP', value: 'federal / provincial / territorial'},
    { label: 'GC', value: 'Government of Canada'},
    { label: 'GCconnex ', value: 'Online messaging board', explanation:"GCconnex is a professional networking and collaborative workspace for all public servants, allowing them to connect and share information, leveraging the power of networking towards a more effective and efficient public service.",link:"https://gcconnex.gc.ca/login"},
    { label: 'GCKey', value: 'Single Sign On attempt by the Office of the CIO within TBS'},
    { label: 'GCMS', value: 'Global Case Management System'},
    { label: 'GDS', value: 'The UK Government Digital Service', explanation: 'The Government Digital Service is a unit of the Government of the United Kingdom\'s Cabinet Office tasked with transforming the provision of online public services.'},
    { label: 'HC', value: 'Health Canada'},
    { label: 'iATO', value: 'Interim Authority To Operate', explanation:"See ATO"},
    { label: 'IITB', value: 'Innovation Information and Technology Branch', explanation: 'IT arm of ESDC'},
    { label: 'IRCC', value: 'Immigration, Refugees and Citizenship Canada'},
    { label: 'k8s', value: 'Kubernetes', explanation:'Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.'},
    { label: 'LEEP', value: 'Local Energy Efficiency Partnerships'},
    { label: 'MC', value: 'Memorandum to Cabinet', explanation: 'The MC focuses on the policy rationale for a new or renewed policy or program initiative'},
    { label: 'MOU', value: 'Memorandum of Understanding', explanation: 'An agreement between departments for timed collaboration.'},
    { label: 'Micromission', value: '3-6 months work assignment. Micromissionee usually comes from other GC department ie secondment'},
    { label: 'MINO', value: "Minister's Office"},
    { label: 'NRCan', value: 'Natural Resources Canada'},
    { label: 'OCHRO', value: 'Office of the Chief Human Resources Officer'},
    { label: 'OCIO', value: 'Office of the Chief Information Officer'},
    { label: 'OCIF', value: 'Online Contract Information Form'},
    { label: 'OKR', value: 'objective and key result'},
    { label: 'OGD', value: 'other government department'},
    { label: 'ODS', value: 'Ontario Digitial Service'},
    { label: 'OSS', value: 'open-source software'},
    { label: 'PBMM', value: 'Protected B, Medium Integrity, Medium Availability'},
    { label: 'PCO', value: 'Privy Council Office'},
    { label: 'PF', value: 'Progression Framework', explanation: "Performance management and feedback framework for evaluating performance and communicating expectations to CDS employees. Every community at CDS has one, but all share the same five core competencies.", link:"https://docs.google.com/document/d/1fFXGg_aeE95dDTz3VRBprqNhNwZEeBIY41VTEZjOMGk/edit"},
    { label: 'PHAC', value: 'Public Health Agency of Canada', explanation:"he Public Health Agency of Canada empowers Canadians to improve their health. In partnership with others, its activities focus on preventing disease and injuries, promoting good physical and mental health, and providing information to support informed decision making. It values scientific excellence and provides national leadership in response to public health threats."},
    { label: 'PMA', value: 'Performance Management Agreement'},
    { label: 'PMO', value: "Prime Minister's Office"},
    { label: 'POR', value: 'public opinion research'},
    { label: 'PRI', value: 'personal record identifier'},
    { label: 'PSC', value: 'Public Service Commission'},
    { label: 'PSPC', value: 'Public Service Performance Management'},
    { label: 'Qualitative research', explanation: "Qualitative research involves collecting and analyzing non-numerical data (e.g., text, video, or audio) to understand concepts, opinions, or experiences. So most of our \"user research\" is focused on truth derived from how people describe their own experience and interaction with a product/service"},
    { label: 'Quantitative research', explanation: "Quantitative research is the process of collecting and analyzing numerical data. It can be used to find patterns and averages, make predictions, test causal relationships, and generalize results to wider populations."},
    { label: 'RCMP', value: 'Royal Canadian Mounted Police'},
    { label: 'SA&A', value: 'Security assessment and authorization', explanation: "The structured process through which services are assessed and authorized to operate"},
    { label: 'SC', value: 'Service Canada'},
    { label: 'SCIF', value: 'Sensitive Compartmented Information Facility', explanation: "pronounced \"skiff\", s an enclosed area within a building that is used to process Sensitive Compartmented Information (SCI) types of classified information."},
    { label: 'SCMA', value: 'Strategic Communications and Ministerial Affairs'},
    { label: 'SFT', value: 'Speech from the Throne', link:"https://www.canada.ca/en/privy-council/campaigns/speech-throne/info-speech-from-throne.html"},
    { label: 'SO', value: 'Treasury Board Secretary’s Office'},
    { label: 'SOAR', value: 'Statement of Acceptable Risk', explanation: "This documents all the risks identified during a risk threat assessment, their ratings and planned treatment."},
    { label: 'SOP', value: 'Standard Operating Procedures'},
    { label: 'SOS', value: 'Statement of Sensitivity', explanation:"This is typically filled in by the policy and security team members and outlines the sensitivity of the data (Unclassified, Protected A, Protected B, ...)"},
    { label: 'SOW', value: 'Statement of Work'},
    { label: 'SRCL', value: 'Security Requirements Check List', link:'https://www.tbs-sct.gc.ca/tbsf-fsct/350-103-eng.asp'},
    { label: 'SRTM', value: 'Security Requirement Traceability Matrix'},
    { label: 'SSC', value: 'Shared Services Canada', explanation: "Shared Services Canada is an agency of the Government of Canada responsible for providing and consolidating information technology services across federal government departments. It was established in 2011 to combine services such as email and data storage that were at the time duplicated by each agency." },
    { label: 'STT', value: 'Show The Things', explanation: "Bi-Weekly All Staff CDS Showcases"},
    { label: 'TB', value: 'Translation Bureau'},
    { label: 'TBS', value: 'Treasury Board of Canada'},
    { label: 'TBSub', value: 'Treasury Board (TB) submissions', explanation:'A TB submission, focuses primarily on program implementation, detailed costing information, results and outcomes. A submission outlines how the policy rationale and objectives are transformed into an initiative or program that will achieve those objectives'},
    { label: 'TFWP', value: 'Temporay Foreign Worker Program'},
    { label: 'VAC', value: 'Veterans Affairs Canada'},
    { label: 'WET', value: 'Web Experience Toolkit', explanation:'front-end framework for building websites, collaborative open source project led by the Government of Canada', link:'https://wet-boew.github.io/wet-boew/index-en.html'}

   

];
