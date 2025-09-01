import { importShared } from "./__federation_fn_import-Dc6jQS63.js";
import { L as LessonlearnedService } from "./LessonlearnedService-BcAnp7nQ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const imageIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAdhAAAHYQGVw7i2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAkpJREFUWIXtlktvEmEYhc8MIAIVSG1qYlKtsYt6Sbpw7cq4NBp3bvU3uGjiUl35H4w/oFzES5NGF25Makw0kTQVauVSIFwchoFhZvguLgo4dJh0QFiVZzVz3pn3nPluGWDGjJOOYFe4Fi+vMM6XJ2EiCsLv5N3FtOMAV6Pl5xxYn4S5yenZzr3FJ8cGuJEo+FXibgBwTTQAQPxuEvp657xqFsWjTzWZJzwFcwBwd3sPipPqPu8VcP+CDy3CEMno0Bl3lmpSAR6t+LE27wEAGBTYyGqO3rNMwbh4XILp2vl7I48AU1WAEIjB4ID+Kq3iwSUfmoQjkdenE6BTKKART4B3CM7cvgXvldV+7UBleJFsjdIOwAhTQEqlQ3PDADiDsvUBxq/9kQ3HCkAqVTRiXfMenEF5vwlSLE03AK3WIEeiYLp1VXNCICcSoJI0nQBUkiBHY+Ca/ZbibQ1y/PXh4jQhMCC4V0coVYdA7c8E2wC0Xoe8EbU0HgaTG5CjMTD93+oPpiXMZRQEcgrCKfsRGhqAKQrkSAys5XxV02oNytt3AKU4XW4jkG/2a75CC77y8A+xbEM9+SOoff4CpiiOzXt0cnm0Nrdwbu66pRbalQCCEICCWbeMgJEvLtAxzHu00ymUst8suthh8Ej6WYt+VPC1tczY7l1qf/ZRqfy06F5NOzg2wN7Lh7lTyxe3/zdEsbQDScr2742w9/unp2uWk8v2l2xp/c1Nl0u0TqYNXkNccFHBPyCKAgssXc4Lemd3+/HqR6e9Zsw4WfwFIBX9bnp7wugAAAAASUVORK5CYII=";
const pdfIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAmJJREFUWIXtls9rE1EQxz/zdkl/EFJEbNqCRVBvnkX0VKF46lUPRds0kkNR9OpB8A/QolIEC23asxcRRFCr2IuiIF6shyJGFJNWMUpaKW32jYemvze4idnGg19YeMzszHze7GPnCSXNJhJHgRRVyopMqOrPjnT6dSVx7trKmP2q2lctgIEXVqQ3m0iMtafT6QriaicBIyKj2WRysC4AqxyiOpxNJs/VC2AV4mZuYOB8vQAABLiRSyYv1AtgBUL1ei6RuFTuBbecoyqpXlZjdm/HEL6kUs0dIyO/QgNQuCIiP0TV1+953iwwFRoAEFeIl3OK50X97GGfgT/qP8D6GbB2DpHnYRUyxuT97LK6mOvvP6jGdIUFsKmotU9bx8dnYEMH1HGOqOrtnQDAcc4AM/APnIFaAdyntCMgC6SBjzsGYF13sAQB1p6wcAsoBIkN+iecBiaBRoVGgdMAAncUcpHFRa/ouqD6KL6wMD0bjZ5EpDVI4mAdUH0T7+y8iOq774XCWeCuwFTr2NgpVD/kW1q+bc5q/AdC1QBAJpOJIDK0Kxo9hOpLC6+yqdReRIaa5+dXdivSPQ0O1vYANewAsC8S8YBnAp8QaRfVdi+f/wo8aVYN9L39VNk0FLkGdAF9iDS4sdhDVb265Dg9am2niLAnFjtuVdtqDpBZWnKajLknG2yiOg6gqoiseKzqg6A5gwOIHG4SGa4kcW0B4EDpCQ/AOM5jWyx2h1Fkq4zjvN0GUFxePiYhtRkAkd620dHJreb1DhjTpKpl73R/K/W8Bj973afhxhvRe4GJsAqJ6372s/8GZ1LJ9JtWsQoAAAAASUVORK5CYII=";
const hwpIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAn1JREFUWIXtl81LVGEUxn/PO6OSpDgZBVYE2iQY0sKCKDcRLdokbSRR+pBSiiJoEy2CatHHIqhwI+iIi/6A1haFm1qUuxaO2SqUJFIzFJyZ97TQhimvOo5O06IHLlzOe59zfvdyeN9zxaK2xD4eBt9BjvLm+k02Pd0eHVqLL5xO4K1G4myuAMK/ldFaEYvHptr39mXrc7kWDJY5Gb2RnpHLBQIAQMi6Ij3DVwoFsAihpxW98auFAgCQ4ElFT/xaoQAWIMTjSM/wzeUeCC+3kIu87FbIu8oADqq6x0rHOqtm8wZgcNuZmzJZ4Pps6McXYDBvAILtLFzB6yHbHBTPdw+sqv8A6R5wjgkz3uSrkLybDIz/uinvG42GLXU0XwCZSir06vv5mhHI/AIpf8hE998AcN6fAUbgH+iBVQGE3TERyxfAqhuR9+41zuoLBgDg0Dvzqf3mXJPgLmYtSCcxPknsMGMC9A3ZOe9dm/C7ndM4WL9BdOXcWciLbTjXNlUWvQfMS5QBg94Rk3jmHAPIKoHZ6Yt73ivE6ZTXPOjh6i+XhWR+J+IgzUoBM4ZrDCWTz3FSwieGEj4xBDSmDUaDnK9HfN4QgKWyxq+ddeMu6ZvDFB8rLy+fAxrSwLL7obANmPmGFZIAWfSAnHWYtFVQHYnFH2CUApUVvSOPMGtCTM7OzJ0AitN4qNYnrE7SpXUDAC0ZR/yNNBh2HYFhAAd+c3hOSarJIvfGTkTAvkhvfBTYla1howFKgOq1GNIA4VTihRWFj28wUKCUTHxYAuCLio54s658FTWz1ukLtS//jGf8G7JJWn6mW68UoiQoXvDTMGMi0ihYf74KWdICd8WfOoXSfbf84xkAAAAASUVORK5CYII=";
const zipIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAo1JREFUWIXllz9ME2EYxn/f3dH2rhQKmCqhIdKYAMGAVULiaHDAOGjC4OyAshKjG5uTMLkwOhH/xCiRhOimKwQRRGAB0VKxKKFFaOnB3ecAJhL8037aDvps33vP+7y/u3x3uQ/+d4nV25VlmezWHSQnfmoSuMCs1ERv+Nrm5F8FWOq3uoVkIEd/Bikv19zI3P9bAIaQohxkrn4TIe7G+6x2iXZPE25KdXBW98zX9SSThkKvALoEbpfMmfugPDv2+nJ/6ekDAEL3IEos9eRfSG6nkY79bVnmSKdjH4DZeIlgxwBC9xYGwMmSfNpNZvYBAAKtRPve4I9eKdhwAKF78Uev7qsZAB4LDB/oyWfgzhQMAEBfj2FVws4W2Gkw/FUiUl6zd3Wpr6DDAXQgGBYApOIiYgQOs6IStF3ahtR8AAh3i5KN0bwzAiEShqbLjXwbHU+YtfrhfbWq16fQ7aW8cjRDbmq/t/1AQs+tlguESpNuxyjbmSDg9xLweynbfolux5QAVL6EIF18pgW+vXbTAukWEUBo4K+HjRlAQGnjbk0BQm0PeEKg+yExBInHoFtgVChFqT0BewUyixC5vrtOz8NOsogA0oXxCyyW30S6DnXrvSCdIgIApOd5MnyLL7ZJT3scy6MWo7YHANsxeLsWYvR9hOcLjaox6gAjcy3MrVRz7FCCcw1TxQe42DRO05E4kx9qeTTdWnyAh1NtvIrXEq15R+fxseIDdDaP0VwdY/pjmKE3J4sPMDLXwvxqiIbQMucb1I8KygBnIjMcrfxMLFnJiz94CwyQqd0/7fxkeWzqKj5RYW7SGl5QHC9TBllrEF/6LGjRfNsDZjYYMLMEzUwy/5twJ8hag/nO/Pf0FS81yeLwdGcIAAAAAElFTkSuQmCC";
const otherIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAfBJREFUWIXN10+ITlEYx/HPO80wNUlC/oQFSskCKxtlzcZGykaKFCsb7wbRbIgaGzuKpMRibJhSFJJEFkryJwtqFKlBhmQai3tunXm73rnnvvfVfOup59x7nuf53XvOufechvKsx2k0MJkQF9OHp2hiIiWwgYdYUrFwTBP7U4OW4XINxWEpruSN3hIBJ9CPLbiVWOwbhvA4uvYbs8oIaMjG/AB24TN6EgUsxm3sxo2UwF6cx/EQODexcMw2vI7aC3A9bxQ90QCG8SgI6JQ7mP+vm61DsAjXcBIjBf3PYEWJok9kwzctsYC1uIpBvMLKcH0g6nMMs0vk/VmmeKuAC3iHHcFyRjEe/PHIr4VYwAcclM122IhVwd+emPe9qUuvlIBW5mBeYuGcr2U7thNwL1hXSf2w1E67N9A0dTKmMIKjnQo4FayrzOgh2INNFfM+x7lOBQyrvgrGynZsJ2AsJVFV2glYg+UV837Ei04FrMa6igLe1CHgZrCuMqOX4SFsrZj3vmxf0ZGAoWB1sxBf8sb/GoIe2Q5rA87iYn6j3RvYGQKq8BKXgj+B77Kf2w8cke0ZpxXwAG8rCvgU+ZOyPWbhcSwW8Et2AsoZDdYp/SF3IfEcuIu9NRRsZZ/sbFBIo8UfxGbZ+a0O+vAMh/GnqMNfY59V0zgOTJgAAAAASUVORK5CYII=";
const { createElementVNode: _createElementVNode, vModelText: _vModelText, withKeys: _withKeys, withDirectives: _withDirectives, createTextVNode: _createTextVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, unref: _unref, renderList: _renderList, Fragment: _Fragment, toDisplayString: _toDisplayString, Transition: _Transition, withCtx: _withCtx, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle } = await importShared("vue");
const _hoisted_1 = { class: "container-fluid" };
const _hoisted_2 = { class: "container-fluid content-box-rims" };
const _hoisted_3 = { class: "chatbot-root" };
const _hoisted_4 = {
  key: 0,
  class: "empty-state-area"
};
const _hoisted_5 = { class: "input-group empty-input rounded-4 p-2 px-3" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 0,
  class: "text-center mt-2"
};
const _hoisted_9 = { class: "category-row" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "bg-light rounded-4 p-4 shadow-sm mb-4 mt-5" };
const _hoisted_12 = { class: "fw-bold mb-3" };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = {
  key: 0,
  class: "horizontal-scroll mb-5"
};
const _hoisted_15 = { class: "d-flex gap-3 flex-nowrap" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = { class: "border-0 bg-light h-100 p-4" };
const _hoisted_18 = { class: "d-flex align-items-start mb-3" };
const _hoisted_19 = { class: "fw-bold mb-1" };
const _hoisted_20 = { class: "text-muted" };
const _hoisted_21 = { class: "text-muted small features-description mb-3" };
const _hoisted_22 = { class: "mt-auto" };
const _hoisted_23 = { class: "d-flex justify-content-between align-items-center" };
const _hoisted_24 = { class: "text-muted features-description" };
const _hoisted_25 = {
  key: 0,
  class: "qa-divider"
};
const _hoisted_26 = {
  class: "modal-dialog modal-dialog-centered",
  style: { "max-width": "650px" }
};
const _hoisted_27 = { class: "modal-content rounded-4 p-4" };
const _hoisted_28 = { class: "modal-body" };
const _hoisted_29 = { class: "row g-3 mb-2" };
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
const _hoisted_40 = { class: "col-md-6" };
const _hoisted_41 = ["value"];
const _hoisted_42 = { class: "mb-3" };
const _hoisted_43 = ["value"];
const _hoisted_44 = { class: "mb-2" };
const _hoisted_45 = ["value"];
const _hoisted_46 = { class: "mb-2" };
const _hoisted_47 = { for: "FileInput" };
const _hoisted_48 = { class: "ll_value form-control overflow" };
const _hoisted_49 = { key: 0 };
const _hoisted_50 = { "mb-0": "" };
const _hoisted_51 = ["onClick"];
const _hoisted_52 = ["src"];
const _hoisted_53 = {
  key: 2,
  class: "d-flex justify-content-between"
};
const _hoisted_54 = { class: "input-group empty-input rounded-4 p-2 px-3" };
const _hoisted_55 = ["disabled"];
const _hoisted_56 = ["disabled"];
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
    const selectedFiles = ref([]);
    const conversation = ref([]);
    const categories = [
      {
        text: "#시운전 절차"
      },
      {
        text: "#해상 시운전"
      },
      {
        text: "#안벽 시운전"
      },
      {
        text: "#시운전 착용 장비"
      },
      {
        text: "#시운전 규정"
      },
      {
        text: "#시운전 참여 인원 및 역할"
      },
      {
        text: "#시운전 목적"
      },
      {
        text: "#기관 시운전"
      },
      {
        text: "#전장 시운전"
      },
      {
        text: "#시운전 관련 법규"
      },
      {
        text: "#시운전 참여 주체"
      }
    ];
    function shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    const randomSix = shuffleArray(categories).slice(0, 8);
    function onCategory(text) {
      search.value = text;
      onSearch();
    }
    function reset() {
      scrollArea.value = null;
      conversation.value = [];
      closeModal();
    }
    function onSearch() {
      question.value = search.value;
      ask();
    }
    function writeLesson() {
      window.location.href = "/lesson/write";
    }
    function openModal(card) {
      try {
        selectedCard.value = card;
        showModal.value = true;
        setFileList(card.id);
        document.body.style.overflow = "hidden";
      } catch (err) {
        console.error(err);
      }
    }
    function closeModal() {
      showModal.value = false;
      selectedCard.value = null;
      selectedFiles.value = [];
      document.body.style.overflow = "";
    }
    function format_date(date) {
      const project_dated = new Date(date);
      const year = project_dated.getFullYear();
      const month = String(project_dated.getMonth() + 1).padStart(2, "0");
      const day = String(project_dated.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    async function ask() {
      var _a, _b, _c, _d;
      if (!question.value.trim()) return;
      loading.value = true;
      try {
        const res = await LessonlearnedService.questionLLM(question.value);
        conversation.value.push({
          question: question.value,
          answer: res.data.answer.replace(/-/g, "\n-"),
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
    function showTypingEffect(idx, text, speed = 10) {
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
    async function setFileList(id) {
      selectedFiles.value = [];
      try {
        const res = await LessonlearnedService.selectFile(id);
        if (Array.isArray(res.data)) {
          selectedFiles.value = res.data.map((f) => ({
            fileid: f.id,
            filename: f.filename,
            filepath: f.filepath,
            mimetype: file_type(f.mimetype),
            filesize: f.filesize
          }));
        } else {
          selectedFiles.value = [
            {
              fileid: res.data.id,
              filename: res.data.filename,
              filepath: res.data.filepath,
              mimetype: file_type(res.data.mimetype),
              filesize: res.data.filesize
            }
          ];
        }
      } catch (err) {
        console.error(err);
      }
    }
    async function downloadFileList(id, name) {
      try {
        const response = await LessonlearnedService.downloadFile(id, name, {
          responseType: "blob"
        });
        if (response.status !== 200) {
          throw new Error("파일을 다운로드하는 동안 오류가 발생했습니다.");
        }
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          link.remove();
        }, 100);
      } catch (error) {
        console.error("파일 다운로드 오류:", error);
        alert("파일 다운로드에 실패했습니다.");
      }
    }
    function file_divide(filename, filesize) {
      const fSExt = ["Bytes", "KB", "MB", "GB"];
      let i = 0;
      while (filesize >= 1024 && i < fSExt.length - 1) {
        filesize /= 1024;
        i++;
      }
      filesize = Math.round(filesize * 100) / 100;
      return `${filename} (${filesize} ${fSExt[i]})`;
    }
    function file_type(type) {
      switch (type) {
        case "jpg":
        case "png":
        case "jpeg":
          return imageIcon;
        case "pdf":
          return pdfIcon;
        case "hwp":
        case "hwpx":
          return hwpIcon;
        case "zip":
          return zipIcon;
        default:
          return otherIcon;
      }
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", { class: "d-flex align-items-center mb-3" }, [
            _cache[2] || (_cache[2] = _createElementVNode("div", { class: "d-flex fs-5" }, "시운전 지식 공유", -1)),
            _createElementVNode("div", { class: "d-flex ms-3" }, [
              _createElementVNode("button", {
                type: "button",
                class: "btn rims-custom-btn rounded-3 px-3 ms-2",
                onClick: writeLesson
              }, "지식공유+")
            ])
          ]),
          _createElementVNode("div", _hoisted_3, [
            conversation.value.length === 0 ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
              _cache[4] || (_cache[4] = _createElementVNode("div", { class: "empty-message" }, [
                _createElementVNode("i", {
                  class: "bi bi-chat-dots",
                  style: { "font-size": "2.5rem", "color": "#4286f5" }
                }),
                _createElementVNode("p", { class: "mt-4 mb-3 fs-4 fw-semibold" }, "시운전 지식을 검색하세요.")
              ], -1)),
              _createElementVNode("form", _hoisted_5, [
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  class: "form-control rounded-4 px-4 py-3",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => question.value = $event),
                  disabled: loading.value,
                  onKeyup: _withKeys(ask, ["enter"]),
                  placeholder: "여기에 질문을 입력하세요"
                }, null, 40, _hoisted_6), [
                  [_vModelText, question.value]
                ]),
                _createElementVNode("button", {
                  class: "btn rims-custom-btn rounded-4 px-4 ms-2 fw-bold",
                  type: "submit",
                  onClick: ask,
                  disabled: loading.value || !question.value
                }, "질문하기", 8, _hoisted_7)
              ]),
              loading.value ? (_openBlock(), _createElementBlock("div", _hoisted_8, _cache[3] || (_cache[3] = [
                _createElementVNode("span", {
                  class: "spinner-border spinner-border-sm",
                  role: "status",
                  "aria-hidden": "true"
                }, null, -1),
                _createTextVNode(" 답변 생성 중... 잠시만 기다려주세요. ")
              ]))) : _createCommentVNode("", true),
              _createElementVNode("div", _hoisted_9, [
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(randomSix), (cat) => {
                  return _openBlock(), _createElementBlock("button", {
                    key: cat.text,
                    class: "category-btn fw-bold",
                    onClick: ($event) => onCategory(cat.text)
                  }, _toDisplayString(cat.text), 9, _hoisted_10);
                }), 128))
              ])
            ])) : (_openBlock(), _createElementBlock("div", {
              key: 1,
              class: "scroll-area",
              ref_key: "scrollArea",
              ref: scrollArea
            }, [
              _createElementVNode("button", {
                class: "btn reset-btn",
                onClick: reset
              }, "X"),
              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(conversation.value, (block, idx) => {
                return _openBlock(), _createElementBlock(_Fragment, {
                  key: block.id
                }, [
                  _createElementVNode("div", _hoisted_11, [
                    _createElementVNode("h5", _hoisted_12, _toDisplayString(block.question), 1),
                    _createElementVNode("p", {
                      class: "mb-2 lh-base text-secondary fs-6",
                      innerHTML: block.displayedAnswer
                    }, null, 8, _hoisted_13)
                  ]),
                  _createVNode(_Transition, { name: "fade" }, {
                    default: _withCtx(() => [
                      block.showFeatures ? (_openBlock(), _createElementBlock("div", _hoisted_14, [
                        _createElementVNode("div", _hoisted_15, [
                          (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(block.features, (feature) => {
                            return _openBlock(), _createElementBlock("div", {
                              class: "feature-card card h-100 p-4 me-2",
                              key: feature.project_id,
                              onClick: ($event) => openModal(feature),
                              style: { "min-width": "270px", "flex": "0 0 auto", "cursor": "pointer" }
                            }, [
                              _createElementVNode("div", _hoisted_17, [
                                _createElementVNode("div", _hoisted_18, [
                                  _createElementVNode("div", null, [
                                    _createElementVNode("h6", _hoisted_19, _toDisplayString(feature.project_title), 1),
                                    _createElementVNode("small", _hoisted_20, _toDisplayString(feature.project_description), 1)
                                  ])
                                ]),
                                _createElementVNode("p", _hoisted_21, _toDisplayString(feature.project_issue), 1),
                                _createElementVNode("div", _hoisted_22, [
                                  _createElementVNode("div", _hoisted_23, [
                                    _createElementVNode("small", _hoisted_24, _toDisplayString(feature.project_actionresult), 1)
                                  ])
                                ])
                              ])
                            ], 8, _hoisted_16);
                          }), 128))
                        ])
                      ])) : _createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  idx < conversation.value.length - 1 ? (_openBlock(), _createElementBlock("hr", _hoisted_25)) : _createCommentVNode("", true)
                ], 64);
              }), 128))
            ], 512)),
            _createElementVNode("div", {
              class: _normalizeClass(["modal fade", { show: showModal.value }]),
              tabindex: "-1",
              style: _normalizeStyle(showModal.value ? "display:block; background:rgba(0,0,0,0.4);" : ""),
              onClick: _withModifiers(closeModal, ["self"])
            }, [
              _createElementVNode("div", _hoisted_26, [
                _createElementVNode("div", _hoisted_27, [
                  _createElementVNode("div", { class: "modal-header border-0 pb-1" }, [
                    _cache[5] || (_cache[5] = _createElementVNode("h5", { class: "modal-title" }, "프로젝트 상세 정보", -1)),
                    _createElementVNode("button", {
                      type: "button",
                      class: "btn-close",
                      onClick: closeModal
                    })
                  ]),
                  _createElementVNode("div", _hoisted_28, [
                    _createElementVNode("form", null, [
                      _createElementVNode("div", _hoisted_29, [
                        _createElementVNode("div", _hoisted_30, [
                          _cache[6] || (_cache[6] = _createElementVNode("label", { class: "form-label fw-semibold" }, "프로젝트명", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: (_a = selectedCard.value) == null ? void 0 : _a.project_title,
                            disabled: ""
                          }, null, 8, _hoisted_31)
                        ]),
                        _createElementVNode("div", _hoisted_32, [
                          _cache[7] || (_cache[7] = _createElementVNode("label", { class: "form-label fw-semibold" }, "작성날짜", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: format_date((_b = selectedCard.value) == null ? void 0 : _b.project_date),
                            disabled: ""
                          }, null, 8, _hoisted_33)
                        ]),
                        _createElementVNode("div", _hoisted_34, [
                          _cache[8] || (_cache[8] = _createElementVNode("label", { class: "form-label fw-semibold" }, "부서", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: (_c = selectedCard.value) == null ? void 0 : _c.project_department,
                            disabled: ""
                          }, null, 8, _hoisted_35)
                        ]),
                        _createElementVNode("div", _hoisted_36, [
                          _cache[9] || (_cache[9] = _createElementVNode("label", { class: "form-label fw-semibold" }, "작성자", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: (_d = selectedCard.value) == null ? void 0 : _d.project_commander,
                            disabled: ""
                          }, null, 8, _hoisted_37)
                        ]),
                        _createElementVNode("div", _hoisted_38, [
                          _cache[10] || (_cache[10] = _createElementVNode("label", { class: "form-label fw-semibold" }, "시운전파트", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: (_e = selectedCard.value) == null ? void 0 : _e.project_part,
                            disabled: ""
                          }, null, 8, _hoisted_39)
                        ]),
                        _createElementVNode("div", _hoisted_40, [
                          _cache[11] || (_cache[11] = _createElementVNode("label", { class: "form-label fw-semibold" }, "시운전항목", -1)),
                          _createElementVNode("input", {
                            type: "text",
                            class: "form-control",
                            value: (_f = selectedCard.value) == null ? void 0 : _f.project_description,
                            disabled: ""
                          }, null, 8, _hoisted_41)
                        ])
                      ]),
                      _createElementVNode("div", _hoisted_42, [
                        _cache[12] || (_cache[12] = _createElementVNode("label", { class: "form-label fw-semibold" }, "발생이슈", -1)),
                        _createElementVNode("textarea", {
                          class: "form-control",
                          rows: "3",
                          value: (_g = selectedCard.value) == null ? void 0 : _g.project_issue,
                          disabled: ""
                        }, null, 8, _hoisted_43)
                      ]),
                      _createElementVNode("div", _hoisted_44, [
                        _cache[13] || (_cache[13] = _createElementVNode("label", { class: "form-label fw-semibold" }, "조치결과", -1)),
                        _createElementVNode("textarea", {
                          class: "form-control",
                          rows: "3",
                          value: (_h = selectedCard.value) == null ? void 0 : _h.project_actionresult,
                          disabled: ""
                        }, null, 8, _hoisted_45)
                      ]),
                      _createElementVNode("div", _hoisted_46, [
                        _createElementVNode("label", _hoisted_47, "첨부파일 (" + _toDisplayString(selectedFiles.value.length) + "개)", 1),
                        _createElementVNode("div", _hoisted_48, [
                          selectedFiles.value && selectedFiles.value.length ? (_openBlock(), _createElementBlock("div", _hoisted_49, [
                            _createElementVNode("ul", _hoisted_50, [
                              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(selectedFiles.value, (file, idx) => {
                                return _openBlock(), _createElementBlock("li", {
                                  key: file.filename || idx
                                }, [
                                  _createElementVNode("a", {
                                    class: "link-primary pe-auto cursor",
                                    onClick: ($event) => downloadFileList(file.fileid, file.filename)
                                  }, [
                                    _createElementVNode("img", {
                                      src: file.mimetype,
                                      width: "20",
                                      height: "20"
                                    }, null, 8, _hoisted_52),
                                    _createTextVNode(" " + _toDisplayString(file_divide(file.filename, file.filesize)), 1)
                                  ], 8, _hoisted_51)
                                ]);
                              }), 128))
                            ])
                          ])) : _createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ], 6),
            conversation.value.length > 0 ? (_openBlock(), _createElementBlock("div", _hoisted_53, [
              _createElementVNode("form", _hoisted_54, [
                _withDirectives(_createElementVNode("input", {
                  type: "text",
                  class: "form-control rounded-4 px-4 py-3",
                  placeholder: "추가 질문을 이어서 입력하세요",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => question.value = $event),
                  disabled: loading.value,
                  onKeyup: _withKeys(ask, ["enter"])
                }, null, 40, _hoisted_55), [
                  [_vModelText, question.value]
                ]),
                _createElementVNode("button", {
                  class: "btn rims-custom-btn rounded-4 px-4 ms-2 fw-bold",
                  type: "submit",
                  onClick: ask,
                  disabled: loading.value || !question.value
                }, "질문하기", 8, _hoisted_56)
              ])
            ])) : _createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const LessonLearned = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28b0afc1"]]);
export {
  LessonLearned as default
};
