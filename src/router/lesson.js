export default {
  path: '/lesson',
  name: 'lesson',
  redirect: {name: 'learned'},
  children: [
    {
      path: 'learned',
      name: 'learned',
      component: () => import('@/components/LessonLearned.vue'),
      children: [
        {
          path: 'search',
          name: 'learned-details',
          component: () => import('@/components/LessonLearned.vue'),
        }
      ]
    },
    {
      path: 'ready',
      name: 'ready',
      component: () => import('@/components/NowReady.vue'),
    },
  ]
}