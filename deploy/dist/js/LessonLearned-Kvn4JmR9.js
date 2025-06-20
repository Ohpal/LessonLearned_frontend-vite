import { importShared } from "./__federation_fn_import-Dc6jQS63.js";
import { L as LessonlearnedService } from "./LessonlearnedService-vXFECDjD.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withKeys: _withKeys, withDirectives: _withDirectives, createTextVNode: _createTextVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, toDisplayString: _toDisplayString, Transition: _Transition, withCtx: _withCtx, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle } = await importShared("vue");
const _hoisted_1 = { class: "chatbot-root" };
const _hoisted_2 = {
  key: 0,
  class: "empty-state-area"
};
const _hoisted_3 = { class: "input-group empty-input" };
const _hoisted_4 = ["disabled"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = {
  key: 0,
  class: "text-center mt-2"
};
const _hoisted_7 = { class: "category-row" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "bg-light rounded-4 p-4 shadow-sm mb-4 mt-5" };
const _hoisted_10 = { class: "fw-bold mb-3" };
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = {
  key: 0,
  class: "horizontal-scroll mb-5"
};
const _hoisted_13 = { class: "d-flex gap-3 flex-nowrap" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { class: "border-0 bg-light h-100 p-4" };
const _hoisted_16 = { class: "d-flex align-items-start mb-3" };
const _hoisted_17 = { class: "fw-bold mb-1" };
const _hoisted_18 = { class: "text-muted" };
const _hoisted_19 = { class: "text-muted small features-description mb-3" };
const _hoisted_20 = { class: "mt-auto" };
const _hoisted_21 = { class: "d-flex justify-content-between align-items-center" };
const _hoisted_22 = { class: "text-muted features-description" };
const _hoisted_23 = {
  key: 0,
  class: "qa-divider"
};
const _hoisted_24 = {
  class: "modal-dialog modal-dialog-centered",
  style: { "max-width": "650px" }
};
const _hoisted_25 = { class: "modal-content rounded-4 p-4" };
const _hoisted_26 = { class: "modal-body" };
const _hoisted_27 = { class: "row g-3 mb-2" };
const _hoisted_28 = { class: "col-md-6" };
const _hoisted_29 = ["value"];
const _hoisted_30 = { class: "col-md-6" };
const _hoisted_31 = ["value"];
const _hoisted_32 = { class: "col-md-6" };
const _hoisted_33 = ["value"];
const _hoisted_34 = { class: "col-md-6" };
const _hoisted_35 = ["value"];
const _hoisted_36 = { class: "col-md-6" };
const _hoisted_37 = ["value"];
const _hoisted_38 = { class: "col-md-6" };
const _hoisted_39 = ["value"];
const _hoisted_40 = { class: "mb-3" };
const _hoisted_41 = ["value"];
const _hoisted_42 = { class: "mb-2" };
const _hoisted_43 = ["value"];
const _hoisted_44 = {
  key: 2,
  class: "d-flex justify-content-between"
};
const _hoisted_45 = { class: "input-group input-area" };
const _hoisted_46 = ["disabled"];
const _hoisted_47 = ["disabled"];
const { ref, nextTick } = await importShared("vue");
const _sfc_main = {
  __name: "LessonLearned",
  setup(__props) {
    const search = ref("");
    const loading = ref(false);
    const question = ref("");
    const scrollArea = ref(null);
    const showModal = ref(false);
    const selectedCard = ref(null);
    const conversation = ref([]);
    const categories = [
      {
        text: "MACHINARY"
      },
      {
        text: "시운전"
      },
      {
        text: "MACHINARY"
      },
      {
        text: "시운전"
      }
    ];
    function onCategory(text) {
      search.value = text;
      onSearch();
    }
    function onSearch() {
      alert(`검색어: ${search.value}`);
    }
    function openModal(card) {
      selectedCard.value = card;
      showModal.value = true;
      document.body.style.overflow = "hidden";
    }
    function closeModal() {
      showModal.value = false;
      selectedCard.value = null;
      document.body.style.overflow = "";
    }
    async function ask() {
      var _a, _b, _c, _d;
      if (!question.value.trim()) return;
      loading.value = true;
      try {
        const res = await LessonlearnedService.questionLLM(question.value);
        conversation.value.push({
          question: question.value,
          answer: res.data.answer,
          displayedAnswer: "",
          // 애니메이션용 답변
          features: res.data.features,
          showFeatures: false
          // 카드 그룹 애니메이션
        });
        showTypingEffect(conversation.value.length - 1, res.data.answer);
      } catch (e) {
        conversation.value.push({
          question: question.value,
          answer: "에러가 발생했습니다: " + (((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) ?? e.toString()),
          displayedAnswer: "",
          // 애니메이션용 답변
          features: []
        });
        showTypingEffect(conversation.value.length - 1, "에러가 발생했습니다: " + (((_d = (_c = e == null ? void 0 : e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) ?? e.toString()));
      }
      question.value = "";
      loading.value = false;
    }
    function showTypingEffect(idx, text, speed = 30) {
      let current = 0;
      function typeNext() {
        if (!conversation.value[idx]) return;
        conversation.value[idx].displayedAnswer = text.slice(0, current + 1);
        scrollToBottom();
        current++;
        if (current < text.length) {
          setTimeout(typeNext, speed);
        } else {
          conversation.value[idx].showFeatures = true;
        }
      }
      typeNext();
    }
    function scrollToBottom() {
      nextTick(() => {
        if (scrollArea.value) {
          scrollArea.value.scrollTop = scrollArea.value.scrollHeight;
        }
      });
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        conversation.value.length === 0 ? (_openBlock(), _createElementBlock("div", _hoisted_2, [
          _cache[4] || (_cache[4] = _createElementVNode("div", { class: "empty-message" }, [
            _createElementVNode("i", {
              class: "bi bi-chat-dots",
              style: { "font-size": "2.5rem", "color": "#4286f5" }
            }),
            _createElementVNode("p", { class: "mt-4 mb-3 fs-4 fw-semibold" }, "무엇을 찾아드릴까요?")
          ], -1)),
          _createElementVNode("form", _hoisted_3, [
            _withDirectives(_createElementVNode("input", {
              type: "text",
              class: "form-control rounded-4 px-4 py-3",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => question.value = $event),
              disabled: loading.value,
              onKeyup: _withKeys(ask, ["enter"]),
              placeholder: "여기에 질문을 입력하세요"
            }, null, 40, _hoisted_4), [
              [_vModelText, question.value]
            ]),
            _createElementVNode("button", {
              class: "btn btn-primary rounded-4 px-4 ms-2",
              type: "submit",
              onClick: ask,
              disabled: loading.value || !question.value
            }, "질문하기", 8, _hoisted_5)
          ]),
          loading.value ? (_openBlock(), _createElementBlock("div", _hoisted_6, _cache[2] || (_cache[2] = [
            _createElementVNode("span", {
              class: "spinner-border spinner-border-sm",
              role: "status",
              "aria-hidden": "true"
            }, null, -1),
            _createTextVNode(" 답변 생성 중... ")
          ]))) : _createCommentVNode("", true),
          _createElementVNode("div", _hoisted_7, [
            (_openBlock(), _createElementBlock(_Fragment, null, _renderList(categories, (cat) => {
              return _createElementVNode("button", {
                key: cat.text,
                class: "category-btn",
                onClick: ($event) => onCategory(cat.text)
              }, [
                _cache[3] || (_cache[3] = _createElementVNode("span", { class: "me-2" }, null, -1)),
                _createTextVNode(" " + _toDisplayString(cat.text), 1)
              ], 8, _hoisted_8);
            }), 64))
          ])
        ])) : (_openBlock(), _createElementBlock("div", {
          key: 1,
          class: "scroll-area",
          ref_key: "scrollArea",
          ref: scrollArea
        }, [
          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(conversation.value, (block, idx) => {
            return _openBlock(), _createElementBlock(_Fragment, {
              key: block.id
            }, [
              _createElementVNode("div", _hoisted_9, [
                _createElementVNode("h5", _hoisted_10, _toDisplayString(block.question), 1),
                _createElementVNode("p", {
                  class: "mb-2 text-secondary",
                  innerHTML: block.displayedAnswer
                }, null, 8, _hoisted_11)
              ]),
              _createVNode(_Transition, { name: "fade" }, {
                default: _withCtx(() => [
                  block.showFeatures ? (_openBlock(), _createElementBlock("div", _hoisted_12, [
                    _createElementVNode("div", _hoisted_13, [
                      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(block.features, (feature) => {
                        return _openBlock(), _createElementBlock("div", {
                          class: "feature-card card h-100 p-4 me-2",
                          key: feature.project_id,
                          onClick: ($event) => openModal(feature),
                          style: { "min-width": "270px", "flex": "0 0 auto", "cursor": "pointer" }
                        }, [
                          _createElementVNode("div", _hoisted_15, [
                            _createElementVNode("div", _hoisted_16, [
                              _createElementVNode("div", null, [
                                _createElementVNode("h6", _hoisted_17, _toDisplayString(feature.project_title), 1),
                                _createElementVNode("small", _hoisted_18, _toDisplayString(feature.project_description), 1)
                              ])
                            ]),
                            _createElementVNode("p", _hoisted_19, _toDisplayString(feature.project_issue), 1),
                            _createElementVNode("div", _hoisted_20, [
                              _createElementVNode("div", _hoisted_21, [
                                _createElementVNode("small", _hoisted_22, _toDisplayString(feature.project_actionresult), 1)
                              ])
                            ])
                          ])
                        ], 8, _hoisted_14);
                      }), 128))
                    ])
                  ])) : _createCommentVNode("", true)
                ]),
                _: 2
              }, 1024),
              idx < conversation.value.length - 1 ? (_openBlock(), _createElementBlock("hr", _hoisted_23)) : _createCommentVNode("", true)
            ], 64);
          }), 128))
        ], 512)),
        _createElementVNode("div", {
          class: _normalizeClass(["modal fade", { show: showModal.value }]),
          tabindex: "-1",
          style: _normalizeStyle(showModal.value ? "display:block; background:rgba(0,0,0,0.4);" : ""),
          onClick: _withModifiers(closeModal, ["self"])
        }, [
          _createElementVNode("div", _hoisted_24, [
            _createElementVNode("div", _hoisted_25, [
              _createElementVNode("div", { class: "modal-header border-0 pb-1" }, [
                _cache[5] || (_cache[5] = _createElementVNode("h5", { class: "modal-title" }, "프로젝트 상세 정보", -1)),
                _createElementVNode("button", {
                  type: "button",
                  class: "btn-close",
                  onClick: closeModal
                })
              ]),
              _createElementVNode("div", _hoisted_26, [
                _createElementVNode("form", null, [
                  _createElementVNode("div", _hoisted_27, [
                    _createElementVNode("div", _hoisted_28, [
                      _cache[6] || (_cache[6] = _createElementVNode("label", { class: "form-label fw-semibold" }, "프로젝트명", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_a = selectedCard.value) == null ? void 0 : _a.project_title,
                        disabled: ""
                      }, null, 8, _hoisted_29)
                    ]),
                    _createElementVNode("div", _hoisted_30, [
                      _cache[7] || (_cache[7] = _createElementVNode("label", { class: "form-label fw-semibold" }, "작성날짜", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_b = selectedCard.value) == null ? void 0 : _b.project_date,
                        disabled: ""
                      }, null, 8, _hoisted_31)
                    ]),
                    _createElementVNode("div", _hoisted_32, [
                      _cache[8] || (_cache[8] = _createElementVNode("label", { class: "form-label fw-semibold" }, "부서", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_c = selectedCard.value) == null ? void 0 : _c.project_department,
                        disabled: ""
                      }, null, 8, _hoisted_33)
                    ]),
                    _createElementVNode("div", _hoisted_34, [
                      _cache[9] || (_cache[9] = _createElementVNode("label", { class: "form-label fw-semibold" }, "작성자", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_d = selectedCard.value) == null ? void 0 : _d.project_commander,
                        disabled: ""
                      }, null, 8, _hoisted_35)
                    ]),
                    _createElementVNode("div", _hoisted_36, [
                      _cache[10] || (_cache[10] = _createElementVNode("label", { class: "form-label fw-semibold" }, "시운전파트", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_e = selectedCard.value) == null ? void 0 : _e.project_part,
                        disabled: ""
                      }, null, 8, _hoisted_37)
                    ]),
                    _createElementVNode("div", _hoisted_38, [
                      _cache[11] || (_cache[11] = _createElementVNode("label", { class: "form-label fw-semibold" }, "시운전항목", -1)),
                      _createElementVNode("input", {
                        type: "text",
                        class: "form-control",
                        value: (_f = selectedCard.value) == null ? void 0 : _f.project_description,
                        disabled: ""
                      }, null, 8, _hoisted_39)
                    ])
                  ]),
                  _createElementVNode("div", _hoisted_40, [
                    _cache[12] || (_cache[12] = _createElementVNode("label", { class: "form-label fw-semibold" }, "발생이슈", -1)),
                    _createElementVNode("textarea", {
                      class: "form-control",
                      rows: "3",
                      value: (_g = selectedCard.value) == null ? void 0 : _g.project_issue,
                      disabled: ""
                    }, null, 8, _hoisted_41)
                  ]),
                  _createElementVNode("div", _hoisted_42, [
                    _cache[13] || (_cache[13] = _createElementVNode("label", { class: "form-label fw-semibold" }, "조치결과", -1)),
                    _createElementVNode("textarea", {
                      class: "form-control",
                      rows: "3",
                      value: (_h = selectedCard.value) == null ? void 0 : _h.project_actionresult,
                      disabled: ""
                    }, null, 8, _hoisted_43)
                  ])
                ])
              ])
            ])
          ])
        ], 6),
        conversation.value.length > 0 ? (_openBlock(), _createElementBlock("div", _hoisted_44, [
          _createElementVNode("form", _hoisted_45, [
            _withDirectives(_createElementVNode("input", {
              type: "text",
              class: "form-control rounded-4 px-4 py-3",
              placeholder: "추가 질문을 이어서 입력하세요",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => question.value = $event),
              disabled: loading.value,
              onKeyup: _withKeys(ask, ["enter"])
            }, null, 40, _hoisted_46), [
              [_vModelText, question.value]
            ]),
            _createElementVNode("button", {
              class: "btn btn-primary rounded-4 px-4 ms-2",
              type: "submit",
              onClick: ask,
              disabled: loading.value || !question.value
            }, "질문하기", 8, _hoisted_47)
          ])
        ])) : _createCommentVNode("", true)
      ]);
    };
  }
};
const LessonLearned = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2750a135"]]);
export {
  LessonLearned as default
};
