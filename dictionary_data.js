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
  }
};
