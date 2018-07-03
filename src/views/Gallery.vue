<template>
<section>
  <div v-for="(event, index) in blocks">
    <h4>{{event.title}}</h4>
    <p>{{event.date}}</p>
    <div v-masonry transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item" v-for="(item, indx) in event.images">
        <!-- block item markup -->
        <img :src="item" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      blocks: {
        'football': {
          title: 'Football',
          date: 'Sat 20 April',
          images: {
            '1':'https://placeimg.com/200/200/any?1',
            '2':'https://placeimg.com/200/200/any?2',
            '3':'https://placeimg.com/200/200/any?3',
            '4':'https://placeimg.com/200/200/any?4',
            '5':'https://placeimg.com/200/200/any?5',
            '6':'https://placeimg.com/200/200/any?6',
            '7':'https://placeimg.com/200/200/any?7',
            '8':'https://placeimg.com/200/200/any?8',
            '9':'https://placeimg.com/200/200/any?9',
            '10':'https://placeimg.com/200/200/any?10',
            '11':'https://placeimg.com/200/200/any?11',
          }
        },
        'cricket': {
          title: 'Cricket',
          date: 'Sat 22 March',
          images: {
            '1':'https://placeimg.com/200/200/any?1',
            '2':'https://placeimg.com/200/200/any?2',
            '3':'https://placeimg.com/200/200/any?3',
            '4':'https://placeimg.com/200/200/any?4',
            '5':'https://placeimg.com/200/200/any?5',
            '6':'https://placeimg.com/200/200/any?6',
            '7':'https://placeimg.com/200/200/any?7',
            '8':'https://placeimg.com/200/200/any?8',
            '9':'https://placeimg.com/200/200/any?9',
            '10':'https://placeimg.com/200/200/any?10',
            '11':'https://placeimg.com/200/200/any?11',
          }
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
