<template>
  <div class="chatbot-root">
    <!-- 전체 대화(질문&답변+카드) 반복 -->
    <div v-if="conversation.length === 0" class="empty-state-area">
      <div class="empty-message">
        <i class="bi bi-chat-dots" style="font-size: 2.5rem; color: #4286f5" />
        <p class="mt-4 mb-3 fs-4 fw-semibold">무엇을 찾아드릴까요?</p>
      </div>
      <form class="input-group empty-input">
        <input type="text" class="form-control rounded-4 px-4 py-3" v-model="question" :disabled="loading" @keyup.enter="ask" placeholder="여기에 질문을 입력하세요" />
        <button class="btn btn-primary rounded-4 px-4 ms-2" type="submit" @click="ask" :disabled="loading || !question">질문하기</button>
      </form>
      <div v-if="loading" class="text-center mt-2">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        답변 생성 중...
      </div>
      <!-- 카테고리/추천 검색 -->
      <div class="category-row">
        <button v-for="cat in categories" :key="cat.text" class="category-btn" @click="onCategory(cat.text)">
          <span class="me-2"></span>
          {{ cat.text }}
        </button>
      </div>
    </div>
    <div v-else class="scroll-area" ref="scrollArea">
      <template v-for="(block, idx) in conversation" :key="block.id">
        <!-- 질문&답변 영역 -->
        <div class="bg-light rounded-4 p-4 shadow-sm mb-4 mt-5">
          <h5 class="fw-bold mb-3">{{ block.question }}</h5>
          <p class="mb-2 text-secondary" v-html="block.displayedAnswer"></p>
          <!-- <div class="d-flex gap-2 align-items-center mt-2">
            <button class="btn btn-light btn-sm border"><i class="bi bi-hand-thumbs-up"></i></button>
            <button class="btn btn-light btn-sm border"><i class="bi bi-hand-thumbs-down"></i></button>
            <span class="text-muted small">방향 피드백</span>
          </div> -->
        </div>
        <!-- 카드 그룹 (가로 스크롤) -->
        <transition name="fade">
          <div class="horizontal-scroll mb-5" v-if="block.showFeatures">
            <div class="d-flex gap-3 flex-nowrap">
              <div class="feature-card card h-100 p-4 me-2" v-for="feature in block.features" :key="feature.project_id" @click="openModal(feature)" style="min-width: 270px; flex: 0 0 auto; cursor: pointer">
                <div class="border-0 bg-light h-100 p-4">
                  <div class="d-flex align-items-start mb-3">
                    <div>
                      <h6 class="fw-bold mb-1">{{ feature.project_title }}</h6>
                      <small class="text-muted">{{ feature.project_description }}</small>
                    </div>
                  </div>
                  <p class="text-muted small features-description mb-3">{{ feature.project_issue }}</p>
                  <div class="mt-auto">
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted features-description">{{ feature.project_actionresult }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- 구분선: 마지막 질문에는 표시X -->
        <hr v-if="idx < conversation.length - 1" class="qa-divider" />
      </template>
    </div>
    <!-- 모달 -->
    <div class="modal fade" tabindex="-1" :class="{ show: showModal }" :style="showModal ? 'display:block; background:rgba(0,0,0,0.4);' : ''" @click.self="closeModal">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 650px">
        <div class="modal-content rounded-4 p-4">
          <div class="modal-header border-0 pb-1">
            <h5 class="modal-title">프로젝트 상세 정보</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row g-3 mb-2">
                <div class="col-md-6">
                  <label class="form-label fw-semibold">프로젝트명</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_title" disabled />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">작성날짜</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_date" disabled />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">부서</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_department" disabled />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">작성자</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_commander" disabled />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">시운전파트</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_part" disabled />
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">시운전항목</label>
                  <input type="text" class="form-control" :value="selectedCard?.project_description" disabled />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">발생이슈</label>
                <textarea class="form-control" rows="3" :value="selectedCard?.project_issue" disabled />
              </div>
              <div class="mb-2">
                <label class="form-label fw-semibold">조치결과</label>
                <textarea class="form-control" rows="3" :value="selectedCard?.project_actionresult" disabled />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- 입력창(고정 하단, 대화 있을때만) -->
    <div v-if="conversation.length > 0" class="d-flex justify-content-between">
      <form class="input-group input-area">
        <input type="text" class="form-control rounded-4 px-4 py-3" placeholder="추가 질문을 이어서 입력하세요" v-model="question" :disabled="loading" @keyup.enter="ask" />
        <button class="btn btn-primary rounded-4 px-4 ms-2" type="submit" @click="ask" :disabled="loading || !question">질문하기</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import LessonlearnedService from '@/services/LessonlearnedService'
