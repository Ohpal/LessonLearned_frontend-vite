<template>
  <div class="chatbot-root">
    <!-- 전체 대화(질문&답변+카드) 반복 -->
    <div class="scroll-area">
      <template v-for="(block, idx) in conversation" :key="block.id">
        <!-- 질문&답변 영역 -->
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4">
          <h5 class="fw-bold mb-3">{{ block.question }}</h5>
          <p class="mb-2 text-secondary" v-html="block.answer"></p>
          <div class="d-flex gap-2 align-items-center mt-2">
            <button class="btn btn-light btn-sm border"><i class="bi bi-hand-thumbs-up"></i></button>
            <button class="btn btn-light btn-sm border"><i class="bi bi-hand-thumbs-down"></i></button>
            <span class="text-muted small">방향 피드백</span>
          </div>
        </div>
        <!-- 카드 그룹 (가로 스크롤) -->
        <div class="horizontal-scroll mb-5">
          <div class="d-flex gap-3 flex-nowrap">
            <div class="feature-card card h-100 p-4 me-2" v-for="feature in block.features" :key="feature.id" @click="openModal(feature)" style="min-width: 270px; flex: 0 0 auto; cursor: pointer">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 구분선: 마지막 질문에는 표시X -->
        <hr v-if="idx < conversation.length - 1" class="qa-divider" />
      </template>
    </div>
    <!-- 모달 -->
    <div class="modal fade" tabindex="-1" :class="{ show: showModal }" :style="showModal ? 'display:block; background:rgba(0,0,0,0.4);' : ''" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4">
          <div class="modal-header border-0">
            <h5 class="modal-title">{{ selectedCard?.title }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div v-html="selectedCard?.description"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 입력창(고정 하단) -->
    <form class="input-group input-area">
      <input type="text" class="form-control rounded-4 px-4 py-3" placeholder="추가 질문을 이어서 입력하세요" />
      <button class="btn btn-primary rounded-4 px-4 ms-2" type="submit">검색</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 대화 흐름 데이터
const conversation = [
  {
    id: 1,
    question: '2023 연말 정산에서 가장 크게 달라진 점은 뭐야?',
    answer: '2023년 연말정산(22년 귀속)부터 청년형 장기펀드에 대한 소득공제가 신설되었고[1], 신용카드 소득공제 지원이 강화되며[2], 전통시장 소비증가분에 대한 소득공제가 신설되었습니다[3].<br>추가로 부동산 임차를 위한 주택임차자금에 대한 공제제도도 신설되었습니다[4]...',
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
    ],
  },
  {
    id: 2,
    question: '청년형 장기펀드는 누가 가입할 수 있어?',
    answer: '청년형 장기펀드는 만 19세 이상~34세 이하의 근로소득자 또는 사업소득자(연소득 5,000만원 이하, 종합소득 3,800만원 이하)가 가입 대상입니다.',
    features: [
      {
        id: 3,
        title: '가입 연령',
        category: '대상자 조건',
        description: '만 19세 이상 ~ 34세 이하의 청년',
        stats: '연령 기준',
      },
      {
        id: 4,
        title: '소득 요건',
        category: '대상자 조건',
        description: '근로/사업 소득 연 5,000만원 이하',
        stats: '소득 기준',
      },
    ],
  },
  // 더 추가 가능...
]

const showModal = ref(false)
const selectedCard = ref(null)

function openModal(card) {
  selectedCard.value = card
  showModal.value = true
  document.body.style.overflow = 'hidden' // 스크롤 막기
}
function closeModal() {
  showModal.value = false
  selectedCard.value = null
  document.body.style.overflow = '' // 스크롤 해제
}
</script>

<style scoped>
/* 전체 루트(높이 100vh, 배경 등) */
.chatbot-root {
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* background: #fafbfc; */
  position: relative;
  overflow-y: auto;
}

/* 질문&답변 상단 영역 고정 (sticky) */
.qa-container {
  /* position: sticky; */
  top: 0;
  z-index: 100;
  margin-bottom: 1rem;
}

/* 아래 스크롤 영역(카드+입력창) */
.scroll-area {
  flex: 1 1 0%;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 100px; /* 입력창 높이만큼 여백 */
}

/* Bootstrap 기본값 보완용 */
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  /* 스크롤바 예쁘게 만들기(선택사항) */
  scrollbar-width: thin;
  scrollbar-color: #ccc #eee;
  padding-bottom: 8px;
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

.horizontal-scroll::-webkit-scrollbar {
  height: 8px;
}
.horizontal-scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}
.horizontal-scroll::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 4px;
}

/* 모달 커스텀 */
.modal {
  transition: opacity 0.2s;
  z-index: 2000;
}
.modal.show {
  opacity: 1;
}
.modal:not(.show) {
  opacity: 0;
  pointer-events: none;
}
.modal-dialog {
  max-width: 400px;
}
.modal-content {
  border-radius: 2rem;
  padding: 1rem 0.5rem;
}

.input-group {
  z-index: 1050;
  background: #fff;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.07);
  border-radius: 2rem;
  padding: 0.25rem 0.5rem;
}

/* 입력창 하단 고정 */
.input-area {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
  max-width: 700px;
  width: 100%;
  z-index: 1100;
  background: #fff;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.07);
  border-radius: 2rem;
  padding: 0.25rem 0.5rem;
}
/* 모바일 대응 */
@media (max-width: 767px) {
  .row-cols-md-5 > * {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .position-fixed {
    left: 0 !important;
    transform: none !important;
    max-width: 100% !important;
  }
}
</style>
