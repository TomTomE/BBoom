var LoginView = function () {

    this.initialize = function() {
        //TODO initialize 꼭 다시 해야하는지 확인.

        this.render();
    };

    this.render = function() {
        //TODO $el 확인하기.
        this.$el.html(this.template());
        $('.content', this.$el).html();
        return this;
    };

    this.initialize();
}