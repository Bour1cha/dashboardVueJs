<template>
    <div class="blockchat" :class="{'active': clicked}" @click="onClick">
        <div class="imgbxchat">
          <img :src="contactMessageProfile" alt="profile_message2" class="covermessage">
        </div>
        <div class="detailschat">
            <div class="listheadchat">
              <h4>{{ info_contactsmessage.nom }}</h4>
              <p class="timechat">{{ info_contactsmessage.date }}</p>
            </div>
            <div class="message_p">
              <p>{{ info_contactsmessage.message }}</p>
              <b>{{ info_contactsmessage.notif }}</b>
            </div>
        </div>
      </div>
</template>

<script>


    import { computed, ref } from 'vue'
import { src } from '@/utils'

export default {
  name: 'contactmessage',
   props: {
    info_contactsmessage: Object
  },

  setup(props) {

      const contactMessageProfile = computed(() => src(props.info_contactsmessage.image))

const clicked =ref(false)

      return {
        clicked,
        onClick: () => clicked.value = true,
        contactMessageProfile
      }
  }
}
    </script>