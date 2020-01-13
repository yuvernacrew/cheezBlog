<template>
  <div class="c-card p-profile">
    <div class="p-profile__thumb">
      <img src="~/assets/images/kamasan.png" />
    </div>
    <p class="p-profile__author">ちーず</p>
    <p class="p-profile__description">
      フロントエンドになりたい新卒一年目。必衰のライブキッズで、月2〜3回ライブにいっている。仮のプロフィール。
    </p>

    <ul class="p-profile__snsList">
      <li class="p-profile__snsList--insta">
        <a
          ><font-awesome-icon
            class="p-profile__icon"
            :icon="['fab', 'instagram']"
        /></a>
      </li>
      <li class="p-profile__snsList--twitter">
        <a
          ><font-awesome-icon class="p-profile__icon" :icon="['fab', 'twitter']"
        /></a>
      </li>
      <li class="p-profile__snsList--fb">
        <a
          ><font-awesome-icon
            class="p-profile__icon"
            :icon="['fab', 'facebook-f']"
        /></a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.p-profile {
  margin-bottom: 20px;

  &__thumb {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    border: 2px solid $mono-color;
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  &__author {
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
  }

  &__description {
    margin-bottom: 20px;
    font-size: 12px;
    color: $mono-dark-color;
  }

  &__snsList {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      width: 30px;
      height: 30px;
      margin: 0 5px;
      line-height: 30px;
      border-radius: 50%;

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff !important;
        text-align: center;
      }
    }

    &--twitter {
      background-color: #1da1f2;
    }

    &--insta {
      background-color: #d93177;
    }

    &--fb {
      background-color: #1877f2;
    }
  }
  &__icon {
    color: #fff !important;
  }
}
</style>
