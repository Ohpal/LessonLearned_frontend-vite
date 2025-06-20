<template>
  <div id="app">
    <!-- Main Content -->
    <main class="py-5">
      <div class="container px-0">
        <!-- Title Section -->
        <div class="text-center mb-5">
          <h2 class="section-title">2023 업무 생산성 개선을 위한 최신 AI 솔루션 {{ currentYear }}</h2>
          <p class="text-muted lead">AI 기반 맞춤형 솔루션으로 업무의 효율성을 극대화하고 새로운 비즈니스 기회를 창출하세요. 실시간 데이터 분석부터 자동화된 의사결정까지, 혁신적인 AI 기술로 여러분의 비즈니스를 한 단계 발전시켜보세요.</p>
          <div class="d-flex justify-content-center gap-3 mt-4">
            <div class="d-flex align-items-center">
              <i class="fas fa-users me-2 text-purple"></i>
              <span class="text-muted">활성 사용자</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-chart-line me-2 text-purple"></i>
              <span class="text-muted">생산성 향상</span>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="features-scroll mb-5">
          <div class="feature-card card h-100 p-4 me-2" v-for="feature in features" :key="feature.id" style="min-width: 270px; flex: 0 0 auto">
            <div class="border-0 bg-light h-100 p-4">
              <div class="d-flex align-items-start mb-3">
                <div>
                  <h6 class="fw-bold mb-1">{{ feature.title }}</h6>
                  <small class="text-muted">{{ feature.category }}</small>
                </div>
              </div>
              <p class="text-muted small features-description mb-3">{{ feature.description }}</p>
              <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-muted">{{ feature.stats }}</small>
                  <button class="btn btn-outline-primary btn-sm">자세히</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Search Section -->
  <div class="bg-purple-light p-5 text-center">
    <h3 class="mb-4">궁금한 것이 있으시다면 언제든지 물어보세요</h3>
    <div class="search-container">
      <input type="text" class="form-control search-input" placeholder="무엇을 도와드릴까요?" v-model="searchQuery" @keyup.enter="handleSearch" />
      <button class="search-btn" @click="handleSearch">질문</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      searchQuery: '',

      features: [
        {
          id: 1,
          title: '스마트 분석 엔진',
          category: '데이터 인텔리전스',
          description: '머신러닝 기반 예측 분석으로 비즈니스 트렌드를 미리 파악하고 전략적 의사결정을 지원합니다.',
          stats: '정확도 97.5%',
        },
        {
          id: 2,
          title: '프로세스 최적화',
          category: '업무 효율성',
          description: 'AI 기반 워크플로우 분석을 통해 업무 프로세스의 병목 구간을 식별하고 최적화 방안을 제시합니다.',
          stats: '효율성 65% 향상',
        },
        {
          id: 3,
          title: '팀 협업 도구',
          category: '커뮤니케이션',
          description: '실시간 협업 환경에서 팀원 간의 원활한 소통과 프로젝트 관리를 위한 통합 솔루션을 제공합니다.',
          stats: '협업 만족도 92%',
        },
        {
          id: 4,
          title: '팀 협업 도구',
          category: '커뮤니케이션',
          description: '실시간 협업 환경에서 팀원 간의 원활한 소통과 프로젝트 관리를 위한 통합 솔루션을 제공합니다.',
          stats: '협업 만족도 92%',
        },
        {
          id: 5,
          title: '팀 협업 도구',
          category: '커뮤니케이션',
          description: '실시간 협업 환경에서 팀원 간의 원활한 소통과 프로젝트 관리를 위한 통합 솔루션을 제공합니다.',
          stats: '협업 만족도 92%',
        },
      ],
    }
  },

  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        alert(`검색어: "${this.searchQuery}"\n\n실제 구현에서는 AI 챗봇 응답이 표시됩니다.`)
        this.searchQuery = ''
      }
    },
  },
}
</script>

<style>
:root {
  --primary-purple: #8b5cf6;
  --light-purple: #a78bfa;
  --dark-purple: #7c3aed;
}
.rims-app {
  overflow: auto;
}
.header-purple {
  background: linear-gradient(135deg, var(--primary-purple) 0%, var(--dark-purple) 100%);
}

.feature-card {
  min-width: 210px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15);
}

.features-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 1.2rem;
  scrollbar-width: thin;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  padding-left: 1rem;
  padding-right: 1rem;
}
.features-scroll::-webkit-scrollbar {
  height: 10px;
}
.features-scroll::-webkit-scrollbar-thumb {
  background: var(--primary-purple);
  border-radius: 5px;
}

.features-description {
  max-width: 270px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2;
  line-clamp: 2;
  display: -webkit-box;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.search-input {
  border-radius: 50px;
  border: 2px solid #e5e7eb;
  padding: 15px 60px 15px 20px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--primary-purple);
  box-shadow: 0 0 0 0.2rem rgba(139, 92, 246, 0.25);
}

.search-btn {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary-purple);
  border: none;
  border-radius: 50px;
  padding: 8px 20px;
  color: white;
  font-weight: 600;
}

.search-btn:hover {
  background: var(--dark-purple);
}

.badge-new {
  background: linear-gradient(45deg, #ff6b6b, #ff8e53);
  color: white;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
}

.section-title {
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
}

.text-purple {
  color: var(--primary-purple) !important;
}

.bg-purple-light {
  background-color: #f3f4f6;
}
</style>
