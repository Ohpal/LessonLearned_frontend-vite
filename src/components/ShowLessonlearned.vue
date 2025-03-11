<template>
  <div class="modal fade" id="list_modal" tabindex="-1" aria-labelledby="list_modal_Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="list_modal_Label">시운전 지식 정보(no.{{ setData.id }})</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label for="ProjectNameInput">프로젝트명</label>
                <input type="text" class="ll_value form-control" v-model="formData.project_title" :readonly="!editMode" />
              </div>
              <div class="col">
                <label for="DateInput">작성날짜</label>
                <input type="date" class="ll_value form-control" v-model="format_date" :readonly="!editMode" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="DepartmentInput">부서</label>
                <input type="text" class="ll_value form-control" v-model="formData.project_department" :readonly="!editMode" />
              </div>
              <div class="col">
                <label for="CommanderInput">작성자</label>
                <input type="text" class="ll_value form-control" v-model="formData.project_commander" :readonly="!editMode" />
              </div>
            </div>
            <div class="row">
              <div class="col-md">
                <label for="PartInput">시운전파트</label>
                <select class="ll_value form-select" v-model="formData.project_part" :disabled="!editMode">
                  <option selected>Select Part</option>
                  <option value="general">General Part</option>
                  <option value="hull">HULL Part</option>
                  <option value="machinery">Machinery Part</option>
                  <option value="electric">Electric Part</option>
                  <option value="accommodation">Accommodation Part</option>
                  <option value="outfitting">Outfitting Part</option>
                </select>
              </div>
              <div class="col-md">
                <label for="DescriptionInput">시운전항목</label>
                <input type="text" class="ll_value form-control" v-model="formData.project_description" :readonly="!editMode" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ProblemInput">발생이슈</label>
              <textarea class="ll_value form-control" rows="4" v-model="formData.project_issue" :readonly="!editMode"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ActionResultInput">조치결과</label>
              <textarea class="ll_value form-control" rows="4" v-model="formData.project_actionresult" :readonly="!editMode"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="FileInput">첨부파일 ({{ setFile.length }}개)</label>
              <div class="ll_value form-control overflow">
                <div v-if="setFile.length > 0">
                  <ul>
                    <li v-for="(file, index) in setFile" :key="file.id ? file.id + '_' + index : index">
                      <a class="link-primary pe-auto cursor" @click="downloadFileList(file.id, file.filename)">
                        <img :src="file_type(file.mimetype)" width="20" height="20" />
                        {{ file_divide(file) }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-else>
                  <input type="file" @change="handleFileUpload" multiple :disabled="!editMode" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-if="!editMode" data-bs-dismiss="modal">닫&nbsp;&nbsp;기</button>
          <button type="button" class="btn btn-secondary" v-if="editMode" @click="toggleEditMode">취&nbsp;&nbsp;소</button>
          <button type="button" class="btn btn-primary" v-if="!editMode" @click="toggleEditMode">수정하기</button>
          <button type="button" class="btn btn-success" v-if="editMode" @click="saveChanges">저장하기</button>
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

export default {
  name: 'ShowLessonlearned',
  props: {
    setData: {
      type: Object,
      default: () => ({}),
    },
    setFile: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      editMode: false,
      formData: {}, // 초기에는 빈 객체로 설정
      show: false,
      message: {
        type: String,
        deafult: '저장이 완료되었습니다!',
      },
      files: [], // 업로드할 파일 리스트
    }
  },

  watch: {
    setData: {
      handler(newValue) {
        // setData가 변경될 때마다 formData를 업데이트
        this.formData = { ...newValue }
      },
      immediate: true, // 컴포넌트가 로드될 때도 바로 호출되도록 설정
      deep: true, // setData의 깊은 속성 변화까지 감지
    },
  },

  computed: {
    format_date() {
      const project_dated = new Date(this.setData.project_date)
      const year = project_dated.getFullYear()
      const month = String(project_dated.getMonth() + 1).padStart(2, '0')
      const day = String(project_dated.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
  },

  methods: {
    // 기존 모달 데이터 출력
    async downloadFileList(id, name) {
      try {
        const response = await LessonlearnedService.downloadFile(id, name, {
          responseType: 'blob',
        })

        if (response.status !== 200) {
          throw new Error('파일을 다운로드하는 동안 오류가 발생했습니다.')
        }

        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()

        window.URL.revokeObjectURL(url)
        link.remove()
      } catch (error) {
        console.error('파일 다운로드 오류:', error)
      }
    },

    file_divide(file) {
      if (!file || !file.filename || !file.filesize) return '정보 없음'

      const fSExt = ['Bytes', 'KB', 'MB', 'GB']
      let file_name = file.filename
      let file_size = file.filesize

      let i = 0
      let checkSize = file_size

      while (checkSize > 900) {
        checkSize /= 1024
        i++
      }

      checkSize = Math.round(checkSize * 100) / 100 + ' ' + fSExt[i]
      return `${file_name} (${checkSize})`
    },

    file_type(type) {
      switch (type) {
        case 'jpg':
        case 'png':
          return '../assets/image/image_icon.png'
        case 'pdf':
          return '../assets/image/pdf_icon.png'
        case 'hwp':
        case 'hwpx':
          return '../assets/image/hwp_icon.png'
        case 'zip':
          return '../assets/image/zip_icon.png'
        default:
          return '../assets/image/other_icon.png'
      }
    },

    //====================수정하기 버튼 작업===============
    toggleEditMode() {
      this.editMode = !this.editMode
      if (!this.editMode) {
        // 수정 취소 시 원본 데이터를 복구
        this.formData = { ...this.setData }
      }
    },

    async saveChanges() {
      try {
        // 수정된 내용을 서버에 저장하는 로직 추가
        await LessonlearnedService.update(this.formData)
        this.$emit('update', this.formData) // 부모 컴포넌트에 변경 사항 알림
        this.editMode = false

        // 업데이트 성공 메시지
        this.showToast()
      } catch (error) {
        console.error('저장 중 오류 발생:', error)
      }
    },

    // 토스트 메세지 표시
    showToast() {
      this.show = true
      setTimeout(() => {
        this.show = false
        // this.$router.go(0)
      }, 2500)
    },
  },
}
</script>
<style scoped src="../assets/css/AddWrite.css"></style>
