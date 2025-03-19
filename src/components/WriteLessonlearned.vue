<template>
  <!-- 지식공유 Modal -->
  <div class="modal fade" id="lesson-write" ref="staticModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">시운전 지식 공유하기</h1>
          <button @click="newLessonlearned" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label for="ProjectNameInput">프로젝트명</label>
                <small class="text-danger" v-if="errors.error_title">{{ ' ※프로젝트 명을 입력하세요.' }}</small>
                <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_title ? 'red-round' : ''" id="ProjectNameInput" name="projectname" v-model="lessonlearned.project_title" placeholder="프로젝트 명" required />
              </div>
              <div class="col">
                <label for="DateInput">작성날짜</label>
                <small class="text-danger" v-if="errors.error_date">{{ ' ※날짜를 선택하세요.' }}</small>
                <input type="date" class="ll_value form-control" :class="errors.error_date ? 'red-round' : ''" id="DateInput" name="projectdate" :max="today" v-model="lessonlearned.project_date" required />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="DepartmentInput">부서</label>
                <small class="text-danger" v-if="errors.error_department">{{ ' ※관련 부서를 입력하세요.' }}</small>
                <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_department ? 'red-round' : ''" id="DepartmentInput" name="department" v-model="lessonlearned.project_department" placeholder="관련 부서명" required />
              </div>
              <div class="col">
                <label for="CommanderInput">작성자</label>
                <small class="text-danger" v-if="errors.error_commander">{{ ' ※성함을 입력하세요.' }}</small>
                <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_commander ? 'red-round' : ''" id="CommanderInput" name="commander" v-model="lessonlearned.project_commander" placeholder="작성자 성함" required />
              </div>
            </div>
            <div class="row">
              <div class="col-md">
                <label for="PartInput">시운전파트</label>
                <small class="text-danger" v-if="errors.error_part">{{ ' ※시운전 파트를 선택하세요.' }}</small>
                <select class="ll_value form-select" :class="errors.error_part ? 'red-round' : ''" name="part" v-model="lessonlearned.project_part" required>
                  <option value="" disabled selected>관련 시운전파트</option>
                  <option value="general">General Part</option>
                  <option value="hull">HULL Part</option>
                  <option value="machinery">Machinery Part</option>
                  <option value="electric">Electric Part</option>
                  <option value="accommodation">Accomodation Part</option>
                  <option value="outfitting">Outfitting Part</option>
                </select>
              </div>
              <div class="col-md">
                <label for="DescriptionInput">시운전항목</label>
                <small class="text-danger" v-if="errors.error_description">{{ ' ※시운전 항목을 입력하세요.' }}</small>
                <input type="text" autocomplete="off" class="ll_value form-control" :class="errors.error_description ? 'red-round' : ''" id="DescriptionInput" placeholder="시운전 항목" name="description" v-model="lessonlearned.project_description" required />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ProblemInput">발생이슈</label>
              <textarea class="ll_value form-control" id="problemArea" rows="4" name="problem" v-model="lessonlearned.project_issue"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ActionResultInput">조치결과</label>
              <textarea class="ll_value form-control" id="actionresultArea" rows="4" name="actionresult" v-model="lessonlearned.project_actionresult"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="FileInput">첨부파일(문서, 사진, 영상 등)</label>
              <input class="ll_value form-control" type="file" id="formFileMultiple" name="file" multiple @change="onFileUpload" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="newLessonlearned" type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소하기</button>
          <button @click="saveLessonlearned" type="button" id="myModal" class="btn btn-primary">저장하기</button>
        </div>
      </div>
    </div>
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
          {{ message.deafult }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LessonlearnedService from '../services/LessonlearnedService'
// import LessonLearnedVue from './LessonLearned.vue'
import $ from 'jquery'

export default {
  name: 'add-lessonlearned',
  data() {
    return {
      lessonlearned: {
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
        show_bool: true,
      },
      errors: {
        error_title: false,
        error_date: false,
        error_department: false,
        error_commander: false,
        error_part: false,
        error_description: false,
      },
      today: this.getTodayDate(),
      show: false,
      message: {
        type: String,
        deafult: '저장이 완료되었습니다!',
      },
      selectedFiled: [],
      loading: true,
      project_id: '',
    }
  },
  methods: {
    // 글작성 및 저장 시 이벤트
    saveLessonlearned() {
      try {
        this.loading = true
        var data = {
          project_title: this.lessonlearned.project_title,
          project_date: this.lessonlearned.project_date,
          project_department: this.lessonlearned.project_department,
          project_commander: this.lessonlearned.project_commander,
          project_part: this.lessonlearned.project_part,
          project_description: this.lessonlearned.project_description,
          project_issue: this.lessonlearned.project_issue,
          project_actionresult: this.lessonlearned.project_actionresult,
          project_files: this.lessonlearned.project_files,
          project_views: this.lessonlearned.project_views,
        }

        if (this.selectedFiled.length >= 1) {
          data.project_files = true
        }

        // 글작성 시 빈칸 및 필수 입력 확인
        if (data.project_title == '' || data.project_date == '' || data.project_department == '' || data.project_commander == '' || data.project_part == '' || data.project_description == '') {
          this.errors.error_title = true
          this.errors.error_date = true
          this.errors.error_department = true
          this.errors.error_commander = true
          this.errors.error_part = true
          this.errors.error_description = true
        } else {
          LessonlearnedService.create(data)
            .then((response) => {
              this.lessonlearned.id = response.data.id

              if (data.project_files) this.uploadFiles(this.lessonlearned.id)
            })
            .catch((e) => {
              console.log('Why:', e)
            })

          this.showToast()

          setTimeout(() => {
            $('#lesson-write').hide().removeClass('show').removeAttr('role').removeAttr('aria-modal').attr('aria-hidden', 'true')
            $('.modal-backdrop').remove()
            document.body.style.paddingRight = ''
            document.body.style.overflow = ''
            document.body.className = 'sb-nav-fixed sb-sidenav-toggled'
            this.newLessonlearned()
          }, 3000)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 글쓰기 취소 및 저장 시 초기화 이벤트
    newLessonlearned() {
      this.errors.error_title = false
      this.errors.error_date = false
      this.errors.error_department = false
      this.errors.error_commander = false
      this.errors.error_part = false
      this.errors.error_description = false

      this.lessonlearned.id = null
      this.lessonlearned.project_title = ''
      this.lessonlearned.project_date = ''
      this.lessonlearned.project_department = ''
      this.lessonlearned.project_commander = ''
      this.lessonlearned.project_part = ''
      this.lessonlearned.project_description = ''
      this.lessonlearned.project_issue = ''
      this.lessonlearned.project_actionresult = ''
      this.lessonlearned.project_files = false
      this.lessonlearned.project_views = 0
      this.lessonlearned.show_bool = true

      $('.ll_value').val('')
    },

    // 파일 업로드 관련 함수
    onFileUpload(event) {
      this.selectedFiled = event.target.files
    },

    uploadFiles(project_id) {
      const formData = new FormData()
      for (let i = 0; i < this.selectedFiled.length; i++) {
        formData.append('files', this.selectedFiled[i])
      }

      LessonlearnedService.uploadFile(formData, project_id)
        .then((response) => {
          console.log('File>>', response.data)
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },

    getTodayDate() {
      const today = new Date()
      const yyyy = today.getFullYear()
      const mm = String(today.getMonth() + 1).padStart(2, '0') // Months start at 0!
      const dd = String(today.getDate()).padStart(2, '0')
      return `${yyyy}-${mm}-${dd}`
    },
    showToast() {
      this.show = true
      setTimeout(() => {
        this.show = false
        this.$router.go(0)
      }, 2500)
    },
  },
}
</script>

<style scoped src="../assets/css/AddWrite.css"></style>
