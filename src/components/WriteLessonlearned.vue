<template>
  <div class="container-fluid">
    <div class="container-fluid content-box-rims">
      <div class="d-flex align-items-center mb-3">
        <div class="d-flex fs-5">시운전 지식 등록</div>
      </div>
      <form class="p-4" @submit.prevent="onSubmit" style="max-width: 700px; margin: 0 auto">
        <div class="row mb-0">
          <!-- 프로젝트명 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">프로젝트명</label>
            <small class="text-danger" v-if="errors.error_title">{{ ' ※프로젝트 명을 입력하세요.' }}</small>
            <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_title ? 'red-round' : ''" id="ProjectNameInput" name="projectName" v-model="lesson.project_title" placeholder="프로젝트 명" required />
          </div>
          <!-- 작성날짜 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">작성날짜</label>
            <small class="text-danger" v-if="errors.error_date">{{ ' ※날짜를 선택하세요.' }}</small>
            <input type="date" class="ll_value form-control" :class="errors.error_date ? 'red-round' : ''" id="DateInput" name="projectDate" :max="today" v-model="lesson.project_date" required />
          </div>
          <!-- 부서 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">부서</label>
            <small class="text-danger" v-if="errors.error_department">{{ ' ※관련 부서를 입력하세요.' }}</small>
            <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_department ? 'red-round' : ''" id="DepartmentInput" name="department" v-model="lesson.project_department" placeholder="관련 부서명" required />
          </div>
          <!-- 작성자 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">작성자</label>
            <small class="text-danger" v-if="errors.error_commander">{{ ' ※성함을 입력하세요.' }}</small>
            <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_commander ? 'red-round' : ''" id="CommanderInput" name="commander" v-model="lesson.project_commander" placeholder="작성자 성함" required />
          </div>
          <!-- 시운전파트 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">시운전파트</label>
            <small class="text-danger" v-if="errors.error_part">{{ ' ※시운전 파트를 선택하세요.' }}</small>
            <select class="ll_value form-select" :class="errors.error_part ? 'red-round' : ''" name="part" v-model="lesson.project_part" required>
              <option value="">관련 시운전파트</option>
              <option value="general">General Part</option>
              <option value="hull">HULL Part</option>
              <option value="machinery">Machinery Part</option>
              <option value="electric">Electric Part</option>
              <option value="accommodation">Accomodation Part</option>
              <option value="outfitting">Outfitting Part</option>
            </select>
          </div>
          <!-- 시운전항목 -->
          <div class="col-md-6 mb-2">
            <label class="form-label">시운전항목</label>
            <small class="text-danger" v-if="errors.error_description">{{ ' ※시운전 항목을 입력하세요.' }}</small>
            <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_description ? 'red-round' : ''" id="DescriptionInput" placeholder="시운전 항목" name="description" v-model="lesson.project_description" required />
          </div>
        </div>
        <!-- 발생이슈 -->
        <div class="mb-2">
          <label class="form-label">발생이슈</label>
          <textarea class="ll_value form-control" id="problemArea" rows="5" name="problem" v-model="lesson.project_issue"></textarea>
        </div>
        <!-- 조치결과 -->
        <div class="mb-2">
          <label class="form-label">조치결과</label>
          <textarea class="ll_value form-control" id="actionResultArea" rows="5" name="actionResult" v-model="lesson.project_actionresult"></textarea>
        </div>
        <!-- 첨부파일 -->
        <div class="mb-2">
          <label class="form-label">첨부파일(문서, 사진, 영상 등)</label>
          <input class="ll_value form-control" type="file" id="formFileMultiple" name="file" multiple @change="onFileUpload" />
          <small class="text-secondary ms-2">{{ fileName }}</small>
        </div>
        <!-- 버튼 (오른쪽 정렬) -->
        <div class="d-flex justify-content-end gap-2 mt-3">
          <button @click="resetLesson" type="button" class="btn custom-secondary-btn">취소하기</button>
          <button @click.prevent="saveLesson" type="button" class="btn rims-custom-btn">저장하기</button>
        </div>

        <div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
          <div v-if="show" class="toast show custom-toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
              <div class="toast-icon align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div class="toast-body">
                {{ message }}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LessonlearnedService from '../services/LessonlearnedService'

//오늘 날짜를 구하는 함수
function getTodayDate() {
  const d = new Date()
  return d.toISOString().slice(0, 10)
}

const lesson = ref({
  id: null,
  project_title: '',
  project_date: '',
  project_department: '',
  project_commander: '',
  project_part: '',
  project_description: '',
  project_issue: '',
  project_actionresult: '',
  project_files: false,
  project_views: 0,
  show_bool: false,
})

