import http from '../http-common'

class LessonLearnedService {
  selectAll() {
    return http.get('/api/lessonlearned')
  }

  create(data) {
    return http.post('/api/lessonlearned', data)
  }

  update(data) {
    return http.put(`/api/lessonlearned/update`, data)
  }

  //   delete(id) {
  //     return http.delete(`/tutorials/${id}`)
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`)
  //   }

  // selectIssue(issue) {
  //   return http.get(`/api/lessonlearned?issue=${issue}`)
  // }

  // selectIssue(issue) {
  //   return http.get(`/api/lessonlearned/search`, { params: { query: issue } })
  // }

  selectELK(issue) {
    return http.get(`/api/lessonlearned/search`, { params: { query: issue } })
  }

  selectFile() {
    return http.get('/api/lessonlearned/file')
  }

  updateFavorite(id, check) {
    return http.post(`/api/lessonlearned/${id}`, check)
  }

  incrementViews(id) {
    return http.post(`/api/lessonlearned/${id}/views`)
  }

  uploadFile(formdata, id) {
    return http.post(`/api/lessonlearned/upload`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: { id: id },
    })
  }

  downloadFile(id, file) {
    return http.get(`/api/lessonlearned/download?file=${encodeURIComponent(file)}&id=${id}`, {
      responseType: 'blob', // 바이너리 데이터는 Blob 형식으로 받아야함.
    })
  }
}

export default new LessonLearnedService()
