<template>
  <!-- <div class="modal fade" id="list_modal" tabindex="-1" aria-labelledby="list_modal_Label" aria-hidden="true"> -->
  <div class="modal fade" id="list_modal" tabindex="-1" aria-labelledby="list_modal_Label" inert="true"></div>
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
                <input type="text" class="ll_value form-control" :value="setData.project_title" readonly />
              </div>
              <div class="col">
                <label for="DateInput">작성날짜</label>
                <input type="date" class="ll_value form-control" :value="format_date" readonly />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="DepartmentInput">부서</label>
                <input type="text" class="ll_value form-control" :value="setData.project_department" readonly />
              </div>
              <div class="col">
                <label for="CommanderInput">작성자</label>
                <input type="text" class="ll_value form-control" :value="setData.project_commander" readonly />
              </div>
            </div>
            <div class="row">
              <div class="col-md">
                <label for="PartInput">시운전파트</label>
                <select class="ll_value form-select" :value="setData.project_part" disabled>
                  <option selected>Select Part</option>
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
                <input type="text" class="ll_value form-control" :value="setData.project_description" readonly />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ProblemInput">발생이슈</label>
              <textarea class="ll_value form-control" rows="4" :value="setData.project_issue" readonly></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="ActionResultInput">조치결과</label>
              <textarea class="ll_value form-control" rows="4" :value="setData.project_actionresult" readonly></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label for="FileInput">첨부파일 ({{ setFile.length }}개)</label>
              <div class="ll_value form-control overflow">
                <div v-if="setData.project_files">
                  <ul>
                    <li v-for="(file, index) in setFile" :key="file.id ? file.id + '_' + index : index">
                      <a class="link-primary pe-auto cursor" @click="downloadFileList(file.id, file.filename)">
                        <img :src="file_type(file.mimetype)" width="20" height="20" />
                        {{ file_divide(file) }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div v-else>파일이 없습니다.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫&nbsp;&nbsp;기</button>
          <button type="button" class="btn btn-primary">수정하기</button>
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
      type: Object,
      default: () => ({}),
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
    async downloadFileList(id, name) {
      try {
        // 파일 다운로드 요청
        const response = await LessonlearnedService.downloadFile(id, name, {
          responseType: 'blob', // 응답 데이터 형식을 blob으로 설정
        })

        if (response.status !== 200) {
          throw new Error('파일을 다운로드하는 동안 오류가 발생했습니다.')
        }

        // 파일 다운로드 처리
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()

        // 메모리 정리
        window.URL.revokeObjectURL(url)
        link.remove()
      } catch (error) {
        console.error('파일 다운로드 오류:', error)
      }
    },

    file_divide(file) {
      var fSExt = new Array('Bytes', 'KB', 'MB', 'GB')
      let file_name = file.filename
      let file_size = file.filesize

      var i = 0
      var checkSize = file_size

      while (checkSize > 900) {
        checkSize /= 1024
        i++
      }

      checkSize = Math.round(checkSize * 100) / 100 + ' ' + fSExt[i]

      return `${file_name} (${checkSize})`
    },

    // 파일 형식에 따라 이미지 변경
    file_type(type) {
      switch (type) {
        case 'jpg':
        case 'png':
          return require('../assets/image/image_icon.png')
        case 'pdf':
          return require('../assets/image/pdf_icon.png')
        case 'hwp':
        case 'hwpx':
          return require('../assets/image/hwp_icon.png')
        case 'zip':
          return require('../assets/image/zip_icon.png')
        default:
          return require('../assets/image/other_icon.png')
      }
    },
  },
}
</script>
<style scoped src="../assets/css/AddWrite.css"></style>
