module.exports = {
  name: 'mynav',
  props:[
    "childvalue",
    'gobackshow',
    'closeshow',
    "rightshow",
    "menushow",
    "buttonshow",
    "title"],
  data: function() {
    return {
      childnews: "Children News"
    }
  },
  methods: {
    childToParent: function(){
      this.$dispatch("child-msg", this.childnews)
    }
  },
  events: {
    'parent-msg': function(msg) {
      this.childnews = msg + "-" + (new Date().getTime()) + '-';
    }
  }
}