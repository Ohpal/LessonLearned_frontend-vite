<!-- Lesson Learend Page-->
<template>
  <div class="container-fluid px-5">
    <div class="mt-4 d-flex">
      <h4 class="d-flex gap-2 mb-3 h4-header title-wrapper">Lesson Learend > Search</h4>

      <!-- 지식공유 Modal -->
      <WriteLessonlearned />
    </div>

    <!--Lesson Learned 검색-->
    <div class="container-fluid content-box-rims">
      <div class="d-flex align-items-center mb-3">
        <div class="d-flex fs-5">시운전 지식 공유</div>
        <div class="d-flex ms-3">
          <button type="button" class="btn btn-primary gap-2 justify-content-end" data-bs-toggle="modal" data-bs-target="#lesson-write">지식공유+</button>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row gx-5">
          <div class="col-md-4 p-3 border bg-light rounded-left-10">
            <div class="bd-subnavbar" style="height: 230px">
              <div class="fs-6 fw-bold text-primary d-flex">
                <div class="d-flex">시운전 Lesson Learned</div>
              </div>
              <form class="bd-search position-relative me-auto mt-3" @submit.prevent="handleSubmit">
                <div class="input-group shadow-sm">
                  <input class="form-control" type="text" placeholder="시운전 검색어를 입력하세요." aria-label="시운전 검색어를 입력하세요." aria-describedby="btnNavbarSearch" spellcheck="false" aria-expanded="false" aria-autocomplete="list" v-model="search_issue" aria />
                  <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="searchLessonlearned">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div class="bd-subnavbar">
              <div class="fs-6 fw-bold text-primary">시운전 Lesson Learend 키워드</div>
              <div class="row gap-3 mb-3 p-3 bg-white border rounded keyword mx-auto shadow-sm">
                <button type="button" class="btn btn-primary col-md-auto" v-for="keyword in keywords" v-bind:key="keyword" @click="keyword_select" data-value="{{ keyword }}">{{ keyword }}</button>
              </div>
            </div>
          </div>
          <!--Lesson Learned 리스트-->
          <div class="col-md-8 p-3 border bg-light">
            <div class="row row-padding">
              <div class="col-11 fs-6 fw-bold text-primary">Lessson Learned 리스트</div>
              <div class="col-1 dropdown">
                <button class="btn dropdown-toggle fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ sortOption }}</button>
                <ul class="dropdown-menu fs-6">
                  <li><a class="dropdown-item" @click="updateSortOption('최신순')">최신순</a></li>
                  <li><a class="dropdown-item" @click="updateSortOption('등록순')">등록순</a></li>
                  <li><a class="dropdown-item" @click="updateSortOption('조회순')">조회순</a></li>
                </ul>
              </div>
            </div>
            <div class="d-flex justify-content-center load_middle" v-if="loading">
              <div class="spinner-border text-primary m-5" role="status">
                <span class="sr-only"></span>
              </div>
            </div>
            <!-- 데이터 없음 이미지 -->
            <div class="d-flex justify-content-center load_middle" v-else-if="select_empty">
              <img src="../assets/image/notfound.png" alt="No data found" />
            </div>
            <div class="list-group" v-else>
              <div class="list-group-item list-group-item-action d-flex flex-row shadow-sm" v-for="(item, index) in sortedLessonlearnedList" :key="index">
                <div class="col-md align-self-center text-center">
                  <button class="btn favorite-btn" v-if="item.show_bool === false" @click="favorite_check(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                  </button>
                  <button v-else class="btn favorite-btn favorite-color" @click="favorite_check(false)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                </div>
                <!-- <div class="col-md-7 align-self-center" data-bs-toggle="modal" data-bs-target="#list_modal" @click="sendData(index)"> -->
                <div class="col-md-7 align-self-center" data-bs-toggle="modal" data-bs-target="#list_modal" @click="increaseProjectViews(index)">
                  <div class="mb-1 text-primary fw-bold h5 long-text">{{ item.project_title }}</div>
                  <div class="mb-1 long-text">{{ item.project_issue }}</div>
                </div>
                <small class="col-md-2 align-self-center text-left long-text">{{ item.project_commander }} | {{ item.project_part }}</small>
                <!-- <small class="col-md-2 align-self-center text-left long-text">{{ item.project_commander }} | {{ item.project_part.toUpperCase() }}</small> -->

                <div class="col-md-2 align-self-center text-left">
                  <!-- <small class="col-md-2">작성일 {{ item.project_date.split('T')[0] }}</small> -->
                  <small class="col-md-2">작성일 {{ item.project_date }}</small>
                  <br />
                  <small class="col-md-2 big-small">조회수&nbsp;{{ item.project_views }}</small>
                </div>
              </div>
            </div>
            <!-- Lessonlearned 상세보기 Modal -->
            <ShowLessonlearned :setData="setDatas" :setFile="setFiles" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WriteLessonlearned from './WriteLessonlearned.vue'
import LessonlearnedService from '../services/LessonlearnedService'
import ShowLessonlearned from './ShowLessonlearned.vue'

