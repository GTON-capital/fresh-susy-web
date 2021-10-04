<template>
  <div v-if="pager.pages && pager.pages.length" role="list" class="flex list-none">
    <a class="w-[30px] h-[30px] text-base flex justify-center items-center text-magenta hover:text-maastricht-blue"
       :class="{
      'pointer-events-none': pager.currentPage === 1,
    }"
       href="javascript:void(0)"
       @click="setPage(1)">
      <icon name="mono/back" class="fill-current stroke-current" />
    </a>
    <a v-for="page in pager.pages" :key="page" :class="{
      'text-desaturated-cyan': pager.currentPage !== page,
      'text-maastricht-blue pointer-events-none font-semibold': pager.currentPage === page,
    }"
       class="min-w-[30px] h-[30px] px-1 flex justify-center items-center relative transition hover:font-semibold hover:text-maastricht-blue"
       href="javascript:void(0)"
       @click="setPage(page)">
      {{page}}
      <span class="border-b-2 border-magenta absolute left-1 right-1 bottom-0 top-0 z-10 transition"
            :class="{
        'opacity-0': pager.currentPage !== page,
        'opacity-100': pager.currentPage === page
            }"
      ></span>
    </a>
    <a :class="{
      'pointer-events-none': pager.currentPage === pager.totalPages,
    }"
       class="w-[30px] h-[30px] text-base flex justify-center items-center text-magenta hover:text-maastricht-blue"
       href="javascript:void(0)"
       @click="setPage(pager.totalPages)">
      <icon name="mono/back-180deg" class="fill-current stroke-current" />
    </a>
  </div>
</template>

<script>
import paginate from 'jw-paginate';

// paginate(150, 7, 15, 5)
// totalItems: 150, currentPage: 7, pageSize: 15, maxPages: 5
//
// const pager = {
//   totalItems: 150,
//   currentPage: 7,
//   pageSize: 15,
//   totalPages: 10,
//   startPage: 5,
//   endPage: 9,
//   startIndex: 90,
//   endIndex: 104,
//   pages: [ 5, 6, 7, 8, 9 ]
// };

export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    showNumbers: {
      type: Number,
      default: 5
    },
    total: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      pager: {},
    }
  },
  watch: {
    value(){
      if(this.pager.currentPage !== this.value) {
        this.updatePager();
      }
    }
  },
  created () {
    this.updatePager();
  },
  methods: {
    updatePager(page){
      page = page ?? this.value;

      this.pager = paginate(this.total, page, this.perPage, this.showNumbers);
    },
    setPage(page) {
      this.updatePager(page);

      // emit change page event to parent component
      this.$emit('change', page);
    }
  }
}
</script>
