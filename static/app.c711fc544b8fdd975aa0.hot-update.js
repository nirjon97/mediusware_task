webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.js\");\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css\");\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-input-tag */ \"./node_modules/vue-input-tag/dist/vueInputTag.common.js\");\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_input_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,\n    InputTag: (vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default())\n  },\n  props: {\n    variants: {\n      type: Array,\n      required: true\n    }\n  },\n  data() {\n    return {\n      product_name: '',\n      product_sku: '',\n      description: '',\n      images: [],\n      product_variant: [{\n        option: this.variants[0].id,\n        tags: []\n      }],\n      product_variant_prices: [],\n      dropzoneOptions: {\n        url: 'https://httpbin.org/post',\n        thumbnailWidth: 150,\n        maxFilesize: 0.5,\n        headers: {\n          \"My-Awesome-Header\": \"header value\"\n        }\n      }\n    };\n  },\n  methods: {\n    // it will push a new object into product variant\n    newVariant() {\n      let all_variants = this.variants.map(el => el.id);\n      let selected_variants = this.product_variant.map(el => el.option);\n      let available_variants = all_variants.filter(entry1 => !selected_variants.some(entry2 => entry1 == entry2));\n      // console.log(available_variants)\n\n      this.product_variant.push({\n        option: available_variants[0],\n        tags: []\n      });\n    },\n    // check the variant and render all the combination\n    checkVariant() {\n      let tags = [];\n      this.product_variant_prices = [];\n      this.product_variant.filter(item => {\n        tags.push(item.tags);\n      });\n      this.getCombn(tags).forEach(item => {\n        this.product_variant_prices.push({\n          title: item,\n          price: 0,\n          stock: 0\n        });\n      });\n    },\n    // combination algorithm\n    getCombn(arr, pre) {\n      pre = pre || '';\n      if (!arr.length) {\n        return pre;\n      }\n      let self = this;\n      let ans = arr[0].reduce(function (ans, value) {\n        return ans.concat(self.getCombn(arr.slice(1), pre + value + '/'));\n      }, []);\n      return ans;\n    },\n    // store product into database\n    saveProduct() {\n      let product = {\n        title: this.product_name,\n        sku: this.product_sku,\n        description: this.description,\n        product_image: this.images,\n        product_variant: this.product_variant,\n        product_variant_prices: this.product_variant_prices\n      };\n      data = product();\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/django_coding-test.json/', product).then(response => {\n        console.log(response.data);\n      }).catch(error => {\n        console.log(error);\n      });\n      console.log(product);\n    }\n  },\n  mounted() {\n    console.log('Component mounted.');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3RlbXBsYXRlcy9hc3NldHMvanMvY29tcG9uZW50cy9wcm9kdWN0L0NyZWF0ZVByb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DcmVhdGVQcm9kdWN0LnZ1ZT81ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicHJvZHVjdF9uYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+UHJvZHVjdCBTS1U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwcm9kdWN0X3NrdVwiIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBOYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPmRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCIgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zIGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5XCI+TWVkaWE8L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGJvcmRlclwiPlxyXG4gICAgICAgICAgICA8dnVlLWRyb3B6b25lIHJlZj1cIm15VnVlRHJvcHpvbmVcIiBpZD1cImRyb3B6b25lXCIgOm9wdGlvbnM9XCJkcm9wem9uZU9wdGlvbnNcIj48L3Z1ZS1kcm9wem9uZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBtYi00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktMyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzcz1cIm0tMCBmb250LXdlaWdodC1ib2xkIHRleHQtcHJpbWFyeVwiPlZhcmlhbnRzPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcHJvZHVjdF92YXJpYW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+T3B0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiaXRlbS5vcHRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIHZhcmlhbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhcmlhbnQuaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7IHZhcmlhbnQudGl0bGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCB2LWlmPVwicHJvZHVjdF92YXJpYW50Lmxlbmd0aCAhPSAxXCIgQGNsaWNrPVwicHJvZHVjdF92YXJpYW50LnNwbGljZShpbmRleCwxKTsgY2hlY2tWYXJpYW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHQgdGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlJlbW92ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCB2LWVsc2UgZm9yPVwiXCI+LjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dC10YWcgdi1tb2RlbD1cIml0ZW0udGFnc1wiIEBpbnB1dD1cImNoZWNrVmFyaWFudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC9pbnB1dC10YWc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiIHYtaWY9XCJwcm9kdWN0X3ZhcmlhbnQubGVuZ3RoIDwgdmFyaWFudHMubGVuZ3RoICYmIHByb2R1Y3RfdmFyaWFudC5sZW5ndGggPCAzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibmV3VmFyaWFudFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWRkIGFub3RoZXIgb3B0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgdGV4dC11cHBlcmNhc2VcIj5QcmV2aWV3PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlZhcmlhbnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+UHJpY2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+U3RvY2s8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJ2YXJpYW50X3ByaWNlIGluIHByb2R1Y3RfdmFyaWFudF9wcmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7IHZhcmlhbnRfcHJpY2UudGl0bGUgfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidmFyaWFudF9wcmljZS5wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidmFyaWFudF9wcmljZS5zdG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVQcm9kdWN0XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHZ1ZTJEcm9wem9uZSBmcm9tICd2dWUyLWRyb3B6b25lJ1xyXG5pbXBvcnQgJ3Z1ZTItZHJvcHpvbmUvZGlzdC92dWUyRHJvcHpvbmUubWluLmNzcydcclxuaW1wb3J0IElucHV0VGFnIGZyb20gJ3Z1ZS1pbnB1dC10YWcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICB2dWVEcm9wem9uZTogdnVlMkRyb3B6b25lLFxyXG4gICAgSW5wdXRUYWdcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICB2YXJpYW50czoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0X25hbWU6ICcnLFxyXG4gICAgICBwcm9kdWN0X3NrdTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgaW1hZ2VzOiBbXSxcclxuICAgICAgcHJvZHVjdF92YXJpYW50OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgb3B0aW9uOiB0aGlzLnZhcmlhbnRzWzBdLmlkLFxyXG4gICAgICAgICAgdGFnczogW11cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHByb2R1Y3RfdmFyaWFudF9wcmljZXM6IFtdLFxyXG4gICAgICBkcm9wem9uZU9wdGlvbnM6IHtcclxuICAgICAgICB1cmw6ICdodHRwczovL2h0dHBiaW4ub3JnL3Bvc3QnLFxyXG4gICAgICAgIHRodW1ibmFpbFdpZHRoOiAxNTAsXHJcbiAgICAgICAgbWF4RmlsZXNpemU6IDAuNSxcclxuICAgICAgICBoZWFkZXJzOiB7XCJNeS1Bd2Vzb21lLUhlYWRlclwiOiBcImhlYWRlciB2YWx1ZVwifVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBpdCB3aWxsIHB1c2ggYSBuZXcgb2JqZWN0IGludG8gcHJvZHVjdCB2YXJpYW50XHJcbiAgICBuZXdWYXJpYW50KCkge1xyXG4gICAgICBsZXQgYWxsX3ZhcmlhbnRzID0gdGhpcy52YXJpYW50cy5tYXAoZWwgPT4gZWwuaWQpXHJcbiAgICAgIGxldCBzZWxlY3RlZF92YXJpYW50cyA9IHRoaXMucHJvZHVjdF92YXJpYW50Lm1hcChlbCA9PiBlbC5vcHRpb24pO1xyXG4gICAgICBsZXQgYXZhaWxhYmxlX3ZhcmlhbnRzID0gYWxsX3ZhcmlhbnRzLmZpbHRlcihlbnRyeTEgPT4gIXNlbGVjdGVkX3ZhcmlhbnRzLnNvbWUoZW50cnkyID0+IGVudHJ5MSA9PSBlbnRyeTIpKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhdmFpbGFibGVfdmFyaWFudHMpXHJcblxyXG4gICAgICB0aGlzLnByb2R1Y3RfdmFyaWFudC5wdXNoKHtcclxuICAgICAgICBvcHRpb246IGF2YWlsYWJsZV92YXJpYW50c1swXSxcclxuICAgICAgICB0YWdzOiBbXVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBjaGVjayB0aGUgdmFyaWFudCBhbmQgcmVuZGVyIGFsbCB0aGUgY29tYmluYXRpb25cclxuICAgIGNoZWNrVmFyaWFudCgpIHtcclxuICAgICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgICAgdGhpcy5wcm9kdWN0X3ZhcmlhbnRfcHJpY2VzID0gW107XHJcbiAgICAgIHRoaXMucHJvZHVjdF92YXJpYW50LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRhZ3MucHVzaChpdGVtLnRhZ3MpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5nZXRDb21ibih0YWdzKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdF92YXJpYW50X3ByaWNlcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBpdGVtLFxyXG4gICAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgICBzdG9jazogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNvbWJpbmF0aW9uIGFsZ29yaXRobVxyXG4gICAgZ2V0Q29tYm4oYXJyLCBwcmUpIHtcclxuICAgICAgcHJlID0gcHJlIHx8ICcnO1xyXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gcHJlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgbGV0IGFucyA9IGFyclswXS5yZWR1Y2UoZnVuY3Rpb24gKGFucywgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gYW5zLmNvbmNhdChzZWxmLmdldENvbWJuKGFyci5zbGljZSgxKSwgcHJlICsgdmFsdWUgKyAnLycpKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgICByZXR1cm4gYW5zO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzdG9yZSBwcm9kdWN0IGludG8gZGF0YWJhc2VcclxuICAgIHNhdmVQcm9kdWN0KCkge1xyXG4gICAgICBsZXQgcHJvZHVjdCA9IHtcclxuICAgICAgICB0aXRsZTogdGhpcy5wcm9kdWN0X25hbWUsXHJcbiAgICAgICAgc2t1OiB0aGlzLnByb2R1Y3Rfc2t1LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHByb2R1Y3RfaW1hZ2U6IHRoaXMuaW1hZ2VzLFxyXG4gICAgICAgIHByb2R1Y3RfdmFyaWFudDogdGhpcy5wcm9kdWN0X3ZhcmlhbnQsXHJcbiAgICAgICAgcHJvZHVjdF92YXJpYW50X3ByaWNlczogdGhpcy5wcm9kdWN0X3ZhcmlhbnRfcHJpY2VzXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBkYXRhID1wcm9kdWN0KClcclxuICAgICAgYXhpb3MucG9zdCgnL2RqYW5nb19jb2RpbmctdGVzdC5qc29uLycsIHByb2R1Y3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFtR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js&\n");

/***/ })

})