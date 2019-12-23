<script>
export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    cost: {
      type: String,
      default: '',
    },
  },
  methods: {
    removeItem: function() {
      // генерируем событие 'remove' и передаём id элемента
      this.$emit('remove', this.id);
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card__wrapper">
      <span class="card__date">{{ date }}</span>
      <span class="card__city">{{ city }}</span>
    </div>
    <div class="card__section">
      <span class="card__cost">{{ cost }}</span>
      <div @click="removeItem" class="card__button"></div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 220px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 20px;
  user-select: none;
  outline: none;
  @media only screen and (min-width: 769px) {
    width: 180px;
  }
  @media only screen and (max-width: 768px) {
    width: 170px;
    flex: 0 0 auto;
  }
  &__date {
    display: block;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -0.5px;
    opacity: 0.75;
    margin-bottom: 10px;
    max-height: 35px;
    overflow: hidden;
  }
  &__city {
    display: block;
    font-size: 32px;
    font-weight: 700;
    color: #706163;
    max-height: 112px;
    overflow: hidden;
  }
  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__cost {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #ac4245;
    opacity: 0.9;
    max-width: 85px;
    overflow: hidden;
  }
  &__button {
    width: 40px;
    height: 40px;
    cursor: pointer;
    flex: 0 0 auto;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../src/assets/img/buttons/next.svg');
    transition: 0.15s;
    &:hover {
      background-image: url('../../src/assets/img/buttons/next-hover.svg');
    }
  }
}
</style>