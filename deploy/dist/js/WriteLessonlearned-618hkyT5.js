import { importShared } from "./__federation_fn_import-Dc6jQS63.js";
import { L as LessonlearnedService } from "./LessonlearnedService-BcAnp7nQ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, vModelText: _vModelText, normalizeClass: _normalizeClass, withDirectives: _withDirectives, unref: _unref, vModelSelect: _vModelSelect, withModifiers: _withModifiers, createStaticVNode: _createStaticVNode } = await importShared("vue");
const _hoisted_1 = { class: "container-fluid" };
const _hoisted_2 = { class: "container-fluid content-box-rims" };
const _hoisted_3 = { class: "row mb-0" };
const _hoisted_4 = { class: "col-md-6 mb-2" };
const _hoisted_5 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_6 = { class: "col-md-6 mb-2" };
const _hoisted_7 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_8 = ["max"];
const _hoisted_9 = { class: "col-md-6 mb-2" };
const _hoisted_10 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_11 = { class: "col-md-6 mb-2" };
const _hoisted_12 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_13 = { class: "col-md-6 mb-2" };
const _hoisted_14 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_15 = { class: "col-md-6 mb-2" };
const _hoisted_16 = {
  key: 0,
  class: "text-danger"
};
const _hoisted_17 = { class: "mb-2" };
const _hoisted_18 = { class: "mb-2" };
const _hoisted_19 = { class: "mb-2" };
const _hoisted_20 = { class: "text-secondary ms-2" };
const _hoisted_21 = { class: "d-flex justify-content-end gap-2 mt-3" };
const _hoisted_22 = { class: "toast-container position-fixed top-50 start-50 translate-middle p-3" };
const _hoisted_23 = {
  key: 0,
  class: "toast show custom-toast align-items-center",
  role: "alert",
  "aria-live": "assertive",
  "aria-atomic": "true"
};
const _hoisted_24 = { class: "d-flex" };
const _hoisted_25 = { class: "toast-body" };
const { ref } = await importShared("vue");
const _sfc_main = {
  __name: "WriteLessonlearned",
  setup(__props) {
    function getTodayDate() {
      const d = /* @__PURE__ */ new Date();
      return d.toISOString().slice(0, 10);
    }
    const lesson = ref({
      id: null,
      project_title: "",
      project_date: "",
      project_department: "",
      project_commander: "",
      project_part: "",
      project_description: "",
      project_issue: "",
      project_actionresult: "",
      project_files: false,
      project_views: 0,
      show_bool: false
    });
    const errors = ref({
      error_title: false,
      error_date: false,
      error_department: false,
      error_commander: false,
      error_part: false,
      error_description: false
    });
    const show = ref(false);
    const today = getTodayDate();
    const fileName = ref("선택된 파일 없음");
    const message = ref("저장이 완료되었습니다.");
    const selectedFile = ref([]);
    const loading = ref(true);
    function saveLesson() {
      try {
        loading.value = true;
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
          project_views: lesson.value.project_views
        };
        if (selectedFile.value.length >= 1) {
          data.project_files = true;
        }
        errors.value.error_title = !data.project_title;
        errors.value.error_date = !data.project_date;
        errors.value.error_department = !data.project_department;
        errors.value.error_commander = !data.project_commander;
        errors.value.error_part = !data.project_part;
        errors.value.error_description = !data.project_description;
        if (errors.value.error_title || errors.value.error_date || errors.value.error_department || errors.value.error_commander || errors.value.error_part || errors.value.error_description) {
          loading.value = false;
          return;
        }
        showToast();
        LessonlearnedService.create(data).then((response) => {
          lesson.value.id = response.data.id;
          if (data.project_files) uploadFiles(lesson.value.id);
          else loading.value = false;
          message.value = "저장이 완료되었습니다.";
          window.location.href = "/lesson";
        }).catch((e) => {
          loading.value = false;
          console.error("Lesson Save Err>>", e);
        });
      } catch (e) {
        console.error("Save Lesson ERR>>", e);
      }
    }
    function resetLesson() {
      Object.keys(errors.value).forEach((key) => errors.value[key] = false);
      Object.keys(lesson.value).forEach((key) => lesson.value[key] = key === "project_views" ? 0 : key === "project_files" ? false : "");
      lesson.value.show_bool = true;
      fileName.value = "선택된 파일 없음";
      selectedFile.value = [];
      window.location.href = "/lesson/learned";
    }
    function onFileUpload(event) {
      selectedFile.value = event.target.files;
      if (selectedFile.value.length) {
        fileName.value = Array.from(selectedFile.value).map((file) => file.name).join(", ");
      } else {
        fileName.value = "선택된 파일 없음";
      }
    }
    function uploadFiles(project_id) {
      const formData = new FormData();
      for (let i = 0; i < selectedFile.value.length; i++) {
        formData.append("files", selectedFile.value[i]);
      }
      LessonlearnedService.uploadFile(formData, project_id).then((response) => {
        console.log("File>>", response.data);
      }).catch((e) => {
        console.error("UploadFiles ERR>>", e);
      }).finally(() => {
        loading.value = false;
      });
    }
    function onSubmit() {
      saveLesson();
    }
    function showToast() {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2500);
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[19] || (_cache[19] = _createElementVNode("div", { class: "d-flex align-items-center mb-3" }, [
            _createElementVNode("div", { class: "d-flex fs-5" }, "시운전 지식 등록")
          ], -1)),
          _createElementVNode("form", {
            class: "p-4",
            onSubmit: _withModifiers(onSubmit, ["prevent"]),
            style: { "max-width": "700px", "margin": "0 auto" }
          }, [
            _createElementVNode("div", _hoisted_3, [
              _createElementVNode("div", _hoisted_4, [
                _cache[8] || (_cache[8] = _createElementVNode("label", { class: "form-label" }, "프로젝트명", -1)),
                errors.value.error_title ? (_openBlock(), _createElementBlock("small", _hoisted_5, _toDisplayString(" ※프로젝트 명을 입력하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  autocomplete: "off",
                  class: _normalizeClass(["ll_value form-control", errors.value.error_title ? "red-round" : ""]),
                  id: "ProjectNameInput",
                  name: "projectName",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => lesson.value.project_title = $event),
                  placeholder: "프로젝트 명",
                  required: ""
                }, null, 2), [
                  [_vModelText, lesson.value.project_title]
                ])
              ]),
              _createElementVNode("div", _hoisted_6, [
                _cache[9] || (_cache[9] = _createElementVNode("label", { class: "form-label" }, "작성날짜", -1)),
                errors.value.error_date ? (_openBlock(), _createElementBlock("small", _hoisted_7, _toDisplayString(" ※날짜를 선택하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("input", {
                  type: "date",
                  class: _normalizeClass(["ll_value form-control", errors.value.error_date ? "red-round" : ""]),
                  id: "DateInput",
                  name: "projectDate",
                  max: _unref(today),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => lesson.value.project_date = $event),
                  required: ""
                }, null, 10, _hoisted_8), [
                  [_vModelText, lesson.value.project_date]
                ])
              ]),
              _createElementVNode("div", _hoisted_9, [
                _cache[10] || (_cache[10] = _createElementVNode("label", { class: "form-label" }, "부서", -1)),
                errors.value.error_department ? (_openBlock(), _createElementBlock("small", _hoisted_10, _toDisplayString(" ※관련 부서를 입력하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  autocomplete: "off",
                  class: _normalizeClass(["ll_value form-control", errors.value.error_department ? "red-round" : ""]),
                  id: "DepartmentInput",
                  name: "department",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => lesson.value.project_department = $event),
                  placeholder: "관련 부서명",
                  required: ""
                }, null, 2), [
                  [_vModelText, lesson.value.project_department]
                ])
              ]),
              _createElementVNode("div", _hoisted_11, [
                _cache[11] || (_cache[11] = _createElementVNode("label", { class: "form-label" }, "작성자", -1)),
                errors.value.error_commander ? (_openBlock(), _createElementBlock("small", _hoisted_12, _toDisplayString(" ※성함을 입력하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  autocomplete: "off",
                  class: _normalizeClass(["ll_value form-control", errors.value.error_commander ? "red-round" : ""]),
                  id: "CommanderInput",
                  name: "commander",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => lesson.value.project_commander = $event),
                  placeholder: "작성자 성함",
                  required: ""
                }, null, 2), [
                  [_vModelText, lesson.value.project_commander]
                ])
              ]),
              _createElementVNode("div", _hoisted_13, [
                _cache[13] || (_cache[13] = _createElementVNode("label", { class: "form-label" }, "시운전파트", -1)),
                errors.value.error_part ? (_openBlock(), _createElementBlock("small", _hoisted_14, _toDisplayString(" ※시운전 파트를 선택하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("select", {
                  class: _normalizeClass(["ll_value form-select", errors.value.error_part ? "red-round" : ""]),
                  name: "part",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => lesson.value.project_part = $event),
                  required: ""
                }, _cache[12] || (_cache[12] = [
                  _createStaticVNode('<option value="" data-v-6e733636>관련 시운전파트</option><option value="general" data-v-6e733636>General Part</option><option value="hull" data-v-6e733636>HULL Part</option><option value="machinery" data-v-6e733636>Machinery Part</option><option value="electric" data-v-6e733636>Electric Part</option><option value="accommodation" data-v-6e733636>Accomodation Part</option><option value="outfitting" data-v-6e733636>Outfitting Part</option>', 7)
                ]), 2), [
                  [_vModelSelect, lesson.value.project_part]
                ])
              ]),
              _createElementVNode("div", _hoisted_15, [
                _cache[14] || (_cache[14] = _createElementVNode("label", { class: "form-label" }, "시운전항목", -1)),
                errors.value.error_description ? (_openBlock(), _createElementBlock("small", _hoisted_16, _toDisplayString(" ※시운전 항목을 입력하세요."))) : _createCommentVNode("", true),
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  autocomplete: "off",
                  class: _normalizeClass(["ll_value form-control", errors.value.error_description ? "red-round" : ""]),
                  id: "DescriptionInput",
                  placeholder: "시운전 항목",
                  name: "description",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => lesson.value.project_description = $event),
                  required: ""
                }, null, 2), [
                  [_vModelText, lesson.value.project_description]
                ])
              ])
            ]),
            _createElementVNode("div", _hoisted_17, [
              _cache[15] || (_cache[15] = _createElementVNode("label", { class: "form-label" }, "발생이슈", -1)),
              _withDirectives(_createElementVNode("textarea", {
                class: "ll_value form-control",
                id: "problemArea",
                rows: "5",
                name: "problem",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => lesson.value.project_issue = $event)
              }, null, 512), [
                [_vModelText, lesson.value.project_issue]
              ])
            ]),
            _createElementVNode("div", _hoisted_18, [
              _cache[16] || (_cache[16] = _createElementVNode("label", { class: "form-label" }, "조치결과", -1)),
              _withDirectives(_createElementVNode("textarea", {
                class: "ll_value form-control",
                id: "actionResultArea",
                rows: "5",
                name: "actionResult",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => lesson.value.project_actionresult = $event)
              }, null, 512), [
                [_vModelText, lesson.value.project_actionresult]
              ])
            ]),
            _createElementVNode("div", _hoisted_19, [
              _cache[17] || (_cache[17] = _createElementVNode("label", { class: "form-label" }, "첨부파일(문서, 사진, 영상 등)", -1)),
              _createElementVNode("input", {
                class: "ll_value form-control",
                type: "file",
                id: "formFileMultiple",
                name: "file",
                multiple: "",
                onChange: onFileUpload
              }, null, 32),
              _createElementVNode("small", _hoisted_20, _toDisplayString(fileName.value), 1)
            ]),
            _createElementVNode("div", _hoisted_21, [
              _createElementVNode("button", {
                onClick: resetLesson,
                type: "button",
                class: "btn custom-secondary-btn"
              }, "취소하기"),
              _createElementVNode("button", {
                onClick: _withModifiers(saveLesson, ["prevent"]),
                type: "button",
                class: "btn rims-custom-btn"
              }, "저장하기")
            ]),
            _createElementVNode("div", _hoisted_22, [
              show.value ? (_openBlock(), _createElementBlock("div", _hoisted_23, [
                _createElementVNode("div", _hoisted_24, [
                  _cache[18] || (_cache[18] = _createElementVNode("div", { class: "toast-icon align-items-center" }, [
                    _createElementVNode("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      fill: "currentColor",
                      class: "bi bi-check-circle-fill",
                      viewBox: "0 0 16 16"
                    }, [
                      _createElementVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                    ])
                  ], -1)),
                  _createElementVNode("div", _hoisted_25, _toDisplayString(message.value), 1)
                ])
              ])) : _createCommentVNode("", true)
            ])
          ], 32)
        ])
      ]);
    };
  }
};
const WriteLessonlearned = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e733636"]]);
export {
  WriteLessonlearned as default
};
