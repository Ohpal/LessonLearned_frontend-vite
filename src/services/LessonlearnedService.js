import http from '../http-common'

class LessonLearnedService {
  selectAll() {
    return http.get('/rims-api/lessonlearned')
  }

  create(data) {
    return http.post('/rims-api/lessonlearned', data)
  }

  update(data) {
    return http.put(`/rims-api/lessonlearned/update`, data)
  }

  selectELK(issue) {
    return http.get(`/rims-api/lessonlearned/search`, { params: { query: issue } })
  }

  selectFile(id) {
    return http.get(`/rims-api/lessonlearned/file/${id}`)
  }

  updateFavorite(id, check) {
    return http.post(`/rims-api/lessonlearned/${id}`, check)
  }

  incrementViews(id) {
    return http.post(`/rims-api/lessonlearned/${id}/views`)
  }

  uploadFile(formdata, id) {
    return http.post(`/rims-api/lessonlearned/upload`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: { id: id },
    })
  }

  downloadFile(id, file) {
    return http.get(`/rims-api/lessonlearned/download?file=${encodeURIComponent(file)}&id=${id}`, {
      responseType: 'blob', // 바이너리 데이터는 Blob 형식으로 받아야함.
    })
  }

  // LLM 검색 및 답변
  questionLLM(question) {
    return http.post(`/rims-api/lessonlearned/ask`, { question })
  }
}

export default new LessonLearnedService()
