<template>

                <div class="update">
                      <div class="profile-photo">
                          <img :src="commentUserProfile" alt="profile">
                      </div>
                      <div class="message">
                            <p><b>{{ info_comments.nom }}</b>{{ info_comments.commentaire }}</p>
                            <small class="text-muted"> {{ info_comments.date }}</small>
                      </div>
                </div>

</template>

<script>

import { computed } from 'vue'
import { src } from '@/utils'

export default {
  name: 'RecentUpdatesCard',
   props: {
    info_comments: Object
  },

  setup(props) {

      const commentUserProfile = computed(() => src(props.info_comments.image))
      return {
            commentUserProfile
      }
  }
}
</script>