<template>
  <div class="logs-page container">
    <div class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] relative z-10"
         style="box-shadow: 0 1px 25px #E2F1F6;">


      <div class="logs-page__wrapper-table">
        <div
          class="absolute left-0 top-0 w-full h-[66px] bg-[#F3F9F9] z-[-1] rounded-tl-[18px] rounded-tr-[18px]"></div>

        <vue-scrolling-table class="logs-page__table" dead-area-color="#F3F9F9"
                             :style="{maxHeight: isMaxHeight ? 'calc(100vh - 20rem)' : 'none'}" :scroll-vertical="isMaxHeight">
          <template #thead>
            <tr>
              <th v-for="(col, colKey) in cols"
                  :key="colKey" class="logs-page__th">{{ col.label }}
              </th>
            </tr>
          </template>
          <template #tbody>
            <tr v-for="(item, itemKey) in items" :key="'row'+itemKey" class="logs-page__tr">
              <td v-for="(col, colKey) in cols" :key="'col'+colKey" class="logs-page__td">
                <span class="flex items-center min-h-[65px]">
                  <template v-if="col.type === 'timestamp'">
                    22.07.2020 <br>08:15:44
                  </template>
                    <template v-else>
                      <span v-if="item[col.withIcon]"
                            class="h-[32px] w-[32px] bg-white border-[#EAF1F3] border rounded-full inline-block flex justify-center items-center mr-[5px]">
                      <img class="w-[17px] h-[17px] object-center object-contain" :src="item[col.withIcon]" alt="">
                      </span>
                      <a v-if="item[col.index] && col.type === 'copy'" href="javascript:void(0)"
                      class="text-magenta no-underline hover:underline">
                        {{ item[col.index] }}<icon name="mono/copy" class="ml-1 inline-block fill-current stroke-current" />
                      </a>
                      <span v-else-if="item[col.index]">
                        {{ item[col.index] }}
                      </span>
                      <span v-else>-</span>
                  </template>
                </span>
              </td>
            </tr>
          </template>
        </vue-scrolling-table>
      </div>

      <div class="py-[26px] flex justify-center">

        <pagination v-model="page" :per-page="10" :total="total" />

      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const exampleItem1 = {
  token: 'GTON',
  amount: '10',
  fromChain: 'Waves',
  tokenAddress1: '3P9...4x',
  coChain: 'Ethereum',
  tokenAddress2: '3P9...4x',
  status: 'Completed',
  lockingAddress: '3P9...4x',
  mintingAddress: '3P9...4x',
  timestamp: 1633332817,
  iconExampleFieldName: require('~/assets/img/icons/gton.svg'),
};

const exampleItem2 = {
  token: 'SOL',
  amount: '10',
  fromChain: 'Waves',
  tokenAddress1: '3P9...4x',
  coChain: 'Ethereum',
  tokenAddress2: '3P9...4x',
  status: 'In progress',
  lockingAddress: '3P9...4x',
  mintingAddress: '3P9...4x',
  timestamp: 1633332817,
  iconExampleFieldName: require('~/assets/img/icons/sol.svg'),
};

export default Vue.extend({
  data: () => ({
    total: 200,
    page: 1,
    isMaxHeight: true,
    cols: [
      {label: 'Token', width: '100px', index: 'token', type: 'text', withIcon: 'iconExampleFieldName'},
      {label: 'Amount', width: '100px', index: 'amount', type: 'text'},
      {label: 'From Chain', width: '100px', index: 'fromChain', type: 'text'},
      {label: 'Token address', width: '100px', index: 'tokenAddress1', type: 'copy'},
      {label: 'To Chain', width: '100px', index: 'coChain', type: 'text'},
      {label: 'Token address', width: '100px', index: 'tokenAddress2', type: 'copy'},
      {label: 'Status', width: '100px', index: 'status', type: 'text'},
      {label: 'Locking trx address', width: '100px', index: 'lockingAddress', type: 'copy'},
      {label: 'Minting trx address', width: '100px', index: 'mintingAddress', type: 'copy'},
      {label: 'Timestamp', width: '100px', index: 'timestamp', type: 'timestamp'},
    ],
    items: [
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
      {...exampleItem1},
      {...exampleItem2},
    ]
  }),
  mounted() {
    this.isMaxHeight = innerWidth > 1030;
  }
})
</script>

<style lang="postcss">
.logs-page {

  &__wrapper-table {
    ::-webkit-scrollbar-track {
      border-radius: 8px;

      @apply bg-desaturated-cyan bg-opacity-50;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;

      @apply bg-desaturated-cyan;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  }

  /* stylelint-disable */

  .modal-toggle:checked ~ .modal ~ .drawer .drawer-toggle ~ .drawer-content::-webkit-scrollbar-track,
  .modal-toggle:checked ~ .modal ~ .drawer .drawer-toggle ~ .drawer-content::-webkit-scrollbar-thumb,
  .modal:target ~ .drawer .drawer-toggle ~ .drawer-content::-webkit-scrollbar-track,
  .modal:target ~ .drawer .drawer-toggle ~ .drawer-content::-webkit-scrollbar-thumb {
    @apply bg-opacity-50;
  }

  /* stylelint-enable */

  .logs-page__th {
    @apply h-[66px] bg-[#F3F9F9] border-none text-left text-[13px] font-semibold leading-none text-maastricht-blue;
  }

  .logs-page__td {
    @apply bg-white border-l-0 border-r-0 border-[#E4EDEF] text-left text-[13px] text-desaturated-cyan;
  }

  .logs-page__tr {

    .logs-page__td {
      @apply border-t-0;
    }
  }

  .logs-page__tr:last-child {

    .logs-page__td {
      @apply border-b-0;
    }
  }
}
</style>
