const REPLIES = "replies";
const REPLIES_HEADER = "post_replies_header clear_fix";
const RECOMMEND_GROUPS = "page_block feed_groups_recomm js-feed_groups_recomm  feed_groups_recomm_friends"
const STORIES_HEADER = "stories_feed_title clear_fix"
const STORIES_MAIN = "stories_feed_items"
const STORIES_FUCKED_SHIT = "stories_feed_items_wrap"
const WHAT_IS_NEW = "submit_post_box clear_fix _submit_post_box submit_post_box_with_best_friends submit_post_box_with_sitposting"
const MAYBE_FAMILIAR_HEADER = "feed_friends_recomm__title"
const MAYBE_FAMILIAR_MAIN = "ui_gallery__inner"
const MAYBE_FAMILIAR_SHIT = "ui_gallery__inner_cont"

async function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

async function removeAdBlocksByClass() {
    const elements = document.getElementsByClassName("PostActivityCaption");
    while(elements.length > 0){
        elements[0].parentNode.parentNode.removeChild(elements[0].parentNode);
    }
}

const config = {
    attributes: true,
    childList: true,
    subtree: true
};




const callback = async function(observer) {
    removeElementsByClass(STORIES_HEADER);
    removeElementsByClass(STORIES_MAIN);
    removeElementsByClass(STORIES_FUCKED_SHIT);
    removeElementsByClass(WHAT_IS_NEW);
    removeElementsByClass(REPLIES);
    removeElementsByClass(REPLIES_HEADER);
    removeElementsByClass(RECOMMEND_GROUPS);
    removeElementsByClass(MAYBE_FAMILIAR_HEADER);
    removeElementsByClass(MAYBE_FAMILIAR_MAIN);
    removeElementsByClass(MAYBE_FAMILIAR_SHIT);
    removeAdBlocksByClass();
};

const observer = new MutationObserver(callback);

observer.observe(document, config);
window.onpopstate = callback