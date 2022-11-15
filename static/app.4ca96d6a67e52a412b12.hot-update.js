webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.js\");\n/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ \"./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css\");\n/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-input-tag */ \"./node_modules/vue-input-tag/dist/vueInputTag.common.js\");\n/* harmony import */ var vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_input_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,\n    InputTag: (vue_input_tag__WEBPACK_IMPORTED_MODULE_4___default())\n  },\n  props: {\n    variants: {\n      type: Array,\n      required: true\n    }\n  },\n  data() {\n    return {\n      product_name: '',\n      product_sku: '',\n      description: '',\n      images: [],\n      product_variant: [{\n        option: this.variants[0].id,\n        tags: []\n      }],\n      product_variant_prices: [],\n      dropzoneOptions: {\n        url: 'https://httpbin.org/post',\n        thumbnailWidth: 150,\n        maxFilesize: 0.5,\n        headers: {\n          \"My-Awesome-Header\": \"header value\"\n        }\n      }\n    };\n  },\n  methods: {\n    // it will push a new object into product variant\n    newVariant() {\n      let all_variants = this.variants.map(el => el.id);\n      let selected_variants = this.product_variant.map(el => el.option);\n      let available_variants = all_variants.filter(entry1 => !selected_variants.some(entry2 => entry1 == entry2));\n      // console.log(available_variants)\n\n      this.product_variant.push({\n        option: available_variants[0],\n        tags: []\n      });\n    },\n    // check the variant and render all the combination\n    checkVariant() {\n      let tags = [];\n      this.product_variant_prices = [];\n      this.product_variant.filter(item => {\n        tags.push(item.tags);\n      });\n      this.getCombn(tags).forEach(item => {\n        this.product_variant_prices.push({\n          title: item,\n          price: 0,\n          stock: 0\n        });\n      });\n    },\n    // combination algorithm\n    getCombn(arr, pre) {\n      pre = pre || '';\n      if (!arr.length) {\n        return pre;\n      }\n      let self = this;\n      let ans = arr[0].reduce(function (ans, value) {\n        return ans.concat(self.getCombn(arr.slice(1), pre + value + '/'));\n      }, []);\n      return ans;\n    },\n    // store product into database\n    saveProduct() {\n      let product = {\n        title: this.product_name,\n        sku: this.product_sku,\n        description: this.description,\n        product_image: this.images,\n        product_variant: this.product_variant,\n        product_variant_prices: this.product_variant_prices\n      };\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('./', product).then(response => {\n        console.log(response.data);\n      }).catch(error => {\n        console.log(error);\n      });\n      console.log(product);\n    }\n  },\n  mounted() {\n    console.log('Component mounted.');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3RlbXBsYXRlcy9hc3NldHMvanMvY29tcG9uZW50cy9wcm9kdWN0L0NyZWF0ZVByb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DcmVhdGVQcm9kdWN0LnZ1ZT81ZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbj5cclxuICAgIHslIGNzcmZfdG9rZW4lfVxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwcm9kdWN0X25hbWVcIiBwbGFjZWhvbGRlcj1cIlByb2R1Y3QgTmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9kdWN0IFNLVTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInByb2R1Y3Rfc2t1XCIgcGxhY2Vob2xkZXI9XCJQcm9kdWN0IE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+ZGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiZGVzY3JpcHRpb25cIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXByaW1hcnlcIj5NZWRpYTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDx2dWUtZHJvcHpvbmUgcmVmPVwibXlWdWVEcm9wem9uZVwiIGlkPVwiZHJvcHpvbmVcIiA6b3B0aW9ucz1cImRyb3B6b25lT3B0aW9uc1wiPjwvdnVlLWRyb3B6b25lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zIGQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1wcmltYXJ5XCI+VmFyaWFudHM8L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwcm9kdWN0X3ZhcmlhbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5PcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJpdGVtLm9wdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInZhcmlhbnQgaW4gdmFyaWFudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFyaWFudC5pZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3sgdmFyaWFudC50aXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHYtaWY9XCJwcm9kdWN0X3ZhcmlhbnQubGVuZ3RoICE9IDFcIiBAY2xpY2s9XCJwcm9kdWN0X3ZhcmlhbnQuc3BsaWNlKGluZGV4LDEpOyBjaGVja1ZhcmlhbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodCB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+UmVtb3ZlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIHYtZWxzZSBmb3I9XCJcIj4uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0LXRhZyB2LW1vZGVsPVwiaXRlbS50YWdzXCIgQGlucHV0PVwiY2hlY2tWYXJpYW50XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48L2lucHV0LXRhZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCIgdi1pZj1cInByb2R1Y3RfdmFyaWFudC5sZW5ndGggPCB2YXJpYW50cy5sZW5ndGggJiYgcHJvZHVjdF92YXJpYW50Lmxlbmd0aCA8IDNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJuZXdWYXJpYW50XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQgYW5vdGhlciBvcHRpb248L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciB0ZXh0LXVwcGVyY2FzZVwiPlByZXZpZXc8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+VmFyaWFudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5QcmljZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5TdG9jazwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cInZhcmlhbnRfcHJpY2UgaW4gcHJvZHVjdF92YXJpYW50X3ByaWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e3sgdmFyaWFudF9wcmljZS50aXRsZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ2YXJpYW50X3ByaWNlLnByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ2YXJpYW50X3ByaWNlLnN0b2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVByb2R1Y3RcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGdcIj5DYW5jZWw8L2J1dHRvbj5cclxuICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgdnVlMkRyb3B6b25lIGZyb20gJ3Z1ZTItZHJvcHpvbmUnXHJcbmltcG9ydCAndnVlMi1kcm9wem9uZS9kaXN0L3Z1ZTJEcm9wem9uZS5taW4uY3NzJ1xyXG5pbXBvcnQgSW5wdXRUYWcgZnJvbSAndnVlLWlucHV0LXRhZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIHZ1ZURyb3B6b25lOiB2dWUyRHJvcHpvbmUsXHJcbiAgICBJbnB1dFRhZ1xyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RfbmFtZTogJycsXHJcbiAgICAgIHByb2R1Y3Rfc2t1OiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBpbWFnZXM6IFtdLFxyXG4gICAgICBwcm9kdWN0X3ZhcmlhbnQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcHRpb246IHRoaXMudmFyaWFudHNbMF0uaWQsXHJcbiAgICAgICAgICB0YWdzOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcHJvZHVjdF92YXJpYW50X3ByaWNlczogW10sXHJcbiAgICAgIGRyb3B6b25lT3B0aW9uczoge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdCcsXHJcbiAgICAgICAgdGh1bWJuYWlsV2lkdGg6IDE1MCxcclxuICAgICAgICBtYXhGaWxlc2l6ZTogMC41LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcIk15LUF3ZXNvbWUtSGVhZGVyXCI6IFwiaGVhZGVyIHZhbHVlXCJ9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIGl0IHdpbGwgcHVzaCBhIG5ldyBvYmplY3QgaW50byBwcm9kdWN0IHZhcmlhbnRcclxuICAgIG5ld1ZhcmlhbnQoKSB7XHJcbiAgICAgIGxldCBhbGxfdmFyaWFudHMgPSB0aGlzLnZhcmlhbnRzLm1hcChlbCA9PiBlbC5pZClcclxuICAgICAgbGV0IHNlbGVjdGVkX3ZhcmlhbnRzID0gdGhpcy5wcm9kdWN0X3ZhcmlhbnQubWFwKGVsID0+IGVsLm9wdGlvbik7XHJcbiAgICAgIGxldCBhdmFpbGFibGVfdmFyaWFudHMgPSBhbGxfdmFyaWFudHMuZmlsdGVyKGVudHJ5MSA9PiAhc2VsZWN0ZWRfdmFyaWFudHMuc29tZShlbnRyeTIgPT4gZW50cnkxID09IGVudHJ5MikpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWlsYWJsZV92YXJpYW50cylcclxuXHJcbiAgICAgIHRoaXMucHJvZHVjdF92YXJpYW50LnB1c2goe1xyXG4gICAgICAgIG9wdGlvbjogYXZhaWxhYmxlX3ZhcmlhbnRzWzBdLFxyXG4gICAgICAgIHRhZ3M6IFtdXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNoZWNrIHRoZSB2YXJpYW50IGFuZCByZW5kZXIgYWxsIHRoZSBjb21iaW5hdGlvblxyXG4gICAgY2hlY2tWYXJpYW50KCkge1xyXG4gICAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgICB0aGlzLnByb2R1Y3RfdmFyaWFudF9wcmljZXMgPSBbXTtcclxuICAgICAgdGhpcy5wcm9kdWN0X3ZhcmlhbnQuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGFncy5wdXNoKGl0ZW0udGFncyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLmdldENvbWJuKHRhZ3MpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0X3ZhcmlhbnRfcHJpY2VzLnB1c2goe1xyXG4gICAgICAgICAgdGl0bGU6IGl0ZW0sXHJcbiAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgIHN0b2NrOiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY29tYmluYXRpb24gYWxnb3JpdGhtXHJcbiAgICBnZXRDb21ibihhcnIsIHByZSkge1xyXG4gICAgICBwcmUgPSBwcmUgfHwgJyc7XHJcbiAgICAgIGlmICghYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBwcmU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBsZXQgYW5zID0gYXJyWzBdLnJlZHVjZShmdW5jdGlvbiAoYW5zLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBhbnMuY29uY2F0KHNlbGYuZ2V0Q29tYm4oYXJyLnNsaWNlKDEpLCBwcmUgKyB2YWx1ZSArICcvJykpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICAgIHJldHVybiBhbnM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHN0b3JlIHByb2R1Y3QgaW50byBkYXRhYmFzZVxyXG4gICAgc2F2ZVByb2R1Y3QoKSB7XHJcbiAgICAgIGxldCBwcm9kdWN0ID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aGlzLnByb2R1Y3RfbmFtZSxcclxuICAgICAgICBza3U6IHRoaXMucHJvZHVjdF9za3UsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJvZHVjdF9pbWFnZTogdGhpcy5pbWFnZXMsXHJcbiAgICAgICAgcHJvZHVjdF92YXJpYW50OiB0aGlzLnByb2R1Y3RfdmFyaWFudCxcclxuICAgICAgICBwcm9kdWN0X3ZhcmlhbnRfcHJpY2VzOiB0aGlzLnByb2R1Y3RfdmFyaWFudF9wcmljZXNcclxuICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICBheGlvcy5wb3N0KCcuLycsIHByb2R1Y3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29tcG9uZW50IG1vdW50ZWQuJylcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/templates/assets/js/components/product/CreateProduct.vue?vue&type=script&lang=js&\n");

/***/ })

})