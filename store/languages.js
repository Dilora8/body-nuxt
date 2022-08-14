export const actions = {
    async changeLanguage({ state, commit }, code) {
        // console.log(code);
      await this.$i18n.setLocale(code)
    //   this.app.store.dispatch('dropdowns/closeDropdownWithName', 'language')
    //   await this.app.store.dispatch('dynamicLang/fetchLanguage');
    //   this.app.$toast.success(this.app.i18n.t('languageChanged'))
    },
  }