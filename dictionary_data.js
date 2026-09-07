// ReadPulse AI - Curated Pedagogical Vocabulary Dictionary
const READPULSE_DICTIONARY = {
  "aerodynamic": {
    "ipa": "/ˌer.oʊ.daɪˈnæm.ɪk/",
    "meaning": "공기역학의, 유선형의",
    "cefr": "B2",
    "ko": "공기역학의, 유선형의"
  },
  "phenomenon": {
    "ipa": "/fəˈnɑː.mə.nɑːn/",
    "meaning": "현상, 경이로운 것",
    "cefr": "B2",
    "ko": "현상, 경이로운 것"
  },
  "magnus": {
    "ipa": "/ˈmæɡ.nəs/",
    "meaning": "마그누스 (회전 유체 압력 차이 효과)",
    "cefr": "C1",
    "ko": "마그누스 (회전 유체 압력 차이 효과)"
  },
  "trajectory": {
    "ipa": "/trəˈdʒek.tɚ.i/",
    "meaning": "궤적, 탄도",
    "cefr": "B2",
    "ko": "궤적, 탄도"
  },
  "revolutions": {
    "ipa": "/ˌrev.əˈluː.ʃənz/",
    "meaning": "회전, 공전, 혁명",
    "cefr": "B2",
    "ko": "회전, 공전, 혁명"
  },
  "hypoxic": {
    "ipa": "/haɪˈpɑːk.sɪk/",
    "meaning": "저산소증의, 산소가 결핍된",
    "cefr": "C1",
    "ko": "저산소증의, 산소가 결핍된"
  },
  "erythropoietin": {
    "ipa": "/ɪˌrɪθ.roʊˈpɔɪ.ə.tɪn/",
    "meaning": "에리트로포이에틴 (적혈구 생성 촉진 호르몬)",
    "cefr": "C2",
    "ko": "에리트로포이에틴 (적혈구 생성 촉진 호르몬)"
  },
  "stamina": {
    "ipa": "/ˈstæm.ə.nə/",
    "meaning": "지구력, 체력",
    "cefr": "B2",
    "ko": "지구력, 체력"
  },
  "adaptation": {
    "ipa": "/ˌæd.əpˈteɪ.ʃən/",
    "meaning": "적응, 변형",
    "cefr": "B2",
    "ko": "적응, 변형"
  },
  "probability": {
    "ipa": "/ˌprɑː.bəˈbɪl.ə.t̬i/",
    "meaning": "확률, 개연성",
    "cefr": "B1",
    "ko": "확률, 개연성"
  },
  "analytics": {
    "ipa": "/ˌæn.əˈlɪt̬.ɪks/",
    "meaning": "분석학, 데이터 분석",
    "cefr": "B2",
    "ko": "분석학, 데이터 분석"
  },
  "geometry": {
    "ipa": "/dʒiˈɑː.mə.tri/",
    "meaning": "기하학, 배열 구조",
    "cefr": "B2",
    "ko": "기하학, 배열 구조"
  },
  "primordial": {
    "ipa": "/praɪˈmɔːr.di.əl/",
    "meaning": "원초의, 태고의",
    "cefr": "C1",
    "ko": "원초의, 태고의"
  },
  "spectroscopy": {
    "ipa": "/spekˈtrɑː.skə.pi/",
    "meaning": "분광학 (스펙트럼 분석)",
    "cefr": "C2",
    "ko": "분광학 (스펙트럼 분석)"
  },
  "cosmological": {
    "ipa": "/ˌkɑːz.məˈlɑː.dʒɪ.kəl/",
    "meaning": "우주론의",
    "cefr": "C1",
    "ko": "우주론의"
  },
  "therapeutics": {
    "ipa": "/ˌθer.əˈpjuː.tɪks/",
    "meaning": "치료법, 치료제",
    "cefr": "C1",
    "ko": "치료법, 치료제"
  },
  "remission": {
    "ipa": "/rɪˈmɪʃ.ən/",
    "meaning": "관해 (질병 증상의 완화 및 소멸)",
    "cefr": "C1",
    "ko": "관해 (질병 증상의 완화 및 소멸)"
  },
  "anemia": {
    "ipa": "/əˈniː.mi.ə/",
    "meaning": "빈혈",
    "cefr": "B2",
    "ko": "빈혈"
  },
  "fissures": {
    "ipa": "/ˈfɪʃ.ɚz/",
    "meaning": "균열, 갈라진 틈",
    "cefr": "C1",
    "ko": "균열, 갈라진 틈"
  },
  "hydrothermal": {
    "ipa": "/ˌhaɪ.droʊˈθɝː.məl/",
    "meaning": "열수의, 온천의",
    "cefr": "C1",
    "ko": "열수의, 온천의"
  },
  "autonomous": {
    "ipa": "/ɑːˈtɑː.nə.məs/",
    "pos": "형용사",
    "ko": "자율적인, 자주적인",
    "cefr": "B2",
    "example": "Autonomous AI agents execute complex multi-step refactoring workflows."
  },
  "ephemeral": {
    "ipa": "/ɪˈfem.ər.əl/",
    "meaning": "일시적인, 수명이 짧은",
    "cefr": "C1",
    "ko": "일시적인, 수명이 짧은"
  },
  "superposition": {
    "ipa": "/ˌsuː.pɚ.pəˈzɪʃ.ən/",
    "meaning": "양자 중첩 (여러 상태가 공존하는 상태)",
    "cefr": "C1",
    "ko": "양자 중첩 (여러 상태가 공존하는 상태)"
  },
  "entangled": {
    "ipa": "/ɪnˈtæŋ.ɡəld/",
    "meaning": "얽힌, 양자 얽힘의",
    "cefr": "B2",
    "ko": "얽힌, 양자 얽힘의"
  },
  "chokeholds": {
    "ipa": "/ˈtʃoʊk.hoʊldz/",
    "meaning": "병목 지점, 목 조르기",
    "cefr": "C1",
    "ko": "병목 지점, 목 조르기"
  },
  "subsidies": {
    "ipa": "/ˈsʌb.sə.diz/",
    "meaning": "보조금, 장려금",
    "cefr": "B2",
    "ko": "보조금, 장려금"
  },
  "lithography": {
    "ipa": "/lɪˈθɑː.ɡrə.fi/",
    "meaning": "노광 공정, 석판 인쇄술",
    "cefr": "C1",
    "ko": "노광 공정, 석판 인쇄술"
  },
  "photovoltaics": {
    "ipa": "/ˌfoʊ.toʊ.vɑːlˈteɪ.ɪks/",
    "meaning": "태양광 발전 기술",
    "cefr": "C1",
    "ko": "태양광 발전 기술"
  },
  "levelized": {
    "ipa": "/ˈlev.əl.aɪzd/",
    "meaning": "균등화된 (LCOE: 균등화 발전 원가)",
    "cefr": "C1",
    "ko": "균등화된 (LCOE: 균등화 발전 원가)"
  },
  "sovereignty": {
    "ipa": "/ˈsɑːv.rən.ti/",
    "meaning": "주권, 통치권",
    "cefr": "C1",
    "ko": "주권, 통치권"
  },
  "authenticity": {
    "ipa": "/ˌɑː.θenˈtɪs.ə.t̬i/",
    "meaning": "진정성, 진짜임",
    "cefr": "C1",
    "ko": "진정성, 진짜임"
  },
  "conspicuous": {
    "ipa": "/kənˈspɪk.ju.əs/",
    "meaning": "눈에 띄는, 과시적인",
    "cefr": "C1",
    "ko": "눈에 띄는, 과시적인"
  },
  "mycelium": {
    "ipa": "/maɪˈsiː.li.əm/",
    "meaning": "균사체 (버섯 뿌리 유래 친환경 소재)",
    "cefr": "C2",
    "ko": "균사체 (버섯 뿌리 유래 친환경 소재)"
  },
  "consecrated": {
    "ipa": "/ˈkɑːn.sə.kreɪ.t̬ɪd/",
    "meaning": "신성하게 봉헌된",
    "cefr": "C1",
    "ko": "신성하게 봉헌된"
  },
  "proposition": {
    "ipa": "/ˌprɑː.pəˈzɪʃ.ən/",
    "pos": "명사",
    "ko": "명제, 제안, 진술",
    "cefr": "C1",
    "example": "A nation dedicated to the proposition that all men are created equal."
  },
  "perish": {
    "ipa": "/ˈper.ɪʃ/",
    "pos": "동사",
    "ko": "소멸하다, 비명에 죽다",
    "cefr": "C1",
    "example": "Government of the people shall not perish from the earth."
  },
  "chiasmus": {
    "ipa": "/kaɪˈæz.məs/",
    "meaning": "교차 대구법 (A-B를 B-A로 배치하는 수사법)",
    "cefr": "C2",
    "ko": "교차 대구법 (A-B를 B-A로 배치하는 수사법)"
  },
  "paralyzes": {
    "ipa": "/ˈper.ə.laɪ.zɪz/",
    "meaning": "마비시키다, 무력화하다",
    "cefr": "B2",
    "ko": "마비시키다, 무력화하다"
  },
  "despotism": {
    "ipa": "/ˈdes.pə.tɪ.zəm/",
    "meaning": "전제정치, 폭정",
    "cefr": "C1",
    "ko": "전제정치, 폭정"
  },
  "insidious": {
    "ipa": "/ɪnˈsɪd.i.əs/",
    "meaning": "은밀한, 서서히 퍼지는 위험한",
    "cefr": "C1",
    "ko": "은밀한, 서서히 퍼지는 위험한"
  },
  "valiantly": {
    "ipa": "/ˈvæl.i.ənt.li/",
    "meaning": "용맹하게, 씩씩하게",
    "cefr": "C1",
    "ko": "용맹하게, 씩씩하게"
  },
  "shortcoming": {
    "ipa": "/ˈʃɔːrtˌkʌm.ɪŋ/",
    "meaning": "단점, 결점",
    "cefr": "B2",
    "ko": "단점, 결점"
  },
  "self-evident": {
    "ipa": "/ˌself.ev.əˈdent/",
    "meaning": "자명한, 굳이 설명이 필요 없는",
    "cefr": "C1",
    "ko": "자명한, 굳이 설명이 필요 없는"
  },
  "consecrate": {
    "ipa": "/ˈkɑːn.sə.kreɪt/",
    "pos": "동사",
    "ko": "신성하게 하다, 봉헌하다",
    "cefr": "C2",
    "example": "The ground was consecrated by the sacrifices of fallen soldiers."
  },
  "hallow": {
    "ipa": "/ˈhæl.oʊ/",
    "pos": "동사",
    "ko": "신성하게 하다, 찬양하다",
    "cefr": "C2",
    "example": "We cannot hallow this ground more than the heroes who struggled here."
  },
  "endure": {
    "ipa": "/ɪnˈdʊr/",
    "pos": "동사",
    "ko": "견디다, 지속되다",
    "cefr": "B2",
    "example": "Testing whether that nation so dedicated can long endure."
  },
  "civility": {
    "ipa": "/səˈvɪl.ə.t̬i/",
    "pos": "명사",
    "ko": "정중함, 예의",
    "cefr": "C1",
    "example": "Civility is not a sign of weakness in international diplomacy."
  },
  "negotiate": {
    "ipa": "/nəˈɡoʊ.ʃi.eɪt/",
    "pos": "동사",
    "ko": "협상하다, 절충하다",
    "cefr": "B2",
    "example": "Let us never negotiate out of fear, but never fear to negotiate."
  },
  "tribulation": {
    "ipa": "/ˌtrɪb.jəˈleɪ.ʃən/",
    "pos": "명사",
    "ko": "환난, 고난, 시련",
    "cefr": "C2",
    "example": "Rejoicing in hope, patient in tribulation during dark times."
  },
  "tempered": {
    "ipa": "/ˈtem.pɚd/",
    "pos": "형용사",
    "ko": "단련된, 조절된",
    "cefr": "C1",
    "example": "Born in this century, tempered by war and disciplined by peace."
  },
  "candor": {
    "ipa": "/ˈkæn.dɚ/",
    "pos": "명사",
    "ko": "솔직함, 정직",
    "cefr": "C1",
    "example": "A leadership of candor and vigor in times of severe national distress."
  },
  "cynicism": {
    "ipa": "/ˈsɪn.ə.sɪ.zəm/",
    "pos": "명사",
    "ko": "냉소주의, 비관",
    "cefr": "C1",
    "example": "Where we are met with cynicism and doubt, we respond with hope."
  },
  "creed": {
    "ipa": "/kriːd/",
    "pos": "명사",
    "ko": "신념, 신조",
    "cefr": "C1",
    "example": "That timeless creed that sums up the spirit of a people: Yes We Can."
  },
  "promissory": {
    "ipa": "/ˈprɑː.mə.sɔːr.i/",
    "pos": "형용사",
    "ko": "약속의, 어음의",
    "cefr": "C2",
    "example": "The Constitution was a promissory note guaranteeing freedom to every American."
  },
  "defaulted": {
    "ipa": "/dɪˈfɑːltɪd/",
    "pos": "동사",
    "ko": "채무를 불이행하다, 부도내다",
    "cefr": "C1",
    "example": "America has defaulted on this promissory note for citizens of color."
  },
  "unalienable": {
    "ipa": "/ʌnˈeɪ.li.ə.nə.bəl/",
    "pos": "형용사",
    "ko": "양도할 수 없는, 빼앗을 수 없는",
    "cefr": "C2",
    "example": "Unalienable rights of life, liberty, and the pursuit of happiness."
  },
  "manacles": {
    "ipa": "/ˈmæn.ə.kəlz/",
    "pos": "명사",
    "ko": "수갑, 족쇄, 구속",
    "cefr": "C2",
    "example": "Crippled by the manacles of segregation and chains of discrimination."
  },
  "arena": {
    "ipa": "/əˈriː.nə/",
    "pos": "명사",
    "ko": "경기장, 활약의 무대",
    "cefr": "B2",
    "example": "The credit belongs to the man who is actually in the arena."
  },
  "fastidiousness": {
    "ipa": "/fæsˈtɪd.i.əs.nəs/",
    "pos": "명사",
    "ko": "지나친 까다로움, 결벽",
    "cefr": "C2",
    "example": "Refinement should not develop into fastidiousness that shuns work."
  },
  "tepid": {
    "ipa": "/ˈtep.ɪd/",
    "pos": "형용사",
    "ko": "미지근한, 열정이 없는",
    "cefr": "C1",
    "example": "A tepid soul that knows nothing of great and generous emotion."
  },
  "partisanship": {
    "ipa": "/ˈpɑːr.t̬ə.zən.ʃɪp/",
    "pos": "명사",
    "ko": "당파성, 당파적 대립",
    "cefr": "C1",
    "example": "Washington warned against the baneful effects of excessive partisanship."
  },
  "edifice": {
    "ipa": "/ˈed.ə.fɪs/",
    "pos": "명사",
    "ko": "거대한 건축물, 대조직",
    "cefr": "C2",
    "example": "A main pillar in the edifice of your real independence."
  },
  "orchestration": {
    "ipa": "/ˌɔːr.kəˈstreɪ.ʃən/",
    "pos": "명사",
    "ko": "조율, 종합적 지휘·편성",
    "cefr": "C1",
    "example": "Multi-agent orchestration allows multiple specialized models to collaborate."
  },
  "deterministic": {
    "ipa": "/dɪˌtɝː.mɪˈnɪs.tɪk/",
    "pos": "형용사",
    "ko": "결정론적인, 예측 가능한",
    "cefr": "C1",
    "example": "Ensuring deterministic and reproducible builds in modern cloud engineering."
  },
  "decoherence": {
    "ipa": "/ˌdiː.koʊˈhɪr.əns/",
    "pos": "명사",
    "ko": "결어긋남 (양자 상태의 붕괴)",
    "cefr": "C2",
    "example": "Thermal noise causes quantum decoherence, collapsing fragile qubit superposition."
  },
  "topological": {
    "ipa": "/ˌtɑː.pəˈlɑː.dʒɪ.kəl/",
    "pos": "형용사",
    "ko": "위상수학의, 위상적",
    "cefr": "C2",
    "example": "Topological error correction protects quantum information from environmental noise."
  },
  "cryptography": {
    "ipa": "/krɪpˈtɑː.ɡrə.fi/",
    "pos": "명사",
    "ko": "암호학, 암호 체계",
    "cefr": "B2",
    "example": "Post-quantum cryptography relies on lattice mathematical structures."
  },
  "biosignature": {
    "ipa": "/ˈbaɪ.oʊˌsɪɡ.nə.tʃɚ/",
    "pos": "명사",
    "ko": "생체 지표, 생명체 존재 흔적",
    "cefr": "C1",
    "example": "Atmospheric methane and oxygen combinations serve as potential biosignatures."
  },
  "commencement": {
    "ipa": "/kəˈmensmənt/",
    "pos": "명사",
    "ko": "졸업식, 시작",
    "example": "I am honored to be with you today at your commencement."
  },
  "karma": {
    "ipa": "/ˈkɑːrmə/",
    "pos": "명사",
    "ko": "업보, 인과응보",
    "example": "You have to trust in something: your gut, destiny, life, karma."
  },
  "destiny": {
    "ipa": "/ˈdestəni/",
    "pos": "명사",
    "ko": "운명",
    "example": "Believing in your destiny will give you the confidence to follow your heart."
  },
  "diverge": {
    "ipa": "/daɪˈvɜːrdʒ/",
    "pos": "동사",
    "ko": "갈라지다, 비전이 엇갈리다",
    "example": "Our visions began to diverge and eventually we had a falling out."
  },
  "dogma": {
    "ipa": "/ˈdɔːɡmə/",
    "pos": "명사",
    "ko": "도그마, 신조, 교리",
    "example": "Don't be trapped by dogma, which is living with the results of other people's thinking."
  },
  "surrender": {
    "ipa": "/səˈrendər/",
    "pos": "동사",
    "ko": "항복하다, 굴복하다",
    "example": "We shall fight in the hills; we shall never surrender."
  },
  "deliverance": {
    "ipa": "/dɪˈlɪvərəns/",
    "pos": "명사",
    "ko": "구출, 구조, 해방",
    "example": "There was a victory inside this deliverance, which should be noted."
  },
  "subjugate": {
    "ipa": "/ˈsʌbdʒəɡeɪt/",
    "pos": "동사",
    "ko": "정복하다, 복종시키다",
    "example": "Even if this island were subjugated and starving, our Empire would carry on."
  },
  "illiteracy": {
    "ipa": "/ɪˈlɪtərəsi/",
    "pos": "명사",
    "ko": "문맹",
    "example": "Let us wage a global struggle against illiteracy, poverty and terrorism."
  },
  "obscurity": {
    "ipa": "/əbˈskjʊrəti/",
    "pos": "명사",
    "ko": "어둠, 모호함, 무명",
    "example": "In our obscurity, in all this vastness, there is no hint that help will come."
  },
  "delusion": {
    "ipa": "/dɪˈluːʒn/",
    "pos": "명사",
    "ko": "착각, 망상",
    "example": "The delusion that we have some privileged position in the Universe is challenged."
  },
  "barricade": {
    "ipa": "/ˈbærɪkeɪd/",
    "pos": "동사/명사",
    "ko": "바리케이드를 치다, 가로막다",
    "example": "Greed has barricaded the world with hate."
  },
  "cynical": {
    "ipa": "/ˈsɪnɪkl/",
    "pos": "형용사",
    "ko": "냉소적인",
    "example": "Our knowledge has made us cynical; our cleverness, hard and unkind."
  },
  "humanity": {
    "ipa": "/hjuːˈmænəti/",
    "pos": "명사",
    "ko": "인간성, 인류애",
    "example": "More than machinery we need humanity. More than cleverness we need kindness."
  },
  "baseline": {
    "ipa": "/ˈbeɪs.laɪn/",
    "pos": "명사",
    "ko": "베이스라인 (코트 끝선), 기준선",
    "cefr": "B1",
    "example": "He stood behind the baseline to serve."
  },
  "sweeper": {
    "ipa": "/ˈswiː.pɚ/",
    "pos": "명사",
    "ko": "스위퍼 (옆으로 크게 휘는 신종 슬라이더)",
    "cefr": "B2",
    "example": "His sweeper moves several inches sideways."
  },
  "sabermetric": {
    "ipa": "/ˌseɪ.bɚˈmet.rɪk/",
    "meaning": "세이버메트릭스의, 야구 통계학의",
    "cefr": "B2",
    "ko": "세이버메트릭스의, 야구 통계학의"
  },
  "kinetic": {
    "ipa": "/kɪˈnet̬.ɪk/",
    "meaning": "운동의, 운동 에너지의",
    "cefr": "B2",
    "ko": "운동의, 운동 에너지의"
  },
  "endurance": {
    "ipa": "/ɪnˈdʊr.əns/",
    "meaning": "지구력, 인내력",
    "cefr": "B1",
    "ko": "지구력, 인내력"
  },
  "metamorphosis": {
    "ipa": "/ˌmet̬.əˈmɔːr.fə.sɪs/",
    "meaning": "변모, 탈바꿈, 완전한 변신",
    "cefr": "C1",
    "ko": "변모, 탈바꿈, 완전한 변신"
  },
  "implausible": {
    "ipa": "/ɪmˈplɑː.zə.bəl/",
    "meaning": "믿기 어려운, 타당해 보이지 않는",
    "cefr": "B2",
    "ko": "믿기 어려운, 타당해 보이지 않는"
  },
  "tennis": {
    "ipa": "/ˈten.ɪs/",
    "pos": "명사",
    "ko": "테니스 (라켓으로 공을 넘기는 구기 종목)",
    "cefr": "A1",
    "example": "They love playing tennis on weekends."
  },
  "court": {
    "ipa": "/kɔːrt/",
    "pos": "명사",
    "ko": "코트, 경기장, 법원",
    "cefr": "A2",
    "example": "The players walked onto the tennis court."
  },
  "racket": {
    "ipa": "/ˈræk.ɪt/",
    "pos": "명사",
    "ko": "라켓 (테니스·배드민턴 채)",
    "cefr": "A2",
    "example": "He bought a lightweight tennis racket."
  },
  "player": {
    "ipa": "/ˈpleɪ.ɚ/",
    "pos": "명사",
    "ko": "선수, 경기자",
    "cefr": "A1",
    "example": "She is the best player on the team."
  },
  "serve": {
    "ipa": "/sɝːv/",
    "pos": "동사",
    "ko": "서브를 넣다, 제공하다, 섬기다",
    "cefr": "A2",
    "example": "He can serve the ball at high speed."
  },
  "return": {
    "ipa": "/rɪˈtɝːn/",
    "pos": "동사/명사",
    "ko": "돌려주다, 받아치다(리턴), 귀환",
    "cefr": "A2",
    "example": "She made a great return of the serve."
  },
  "spin": {
    "ipa": "/spɪn/",
    "pos": "명사/동사",
    "ko": "회전, 스핀; 회전시키다",
    "cefr": "B1",
    "example": "The ball had a lot of topspin."
  },
  "speed": {
    "ipa": "/spiːd/",
    "pos": "명사",
    "ko": "속도, 빠르기",
    "cefr": "A2",
    "example": "The pitch reached a high speed."
  },
  "champion": {
    "ipa": "/ˈtʃæm.pi.ən/",
    "pos": "명사",
    "ko": "챔피언, 우승자",
    "cefr": "B1",
    "example": "She became the Grand Slam champion."
  },
  "tournament": {
    "ipa": "/ˈtʊr.nə.mənt/",
    "pos": "명사",
    "ko": "토너먼트, 경기 대회",
    "cefr": "B1",
    "example": "Thousands of fans attended the tournament."
  },
  "match": {
    "ipa": "/mætʃ/",
    "pos": "명사",
    "ko": "경기, 시합, 어울리는 것",
    "cefr": "A2",
    "example": "It was an exciting tennis match."
  },
  "ball": {
    "ipa": "/bɑːl/",
    "pos": "명사",
    "ko": "공, 무도회",
    "cefr": "A1",
    "example": "He hit the ball over the net."
  },
  "net": {
    "ipa": "/net/",
    "pos": "명사",
    "ko": "그물, 네트",
    "cefr": "A2",
    "example": "The ball touched the net."
  },
  "point": {
    "ipa": "/pɔɪnt/",
    "pos": "명사",
    "ko": "점수, 요점, 지점",
    "cefr": "A2",
    "example": "They won the final point."
  },
  "break": {
    "ipa": "/breɪk/",
    "pos": "명사/동사",
    "ko": "휴식, 브레이크; 깨뜨리다",
    "cefr": "A2",
    "example": "He scored a critical service break."
  },
  "forehand": {
    "ipa": "/ˈfɔːr.hænd/",
    "pos": "명사",
    "ko": "포핸드 (손바닥 쪽으로 치는 타구)",
    "cefr": "B1",
    "example": "His forehand is his strongest weapon."
  },
  "backhand": {
    "ipa": "/ˈbæk.hænd/",
    "pos": "명사",
    "ko": "백핸드 (손등 쪽으로 치는 타구)",
    "cefr": "B1",
    "example": "She hit a smooth one-handed backhand."
  },
  "slide": {
    "ipa": "/slaɪd/",
    "pos": "동사",
    "ko": "미끄러지다, 슬라이딩하다",
    "cefr": "A2",
    "example": "The player can slide safely on hard courts."
  },
  "balance": {
    "ipa": "/ˈbæl.əns/",
    "pos": "명사",
    "ko": "균형, 평형",
    "cefr": "B1",
    "example": "Good balance is essential for athletes."
  },
  "coach": {
    "ipa": "/koʊtʃ/",
    "pos": "명사",
    "ko": "코치, 지도자",
    "cefr": "A2",
    "example": "The coach gave valuable tactical advice."
  },
  "baseball": {
    "ipa": "/ˈbeɪs.bɑːl/",
    "pos": "명사",
    "ko": "야구",
    "cefr": "A1",
    "example": "Baseball is popular in Korea and the US."
  },
  "pitcher": {
    "ipa": "/ˈpɪtʃ.ɚ/",
    "pos": "명사",
    "ko": "투수 (공을 던지는 선수)",
    "cefr": "A2",
    "example": "The starting pitcher struck out ten batters."
  },
  "batter": {
    "ipa": "/ˈbæt̬.ɚ/",
    "pos": "명사",
    "ko": "타자 (방망이를 치는 선수)",
    "cefr": "A2",
    "example": "The batter swung at the fastball."
  },
  "hitter": {
    "ipa": "/ˈhɪt̬.ɚ/",
    "pos": "명사",
    "ko": "타자, 타격자",
    "cefr": "A2",
    "example": "He is known as a dangerous power hitter."
  },
  "pitch": {
    "ipa": "/pɪtʃ/",
    "pos": "명사/동사",
    "ko": "투구, 구종; 던지다",
    "cefr": "A2",
    "example": "That was an unhittable breaking pitch."
  },
  "slider": {
    "ipa": "/ˈslaɪ.dɚ/",
    "pos": "명사",
    "ko": "슬라이더 (바깥으로 휘어지는 구종)",
    "cefr": "B1",
    "example": "He threw a sharp slider on two strikes."
  },
  "strike": {
    "ipa": "/straɪk/",
    "pos": "명사/동사",
    "ko": "스트라이크, 치다, 파업",
    "cefr": "A2",
    "example": "The umpire called a strike."
  },
  "strikeout": {
    "ipa": "/ˈstraɪk.aʊt/",
    "pos": "명사",
    "ko": "삼진 아웃",
    "cefr": "B1",
    "example": "He ended the inning with a strikeout."
  },
  "home": {
    "ipa": "/hoʊm/",
    "pos": "명사",
    "ko": "홈, 집",
    "cefr": "A1",
    "example": "He ran safely to home plate."
  },
  "run": {
    "ipa": "/rʌn/",
    "pos": "동사/명사",
    "ko": "달리다; 득점(점수)",
    "cefr": "A1",
    "example": "They scored three runs in the fifth inning."
  },
  "steal": {
    "ipa": "/stiːl/",
    "pos": "동사",
    "ko": "도루하다, 훔치다",
    "cefr": "A2",
    "example": "Ohtani can steal bases with incredible speed."
  },
  "base": {
    "ipa": "/beɪs/",
    "pos": "명사",
    "ko": "루(베이스), 기초",
    "cefr": "A2",
    "example": "He slid head-first into second base."
  },
  "league": {
    "ipa": "/liːɡ/",
    "pos": "명사",
    "ko": "리그, 연맹",
    "cefr": "B1",
    "example": "Major League Baseball is the top division."
  },
  "season": {
    "ipa": "/ˈsiː.zən/",
    "pos": "명사",
    "ko": "시즌, 계절",
    "cefr": "A2",
    "example": "It was a record-breaking baseball season."
  },
  "milestone": {
    "ipa": "/ˈmaɪl.stoʊn/",
    "pos": "명사",
    "ko": "이정표, 중대한 역사적 기록",
    "cefr": "B2",
    "example": "Reaching 50-50 was an incredible milestone."
  },
  "record": {
    "ipa": "/ˈrek.ɚd/",
    "pos": "명사",
    "ko": "기록, 음반",
    "cefr": "A2",
    "example": "He broke the all-time home run record."
  },
  "seam": {
    "ipa": "/siːm/",
    "pos": "명사",
    "ko": "솔기, 실밥 (야구공의 꿰맨 자국)",
    "cefr": "B2",
    "example": "Airflow over the seams bends the pitch."
  },
  "camera": {
    "ipa": "/ˈkæm.rə/",
    "pos": "명사",
    "ko": "카메라",
    "cefr": "A1",
    "example": "High-speed cameras capture every movement."
  },
  "muscle": {
    "ipa": "/ˈmʌs.əl/",
    "pos": "명사",
    "ko": "근육",
    "cefr": "A2",
    "example": "He built strong leg muscles for sprinting."
  },
  "agility": {
    "ipa": "/əˈdʒɪl.ə.t̬i/",
    "pos": "명사",
    "ko": "민첩성, 날렵함",
    "cefr": "B2",
    "example": "Agility helps players change direction fast."
  },
  "humble": {
    "ipa": "/ˈhʌm.bəl/",
    "pos": "형용사",
    "ko": "겸손한, 소박한",
    "cefr": "B1",
    "example": "Despite his fame, he remains humble."
  },
  "airplane": {
    "ipa": "/ˈer.pleɪn/",
    "pos": "명사",
    "ko": "비행기",
    "cefr": "A1",
    "example": "The airplane flew above the clouds."
  },
  "flight": {
    "ipa": "/flaɪt/",
    "pos": "명사",
    "ko": "비행, 항공편",
    "cefr": "A2",
    "example": "We had a smooth flight across the country."
  },
  "pilot": {
    "ipa": "/ˈpaɪ.lət/",
    "pos": "명사",
    "ko": "조종사",
    "cefr": "A2",
    "example": "The pilot announced our arrival time."
  },
  "passenger": {
    "ipa": "/ˈpæs.ən.dʒɚ/",
    "pos": "명사",
    "ko": "승객",
    "cefr": "A2",
    "example": "Every passenger wore a seatbelt."
  },
  "seatbelt": {
    "ipa": "/ˈsiːtˌbelt/",
    "pos": "명사",
    "ko": "좌석 안전벨트",
    "cefr": "A2",
    "example": "Please keep your seatbelt fastened."
  },
  "turbulence": {
    "ipa": "/ˈtɝː.bjə.ləns/",
    "pos": "명사",
    "ko": "난기류 (비행기 흔들림), 소란",
    "cefr": "B2",
    "example": "The plane shook due to sudden turbulence."
  },
  "radar": {
    "ipa": "/ˈreɪ.dɑːr/",
    "pos": "명사",
    "ko": "레이더 (전파 탐지기)",
    "cefr": "B1",
    "example": "Weather radar detects storm clouds."
  },
  "cloud": {
    "ipa": "/klaʊd/",
    "pos": "명사",
    "ko": "구름",
    "cefr": "A1",
    "example": "White clouds filled the blue sky."
  },
  "climate": {
    "ipa": "/ˈklaɪ.mət/",
    "pos": "명사",
    "ko": "기후",
    "cefr": "A2",
    "example": "Climate change causes warmer temperatures."
  },
  "wind": {
    "ipa": "/wɪnd/",
    "pos": "명사",
    "ko": "바람",
    "cefr": "A1",
    "example": "Strong winds blew across the ocean."
  },
  "current": {
    "ipa": "/ˈkɝː.ənt/",
    "pos": "명사",
    "ko": "기류, 조류, 전류; 현재의",
    "cefr": "B1",
    "example": "High jet stream currents affect flight times."
  },
  "warm": {
    "ipa": "/wɔːrm/",
    "pos": "형용사",
    "ko": "따뜻한",
    "cefr": "A1",
    "example": "Warm air rises into the atmosphere."
  },
  "cold": {
    "ipa": "/koʊld/",
    "pos": "형용사",
    "ko": "차가운",
    "cefr": "A1",
    "example": "Cold wind blew from the north."
  },
  "sensor": {
    "ipa": "/ˈsen.sɚ/",
    "pos": "명사",
    "ko": "감지기, 센서",
    "cefr": "B1",
    "example": "Sensors alert the pilots to air changes."
  },
  "safe": {
    "ipa": "/seɪf/",
    "pos": "형용사",
    "ko": "안전한",
    "cefr": "A1",
    "example": "Flying is one of the safest travel methods."
  },
  "smooth": {
    "ipa": "/smuːð/",
    "pos": "형용사",
    "ko": "부드러운, 평온한",
    "cefr": "A2",
    "example": "The landing was very smooth."
  },
  "computer": {
    "ipa": "/kəmˈpjuː.t̬ɚ/",
    "pos": "명사",
    "ko": "컴퓨터",
    "cefr": "A1",
    "example": "Computers process data in milliseconds."
  },
  "software": {
    "ipa": "/ˈsɑːft.wer/",
    "pos": "명사",
    "ko": "소프트웨어, 프로그램",
    "cefr": "A2",
    "example": "They updated their antivirus software."
  },
  "security": {
    "ipa": "/səˈkjʊr.ə.t̬i/",
    "pos": "명사",
    "ko": "보안, 안전",
    "cefr": "B1",
    "example": "Cybersecurity protects personal information."
  },
  "expert": {
    "ipa": "/ˈek.spɝːt/",
    "pos": "명사",
    "ko": "전문가",
    "cefr": "B1",
    "example": "She consulted an AI expert."
  },
  "agent": {
    "ipa": "/ˈeɪ.dʒənt/",
    "pos": "명사",
    "ko": "에이전트, 대리인, 자율 프로그램",
    "cefr": "B1",
    "example": "AI agents can complete complex web tasks."
  },
  "website": {
    "ipa": "/ˈweb.saɪt/",
    "pos": "명사",
    "ko": "웹사이트",
    "cefr": "A1",
    "example": "Visit our official website for details."
  },
  "flaw": {
    "ipa": "/flɑː/",
    "pos": "명사",
    "ko": "결함, 취약점, 흠",
    "cefr": "B2",
    "example": "They discovered a minor flaw in the code."
  },
  "bug": {
    "ipa": "/bʌɡ/",
    "pos": "명사",
    "ko": "소프트웨어 버그, 벌레",
    "cefr": "A2",
    "example": "The developers quickly fixed the software bug."
  },
  "code": {
    "ipa": "/koʊd/",
    "pos": "명사",
    "ko": "컴퓨터 코드, 암호",
    "cefr": "A2",
    "example": "He writes clean and readable code."
  },
  "hacker": {
    "ipa": "/ˈhæk.ɚ/",
    "pos": "명사",
    "ko": "해커 (컴퓨터 침입자)",
    "cefr": "B1",
    "example": "The firewall stopped the hacker's attack."
  },
  "protect": {
    "ipa": "/prəˈtekt/",
    "pos": "동사",
    "ko": "보호하다, 지키다",
    "cefr": "A2",
    "example": "Passwords protect your online account."
  },
  "defend": {
    "ipa": "/dɪˈfend/",
    "pos": "동사",
    "ko": "방어하다, 지키다",
    "cefr": "B1",
    "example": "They defend company servers against attacks."
  },
  "system": {
    "ipa": "/ˈsɪs.təm/",
    "pos": "명사",
    "ko": "시스템, 체계",
    "cefr": "A2",
    "example": "The backup system worked perfectly."
  },
  "data": {
    "ipa": "/ˈdeɪ.t̬ə/",
    "pos": "명사",
    "ko": "데이터, 자료",
    "cefr": "A2",
    "example": "Data is stored on cloud servers."
  },
  "rule": {
    "ipa": "/ruːl/",
    "pos": "명사",
    "ko": "규칙, 원칙",
    "cefr": "A1",
    "example": "Always follow the safety rules."
  },
  "smart": {
    "ipa": "/smɑːrt/",
    "pos": "형용사",
    "ko": "똑똑한, 스마트한",
    "cefr": "A1",
    "example": "Smart devices make life convenient."
  },
  "important": {
    "ipa": "/ɪmˈpɔːr.tənt/",
    "pos": "형용사",
    "ko": "중요한",
    "cefr": "A1",
    "example": "Practice is important for success."
  },
  "future": {
    "ipa": "/ˈfjuː.tʃɚ/",
    "pos": "명사/형용사",
    "ko": "미래, 장래",
    "cefr": "A2",
    "example": "Technology is shaping the future."
  },
  "history": {
    "ipa": "/ˈhɪs.t̬ɚ.i/",
    "pos": "명사",
    "ko": "역사",
    "cefr": "A2",
    "example": "They made history with this discovery."
  },
  "human": {
    "ipa": "/ˈhjuː.mən/",
    "pos": "명사/형용사",
    "ko": "인간, 사람",
    "cefr": "A2",
    "example": "Human curiosity drives exploration."
  },
  "world": {
    "ipa": "/wɝːld/",
    "pos": "명사",
    "ko": "세계, 세상",
    "cefr": "A1",
    "example": "Fans from around the world watched the game."
  },
  "science": {
    "ipa": "/ˈsaɪ.əns/",
    "pos": "명사",
    "ko": "과학",
    "cefr": "A2",
    "example": "Science helps us understand nature."
  },
  "study": {
    "ipa": "/ˈstʌd.i/",
    "pos": "동사/명사",
    "ko": "연구하다, 공부하다; 연구",
    "cefr": "A1",
    "example": "Researchers study ocean temperatures."
  },
  "change": {
    "ipa": "/tʃeɪndʒ/",
    "pos": "동사/명사",
    "ko": "변화하다, 바꾸다; 변화",
    "cefr": "A1",
    "example": "Seasons change throughout the year."
  },
  "learn": {
    "ipa": "/lɝːn/",
    "pos": "동사",
    "ko": "배우다, 학습하다",
    "cefr": "A1",
    "example": "She wants to learn new languages."
  },
  "practice": {
    "ipa": "/ˈpræk.tɪs/",
    "pos": "동사/명사",
    "ko": "연습하다; 연습, 실행",
    "cefr": "A2",
    "example": "Practice makes perfect."
  },
  "easy": {
    "ipa": "/ˈiː.zi/",
    "pos": "형용사",
    "ko": "쉬운, 편안한",
    "cefr": "A1",
    "example": "The test was surprisingly easy."
  },
  "difficult": {
    "ipa": "/ˈdɪf.ə.kəlt/",
    "pos": "형용사",
    "ko": "어려운, 힘든",
    "cefr": "A1",
    "example": "It was a difficult problem to solve."
  },
  "fast": {
    "ipa": "/fæst/",
    "pos": "형용사/부사",
    "ko": "빠른; 빨리",
    "cefr": "A1",
    "example": "He is a very fast runner."
  },
  "slow": {
    "ipa": "/sloʊ/",
    "pos": "형용사",
    "ko": "느린",
    "cefr": "A1",
    "example": "The turtle is slow but steady."
  },
  "strong": {
    "ipa": "/strɑːŋ/",
    "pos": "형용사",
    "ko": "강한, 튼튼한",
    "cefr": "A1",
    "example": "He has strong shoulder muscles."
  },
  "great": {
    "ipa": "/ɡreɪt/",
    "pos": "형용사",
    "ko": "위대한, 대단한, 좋은",
    "cefr": "A1",
    "example": "It was a great achievement."
  },
  "era": {
    "ipa": "/ˈɪr.ə/",
    "pos": "명사",
    "ko": "시대, 연대",
    "cefr": "B1",
    "example": "We are living in the digital era."
  },
  "chapter": {
    "ipa": "/ˈtʃæp.tɚ/",
    "pos": "명사",
    "ko": "장(chapter), 새로운 시기",
    "cefr": "A2",
    "example": "This begins a new chapter in his life."
  },
  "generation": {
    "ipa": "/ˌdʒen.əˈreɪ.ʃən/",
    "pos": "명사",
    "ko": "세대, 대",
    "cefr": "B1",
    "example": "A new generation of athletes is rising."
  },
  "style": {
    "ipa": "/staɪl/",
    "pos": "명사",
    "ko": "스타일, 방식, 양식",
    "cefr": "A2",
    "example": "She has an aggressive playing style."
  },
  "mistake": {
    "ipa": "/mɪˈsteɪk/",
    "pos": "명사",
    "ko": "실수, 잘못",
    "cefr": "A1",
    "example": "Everyone makes mistakes when learning."
  },
  "close": {
    "ipa": "/kloʊs/",
    "pos": "형용사/부사",
    "ko": "가까운, 밀접한; 가까이",
    "cefr": "A1",
    "example": "He stood close to the baseline."
  },
  "heavy": {
    "ipa": "/ˈhev.i/",
    "pos": "형용사",
    "ko": "무거운, 강한, 심한",
    "cefr": "A1",
    "example": "He hit the ball with heavy topspin."
  },
  "flexible": {
    "ipa": "/ˈflek.sə.bəl/",
    "pos": "형용사",
    "ko": "유연한, 융통성 있는",
    "cefr": "B2",
    "example": "Tennis players need flexible bodies."
  },
  "video": {
    "ipa": "/ˈvɪd.i.oʊ/",
    "pos": "명사",
    "ko": "비디오, 영상",
    "cefr": "A1",
    "example": "They reviewed the match video."
  },
  "hour": {
    "ipa": "/aʊr/",
    "pos": "명사",
    "ko": "시간, 1시간",
    "cefr": "A1",
    "example": "The train arrives in an hour."
  },
  "mile": {
    "ipa": "/maɪl/",
    "pos": "명사",
    "ko": "마일 (약 1.6km)",
    "cefr": "A2",
    "example": "The ball traveled at 90 miles per hour."
  },
  "hard": {
    "ipa": "/hɑːrd/",
    "pos": "형용사/부사",
    "ko": "단단한, 열심히, 어려운",
    "cefr": "A1",
    "example": "They played on a hard court."
  },
  "reach": {
    "ipa": "/riːtʃ/",
    "pos": "동사",
    "ko": "도달하다, 손을 뻗다",
    "cefr": "A2",
    "example": "He stretched his arm to reach the ball."
  },
  "defensive": {
    "ipa": "/dɪˈfen.sɪv/",
    "pos": "형용사",
    "ko": "수비적인, 방어의",
    "cefr": "B1",
    "example": "He played a defensive return shot."
  },
  "shot": {
    "ipa": "/ʃɑːt/",
    "pos": "명사",
    "ko": "슛, 타구(샷), 발사",
    "cefr": "A2",
    "example": "That was an incredible forehand shot."
  },
  "quickly": {
    "ipa": "/ˈkwɪk.li/",
    "pos": "부사",
    "ko": "빨리, 신속히",
    "cefr": "A1",
    "example": "She ran quickly across the court."
  },
  "second": {
    "ipa": "/ˈsek.ənd/",
    "pos": "명사/형용사",
    "ko": "초(시간), 두 번째의",
    "cefr": "A1",
    "example": "He reacted in less than a second."
  },
  "modern": {
    "ipa": "/ˈmɑː.dɚn/",
    "pos": "형용사",
    "ko": "현대의, 근대의",
    "cefr": "A2",
    "example": "Modern technology assists coaches."
  },
  "opponent": {
    "ipa": "/əˈpoʊ.nənt/",
    "pos": "명사",
    "ko": "상대, 적수",
    "cefr": "B1",
    "example": "He respected his rival opponent."
  },
  "land": {
    "ipa": "/lænd/",
    "pos": "동사/명사",
    "ko": "착륙하다, 떨어지다; 땅",
    "cefr": "A2",
    "example": "The ball landed inside the baseline."
  },
  "often": {
    "ipa": "/ˈɑːf.ən/",
    "pos": "부사",
    "ko": "자주, 종종",
    "cefr": "A1",
    "example": "They often practice together."
  },
  "set": {
    "ipa": "/set/",
    "pos": "명사/동사",
    "ko": "세트(경기 단위), 맞추다",
    "cefr": "A2",
    "example": "He won the match in straight sets."
  },
  "fitness": {
    "ipa": "/ˈfɪt.nəs/",
    "pos": "명사",
    "ko": "체력, 신체 단련",
    "cefr": "B1",
    "example": "Good fitness prevents fatigue."
  },
  "sharp": {
    "ipa": "/ʃɑːrp/",
    "pos": "형용사",
    "ko": "날카로운, 예리한, 급격한",
    "cefr": "B1",
    "example": "He has sharp reflexes on the court."
  },
  "energy": {
    "ipa": "/ˈen.ɚ.dʒi/",
    "pos": "명사",
    "ko": "에너지, 활력, 힘",
    "cefr": "A2",
    "example": "She plays with high positive energy."
  },
  "shape": {
    "ipa": "/ʃeɪp/",
    "pos": "동사/명사",
    "ko": "형성하다, 모양",
    "cefr": "A2",
    "example": "Young players are shaping the sport's future."
  },
  "secret": {
    "ipa": "/ˈsiː.krət/",
    "pos": "명사/형용사",
    "ko": "비밀, 비결; 비밀의",
    "cefr": "A2",
    "example": "Hard work is the secret to mastery."
  },
  "footwork": {
    "ipa": "/ˈfʊt.wɝːk/",
    "pos": "명사",
    "ko": "풋워크 (발놀림)",
    "cefr": "B1",
    "example": "Fast footwork helps in return shots."
  },
  "reaction": {
    "ipa": "/riˈæk.ʃən/",
    "pos": "명사",
    "ko": "반응, 반작용",
    "cefr": "B1",
    "example": "Quick reactions are needed for fast serves."
  },
  "ease": {
    "ipa": "/iːz/",
    "pos": "명사",
    "ko": "수월함, 편안함",
    "cefr": "B1",
    "example": "He returned the ball with great ease."
  },
  "critical": {
    "ipa": "/ˈkrɪt̬.ɪ.kəl/",
    "pos": "형용사",
    "ko": "대단히 중요한, 비판적인",
    "cefr": "B1",
    "example": "Serving well is a critical factor."
  },
  "detail": {
    "ipa": "/ˈdiː.teɪl/",
    "pos": "명사",
    "ko": "세부 사항, 상세",
    "cefr": "A2",
    "example": "Cameras record movements in high detail."
  },
  "recent": {
    "ipa": "/ˈriː.sənt/",
    "pos": "형용사",
    "ko": "최근의",
    "cefr": "A2",
    "example": "Recent studies show new trends."
  },
  "deep": {
    "ipa": "/diːp/",
    "pos": "형용사/부사",
    "ko": "깊은; 깊숙이",
    "cefr": "A2",
    "example": "Hit the return deep into the court."
  },
  "far": {
    "ipa": "/fɑːr/",
    "pos": "부사/형용사",
    "ko": "훨씬, 멀리",
    "cefr": "A1",
    "example": "He is far more confident today."
  },
  "hop": {
    "ipa": "/hɑːp/",
    "pos": "동사/명사",
    "ko": "가볍게 뛰다; 깡충 뜀",
    "cefr": "B1",
    "example": "He made a light hop before running."
  },
  "spring": {
    "ipa": "/sprɪŋ/",
    "pos": "명사",
    "ko": "용수철, 봄, 샘",
    "cefr": "A2",
    "example": "The muscles store spring energy."
  },
  "leg": {
    "ipa": "/leɡ/",
    "pos": "명사",
    "ko": "다리",
    "cefr": "A1",
    "example": "Strong legs provide explosive speed."
  },
  "dash": {
    "ipa": "/dæʃ/",
    "pos": "동사/명사",
    "ko": "돌진하다, 질주하다; 돌진",
    "cefr": "B1",
    "example": "He dashed to save the drop shot."
  },
  "left": {
    "ipa": "/left/",
    "pos": "명사/형용사",
    "ko": "왼쪽; 왼쪽의",
    "cefr": "A1",
    "example": "He moved quickly to his left."
  },
  "right": {
    "ipa": "/raɪt/",
    "pos": "명사/형용사",
    "ko": "오른쪽; 옳은",
    "cefr": "A1",
    "example": "Turn right at the intersection."
  },
  "instantly": {
    "ipa": "/ˈɪn.stənt.li/",
    "pos": "부사",
    "ko": "즉시, 순식간에",
    "cefr": "B1",
    "example": "The computer responded instantly."
  },
  "short": {
    "ipa": "/ʃɔːrt/",
    "pos": "형용사",
    "ko": "짧은, 키가 작은",
    "cefr": "A1",
    "example": "He used a short and compact backswing."
  },
  "center": {
    "ipa": "/ˈsen.t̬ɚ/",
    "pos": "명사",
    "ko": "중심, 중앙",
    "cefr": "A2",
    "example": "Hit the ball in the center of the racket."
  },
  "virtual": {
    "ipa": "/ˈvɝː.tʃu.əl/",
    "pos": "형용사",
    "ko": "가상의, 사실상의",
    "cefr": "B1",
    "example": "Virtual reality is used in sports training."
  },
  "reality": {
    "ipa": "/riˈæl.ə.t̬i/",
    "pos": "명사",
    "ko": "현실, 실제",
    "cefr": "B1",
    "example": "Virtual reality simulates real matches."
  },
  "headset": {
    "ipa": "/ˈhed.set/",
    "pos": "명사",
    "ko": "헤드셋",
    "cefr": "A2",
    "example": "He put on the VR headset to practice."
  },
  "hundred": {
    "ipa": "/ˈhʌn.drəd/",
    "pos": "수사",
    "ko": "백(100)",
    "cefr": "A1",
    "example": "He watched hundreds of practice serves."
  },
  "eye": {
    "ipa": "/aɪ/",
    "pos": "명사",
    "ko": "눈",
    "cefr": "A1",
    "example": "Keep your eye on the moving ball."
  },
  "brain": {
    "ipa": "/breɪn/",
    "pos": "명사",
    "ko": "뇌, 두뇌",
    "cefr": "A2",
    "example": "The brain processes visual cues rapidly."
  },
  "technique": {
    "ipa": "/tekˈniːk/",
    "pos": "명사",
    "ko": "기술, 기법",
    "cefr": "B1",
    "example": "Good technique improves accuracy."
  },
  "regular": {
    "ipa": "/ˈreɡ.jə.lɚ/",
    "pos": "형용사",
    "ko": "규칙적인, 정기적인",
    "cefr": "A2",
    "example": "Regular practice leads to mastery."
  },
  "weapon": {
    "ipa": "/ˈwep.ən/",
    "pos": "명사",
    "ko": "무기, 강력한 수단",
    "cefr": "B1",
    "example": "His serve is his most potent weapon."
  },
  "purpose": {
    "ipa": "/ˈpɝː.pəs/",
    "pos": "명사",
    "ko": "목적, 의도",
    "cefr": "A2",
    "example": "What is the purpose of this exercise?"
  },
  "prepare": {
    "ipa": "/prɪˈper/",
    "pos": "동사",
    "ko": "준비하다, 대비하다",
    "cefr": "A2",
    "example": "Athletes prepare mentally before games."
  },
  "direction": {
    "ipa": "/daɪˈrek.ʃən/",
    "pos": "명사",
    "ko": "방향, 길잡이",
    "cefr": "A2",
    "example": "The ball changed direction in the air."
  },
  "signal": {
    "ipa": "/ˈsɪɡ.nəl/",
    "pos": "명사/동사",
    "ko": "신호; 신호를 보내다",
    "cefr": "B1",
    "example": "The referee gave a clear signal."
  },
  "referee": {
    "ipa": "/ˌref.əˈriː/",
    "pos": "명사",
    "ko": "심판",
    "cefr": "B1",
    "example": "The referee blew the final whistle."
  },
  "superstar": {
    "ipa": "/ˈsuː.pɚ.stɑːr/",
    "meaning": "슈퍼스타, 대스타",
    "cefr": "A2",
    "ko": "슈퍼스타, 최고 인기 스타"
  },
  "unbelievable": {
    "ipa": "/ˌʌn.bɪˈliː.və.bəl/",
    "pos": "형용사",
    "ko": "믿기 힘든, 엄청난",
    "cefr": "B1",
    "example": "He achieved an unbelievable 50-50 record."
  },
  "unforgettable": {
    "ipa": "/ˌʌn.fɚˈɡet̬.ə.bəl/",
    "pos": "형용사",
    "ko": "잊을 수 없는",
    "cefr": "B1",
    "example": "It was an unforgettable night of baseball."
  },
  "require": {
    "ipa": "/rɪˈkwaɪr/",
    "pos": "동사",
    "ko": "필요로 하다, 요구하다",
    "cefr": "B1",
    "example": "High speeds require tremendous strength."
  },
  "different": {
    "ipa": "/ˈdɪf.ɚ.ənt/",
    "pos": "형용사",
    "ko": "다른, 다양한",
    "cefr": "A1",
    "example": "They have two completely different styles."
  },
  "body": {
    "ipa": "/ˈbɑː.di/",
    "pos": "명사",
    "ko": "몸, 신체",
    "cefr": "A1",
    "example": "Exercise keeps the body healthy."
  },
  "number": {
    "ipa": "/ˈnʌm.bɚ/",
    "pos": "명사",
    "ko": "숫자, 번호",
    "cefr": "A1",
    "example": "His statistics show incredible numbers."
  },
  "travel": {
    "ipa": "/ˈtræv.əl/",
    "pos": "동사/명사",
    "ko": "이동하다, 여행하다",
    "cefr": "A1",
    "example": "The batted ball traveled over 400 feet."
  },
  "bat": {
    "ipa": "/bæt/",
    "pos": "명사",
    "ko": "야구 배트(방망이), 박쥐",
    "cefr": "A2",
    "example": "He swung the wooden bat with power."
  },
  "sprinter": {
    "ipa": "/ˈsprɪn.t̬ɚ/",
    "pos": "명사",
    "ko": "단거리 달리기 선수",
    "cefr": "B2",
    "example": "He runs as fast as an Olympic sprinter."
  },
  "carefully": {
    "ipa": "/ˈker.fəl.i/",
    "pos": "부사",
    "ko": "주의 깊게, 신중히",
    "cefr": "A2",
    "example": "He trained carefully to avoid injuries."
  },
  "immense": {
    "ipa": "/ɪˈmens/",
    "pos": "형용사",
    "ko": "엄청난, 막대한",
    "cefr": "B2",
    "example": "He generates immense bat speed."
  },
  "everywhere": {
    "ipa": "/ˈev.ri.wer/",
    "pos": "부사",
    "ko": "어디서나, 모든 곳에",
    "cefr": "A2",
    "example": "Fans everywhere cheered for him."
  },
  "admire": {
    "ipa": "/ədˈmaɪr/",
    "pos": "동사",
    "ko": "존경하다, 감탄하다",
    "cefr": "B1",
    "example": "I admire his dedication and modesty."
  },
  "talent": {
    "ipa": "/ˈtæl.ənt/",
    "pos": "명사",
    "ko": "재능, 장기",
    "cefr": "B1",
    "example": "She has a natural talent for sports."
  },
  "attitude": {
    "ipa": "/ˈæt̬.ə.tuːd/",
    "pos": "명사",
    "ko": "태도, 자세",
    "cefr": "B1",
    "example": "A positive attitude leads to success."
  },
  "young": {
    "ipa": "/jʌŋ/",
    "pos": "형용사",
    "ko": "어린, 젊은",
    "cefr": "A1",
    "example": "Young athletes look up to him."
  },
  "athlete": {
    "ipa": "/ˈæθ.liːt/",
    "pos": "명사",
    "ko": "운동선수",
    "cefr": "B1",
    "example": "He is a multi-talented athlete."
  },
  "country": {
    "ipa": "/ˈkʌn.tri/",
    "pos": "명사",
    "ko": "나라, 국가",
    "cefr": "A1",
    "example": "He visited several foreign countries."
  },
  "boundary": {
    "ipa": "/ˈbaʊn.dɚ.i/",
    "pos": "명사",
    "ko": "한계, 경계",
    "cefr": "B2",
    "example": "Human potential knows no boundaries."
  },
  "potential": {
    "ipa": "/poʊˈten.ʃəl/",
    "pos": "명사/형용사",
    "ko": "잠재력; 잠재적인",
    "cefr": "B1",
    "example": "Hard work unlocks your full potential."
  },
  "popular": {
    "ipa": "/ˈpɑː.pjə.lɚ/",
    "pos": "형용사",
    "ko": "인기 있는, 대중적인",
    "cefr": "A2",
    "example": "The sweeper is now a popular pitch."
  },
  "introduce": {
    "ipa": "/ˌɪn.trəˈduːs/",
    "pos": "동사",
    "ko": "도입하다, 소개하다",
    "cefr": "A2",
    "example": "Pitchers introduced a new breaking ball."
  },
  "drop": {
    "ipa": "/drɑːp/",
    "pos": "동사/명사",
    "ko": "떨어지다, 하강; 방울",
    "cefr": "A2",
    "example": "The pitch drops sharply below the bat."
  },
  "ground": {
    "ipa": "/ɡraʊnd/",
    "pos": "명사",
    "ko": "땅, 지면",
    "cefr": "A2",
    "example": "The ball bounced off the ground."
  },
  "contrast": {
    "ipa": "/ˈkɑːn.træst/",
    "pos": "명사",
    "ko": "대조, 대비",
    "cefr": "B1",
    "example": "In contrast, the sweeper moves sideways."
  },
  "bend": {
    "ipa": "/bend/",
    "pos": "동사",
    "ko": "휘다, 굽히다",
    "cefr": "A2",
    "example": "The ball bends away from the hitter."
  },
  "sideways": {
    "ipa": "/ˈsaɪd.weɪz/",
    "pos": "부사/형용사",
    "ko": "옆으로, 비스듬히",
    "cefr": "B1",
    "example": "The sweeper slides sideways across the plate."
  },
  "plate": {
    "ipa": "/pleɪt/",
    "pos": "명사",
    "ko": "홈플레이트, 접시",
    "cefr": "A2",
    "example": "The batter stood near the plate."
  },
  "frisbee": {
    "ipa": "/ˈfrɪz.bi/",
    "pos": "명사",
    "ko": "프리즈비 (원반)",
    "cefr": "A2",
    "example": "The ball flew like a frisbee."
  },
  "measure": {
    "ipa": "/ˈmeʒ.ɚ/",
    "pos": "동사/명사",
    "ko": "측정하다, 재다; 조치",
    "cefr": "B1",
    "example": "Sensors measure spin and speed."
  },
  "horizontal": {
    "ipa": "/ˌhɔːr.ɪˈzɑːn.t̬əl/",
    "pos": "형용사",
    "ko": "수평의, 횡적인",
    "cefr": "B1",
    "example": "The pitch had large horizontal movement."
  },
  "airflow": {
    "ipa": "/ˈer.floʊ/",
    "pos": "명사",
    "ko": "공기 흐름, 기류",
    "cefr": "B2",
    "example": "Airflow over the stitches bends the ball."
  },
  "release": {
    "ipa": "/rɪˈliːs/",
    "pos": "동사/명사",
    "ko": "놓다, 릴리스하다; 출시",
    "cefr": "B1",
    "example": "He releases the ball with a firm grip."
  },
  "specific": {
    "ipa": "/spəˈsɪf.ɪk/",
    "pos": "형용사",
    "ko": "특정한, 구체적인",
    "cefr": "B1",
    "example": "The ball is held at a specific seam angle."
  },
  "angle": {
    "ipa": "/ˈæŋ.ɡəl/",
    "pos": "명사",
    "ko": "각도, 관점",
    "cefr": "A2",
    "example": "He adjusted his arm angle slightly."
  },
  "unevenly": {
    "ipa": "/ʌnˈiː.vən.li/",
    "pos": "부사",
    "ko": "불균등하게, 불규칙하게",
    "cefr": "B2",
    "example": "Air flows unevenly across the seam."
  },
  "stitch": {
    "ipa": "/stɪtʃ/",
    "pos": "명사",
    "ko": "바늘땀, 야구공 솔기(실밥)",
    "cefr": "B2",
    "example": "The red stitches grip the air."
  },
  "arm": {
    "ipa": "/ɑːrm/",
    "pos": "명사",
    "ko": "팔",
    "cefr": "A1",
    "example": "He has a powerful throwing arm."
  },
  "motion": {
    "ipa": "/ˈmoʊ.ʃən/",
    "pos": "명사",
    "ko": "동작, 움직임",
    "cefr": "B1",
    "example": "His pitching motion is smooth and fluid."
  },
  "straight": {
    "ipa": "/streɪt/",
    "pos": "형용사/부사",
    "ko": "직선의, 똑바로",
    "cefr": "A2",
    "example": "He expected a straight fastball."
  },
  "swing": {
    "ipa": "/swɪŋ/",
    "pos": "동사/명사",
    "ko": "스윙하다, 휘두르다; 스윙",
    "cefr": "A2",
    "example": "He took a full swing at the ball."
  },
  "miss": {
    "ipa": "/mɪs/",
    "pos": "동사",
    "ko": "놓치다, 빗나가다",
    "cefr": "A1",
    "example": "The batter swung and missed."
  },
  "drift": {
    "ipa": "/drɪft/",
    "pos": "동사",
    "ko": "떠밀려가다, 유유히 벗어나다",
    "cefr": "B1",
    "example": "The ball drifted out of the strike zone."
  },
  "last": {
    "ipa": "/læst/",
    "pos": "형용사/부사",
    "ko": "마지막의, 지난",
    "cefr": "A1",
    "example": "The pitch broke at the last second."
  },
  "career": {
    "ipa": "/kəˈrɪr/",
    "pos": "명사",
    "ko": "경력, 선수 생활",
    "cefr": "B1",
    "example": "This pitch saved his baseball career."
  },
  "adjust": {
    "ipa": "/əˈdʒʌst/",
    "pos": "동사",
    "ko": "조정하다, 적응하다",
    "cefr": "B1",
    "example": "Batters must adjust their timing."
  },
  "stance": {
    "ipa": "/stæns/",
    "pos": "명사",
    "ko": "타격 자세, 스탠스",
    "cefr": "B1",
    "example": "He widened his batting stance."
  },
  "earlier": {
    "ipa": "/ˈɝː.li.ɚ/",
    "pos": "부사/형용사",
    "ko": "더 일찍",
    "cefr": "A2",
    "example": "He swung earlier to hit the ball before it broke."
  },
  "ongoing": {
    "ipa": "/ˈɑːnˌɡoʊ.ɪŋ/",
    "pos": "형용사",
    "ko": "계속되는, 진행 중인",
    "cefr": "B2",
    "example": "The ongoing duel between pitcher and batter."
  },
  "battle": {
    "ipa": "/ˈbæt̬.əl/",
    "pos": "명사",
    "ko": "대결, 승부, 전투",
    "cefr": "A2",
    "example": "It was an intense battle of wits."
  },
  "scientific": {
    "ipa": "/ˌsaɪ.ənˈtɪf.ɪk/",
    "pos": "형용사",
    "ko": "과학적인",
    "cefr": "B1",
    "example": "Baseball has become deeply scientific."
  },
  "notice": {
    "ipa": "/ˈnoʊ.t̬ɪs/",
    "pos": "동사/명사",
    "ko": "알아차리다; 통지",
    "cefr": "A2",
    "example": "Passengers noticed the air turbulence."
  },
  "sudden": {
    "ipa": "/ˈsʌd.ən/",
    "pos": "형용사",
    "ko": "갑작스러운",
    "cefr": "A2",
    "example": "A sudden gust of wind shook the aircraft."
  },
  "bump": {
    "ipa": "/bʌmp/",
    "pos": "명사/동사",
    "ko": "충돌, 덜컹거림; 부딪히다",
    "cefr": "A2",
    "example": "The plane hit a minor air bump."
  },
  "report": {
    "ipa": "/rɪˈpɔːrt/",
    "pos": "동사/명사",
    "ko": "보고하다; 보고서",
    "cefr": "A2",
    "example": "Scientists report rising ocean temperatures."
  },
  "altitude": {
    "ipa": "/ˈæl.tə.tuːd/",
    "pos": "명사",
    "ko": "고도, 해발",
    "cefr": "B2",
    "example": "The airplane cruised at high altitude."
  },
  "meet": {
    "ipa": "/miːt/",
    "pos": "동사",
    "ko": "만나다, 마주치다",
    "cefr": "A1",
    "example": "When hot air meets cold air, winds form."
  },
  "pocket": {
    "ipa": "/ˈpɑː.kɪt/",
    "pos": "명사",
    "ko": "주머니, 작은 공기 구역",
    "cefr": "A1",
    "example": "Pockets of choppy air are invisible."
  },
  "choppy": {
    "ipa": "/ˈtʃɑː.pi/",
    "pos": "형용사",
    "ko": "파도가 거친, 기류가 고르지 못한",
    "cefr": "B2",
    "example": "The air was choppy over the mountains."
  },
  "cockpit": {
    "ipa": "/ˈkɑːk.pɪt/",
    "pos": "명사",
    "ko": "조종실, 콕핏",
    "cefr": "B1",
    "example": "The pilots sat in the cockpit."
  },
  "past": {
    "ipa": "/pæst/",
    "pos": "형용사/명사",
    "ko": "과거의, 지난; 과거",
    "cefr": "A1",
    "example": "Over the past decade, flights increased."
  },
  "severe": {
    "ipa": "/səˈvɪr/",
    "pos": "형용사",
    "ko": "심각한, 극심한",
    "cefr": "B2",
    "example": "Severe storms disrupted flight schedules."
  },
  "ocean": {
    "ipa": "/ˈoʊ.ʃən/",
    "pos": "명사",
    "ko": "대양, 바다",
    "cefr": "A2",
    "example": "The jet flew across the Pacific Ocean."
  },
  "increase": {
    "ipa": "/ɪnˈkriːs/",
    "pos": "동사/명사",
    "ko": "증가하다; 증가",
    "cefr": "B1",
    "example": "Reports of turbulence have increased."
  },
  "percent": {
    "ipa": "/pɚˈsent/",
    "pos": "명사",
    "ko": "퍼센트(%)",
    "cefr": "A2",
    "example": "Injuries dropped by fifty percent."
  },
  "unexpected": {
    "ipa": "/ˌʌn.ɪkˈspek.tɪd/",
    "pos": "형용사",
    "ko": "예상치 못한, 뜻밖의",
    "cefr": "B1",
    "example": "An unexpected bump shook the cabin."
  },
  "spill": {
    "ipa": "/spɪl/",
    "pos": "동사",
    "ko": "쏟다, 흘리다",
    "cefr": "A2",
    "example": "Sudden movement caused coffee to spill."
  },
  "minor": {
    "ipa": "/ˈmaɪ.nɚ/",
    "pos": "형용사",
    "ko": "가벼운, 사소한",
    "cefr": "B1",
    "example": "She suffered only minor bruises."
  },
  "injury": {
    "ipa": "/ˈɪn.dʒər.i/",
    "pos": "명사",
    "ko": "부상, 상처",
    "cefr": "B1",
    "example": "Seatbelts prevent passenger injuries."
  },
  "stand": {
    "ipa": "/stænd/",
    "pos": "동사",
    "ko": "서 있다, 일어서다",
    "cefr": "A1",
    "example": "Do not stand while the sign is on."
  },
  "reason": {
    "ipa": "/ˈriː.zən/",
    "pos": "명사",
    "ko": "이유, 까닭",
    "cefr": "A2",
    "example": "For this reason, buckle your seatbelt."
  },
  "attendant": {
    "ipa": "/əˈten.dənt/",
    "pos": "명사",
    "ko": "승무원, 안내원",
    "cefr": "A2",
    "example": "The flight attendant helped the passengers."
  },
  "advise": {
    "ipa": "/ədˈvaɪz/",
    "pos": "동사",
    "ko": "조언하다, 권고하다",
    "cefr": "B1",
    "example": "Pilots advise everyone to remain seated."
  },
  "fasten": {
    "ipa": "/ˈfæs.ən/",
    "pos": "동사",
    "ko": "매다, 채우다",
    "cefr": "B1",
    "example": "Please fasten your seatbelt securely."
  },
  "seated": {
    "ipa": "/ˈsiː.t̬ɪd/",
    "pos": "형용사",
    "ko": "자리에 앉은",
    "cefr": "A2",
    "example": "Remain seated until the plane stops."
  },
  "feel": {
    "ipa": "/fiːl/",
    "pos": "동사",
    "ko": "느끼다; 기분이 들다",
    "cefr": "A1",
    "example": "The flight felt peaceful and calm."
  },
  "airline": {
    "ipa": "/ˈer.laɪn/",
    "pos": "명사",
    "ko": "항공사",
    "cefr": "A2",
    "example": "Major airlines invest in safety tech."
  },
  "researcher": {
    "ipa": "/ˈriː.sɝː.tʃɚ/",
    "pos": "명사",
    "ko": "연구원, 조사관",
    "cefr": "B1",
    "example": "Researchers tested the new sensor."
  },
  "develop": {
    "ipa": "/dɪˈvel.əp/",
    "pos": "동사",
    "ko": "개발하다, 발전시키다",
    "cefr": "B1",
    "example": "Engineers develop lighter aircraft."
  },
  "tool": {
    "ipa": "/tuːl/",
    "pos": "명사",
    "ko": "도구, 수단",
    "cefr": "A2",
    "example": "Sensors are great tools for pilots."
  },
  "comfortable": {
    "ipa": "/ˈkʌm.fɚ.t̬ə.bəl/",
    "pos": "형용사",
    "ko": "편안한, 쾌적한",
    "cefr": "A2",
    "example": "The flight was smooth and comfortable."
  },
  "light": {
    "ipa": "/laɪt/",
    "pos": "명사/형용사",
    "ko": "빛; 가벼운",
    "cefr": "A1",
    "example": "Lidar pulses invisible laser light."
  },
  "scan": {
    "ipa": "/skæn/",
    "pos": "동사/명사",
    "ko": "스캔하다, 살피다",
    "cefr": "B1",
    "example": "The radar scans the sky for rain."
  },
  "ahead": {
    "ipa": "/əˈhed/",
    "pos": "부사",
    "ko": "앞에, 전방에",
    "cefr": "A2",
    "example": "Look at the clear skies ahead."
  },
  "warn": {
    "ipa": "/wɔːrn/",
    "pos": "동사",
    "ko": "경고하다, 주의를 주다",
    "cefr": "B1",
    "example": "The alarm warns the flight crew."
  },
  "fly": {
    "ipa": "/flaɪ/",
    "pos": "동사",
    "ko": "날다, 비행하다",
    "cefr": "A1",
    "example": "Planes fly at high cruising speeds."
  },
  "rough": {
    "ipa": "/rʌf/",
    "pos": "형용사",
    "ko": "거친, 험한",
    "cefr": "B1",
    "example": "Avoid rough turbulence whenever possible."
  },
  "patch": {
    "ipa": "/pætʃ/",
    "pos": "명사",
    "ko": "구역, 조각, 헝겊",
    "cefr": "B1",
    "example": "They avoided a patch of stormy air."
  },
  "remain": {
    "ipa": "/rɪˈmeɪn/",
    "pos": "동사",
    "ko": "여전히 ~이다, 남다",
    "cefr": "B1",
    "example": "Aviation remains the safest way to travel."
  },
  "trip": {
    "ipa": "/trɪp/",
    "pos": "명사",
    "ko": "여행, 이동",
    "cefr": "A1",
    "example": "We enjoyed our pleasant trip to London."
  },
  "behave": {
    "ipa": "/bɪˈheɪv/",
    "pos": "동사",
    "ko": "행동하다, 작동하다",
    "cefr": "B1",
    "example": "AI models behave differently in tests."
  },
  "online": {
    "ipa": "/ˌɑːnˈlaɪn/",
    "pos": "부사/형용사",
    "ko": "온라인으로; 온라인의",
    "cefr": "A1",
    "example": "Many tasks are completed online."
  },
  "test": {
    "ipa": "/test/",
    "pos": "명사/동사",
    "ko": "시험, 검사; 시험하다",
    "cefr": "A1",
    "example": "Researchers carried out benchmark tests."
  },
  "show": {
    "ipa": "/ʃoʊ/",
    "pos": "동사/명사",
    "ko": "보여주다, 나타내다; 쇼",
    "cefr": "A1",
    "example": "Data shows impressive improvements."
  },
  "weakness": {
    "ipa": "/ˈwiːk.nəs/",
    "pos": "명사",
    "ko": "약점, 취약점",
    "cefr": "B1",
    "example": "Software developers patched the weakness."
  },
  "help": {
    "ipa": "/help/",
    "pos": "명사/동사",
    "ko": "도움; 돕다",
    "cefr": "A1",
    "example": "He finished the code with AI help."
  },
  "discover": {
    "ipa": "/dɪˈskʌv.ɚ/",
    "pos": "동사",
    "ko": "발견하다",
    "cefr": "A2",
    "example": "Scientists discovered a new planetary system."
  },
  "write": {
    "ipa": "/raɪt/",
    "pos": "동사",
    "ko": "쓰다, 작성하다",
    "cefr": "A1",
    "example": "AI can write code in multiple languages."
  },
  "door": {
    "ipa": "/dɔːr/",
    "pos": "명사",
    "ko": "문",
    "cefr": "A1",
    "example": "Security locks shut every digital door."
  },
  "open": {
    "ipa": "/ˈoʊ.pən/",
    "pos": "형용사/동사",
    "ko": "열린; 열다",
    "cefr": "A1",
    "example": "Never leave sensitive ports open."
  },
  "happen": {
    "ipa": "/ˈhæp.ən/",
    "pos": "동사",
    "ko": "일어나다, 발생하다",
    "cefr": "A1",
    "example": "Accidents happen when rules are ignored."
  },
  "much": {
    "ipa": "/mʌtʃ/",
    "pos": "부사/형용사",
    "ko": "훨씬, 많이; 많은",
    "cefr": "A1",
    "example": "It runs much faster than before."
  },
  "traditional": {
    "ipa": "/trəˈdɪʃ.ən.əl/",
    "pos": "형용사",
    "ko": "전통적인",
    "cefr": "B1",
    "example": "Traditional methods were replaced."
  },
  "testing": {
    "ipa": "/ˈtes.tɪŋ/",
    "pos": "명사",
    "ko": "테스트, 검사",
    "cefr": "B1",
    "example": "Rigorous testing guarantees reliability."
  },
  "major": {
    "ipa": "/ˈmeɪ.dʒɚ/",
    "pos": "형용사",
    "ko": "주요한, 중대한",
    "cefr": "B1",
    "example": "Major companies attended the summit."
  },
  "company": {
    "ipa": "/ˈkʌm.pə.ni/",
    "pos": "명사",
    "ko": "회사, 기업",
    "cefr": "A2",
    "example": "The technology company released a new model."
  },
  "build": {
    "ipa": "/bɪld/",
    "pos": "동사",
    "ko": "만들다, 구축하다, 짓다",
    "cefr": "A1",
    "example": "Engineers build secure firewalls."
  },
  "helpful": {
    "ipa": "/ˈhelp.fəl/",
    "pos": "형용사",
    "ko": "도움이 되는, 유용한",
    "cefr": "A2",
    "example": "AI is a helpful coding partner."
  },
  "assistant": {
    "ipa": "/əˈsɪs.tənt/",
    "pos": "명사",
    "ko": "조수, 보조자, 비서",
    "cefr": "A2",
    "example": "The AI assistant answered my questions."
  },
  "trick": {
    "ipa": "/trɪk/",
    "pos": "동사/명사",
    "ko": "속이다; 속임수",
    "cefr": "B1",
    "example": "Do not let hackers trick your system."
  },
  "harmful": {
    "ipa": "/ˈhɑːrm.fəl/",
    "pos": "형용사",
    "ko": "해로운, 유해한",
    "cefr": "B1",
    "example": "Filters remove harmful web content."
  },
  "clever": {
    "ipa": "/ˈklev.ɚ/",
    "pos": "형용사",
    "ko": "영리한, 교묘한",
    "cefr": "A2",
    "example": "The hacker used clever prompts."
  },
  "try": {
    "ipa": "/traɪ/",
    "pos": "동사",
    "ko": "시도하다, 노력하다",
    "cefr": "A1",
    "example": "Always try your best."
  },
  "give": {
    "ipa": "/ɡɪv/",
    "pos": "동사",
    "ko": "주다, 제공하다",
    "cefr": "A1",
    "example": "Give clear instructions to the model."
  },
  "confusing": {
    "ipa": "/kənˈfjuː.zɪŋ/",
    "pos": "형용사",
    "ko": "혼란스러운",
    "cefr": "B1",
    "example": "The complex rules were confusing."
  },
  "command": {
    "ipa": "/kəˈmænd/",
    "pos": "명사/동사",
    "ko": "명령어; 명령하다",
    "cefr": "B1",
    "example": "Run the command in PowerShell."
  },
  "bypass": {
    "ipa": "/ˈbaɪ.pæs/",
    "pos": "동사",
    "ko": "우회하다",
    "cefr": "B2",
    "example": "They tried to bypass authentication."
  },
  "model": {
    "ipa": "/ˈmɑː.dəl/",
    "pos": "명사",
    "ko": "모델, 모형",
    "cefr": "A2",
    "example": "Frontier AI models solve complex math."
  },
  "file": {
    "ipa": "/faɪl/",
    "pos": "명사",
    "ko": "파일, 서류",
    "cefr": "A1",
    "example": "Open the project configuration file."
  },
  "maintain": {
    "ipa": "/meɪnˈteɪn/",
    "pos": "동사",
    "ko": "유지하다, 관리하다",
    "cefr": "B1",
    "example": "Maintain high coding standards."
  },
  "digital": {
    "ipa": "/ˈdɪdʒ.ə.t̬əl/",
    "pos": "형용사",
    "ko": "디지털의",
    "cefr": "A2",
    "example": "Digital technology transforms life."
  },
  "defense": {
    "ipa": "/dɪˈfens/",
    "pos": "명사",
    "ko": "방어, 수비",
    "cefr": "B1",
    "example": "Good defense prevents security breaches."
  },
  "essential": {
    "ipa": "/ɪˈsen.ʃəl/",
    "pos": "형용사",
    "ko": "필수적인, 본질적인",
    "cefr": "B1",
    "example": "Sleep is essential for health."
  },
  "threat": {
    "ipa": "/θret/",
    "pos": "명사",
    "ko": "위협, 협박",
    "cefr": "B1",
    "example": "Cyber threats evolve every day."
  },
  "guardian": {
    "ipa": "/ˈɡɑːr.di.ən/",
    "pos": "명사",
    "ko": "수호자, 감시자, 보호자",
    "cefr": "B1",
    "example": "Defensive AI acts as a digital guardian."
  },
  "watch": {
    "ipa": "/wɑːtʃ/",
    "pos": "동사/명사",
    "ko": "지켜보다, 감시하다; 시계",
    "cefr": "A1",
    "example": "Watch for anomalous server traffic."
  },
  "suspicious": {
    "ipa": "/səˈspɪʃ.əs/",
    "pos": "형용사",
    "ko": "의심스러운, 수상한",
    "cefr": "B1",
    "example": "The firewall blocked suspicious packets."
  },
  "activity": {
    "ipa": "/ækˈtɪv.ə.t̬i/",
    "pos": "명사",
    "ko": "활동, 행동",
    "cefr": "A2",
    "example": "Track daily physical activity."
  },
  "day": {
    "ipa": "/deɪ/",
    "pos": "명사",
    "ko": "하루, 날",
    "cefr": "A1",
    "example": "The servers run 24 hours a day."
  },
  "unusual": {
    "ipa": "/ʌnˈjuː.ʒu.əl/",
    "pos": "형용사",
    "ko": "이상한, 특이한",
    "cefr": "A2",
    "example": "The system spotted an unusual login."
  },
  "request": {
    "ipa": "/rɪˈkwest/",
    "pos": "명사/동사",
    "ko": "요청; 요청하다",
    "cefr": "A2",
    "example": "Send an HTTP request to the server."
  },
  "appear": {
    "ipa": "/əˈpɪr/",
    "pos": "동사",
    "ko": "나타나다, 출현하다",
    "cefr": "A2",
    "example": "A warning message appeared on screen."
  },
  "block": {
    "ipa": "/blɑːk/",
    "pos": "동사/명사",
    "ko": "차단하다, 막다; 블록",
    "cefr": "A2",
    "example": "The router blocked the spam connection."
  },
  "combine": {
    "ipa": "/kəmˈbaɪn/",
    "pos": "동사",
    "ko": "결합하다, 합치다",
    "cefr": "B1",
    "example": "Combine speed with careful planning."
  },
  "alert": {
    "ipa": "/əˈlɝːt/",
    "pos": "형용사/명사",
    "ko": "경계하는, 기민한; 경보",
    "cefr": "B2",
    "example": "Stay alert for unexpected errors."
  },
  "keep": {
    "ipa": "/kiːp/",
    "pos": "동사",
    "ko": "유지하다, 보관하다",
    "cefr": "A1",
    "example": "Keep your personal password secret."
  },
  "user": {
    "ipa": "/ˈjuː.zɚ/",
    "pos": "명사",
    "ko": "사용자, 유저",
    "cefr": "A1",
    "example": "The user clicked on the card."
  },
  "secure": {
    "ipa": "/səˈkjʊr/",
    "pos": "형용사/동사",
    "ko": "안전한; 확보하다",
    "cefr": "B1",
    "example": "Use a secure internet connection."
  },
  "semifinal": {
    "ipa": "/ˌsem.iˈfaɪ.nəl/",
    "meaning": "준결승전, 4강전",
    "cefr": "B1",
    "ko": "준결승전, 4강전"
  },
  "semifinals": {
    "ipa": "/ˌsem.iˈfaɪ.nəlz/",
    "meaning": "준결승전, 4강전",
    "cefr": "B1",
    "ko": "준결승전, 4강전"
  },
  "stadium": {
    "ipa": "/ˈsteɪ.di.əm/",
    "meaning": "경기장, 스타디움",
    "cefr": "A2",
    "ko": "경기장, 스타디움"
  },
  "dramatic": {
    "ipa": "/drəˈmæt̬.ɪk/",
    "meaning": "극적인, 인상적인",
    "cefr": "B1",
    "ko": "극적인, 인상적인"
  },
  "upset": {
    "ipa": "/ʌpˈset/",
    "meaning": "이변, 뜻밖의 승리/패배; 당황하게 하다",
    "cefr": "B1",
    "ko": "이변, 뜻밖의 승리/패배"
  },
  "upsets": {
    "ipa": "/ʌpˈsets/",
    "meaning": "이변들, 뜻밖의 결과들",
    "cefr": "B1",
    "ko": "이변들, 뜻밖의 결과들"
  },
  "toughness": {
    "ipa": "/ˈtʌf.nəs/",
    "meaning": "강인함, 질김, 강인한 정신력",
    "cefr": "B2",
    "ko": "강인함, 강인한 정신력"
  },
  "consecutive": {
    "ipa": "/kənˈsek.jə.t̬ɪv/",
    "meaning": "연속적인, 연이은",
    "cefr": "B2",
    "ko": "연속적인, 연이은"
  },
  "prestigious": {
    "ipa": "/presˈtɪdʒ.əs/",
    "meaning": "명망 있는, 권위 있는",
    "cefr": "B2",
    "ko": "명망 있는, 권위 있는"
  },
  "unpredictable": {
    "ipa": "/ˌʌn.prɪˈdɪk.tə.bəl/",
    "meaning": "예측할 수 없는, 변화무쌍한",
    "cefr": "B2",
    "ko": "예측할 수 없는"
  },
  "defeat": {
    "ipa": "/dɪˈfiːt/",
    "meaning": "패배, 패배시키다",
    "cefr": "B1",
    "ko": "패배, 패배시키다"
  },
  "showdown": {
    "ipa": "/ˈʃoʊ.daʊn/",
    "meaning": "결판, 결승전 맞대결",
    "cefr": "B2",
    "ko": "결판, 결승전 맞대결"
  },
  "quarterfinal": {
    "ipa": "/ˌkwɔːr.t̬ɚˈfaɪ.nəl/",
    "meaning": "준준결승, 8강전",
    "cefr": "B1",
    "ko": "준준결승, 8강전"
  },
  "quarterfinals": {
    "ipa": "/ˌkwɔːr.t̬ɚˈfaɪ.nəlz/",
    "meaning": "준준결승, 8강전",
    "cefr": "B1",
    "ko": "준준결승, 8강전"
  },
  "seed": {
    "ipa": "/siːd/",
    "meaning": "시드 선수, 시드를 배정하다; 씨앗",
    "cefr": "B1",
    "ko": "시드 배정 선수"
  },
  "seeded": {
    "ipa": "/ˈsiː.dɪd/",
    "meaning": "시드를 배정받은",
    "cefr": "B1",
    "ko": "시드를 배정받은"
  },
  "overcome": {
    "ipa": "/ˌoʊ.vɚˈkʌm/",
    "meaning": "극복하다, 이겨내다",
    "cefr": "B1",
    "ko": "극복하다, 이겨내다"
  },
  "overcomes": {
    "ipa": "/ˌoʊ.vɚˈkʌmz/",
    "meaning": "극복하다, 이기다",
    "cefr": "B1",
    "ko": "극복하다, 이기다"
  },
  "thrilling": {
    "ipa": "/ˈθrɪl.ɪŋ/",
    "meaning": "짜릿한, 아주 흥미진진한",
    "cefr": "B1",
    "ko": "짜릿한, 아주 흥미진진한"
  },
  "groundstroke": {
    "ipa": "/ˈɡraʊnd.stroʊk/",
    "meaning": "그라운드스트로크 (바운드 후 치는 타구)",
    "cefr": "B2",
    "ko": "그라운드스트로크"
  },
  "groundstrokes": {
    "ipa": "/ˈɡraʊnd.stroʊks/",
    "meaning": "그라운드스트로크 타구들",
    "cefr": "B2",
    "ko": "그라운드스트로크 타구들"
  },
  "defending": {
    "ipa": "/dɪˈfen.dɪŋ/",
    "meaning": "방어하는, 타이틀을 지키는 (디펜딩)",
    "cefr": "B1",
    "ko": "타이틀을 방어하는"
  }
};
