Template[getTemplate('post_page')].helpers({
  post_item: function () {
    return getTemplate('post_item');
  },
  post_body: function () {
    return getTemplate('post_body');
  },
  comment_form: function () {
    return getTemplate('comment_form');
  },
  comment_list: function () {
    return getTemplate('comment_list');
  }
})

Template[getTemplate('post_page')].rendered = function(){
  if((scrollToCommentId=Session.get('scrollToCommentId')) && !this.rendered && $('#'+scrollToCommentId).exists()){
    scrollPageTo('#'+scrollToCommentId);
    Session.set('scrollToCommentId', null);
    this.rendered=true;
  }
  if(this.data) // XXX
    document.title = $(".post-title").text();
}