import { ref, nextTick } from 'vue'

const search = ref('')
const loading = ref(false)
const question = ref('')
const scrollArea = ref(null)

const showModal = ref(false)
const selectedCard = ref(null)

// 대화 흐름 데이터
const conversation = ref([])

const categories = [
  {
    text: 'MACHINARY',
  },
  {
    text: '시운전',
  },
  {
    text: 'MACHINARY',
  },
  {
    text: '시운전',
  },
]

function onCategory(text) {
  search.value = text
  onSearch()
}

function onSearch() {
  alert(`검색어: ${search.value}`) // 실제 검색 처리 연결
}

// feautres의 모달 여는 함수
function openModal(card) {
  selectedCard.value = card
  showModal.value = true
  document.body.style.overflow = 'hidden' // 스크롤 막기
}

// features의 모달 닫는 함수
function closeModal() {
  showModal.value = false
  selectedCard.value = null
  document.body.style.overflow = '' // 스크롤 해제
}

// 비동기적으로 질문하여 답변을 가져오는 함수 - 답변 배열 추가
async function ask() {
  if (!question.value.trim()) return
  loading.value = true
  // answer.value = ''
  try {
    const res = await LessonlearnedService.questionLLM(question.value)

    conversation.value.push({
      question: question.value,
      answer: res.data.answer,
      displayedAnswer: '', // 애니메이션용 답변
      features: res.data.features,
      showFeatures: false, // 카드 그룹 애니메이션
    })
    showTypingEffect(conversation.value.length - 1, res.data.answer)
  } catch (e) {
    // 에러 처리
    conversation.value.push({
      question: question.value,
      answer: '에러가 발생했습니다: ' + (e?.response?.data?.error ?? e.toString()),
      displayedAnswer: '', // 애니메이션용 답변
      features: [],
    })

    showTypingEffect(conversation.value.length - 1, '에러가 발생했습니다: ' + (e?.response?.data?.error ?? e.toString()))
  }
  question.value = ''
  loading.value = false
}

// 답변에 타이핑 효과를 주는 함수
function showTypingEffect(idx, text, speed = 30) {
  let current = 0
  function typeNext() {
    if (!conversation.value[idx]) return
    conversation.value[idx].displayedAnswer = text.slice(0, current + 1)
    scrollToBottom() // 글자 추가마다 스크롤
    current++
    if (current < text.length) {
      setTimeout(typeNext, speed)
    } else {
      conversation.value[idx].showFeatures = true
    }
  }
  typeNext()
}

// 스크롤 내리는 함수
function scrollToBottom() {
  nextTick(() => {
    if (scrollArea.value) {
      scrollArea.value.scrollTop = scrollArea.value.scrollHeight
    }
  })
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
  padding-bottom: 100px;
}

/* Bootstrap 기본값 보완용 */
.horizontal-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  /* 스크롤바 예쁘게 만들기(선택사항) */
  scrollbar-width: thin;
  scrollbar-color: #ccc #eee;
  padding-bottom: 8px;
  padding-left: 1rem;
  padding-right: 1rem;
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

/* ------- 빈 대화 상태 ------- */
.empty-state-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}
.empty-message {
  text-align: center;
  color: #333;
}
.empty-input {
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 540px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.empty-input .form-control {
  min-width: 220px;
  text-align: center;
}

.category-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.category-btn {
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.6rem 1.3rem;
  border: 1px solid #eee;
  border-radius: 1.5rem;
  background: #fafbfc;
  color: #222;
  transition:
    background 0.13s,
    box-shadow 0.13s;
  min-width: 220px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(60, 111, 247, 0.05);
  cursor: pointer;
}
.category-btn:hover {
  background: #edeaff;
  color: #8338ec;
  border-color: #9a81ff;
}

.category-btn {
  min-width: 150px;
  font-size: 0.96rem;
  padding: 0.5rem 0;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
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

  .empty-input {
    max-width: 95%;
  }
  .qa-divider {
    width: 90%;
  }
}
</style>