const errors = ref({
  error_title: false,
  error_date: false,
  error_department: false,
  error_commander: false,
  error_part: false,
  error_description: false,
})

const show = ref(false)

const today = getTodayDate()

const fileName = ref('선택된 파일 없음')

const message = ref('저장이 완료되었습니다.')

const selectedFile = ref([])

const loading = ref(true)

function saveLesson() {
  try {
    loading.value = true
    const data = {
      project_title: lesson.value.project_title,
      project_date: lesson.value.project_date,
      project_department: lesson.value.project_department,
      project_commander: lesson.value.project_commander,
      project_part: lesson.value.project_part,
      project_description: lesson.value.project_description,
      project_issue: lesson.value.project_issue,
      project_actionresult: lesson.value.project_actionresult,
      project_files: lesson.value.project_files,
      project_views: lesson.value.project_views,
    }

    if (selectedFile.value.length >= 1) {
      data.project_files = true
    }

    // 필수 입력값 체크
    errors.value.error_title = !data.project_title
    errors.value.error_date = !data.project_date
    errors.value.error_department = !data.project_department
    errors.value.error_commander = !data.project_commander
    errors.value.error_part = !data.project_part
    errors.value.error_description = !data.project_description

    // 하나라도 비면 저장 불가
    if (errors.value.error_title || errors.value.error_date || errors.value.error_department || errors.value.error_commander || errors.value.error_part || errors.value.error_description) {
      loading.value = false
      return
    }

    showToast()

    LessonlearnedService.create(data)
      .then((response) => {
        lesson.value.id = response.data.id
        if (data.project_files) uploadFiles(lesson.value.id)
        else loading.value = false
        message.value = '저장이 완료되었습니다.'
        // 여기에 저장완료 처리

        window.location.href = '/lesson' // 메인 페이지로 이동
      })
      .catch((e) => {
        loading.value = false
        console.error('Lesson Save Err>>', e)
      })
  } catch (e) {
    console.error('Save Lesson ERR>>', e)
  }
}

function resetLesson() {
  // 에러 리셋
  Object.keys(errors.value).forEach((key) => (errors.value[key] = false))
  // 폼 리셋
  Object.keys(lesson.value).forEach((key) => (lesson.value[key] = key === 'project_views' ? 0 : key === 'project_files' ? false : ''))
  lesson.value.show_bool = true
  fileName.value = '선택된 파일 없음'
  selectedFile.value = []
  window.location.href = '/lesson/learned' // 메인 페이지로 이동
}

function onFileUpload(event) {
  selectedFile.value = event.target.files
  if (selectedFile.value.length) {
    fileName.value = Array.from(selectedFile.value)
      .map((file) => file.name)
      .join(', ')
  } else {
    fileName.value = '선택된 파일 없음'
  }
}

function uploadFiles(project_id) {
  const formData = new FormData()
  for (let i = 0; i < selectedFile.value.length; i++) {
    formData.append('files', selectedFile.value[i])
  }

  LessonlearnedService.uploadFile(formData, project_id)
    .then((response) => {
      console.log('File>>', response.data)
    })
    .catch((e) => {
      console.error('UploadFiles ERR>>', e)
    })
    .finally(() => {
      loading.value = false
    })
}

// 폼 submit 이벤트에서 saveLesson 호출
function onSubmit() {
  saveLesson()
}

function showToast() {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2500)
}
</script>

<style scoped>
/* 버튼 간격과 우측 정렬 커스텀(부트스트랩과 함께 사용) */
.btn + .btn {
  margin-left: 8px;
}

.content-box-rims {
  padding: 24px 32px 32px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-box {
  background: #fff;
  border-radius: 10px;
  box-shadow:
    0 8px 24px rgba(60, 111, 247, 0.07),
    0 1.5px 8px rgba(0, 0, 0, 0.08);
  /* max-width: 900px; */
  margin: 0 auto;
  padding: 40px 0 60px 0;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rims-custom-btn {
  background: #4286f5 !important;
  color: #fff !important; /* 원하는 파란색 */
  border: 1.5px solid #4286f5 !important;
  font-weight: bold;
}
.rims-custom-btn:hover,
.rims-custom-btn:focus {
  background: #0b5ed7 !important;
  color: #f3f6fb !important;
  border-color: #f3f6fb !important;
}

.custom-secondary-btn {
  background: #6c757d !important;
  color: #fff !important; /* 원하는 파란색 */
  border: 1.5px solid #6c757d !important;
  font-weight: bold;
}

.custom-secondary-btn:hover,
.custom-secondary-btn:focus {
  background: #4c4c4c !important;
  color: #f3f6fb !important;
  border-color: #f3f6fb !important;
}
</style>

<style scoped src="../assets/css/AddWrite.css"></style>
