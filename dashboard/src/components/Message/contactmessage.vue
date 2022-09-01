<template>
    <div class="blockchat">
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
            </div>
        </div>
      </div>
</template>

<script>


    import { computed } from 'vue'
import { src } from '@/utils'

export default {
  name: 'contactmessage',
   props: {
    info_contactsmessage: Object
  },

  setup(props) {

      const contactMessageProfile = computed(() => src(props.info_contactsmessage.image))
      return {
        contactMessageProfile
      }
  }
}
    </script>