export default {
  components: { WriteLessonlearned, ShowLessonlearned },
  name: 'LessonLearned',
  data() {
    return {
      currentLessonlearned: null,
      message: '',
      lessonlearned_list: [],
      file_list: [],
      currentIndex: -1,
      setDatas: [],
      setFiles: [],
      keywords: ['#전 체', '#안 벽', '#기 관', '#선 장', '#전 장', '#해 상', '#GENERAL', '#HULL', '#MACHINERY', '#ELECTRIC', '#ACCOMMODATION', '#OUTFITTING'],
      search_issue: '',
      loading: true,
      load_error: null,
      select_empty: false,
      sortOption: '최신순',
    }
  },
  computed: {
    sortedLessonlearnedList() {
      // 현재 선택된 정렬 옵션에 따라 정렬된 리스트 반환
      return [...this.lessonlearned_list].sort((a, b) => {
        if (this.sortOption === '조회순') {
          return b.project_views - a.project_views // 조회수 내림차순
        } else if (this.sortOption === '최신순') {
          return new Date(b.project_date) - new Date(a.project_date) // 날짜 내림차순
        } else if (this.sortOption === '등록순') {
          return a.id - b.id // ID 오름차순
        }
      })
    },
  },

  methods: {
    // 전체 Select
    async retrieveLessonLearned() {
      try {
        this.loading = true
        this.load_error = null
        this.select_empty = false

        LessonlearnedService.selectAll()
          .then((response) => {
            this.lessonlearned_list = response.data
          })
          .catch((e) => {
            this.load_error = '게시물을 불러오는 중 오류가 발생하였습니다.'
            console.log(e)
          })

        LessonlearnedService.selectFile()
          .then((response) => {
            this.file_list = response.data
          })
          .catch((e) => {
            this.load_error = '파일 에러'
            console.log(e)
          })
          .finally(() => {
            this.loading = false
          })
      } catch (error) {
        console.log('retrieveLessonLearned>>', error)
      }
    },

    // 검색 List 정렬 옵션 업데이트
    updateSortOption(option) {
      this.sortOption = option
    },

    /*--------------------------------------------------------*/
    // 검색 Select
    async searchLessonlearned() {
      try {
        this.loading = true
        this.load_error = null
        this.select_empty = false
        if (this.search_issue.search_issue == '') {
          alert('시운전 검색어를 입력하세요.')
          return
        } else {
          await LessonlearnedService.selectELK(this.search_issue)
            .then((response) => {
              this.lessonlearned_list = response.data
              this.setActiveLessonleanred(null)

              if (response.data.length === 0) {
                this.select_empty = true
              }
            })
            .catch((e) => {
              this.load_error = '게시물을 불러오는 중 오류가 발생하였습니다.'
              console.log(e)
            })
            .finally(() => {
              this.loading = false
            })
        }
      } catch (error) {
        console.log('searchLessonlearned ERR>>', error)
      }
    },

    // 카테고리 Select
    async keyword_select(event) {
      try {
        this.loading = true
        this.load_error = null
        this.select_empty = false
        let btn_text = event.target.textContent

        btn_text = btn_text.replace('#', '').replace(/\s+/g, '')

        if (btn_text == '전체') {
          this.retrieveLessonLearned()
        } else {
          await LessonlearnedService.selectELK(btn_text)
            .then((response) => {
              this.lessonlearned_list = response.data
              this.setActiveLessonleanred(null)
            })
            .catch((e) => {
              this.load_error = '게시물을 불러오는 중 오류가 발생하였습니다.'
              console.log(e)
            })
            .finally(() => {
              this.loading = false
            })
        }
      } catch (error) {
        console.log('keyword_select>>', error)
      }
    },

    // 엔터키를 통한 검색
    async handleSubmit() {
      this.searchLessonlearned()
    },

    // 리스트 화면 갱신
    refreshList() {
      this.retrieveLessonLearned()
      this.currentLessonlearned = null
      this.currentIndex = -1
    },

    setActiveLessonleanred(lessonleanred, index) {
      this.currentLessonlearned = lessonleanred
      this.currentIndex = lessonleanred ? index : -1
    },

    async increaseProjectViews(index) {
      try {
        const selectedPost = this.lessonlearned_list[index]

        // API 호출
        await LessonlearnedService.incrementViews(selectedPost.id)

        this.lessonlearned_list[index].project_views += 1

        this.sendData(index)
      } catch (error) {
        console.error('조회수 증가 실패:', error)
      }
    },

    favorite_check() {
      alert('개발중')
      // parameter : check
      // let data = {
      //   favorite_check: check,
      // }
      // console.log('1', this.lessonlearned_list.id)
      // LessonlearnedService.updateFavorite(this.currentLessonlearned.id, data)
      //   .then((response) => {
      //     console.log(response.data)
      //     this.currentLessonlearned.favorite_check = check
      //     this.message = 'The Lessonlearned Favorite was updated successfully!'
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
    },

    sendData(index) {
      this.setDatas = this.lessonlearned_list[index]
      this.setFiles = []

      // file_list에서 해당 데이터의 id와 일치하는 파일들을 setFiles에 추가(개선)
      this.setFiles = this.file_list.filter((file) => file.id === this.setDatas.id)

      // for (let i = 0; i < this.file_list.length; i++) { (구식)
      //   if (this.file_list[i].id == this.setDatas.id) {
      //     console.log('Select>>', this.file_list[i])
      //     this.setFiles.push(this.file_list[i]) // push()로 요소 추가
      //   }
      // }
    },
  },
  mounted() {
    this.retrieveLessonLearned()
  },
}
</script>
<style scoped src="../assets/css/LessonLearned.css"></style>
<style scoped src="../assets/css/loading.css"></style>
